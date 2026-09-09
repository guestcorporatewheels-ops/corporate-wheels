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
  "Prior to your reservation and usage of the Private Hire and VVIP Chauffeur services of Corporate Wheels (www.corporatewheels.co.uk), Please read these Terms and Conditions carefully before making a booking. By making a booking, creating a Corporate Wheels account or using a Corporate Wheels vehicle, you agree to these Terms and Conditions, creation of a Corporate Wheels account and/or utilisation of a Corporate Wheels vehicle constitutes your acknowledgment of your agreement with these terms and conditions.",
];

const CONTACT_LINES: { label: string; value: string }[] = [
  { label: "Email", value: "info@corporatewheels.co.uk" },
  { label: "Phone", value: "07351111355" },
  { label: "Office Telephone", value: "+44 735 1111 355" },
  {
    label: "Address",
    value:
      "Corporate Wheels Limited, 450 Bath Road, Longford, Heathrow, Greater London, UB7 0EB",
  },
];

const SECTIONS: Section[] = [
  {
    num: "1",
    title: "General & Operator Information",
    subs: [
      {
        num: "1.1",
        title: "Company Status & Licensing",
        blocks: [
          {
            kind: "p",
            text: "Corporate Wheels operates its private hire services in accordance with applicable UK laws and licensing requirements with the UK law on Private Hire Vehicles [and with Regulation 9(14) of The Private Hire Vehicles (London) (Operators’ Licences) Regulations 2000 when relevant]. We assume full responsibility for the contract of carriage, the conduct of the chauffeur, the maintenance of the car, and the safe delivery of your trip.",
          },
        ],
      },
      {
        num: "1.2",
        title: "Acceptance & Revisions",
        blocks: [
          {
            kind: "p",
            text: "Through using our services, you are deemed to agree and be bound by the Terms and Conditions provided herein. The company may change these terms from time to time in case of operational, legislative, or legal requirements. Notice will be given on our official website (www.corporatewheels.co.uk), fourteen (14) days prior to their application. Use of our services thereafter shall mean your acceptance of the updated terms.",
          },
        ],
      },
    ],
  },
  {
    num: "2",
    title: "Booking Terms & Minimum Notices",
    subs: [
      {
        num: "2.1",
        title: "Booking Channels",
        blocks: [
          {
            kind: "list",
            intro:
              "All journeys must be booked in advance through one of the following approved booking channels:",
            items: [
              "Booking website",
              "Telephonic concierge desk",
              "Dispatch email correspondence",
              "Corporate account portal/API interface",
            ],
          },
        ],
      },
      {
        num: "2.2",
        title: "Vehicle Selection & Substitutions",
        blocks: [
          {
            kind: "p",
            text: "Our clients have options to choose from available fleet types (such as VVIP Class, Luxury VIP Class, Premium SUVs, Premium MPVs, Electric Class, and Vintage Classics). The pictures of the cars posted on our website are indicative. In case of unexpected maintenance or breakdown, Corporate Wheels will offer you an alternative or superior vehicle without any additional cost.",
          },
        ],
      },
      {
        num: "2.3",
        title: "Minimum Notice Requirements",
        blocks: [
          {
            kind: "list",
            items: [
              "Standard Fleet (Executive Saloons, Premium MPVs, SUVs and Electric Car): Minimum sixty (60) minutes’ advance notice (subject to dispatch availability).",
              "Vintage and Classic Fleet (Rolls-Royce Silver Cloud, for example): Minimum twenty four (24) hours’ advance notice.",
              "International and European Cross-Border Transfers: Minimum twenty four (24) hours’ advance notice.",
            ],
          },
        ],
      },
      {
        num: "2.4",
        title: "Hourly Hire Boundaries",
        blocks: [
          {
            kind: "p",
            text: "All hourly hire trips will have to be completed within the same urban or city area where the trips started from, unless otherwise stated in writing prior to booking. Separate billing is done for parking fees generated when hiring hourly from an airport terminal.",
          },
        ],
      },
    ],
  },
  {
    num: "3",
    title: "Operational Policies & In-Transit Rules",
    subs: [
      {
        num: "3.1",
        title: "Passenger Conduct & Interior Rules",
        blocks: [
          {
            kind: "list",
            intro:
              "For safety and comfort of the passengers, they have to adhere to the following guidelines:",
            items: [
              "Seat Belts: Seat belts have to be worn by all the passengers all the time.",
              "Passengers’ Behaviour and Prohibited Acts: Smoking, use of e-cigarettes, taking any form of illicit drug, listening to music loudly without earphones, and opening doors while in motion are all prohibited acts.",
              "Alcohol & Consumption Policy: As per the regulations of UK Private Hire and the company policy, drinking alcohol while being in any Corporate Wheels car is totally forbidden. The chauffeur has full rights to prohibit that according to the law. If you require any more information, contact us at the office desk.",
              "Right of Refusal: Our chauffeurs may refuse or terminate a journey where a passenger’s behaviour presents a safety risk, is threatening or abusive, or where the passenger is excessively intoxicated.",
            ],
          },
        ],
      },
      {
        num: "3.2",
        title: "Cleaning & Damage Surcharges",
        blocks: [
          {
            kind: "list",
            items: [
              "Vehicle Damages: Any damages incurred as a result of negligent actions, abuses, and reckless behaviour of the passengers inside the car will be charged fully according to the actual repair cost of the damages.",
              "Cleaning Fees: In the case of vehicle soiling, which includes, but is not limited to—vomiting, animal fouling, and significant food and drink spillage, mandatory vehicle cleaning and valeting fees will apply. The actual cleaning fees are not fixed; we will determine the valeting level needed and Any applicable additional cleaning charges will be invoiced after the journey.",
            ],
          },
        ],
      },
      {
        num: "3.3",
        title: "Child Safety Policies",
        blocks: [
          {
            kind: "list",
            items: [
              "Seatbelts & Child Safety: In compliance with UK regulations, all passengers are required to wear seatbelts all the time when travelling, and age or height appropriate seats/boosters will be provided where necessary in line with UK regulations, with the responsibility for securing children being retained by their parents/guardians.",
              "Supervision: Supervision by parent or guardian is necessary for all minors.",
              "Unaccompanied Minors: The minimum age of an unaccompanied passenger is twelve (12) years. A parent declaration form is necessary for all unaccompanied passengers under eighteen (18) years of age.",
            ],
          },
        ],
      },
      {
        num: "3.4",
        title: "Pet Policy",
        blocks: [
          {
            kind: "list",
            items: [
              "Policy for Pet & Assistance Dogs: Fully compliant with the UK PHV law, Corporate Wheels transports passengers accompanied by officially certified assistance dogs at no extra cost. Any other domestic pet needs to be informed and approved beforehand through the office, and passengers need to have a suitable box to carry their pet.",
            ],
          },
        ],
      },
      {
        num: "3.5",
        title: "Luggage Policy & Porterage",
        blocks: [
          {
            kind: "list",
            items: [
              "Luggage and Compartment Capacity: The luggage capacity is determined by the type of the vehicle selected. It is the responsibility of passengers to select the right vehicle when booking so as to allow space for both the passengers and their luggage, as all the luggage should fit within the rear luggage compartment.",
              "Cabin Luggage: Small personal baggage, laptops, and cabin-sized bags may be carried in the cabin portion of the vehicle only.",
              "Excess Luggage: Unauthorised and excess luggage may be refused by the chauffeur if it affects the safety of the vehicle or its load capacity.",
              "Porterage: Standard service includes porterage from the vehicle to the building entrance/airport curb. Multi-level or flight of stairs baggage handling needs prior arrangement along with porterage charges. Baggage-only van does not carry any passengers.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "4",
    title: "No-Show, Waiting Time & Cancellation Policy",
    subs: [
      {
        num: "4.1",
        title: "Complimentary Waiting Periods",
        blocks: [
          {
            kind: "list",
            items: [
              "Airport & Private Flight (Fixed-Base-Operator) Pickups: Complimentary waiting time for sixty (60) minutes upon actual landing of your aircraft (monitored through flights).",
              "Non-Airport Pickups: Complimentary waiting time for fifteen (15) minutes past the scheduled pick up time.",
              "Waiting Time Overages: Additional waiting time beyond the complimentary minutes is charged on a per minute basis at our regular hourly rate.",
            ],
          },
        ],
      },
      {
        num: "4.2",
        title: "Dynamic Pickup Adjustments for Flight Delays",
        blocks: [
          {
            kind: "list",
            intro:
              "We monitor every commercial and private aircraft entering in real-time. The pickup schedule is dynamically reconfigured based on the real-time arrival of the flight:",
            items: [
              "Late Flights: In case your flight is late, the schedule of your pick-up is automatically adjusted forward without any additional cost for your complimentary 60 minutes wait window from your actual arrival.",
              "Early Flights: In case your flight arrives early, efforts are made to adjust your chauffeur’s arrival accordingly to your actual arrival time.",
            ],
          },
        ],
      },
      {
        num: "4.3",
        title: "Client Cancellation Windows & Fees",
        blocks: [
          {
            kind: "list",
            items: [
              "Client Cancellations & Service Exceptions: Any client that cancels more than three hours before the pickup time is entitled to receive a free cancellation of their booking, with a 100% full refund. In the case of cancellations that take place less than three hours from the pickup time, there will be a fee equal to 50% of the total cost of the trip, and a no-show means that 100% of the total fee will be retained without refund. In the event that the cancellation results from operator/chauffeur problems such as a dirty car or late arrival, cancellation fees shall be waived or deducted accordingly based on the verified reason and proof provided upon investigation.",
              "European and international bookings: Seven (7) days' notice is required for free cancellation. Channel Tunnel/Eurotunnel and ferry tickets are non-refundable after booking.",
            ],
          },
        ],
      },
      {
        num: "4.4",
        title: "No-Show Definitions",
        blocks: [
          {
            kind: "list",
            items: [
              "Airport Pick-ups: Will be treated as No-Show if there is no communication with the dispatcher or absence of the passenger within ninety (90) minutes after landing of the flight.",
              "Non-airport pick-ups: Will be considered as No-Show if there is no presence of the passenger or any communication with the dispatcher within thirty (30) minutes of scheduled pick-up time.",
              "Charges: All identified No-shows will be charged at one hundred percent (100%) of the total booking charges.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "5",
    title: "Payments, Rates & Invoicing",
    subs: [
      {
        num: "5.1",
        title: "Transparent Pricing & Additional Charges",
        blocks: [
          {
            kind: "list",
            intro:
              "All quotes cover standard rates for drivers, vehicle hire, fuel, and standard route tolls. Further charges may apply after your journey for:",
            items: [
              "Parking charges, airport drop-off charges, and additional waiting time",
              "Detours on route not pre-arranged",
              "Eurotunnel or ferry charges",
            ],
          },
        ],
      },
      {
        num: "5.2",
        title: "Payment Terms",
        blocks: [
          {
            kind: "list",
            items: [
              "Retail and Private Individuals: The full payment process is completed at the point of reservation through the use of credit/debit card payments using PCI-DSS secured payment gateways. The post-journey incidental costs (such as parking and waiting charges) will be processed after 24–48 hours from completion of the journey.",
              "Corporate Clients: Journeys are consolidated into a monthly business ledger under commercial invoice conditions.*",
            ],
          },
        ],
      },
      {
        num: "5.3",
        title: "Refunds & Chargeback Policy",
        blocks: [
          {
            kind: "list",
            items: [
              "Refunded Amounts: Returned to the original credit card account within 1-2 working days. For refunds that exceed the limit, there may be a 3% card processing fee applied.",
              "Chargeback Cases: When there is a case raised by a client regarding an invalid or fraudulent credit card chargeback, there can be a provision made for a £250.00 administrative defense fee.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "6",
    title: "Liability, Security & Technology",
    subs: [
      {
        num: "6.1",
        title: "Force Majeure & Delays",
        blocks: [
          {
            kind: "p",
            text: "Even though Corporate Wheels uses live tracking and GPS to ensure punctuality, any loss or damages arising from extreme weather conditions, road closures, traffic accidents, strikes, or other unforeseen occurrences is not the responsibility of Corporate Wheels.",
          },
        ],
      },
      {
        num: "6.2",
        title: "Security, Dashcams & GPS Tracking",
        blocks: [
          {
            kind: "list",
            items: [
              "GPS Tracking System: GPS tracking technology is used actively on the fleet cars for security purposes as well as to increase efficiency and dispatching. Location data are always stored in compliance with UK GDPR.",
              "In-Car Dashcams: Some cars use dashcam that captures video only for passengers’ and drivers’ safety purposes. In case a client does not agree to record an interior, the client can inform the dispatch team before booking.",
              "NDA Certification: All corporate drivers are working according to Non-Disclosure Agreements.",
            ],
          },
        ],
      },
      {
        num: "6.3",
        title: "Lost Property",
        blocks: [
          {
            kind: "p",
            text: "The chauffeur will check the vehicle after each journey for any items left behind. The items found will be recorded and transported to our head office. If the items are not claimed after thirty (30) days, they will be disposed off, with valuable items taken to the local police station. Corporate Wheels takes no responsibility for any lost items, and it is the client’s responsibility to pay all postage charges for the return of the lost items.",
          },
        ],
      },
    ],
  },
  {
    num: "7",
    title: "Recruitment of Ex-Offenders Policy",
    subs: [
      {
        num: "7.1",
        title: "Statement of Intent & Policy Principles",
        blocks: [
          {
            kind: "p",
            text: "Corporate Wheels Limited is dedicated to ensuring that all its employees, those who seek employment with them, volunteers, or any other individual using their services are treated equally and without discrimination due to their race, gender, religion, sexual orientation, caring responsibilities, age, disability, and even criminal background.",
          },
          {
            kind: "p",
            text: "Corporate Wheels actively encourages equality of opportunity for all people with the required talent and ability to succeed, irrespective of which group they come from. All such candidates will be invited for an interview due to their talents and skills.",
          },
        ],
      },
      {
        num: "7.2",
        title:
          "Legal Framework & DBS (Disclosure & Barring Service) Checking Standards",
        blocks: [
          {
            kind: "p",
            text: "Certain criminal convictions become ‘spent’ under the Rehabilitation of Offenders Act 1974 (ignoring them) after a specified rehabilitation period since the date of the conviction. After the expiration of the said rehabilitation period, the former offenders are usually not required to disclose the spent convictions when applying for jobs, unless there is an exception.",
          },
          {
            kind: "list",
            intro:
              "As our work involves interaction with children and young persons, many of the roles at Corporate Wheels will be eligible for DBS checks, in order to determine their suitability for positions of trust. As a registered organisation using the services of DBS, Corporate Wheels fully adheres to all the relevant UK laws and DBS Code of Practice:",
            items: [
              "Direct Passenger & Vulnerable Group Roles: All members of staff, prospective employees and volunteers dealing directly with children and young people are exempt from the Rehabilitation of Offenders Act 1974 in respect of these roles. All these individuals must take an Enhanced DBS check along with other barred lists check of spent and unspent convictions.",
              "Non-Direct & Office Roles: All other members of staff and office based individuals not dealing directly with children and young people will be made to take a Basic DBS check, which will disclose unspent convictions only.",
              "Transparency: Any requirement for a DBS check as part of the recruitment process will be clearly indicated in all recruitment packs and job adverts.",
            ],
          },
          {
            kind: "p",
            text: "The presence of a criminal record does not necessarily rule out the employment of the individual within Corporate Wheels. It is an offense to discriminate against the applicant on such grounds.",
          },
        ],
      },
      {
        num: "7.3",
        title: "Self-Declaration & Assessment Procedure",
        blocks: [],
      },
      {
        num: "7.3.1",
        title: "Self-Disclosure at Application",
        blocks: [
          {
            kind: "p",
            text: "The requirement of giving information on any kind of criminal history will be met by filling out a self-declaration form which will have to be sent as a separate piece of paper or in a sealed envelope together with the application package. The self-declaration form can only be consulted if the applicant is short-listed for an interview.",
          },
        ],
      },
      {
        num: "7.3.2",
        title: "Criteria for Assessing Conviction Relevance",
        blocks: [
          {
            kind: "list",
            intro:
              "These are the considerations regarding the assessment of criminal disclosures by Corporate Wheels:",
            items: [
              "Severity & Relevance: The severity of the crime and how relevant the crime is to colleagues and customers in addition to safety at work.",
              "Passage of Time: How long ago the crime took place.",
              "Consistency of Behaviour: Whether it is an isolated occurrence or a consistent behaviour.",
              "Circumstances: The circumstances surrounding the crime.",
              "Personal Circumstances: Whether there has been any change in personal circumstances of the applicant after committing the crime.",
              "Country: The country where the crime was committed.",
              "Remorse & Decriminalisation: Any signs of remorse and decriminalisation.",
            ],
          },
        ],
      },
      {
        num: "7.3.3",
        title: "Candidate Discussions & Final Determinations",
        blocks: [
          {
            kind: "p",
            text: "Where any offences come to light due to self-disclosure or DBS results, a discussion will be had about these offences in confidence with the candidate before any employment offer is finalised.",
          },
          {
            kind: "list",
            items: [
              "If the past convictions are spent and do not affect the individual’s capacity to perform the job, they will not prevent an individual from being employed.",
              "If there is an omission of facts pertinent to the job, the offer of employment can be withdrawn instantly.",
            ],
          },
        ],
      },
    ],
  },
  {
    num: "8",
    title: "Cookie & Data Usage Policy",
    subs: [
      {
        num: "8.1",
        title: "Data Collection & Technical Information",
        blocks: [
          {
            kind: "p",
            text: "In order to provide flawless booking services, protect the Website from any security risks, and ensure the best user experience, Corporate Wheels will collect the following Technical Data from you when you engage with the Website.",
          },
          {
            kind: "list",
            items: [
              "Technical Data Standard: The term “Technical Data” means your IP address, login data, browser type and version, time zone setting and location, browser plug-ins types and versions, operating system and platform, and other technology used by you to access this Website.",
            ],
          },
        ],
      },
      {
        num: "8.2",
        title: "Use of Cookies & Tracking Technologies",
        blocks: [
          {
            kind: "list",
            intro:
              "Cookies such as essential, analytical, and functional are used by us to improve navigation on our website, process booking inquiries, and analyse website traffic.",
            items: [
              "Essential Cookies: These cookies are required for the basic functioning of the website, user login, and processing active bookings.",
              "Analytical/Performance Cookies: These cookies are used to identify the number of visitors visiting our website and how they navigate through it.",
              "Controlling Cookies: You have the option to set the cookie setting of your browser in order to block cookies or notify you when cookies are being set. However, please be advised that disabling essential cookies may affect the functioning of our online booking portal.",
            ],
          },
        ],
      },
      {
        num: "8.3",
        title: "Data Integrity & UK GDPR Compliance",
        blocks: [
          {
            kind: "p",
            text: "All technical data that is collected is processed in line with UK GDPR and Data Protection Act 2018. Technical data is stored safely and used only for management of our platform, troubleshooting, traffic analytics, and optimisation. We at Corporate Wheels do not sell any of our clients’ data to third parties.",
          },
        ],
      },
    ],
  },
  {
    num: "9",
    title: "Legal Jurisdiction & Governing Law",
    subs: [
      {
        num: "",
        title: "",
        blocks: [
          {
            kind: "p",
            text: "These Terms & Conditions are subject to interpretation and governed by the laws of England & Wales. In case of any dispute regarding these Terms or our services, the same will be resolved exclusively by the courts of England.",
          },
        ],
      },
    ],
  },
];

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
            {block.text}
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

export default function Terms() {
  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-hidden">
      <Seo
        title="Terms & Conditions"
        description="The terms and conditions that apply when you book or use Corporate Wheels' private hire and VVIP chauffeur services."
        path="/terms-and-conditions"
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
              <span className="text-sm text-white/80">Last Updated: January 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight mb-6">
              <span className="text-gradient-gold">Terms &amp; Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these Terms and Conditions carefully before making a booking with
              Corporate Wheels.
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
                  {/* Intro */}
                  <div className="space-y-4">
                    {INTRO_PARAGRAPHS.map((text, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {text}
                      </p>
                    ))}
                    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                      <p className="text-white font-medium mb-3">
                        For more information, contact Corporate Wheels through:
                      </p>
                      <ul className="space-y-1.5 text-muted-foreground">
                        {CONTACT_LINES.map((line) => (
                          <li key={line.label}>
                            <span className="text-white font-medium">{line.label}:</span>{" "}
                            {line.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

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
