import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function PrivacyPolicyPage() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Content Area */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 max-w-[800px] relative shrink-0 w-full">
            {/* Breadcrumb */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <Link to="/" className="font-normal leading-6 text-zinc-500 text-sm hover:text-zinc-700">
                Home
              </Link>
              <span className="text-zinc-400">/</span>
              <span className="font-normal leading-6 text-zinc-500 text-sm">
                Privacy Policy
              </span>
            </div>

            {/* Title */}
            <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
              <h1 className="font-bold leading-tight text-zinc-950 text-4xl sm:text-5xl tracking-tight">
                Privacy Policy
              </h1>
              <p className="font-normal leading-6 text-zinc-600 text-base">
                Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  1. Introduction
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  The African Genomic Archive for Response & Insight (AGARI) is committed to protecting the privacy and confidentiality of personal information in accordance with applicable data protection laws, including the Protection of Personal Information Act (POPIA) of South Africa and similar legislation in other African countries.
                </p>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-2">
                  This Privacy Policy explains how we collect, use, store, and protect your personal information when you use the AGARI platform.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  2. Information We Collect
                </h2>
                <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
                  <h3 className="font-semibold leading-6 text-zinc-950 text-xl">
                    2.1 Personal Information
                  </h3>
                  <p className="font-normal leading-6 text-zinc-700 text-base">
                    We collect the following personal information:
                  </p>
                  <ul className="list-disc ms-6 space-y-2">
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Name and contact information (email address)
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Organization affiliation and role
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Account credentials (securely encrypted)
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Profile information (optional biography)
                    </li>
                  </ul>
                </div>
                <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full mt-4">
                  <h3 className="font-semibold leading-6 text-zinc-950 text-xl">
                    2.2 Usage Data
                  </h3>
                  <p className="font-normal leading-6 text-zinc-700 text-base">
                    We automatically collect information about how you use the platform, including:
                  </p>
                  <ul className="list-disc ms-6 space-y-2">
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Login times and session duration
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Data access and download activities (for audit purposes)
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Platform interactions and feature usage
                    </li>
                  </ul>
                </div>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  3. How We Use Your Information
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To provide and maintain the AGARI platform services
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To authenticate your identity and manage your account
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To communicate with you about your account and platform updates
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To enforce access controls and sharing policies
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To maintain audit logs for security and compliance purposes
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To comply with legal obligations and regulatory requirements
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  4. Legal Basis for Processing (POPIA Compliance)
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  Under POPIA and similar African data protection laws, we process your personal information based on the following legal grounds:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Consent:</strong> You have provided explicit consent for account creation and data processing
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Contractual necessity:</strong> Processing is necessary to provide the platform services you have requested
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Legal obligation:</strong> We must comply with applicable laws and regulations
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Legitimate interests:</strong> Processing is necessary for platform security, fraud prevention, and audit compliance
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Within your organization:</strong> Organization administrators can view member information for management purposes
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>With your consent:</strong> When you explicitly authorize sharing
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Legal requirements:</strong> When required by law, court order, or regulatory authority
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Service providers:</strong> With trusted third-party service providers who assist in platform operations, subject to strict confidentiality agreements
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  6. Data Security
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Encryption of data in transit and at rest
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Access controls and authentication mechanisms
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Regular security audits and vulnerability assessments
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Staff training on data protection and privacy
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Incident response procedures
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-2">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  7. Your Rights (POPIA and African Data Protection Laws)
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  Under POPIA and similar legislation, you have the following rights regarding your personal information:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right of access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to deletion:</strong> Request deletion of your personal information, subject to legal retention requirements
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to object:</strong> Object to processing of your personal information in certain circumstances
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to restrict processing:</strong> Request restriction of processing in specific situations
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to data portability:</strong> Request transfer of your data in a structured, commonly used format
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to withdraw consent:</strong> Withdraw consent for processing where consent is the legal basis
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-2">
                  To exercise these rights, please contact your organization administrator or the AGARI platform support team.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  8. Data Retention
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Specifically:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Account information is retained while your account is active
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Audit logs are retained in accordance with legal and regulatory requirements
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Upon account deletion, personal information is deleted within 30 days, unless retention is required by law
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  9. International Data Transfers
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI operates primarily within African countries. If data is transferred outside of Africa, we ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws, including:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Standard contractual clauses approved by relevant data protection authorities
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Adequacy decisions where applicable
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Other legally recognized transfer mechanisms
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  10. Children's Privacy
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI is designed for use by authorized professionals and institutions. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or platform notification. The "Last updated" date at the top of this policy indicates when it was last revised.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  12. Complaints and Contact
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  If you have concerns about how we handle your personal information, you have the right to lodge a complaint with:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>South Africa:</strong> The Information Regulator (POPIA)
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Other African countries:</strong> The relevant data protection authority in your jurisdiction
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-2">
                  For questions about this Privacy Policy or to exercise your rights, please contact your organization administrator or the AGARI platform support team through your organization's designated channels.
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;

