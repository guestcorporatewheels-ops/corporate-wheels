import AppKit
import Foundation
import PDFKit

let pageScale: CGFloat = 8
let sourceScale: CGFloat = 4
let socialConnectURL = "https://corporatewheels.co.uk/Socialconnect"
let projectRoot = URL(
    fileURLWithPath: "/Users/harshitgadhiya/Pictures/Corporate-wheels/corporate-wheels"
)
let sourcePDFURL = URL(
    fileURLWithPath: "/Users/harshitgadhiya/Pictures/Corporate-wheels/Corporate Wheels Visit Card.pdf"
)
let outputDirectory = projectRoot
    .appendingPathComponent("public/socialconnect/card", isDirectory: true)

func render(page: PDFPage) -> NSImage {
    let pageBounds = page.bounds(for: .mediaBox)
    let imageSize = NSSize(
        width: pageBounds.width * pageScale,
        height: pageBounds.height * pageScale
    )
    let image = NSImage(size: imageSize)

    image.lockFocus()
    NSColor.white.setFill()
    NSRect(origin: .zero, size: imageSize).fill()

    guard let context = NSGraphicsContext.current?.cgContext else {
        fatalError("Could not create a graphics context.")
    }

    context.saveGState()
    context.scaleBy(x: pageScale, y: pageScale)
    page.draw(with: .mediaBox, to: context)
    context.restoreGState()
    image.unlockFocus()

    return image
}

func savePNG(_ image: NSImage, to url: URL) {
    guard
        let tiffData = image.tiffRepresentation,
        let bitmap = NSBitmapImageRep(data: tiffData),
        let pngData = bitmap.representation(using: .png, properties: [:])
    else {
        fatalError("Could not encode \(url.lastPathComponent).")
    }

    try! pngData.write(to: url)
}

func replacePhoneNumber(on image: NSImage) {
    let scale = pageScale / sourceScale
    let imageHeight = image.size.height
    let backgroundCopy = image.copy() as! NSImage
    let coverRect = NSRect(
        x: 638 * scale,
        y: imageHeight - (320 * scale),
        width: 252 * scale,
        height: 34 * scale
    )
    let cleanBackgroundRect = NSRect(
        x: 638 * scale,
        y: imageHeight - (245 * scale),
        width: 252 * scale,
        height: 34 * scale
    )

    image.lockFocus()
    backgroundCopy.draw(
        in: coverRect,
        from: cleanBackgroundRect,
        operation: .copy,
        fraction: 1
    )

    let paragraph = NSMutableParagraphStyle()
    paragraph.alignment = .left
    let font = NSFont(name: "AvenirNextCondensed-DemiBold", size: 21 * scale)
        ?? NSFont.boldSystemFont(ofSize: 21 * scale)
    let attributes: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: NSColor(
            calibratedRed: 0.965,
            green: 0.792,
            blue: 0.384,
            alpha: 1
        ),
        .paragraphStyle: paragraph,
    ]
    let text = "+44 (0)7351 111 355" as NSString
    text.draw(
        in: NSRect(
            x: 643 * scale,
            y: imageHeight - (317 * scale),
            width: 242 * scale,
            height: 29 * scale
        ),
        withAttributes: attributes
    )
    image.unlockFocus()
}

func replaceQRCode(on image: NSImage, qrCode: NSImage) {
    let scale = pageScale / sourceScale
    let imageHeight = image.size.height
    let targetRect = NSRect(
        x: 848 * scale,
        y: imageHeight - (397 * scale),
        width: 100 * scale,
        height: 100 * scale
    )

    image.lockFocus()
    qrCode.draw(in: targetRect)
    image.unlockFocus()
}

func savePrintPDF(images: [NSImage], pageBounds: [CGRect], to url: URL) {
    guard
        let consumer = CGDataConsumer(url: url as CFURL),
        let firstBounds = pageBounds.first
    else {
        fatalError("Could not create the PDF output.")
    }

    var firstMediaBox = firstBounds
    guard let context = CGContext(
        consumer: consumer,
        mediaBox: &firstMediaBox,
        nil
    ) else {
        fatalError("Could not create the PDF context.")
    }

    for (index, image) in images.enumerated() {
        let mediaBox = pageBounds[index]
        context.beginPDFPage(nil)
        guard let cgImage = image.cgImage(
            forProposedRect: nil,
            context: nil,
            hints: nil
        ) else {
            fatalError("Could not render PDF page \(index + 1).")
        }
        context.interpolationQuality = .high
        context.draw(cgImage, in: mediaBox)
        context.endPDFPage()
    }

    context.closePDF()
}

try FileManager.default.createDirectory(
    at: outputDirectory,
    withIntermediateDirectories: true
)

guard let sourceDocument = PDFDocument(url: sourcePDFURL) else {
    fatalError("Could not open the source visiting card PDF.")
}

var editedImages: [NSImage] = []
var pageBounds: [CGRect] = []
let qrCodeURL = outputDirectory.appendingPathComponent("socialconnect-qr.png")
guard let qrCode = NSImage(contentsOf: qrCodeURL) else {
    fatalError(
        "Generate \(qrCodeURL.path) for \(socialConnectURL) before running this script."
    )
}

for pageIndex in 0..<sourceDocument.pageCount {
    guard let page = sourceDocument.page(at: pageIndex) else {
        fatalError("Could not read page \(pageIndex + 1).")
    }

    let image = render(page: page)
    if pageIndex == 0 {
        replacePhoneNumber(on: image)
    } else if pageIndex == 1 {
        replaceQRCode(on: image, qrCode: qrCode)
    }

    let fileName = pageIndex == 0 ? "corporate-wheels-front.png" : "corporate-wheels-back.png"
    savePNG(image, to: outputDirectory.appendingPathComponent(fileName))
    editedImages.append(image)
    pageBounds.append(page.bounds(for: .mediaBox))
}

savePrintPDF(
    images: editedImages,
    pageBounds: pageBounds,
    to: outputDirectory.appendingPathComponent("Corporate-Wheels-Visit-Card-Socialconnect.pdf")
)

print("Generated Social Connect QR code and two-sided visiting card assets.")
