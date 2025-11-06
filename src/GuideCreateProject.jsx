import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Asset URLs
const imgGroup37 = "/assets/logo-symbol-small.svg";
const imgAgari = "/assets/logo-text-small.svg";

function LogoHorizontal({ className, size = "large" }) {
  if (size === "small") {
    return (
      <div className={className} data-name="size=small">
        <div className="absolute bottom-[0.96%] flex items-center justify-center left-[0.28%] right-[65.19%] top-0">
          <div className="flex-none h-[31.693px] rotate-[180deg] scale-y-[-100%] w-[24.517px]">
            <div className="relative size-full">
              <img alt="" className="block max-w-none size-full" src={imgGroup37} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[25.74%] left-[40.38%] right-[0.24%] top-1/4" data-name="AGARI">
          <img alt="" className="block max-w-none size-full" src={imgAgari} />
        </div>
      </div>
    );
  }
  return null;
}

function GuideCreateProjectPage() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Content Area */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-12 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 max-w-[800px] relative shrink-0 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Link to="/guides" className="text-zinc-600 hover:text-[#348f41] transition-colors">
                Guides
              </Link>
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-zinc-900">How do I create a new project?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I create a new project?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Projects are the primary containers for data within an organisation. Creating a new project can only be done by users with high-level administrative permissions.
                </p>
              </div>

              {/* Who can create a project? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can create a project?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Only users with the following roles can create new projects:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Organisation Owner</li>
                  <li>Organisation Admin</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  If you need to create a project and do not have one of these roles, please contact your organisation's administrator.
                </p>
              </div>

              {/* Step-by-Step Guide */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step-by-Step Guide
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Creating a new project is a simple two-step process:
                </p>
              </div>

              {/* Step 1 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step 1: Project Details
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li>Navigate to the Projects page from the main header.</li>
                  <li>Click the "New Project" button in the top-right corner.</li>
                  <li>
                    In the dialog that appears, fill in the project details:
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li><strong>Project Name:</strong> A clear and descriptive name for your project (e.g., "West African Cholera Surveillance").</li>
                      <li><strong>Pathogen:</strong> Select the primary pathogen for this project from the dropdown list.</li>
                      <li><strong>Description:</strong> (Optional) Provide a brief summary of the project's goals.</li>
                    </ul>
                  </li>
                  <li>Click "Next" to proceed.</li>
                </ol>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step 2: Sharing Policy
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  In this step, you will define the default visibility and access rules for your project's data.
                </p>
                <p className="text-base leading-7 text-zinc-700">
                  Select one of the three sharing policies:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Private:</strong> Only members explicitly invited to this project can view or download data.</li>
                  <li><strong>Semi-private:</strong> Aggregated metadata is shared for continental surveillance, but only project members can download detailed data.</li>
                  <li><strong>Public:</strong> All authenticated AGARI users, regardless of their organisation, can view and download the project's data.</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  Click "Create Project" to finish.
                </p>
              </div>

              {/* Summary */}
              <div className="text-base leading-7 text-zinc-700 mt-4">
                <p>
                  Your new project is now created, and you will be automatically assigned as a Project Admin, allowing you to manage its settings and members.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuideCreateProjectPage;

