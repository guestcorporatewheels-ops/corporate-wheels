## 2026-09-28: Command-line QR rendering failed

**Root cause:** Core Image created a QR filter but could not render its output in the sandboxed command-line environment.

**Failure symptoms:** The first generated QR image was blank. Later Core Image attempts failed while creating a rendered image.

**Fix details:** The QR code is now encoded with the deterministic `qrcode` command-line package. Swift only composites the finished PNG into the preserved card artwork and exports the print PDF.

**Consulted sources:** The local Core Image error output and the generated PNG inspection.

**Prevention guidance:** Verify generated QR assets visually before compositing them. Keep QR encoding separate from PDF rendering when the graphics environment is constrained.
