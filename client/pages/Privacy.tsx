import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

type Block =
  | { kind: "p"; text: string }
  | { kind: "list"; intro?: string; items: string[] };

type Sub = { num: string; title: string; blocks: Block[] };
type Section = { num: string; title: string; subs: Sub[] };

const INTRO_PARAGRAPHS: string[] = [
  "Privacy and protection of our clients, passengers, and website visitors' personal information, privacy, and digital security is of paramount importance at Corporate Wheels Limited (www.corporatewheels.co.uk). The Privacy Policy is aimed at disclosing the type of personal information collected, how this information is processed and protected, and the rights of our users under the data protection laws of the United Kingdom.",
  "If you have any concerns about our data processing procedures or need to exercise your privacy rights, please reach us at info@corporatewheels.co.uk.",
];

const PRIVACY_DESK_LINES: { label: string; value: string }[] = [
  { label: "Email", value: "info@corporatewheels.co.uk" },
  { label: "Telephone", value: "+44 (0)333 355 3755" },
  { label: "Office Telephone", value: "+44 (0)333 355 3755" },
  {
    label: "Address",
    value:
      "Corporate Wheels Limited, 450, Bath Road, Longford, Heathrow, Greater London, UB7 0EB",
  },
];

const SECTIONS: Section[] = [
  {
    num: "1",
    title: "Consent & Statutory Framework",
    subs: [
      {
        num: "",
        title: "",
        blocks: [
          {
            kind: "p",
            text: "By utilising our website or employing our executive chauffeur services or setting up a corporate account, you consent to the gathering and processing of your personal information as outlined in our policy.",
          },
          {
            kind: "p",
            text: "Corporate Wheels Limited acts as a registered Data Controller that is fully compliant with the UK GDPR, the Data Protection Act 2018, and TfL licensing requirements.",
          },
        ],
      },
      {
        num: "",
        title: "Data Protection Authority Registration",
        blocks: [
          {
            kind: "p",
            text: "Corporate Wheels Limited is a registered Data Controller with the Information Commissioner’s Office of the UK under reference [ZC091272].",
          },
        ],
      },
    ],
  },
  {
    num: "2",
    title: "Information We Collect",
    subs: [
      {
        num: "2.1",
        title: "Information Provided Directly",
        blocks: [
          {
            kind: "list",
            intro:
              "On your request for a quote, registration of an account or making a booking, we will receive:",
            items: [
              "Identification and Contact Information: Full name, professional title, company name, work email ID, and telephone numbers for contact.",
              "Travel Information: Pickup and drop-off locations, travel date and time, flight numbers for automatic flight tracking, choice of car type, and passenger instructions.",
              "Financial and Billing Information: Card billing information and transaction records. (Please note that all transactions are made using secure and PCI-DSS compliant payment gateways. Corporate Wheels does not keep full credit/debit card numbers with itself)",
              "Communication: Content and details of communications exchanged through emails/web portals/telephone calls.",
            ],
          },
        ],
      },
      {
        num: "2.2",
        title: "Automatically Collected Usage & Technical Data",
        blocks: [
          {
            kind: "list",
            items: [
              "Technical Data Standard: Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this Website.",
              "Live GPS Trip Coordinates: GPS location information linked to trips being undertaken in real time.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "3",
    title: "Purpose of Processing & Fare Transparency",
    subs: [
      {
        num: "",
        title: "",
        blocks: [
          {
            kind: "list",
            intro:
              "Your personal data will be used only for legitimate business purposes as follows:",
            items: [
              "Chauffeur Booking & Service Provision: Handling booking request management, issuance of chauffeur dispatch notice, automatic journey information provision and 24/7 client service.",
              "Pricing & Fare Calculation: Offering clear, inexpensive price estimates provided before your trip. The price includes basic mileage, per mile fee, vehicle category choice, out of social hours work, tolls, congestion charge and VAT. If your fare is changed because of any itinerary changes, you will be informed and agree with that.",
              "Corporate Account Management: Providing corporate account management, expense integration and historic journey details.",
              "Regulatory & Statutory Compliance: Meeting the conditions set by TfL for private hire operators, tax accounting needs and passenger care obligations.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "4",
    title: "Technical Safeguards & Data Security Measures",
    subs: [
      {
        num: "",
        title: "",
        blocks: [
          {
            kind: "list",
            intro:
              "Corporate Wheels ensures the implementation of strong organisational and technological controls to safeguard sensitive information from any access, misuse, or loss:",
            items: [
              "Dual-Level Authentication: The use of mandatory Multi-Factor Authentication (MFA) is required to protect company email exchanges and cloud management.",
              "Encrypted Cloud Storage: Sensitive administrative files are hosted in an encrypted cloud environment with role-based access control and not on office hard disks.",
              "Physical Document Security: Important physical documents are stored in a restricted access and secured safe box that is installed at our head office building.",
              "Computer & Device Control: All the office PCs, mobile devices, and equipment are password protected and encrypted at the endpoint level.",
              "Dispatch Software Logs: Every interaction performed by the dispatch controllers is logged against individual credentials with password protection.",
              "Secure Payment Processing: No physical card terminals are used within our office premises. Payments are made through bank transfers or encrypted Stripe payment links. Only transaction ID numbers remain in dispatch records, while all the credit card information is transferred through Stripe.",
              "Digital Driver Verification Documents: There are no physical copies of driver credentials stored at the office premises. All the chauffeur license information is uploaded to our encrypted dispatch software.",
              "Response to Data Security Incidents: If there is a data security breach, then Corporate Wheels will adhere to its Incidence Response Plan, which requires immediate notifications to the Information Commissioner’s Office and concerned individuals.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "5",
    title: "Third-Party Data Sharing & Analytics",
    subs: [
      {
        num: "",
        title: "",
        blocks: [
          {
            kind: "list",
            intro:
              "Personal data is not traded, sold, leased, or transferred to any external commercial third parties. Personal data is only shared with authorised partners that enable the provision of travel services or that have a duty to receive such data:",
            items: [
              "Assigned Chauffeurs: Personal data such as passenger name, telephone number, pick-up address, and flight numbers are shared through encrypted chauffeur apps.",
              "Dispatching Management Software: Encrypted cloud-based technologies that are used for vehicle tracking, driver credentials, and management of other operational data.",
              "Payment Processing: Secure merchant payment processors (such as Stripe) for payment confirmation and fraud protection.",
              "Analytics: Pseudonymous analytics services (such as Google Analytics) for website improvement purposes.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "6",
    title: "Regulatory & Operational Compliance",
    subs: [
      {
        num: "6.1",
        title: "Voice Contact Requirement (VCR) Standards",
        blocks: [
          {
            kind: "p",
            text: "In strict compliance with the TfL regulations, Corporate Wheels is available for communication by phone at all times during working hours and during the entire period of time that each trip takes place.",
          },
          {
            kind: "list",
            items: [
              "Multiple Communication Channels: VCR contact information is provided on booking confirmations, chauffeur assignation information, email signatures, and text alerts.",
              "Back-Up In Case Of A Missed Call: If there is a missed call, the system will automatically send an alert to our controller desk to ensure follow up immediately.",
              "Emergency and Public Contact: We provide direct voice contact to our passengers, chauffeurs, parents/guardians for their safety and operational purposes.",
              "Audits: Corporate Wheels is fully committed to TfL regulation compliance including their mystery shopping and complaints handling procedures.",
            ],
          },
        ],
      },
      {
        num: "6.2",
        title: "Ex-Offender Recruitment Policy",
        blocks: [
          {
            kind: "p",
            text: "Corporate Wheels abides by the Rehabilitation of Offenders Act 1974 in its totality. The criminal records of applicants are subjected to stringent role-specific evaluation, risk assessment, and DBS checks to maintain fairness in the selection process without compromising the safety of passengers and employees.",
          },
        ],
      },
      {
        num: "6.3",
        title: "Protection of Minors",
        blocks: [
          {
            kind: "p",
            text: "The Corporate Wheels website does not intentionally gather personally identifiable data from children under 13 years of age over the Internet. Solo travelling by children ages 12-17 will require written permission from parents or legal guardians before travelling.",
          },
        ],
      },
    ],
  },
  {
    num: "7",
    title: "Data Retention & GDPR Rights",
    subs: [
      {
        num: "7.1",
        title: "Data Retention Periods",
        blocks: [
          {
            kind: "list",
            intro:
              "Personal information is stored only for the period of time necessary to meet business, legal, and financial requirements:",
            items: [
              "Booking History: Stored for a reasonable amount of time to enable assistance with customer queries, audit, and service review.",
              "Accounting Information: Transaction records are stored as required by UK statutory accounting regulations.",
              "Log Files: Anonymous usage statistics are stored to optimise system performance and security.",
            ],
          },
        ],
      },
      {
        num: "7.2",
        title: "Your Data Protection Rights",
        blocks: [
          {
            kind: "p",
            text: "Under UK GDPR, the following rights are accorded to you in relation to your personal information:",
          },
          {
            kind: "list",
            items: [
              "Right to Access: Request copies of your personal data that we store.",
              "Right to Rectification: Request correction of any inaccurate or incomplete data.",
              "Right to Erasure: Request deletion of your personal data on the grounds of qualified right.",
              "Right to Restrict or Object: Request objection or restriction of particular processing activity.",
              "Right to Data Portability: Request transfer of your data to another designated controller.",
            ],
          },
          {
            kind: "p",
            text: "Requests for exercising data rights will be handled within one (1) month of receipt. You may contact our Privacy Desk to make such requests.",
          },
        ],
      },
    ],
  },
  {
    num: "8",
    title: "Policy Updates & Contact Details",
    subs: [
      {
        num: "",
        title: "",
        blocks: [
          {
            kind: "p",
            text: "The policy can be revised by Corporate Wheels Limited for the purpose of reflecting any new legal requirements, technical developments, or changes in operations. All changes will be posted on our site with a revised effective date.",
          },
        ],
      },
    ],
  },
];

function boldWebsite(text: string) {
  const marker = "www.corporatewheels.co.uk";
  const parts = text.split(marker);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <strong key={i} className="font-semibold text-white">
            {marker}
          </strong>,
          part,
        ],
  );
}

function ListItem({ text }: { text: string }) {
  const idx = text.indexOf(": ");
  if (idx > 0 && idx < 80) {
    return (
      <li>
        <span className="text-white font-medium">{text.slice(0, idx)}:</span>{" "}
        {text.slice(idx + 2)}
      </li>
    );
  }
  return <li>{text}</li>;
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose prose-invert max-w-none space-y-4">
      {blocks.map((block, i) =>
        block.kind === "p" ? (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {boldWebsite(block.text)}
          </p>
        ) : (
          <div key={i} className="space-y-3">
            {block.intro && (
              <p className="text-muted-foreground leading-relaxed">{block.intro}</p>
            )}
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              {block.items.map((item, j) => (
                <ListItem key={j} text={item} />
              ))}
            </ul>
          </div>
        ),
      )}
    </div>
  );
}

export default function Privacy() {
  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-hidden">
      <Seo
        title="Privacy & Data Protection Policy"
        description="Read how Corporate Wheels collects, uses, and protects your personal data when you book or use our chauffeur service."
        path="/privacy"
      />
      {/* Decorative backgrounds */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-28 -left-20 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(120deg,#F4C430 0%,#E6A700 25%,#FF6B35 60%,#E53E3E 100%)",
          }}
        />
        <div
          className="absolute -bottom-36 -right-28 h-[40rem] w-[40rem] rounded-full opacity-12 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(60deg,#E53E3E 0%,#FF6B35 40%,#E6A700 70%,#F4C430 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
              <span className="text-sm text-white/80">
                Last Updated: January 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight mb-6">
              <span className="text-gradient-gold">
                Privacy &amp; Data Protection Policy
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read this Privacy &amp; Data Protection Policy carefully
              to understand how we collect, use, and protect your personal
              data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative group">
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 space-y-10">
                  {/* About Corporate Wheels */}
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent">
                      About Corporate Wheels
                    </h2>
                    {INTRO_PARAGRAPHS.map((text, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {boldWebsite(text)}
                      </p>
                    ))}
                  </section>

                  {/* Numbered sections */}
                  {SECTIONS.map((section) => (
                    <section key={section.num} className="space-y-5">
                      <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent">
                        {section.num}. {section.title}
                      </h2>
                      {section.subs.map((sub, i) => (
                        <div key={sub.num || i} className="space-y-3">
                          {sub.title && (
                            <h3 className="text-lg font-semibold text-white">
                              {sub.num} {sub.title}
                            </h3>
                          )}
                          {sub.blocks.length > 0 && <Blocks blocks={sub.blocks} />}
                        </div>
                      ))}
                    </section>
                  ))}

                  {/* Privacy Desk contact box */}
                  <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <p className="text-white font-medium mb-3">
                      Corporate Wheels Limited—Privacy Desk
                    </p>
                    <ul className="space-y-1.5 text-muted-foreground">
                      {PRIVACY_DESK_LINES.map((line) => (
                        <li key={line.label}>
                          <span className="text-white font-medium">{line.label}:</span>{" "}
                          {line.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Support Button */}
              <div className="text-center mt-12">
                <Button variant="glow" size="lg" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
