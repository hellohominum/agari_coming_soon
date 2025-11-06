import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function TermsOfServicePage() {
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
                Terms of Service
              </span>
            </div>

            {/* Title */}
            <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
              <h1 className="font-bold leading-tight text-zinc-950 text-4xl sm:text-5xl tracking-tight">
                Terms of Service
              </h1>
              <p className="font-normal leading-6 text-zinc-600 text-base">
                Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  1. Acceptance of Terms
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  By accessing and using the African Genomic Archive for Response & Insight (AGARI) platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the platform.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  2. Description of Service
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI is a continental platform for archiving and sharing pathogen genomic information, enabling real-time surveillance to empower a swift response to disease threats across Africa. The platform provides tools for data upload, management, analysis, and collaboration among African institutions.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  3. User Accounts and Responsibilities
                </h2>
                <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
                  <p className="font-normal leading-6 text-zinc-700 text-base">
                    Users are responsible for:
                  </p>
                  <ul className="list-disc ms-6 space-y-2">
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Maintaining the confidentiality of their account credentials
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      All activities that occur under their account
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Ensuring that all data uploaded is accurate, complete, and compliant with applicable regulations
                    </li>
                    <li className="font-normal leading-6 text-zinc-700 text-base">
                      Complying with all applicable laws and regulations in their jurisdiction, including but not limited to the Protection of Personal Information Act (POPIA) in South Africa and similar data protection laws in other African countries
                    </li>
                  </ul>
                </div>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  4. Data Ownership and Governance
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  All data uploaded to AGARI remains the property of the originating institution or country. The platform operates under a multi-layered governance model where:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Sub-national users can upload data for national review
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    National authorities approve visibility and sharing rules
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Regional bodies coordinate alerts and standards
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-2">
                  Each dataset remains governed by its originating country, ensuring data sovereignty and compliance with local policies.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  5. Acceptable Use
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  Users agree not to:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Upload false, misleading, or fraudulent data
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Attempt to gain unauthorized access to the platform or other users' data
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Use the platform for any illegal or unauthorized purpose
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Interfere with or disrupt the platform's operation or security
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Share account credentials with unauthorized parties
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  6. Intellectual Property
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  The AGARI platform, including its design, functionality, and underlying software, is the intellectual property of the platform operators. Users retain all rights to their uploaded data. By uploading data, users grant AGARI a non-exclusive license to store, process, and display the data according to the sharing policies set by the data owner.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  7. Data Sharing and Access
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  Data sharing on AGARI is controlled through project-specific sharing policies (Private, Semi-private, or Public). Users must respect these policies and only access data they are authorized to view. Unauthorized access or sharing of data may result in immediate account termination and legal action.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  8. Limitation of Liability
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI is provided "as is" without warranties of any kind. The platform operators shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the platform. Users are responsible for backing up their data and ensuring compliance with all applicable regulations.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  9. Termination
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI reserves the right to suspend or terminate user accounts that violate these Terms of Service or engage in activities that compromise the platform's security or integrity. Users may request account deletion, subject to data retention requirements under applicable laws.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  10. Changes to Terms
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI reserves the right to modify these Terms of Service at any time. Users will be notified of significant changes via email or platform notification. Continued use of the platform after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  11. Governing Law
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  These Terms of Service shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions. For users in other African countries, applicable local laws may also apply, particularly regarding data protection and privacy.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  12. Contact Information
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  For questions or concerns regarding these Terms of Service, please contact your national focal point or the AGARI platform administrators through your organization's designated channels.
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

export default TermsOfServicePage;

