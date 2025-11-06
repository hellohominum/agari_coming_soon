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

function GuideProjectAdminPage() {
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
              <span className="text-zinc-900">As a Project Admin, what can I do?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                As a Project Admin, what can I do?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  As a Project Admin, your permissions are scoped to the specific project(s) where you have been assigned this role. You are responsible for the day-to-day management of that project.
                </p>
              </div>

              {/* Key Capabilities */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Key Capabilities (within your assigned projects)
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Within each project you administer, you can:
                </p>
              </div>

              {/* Capability: Manage Project Settings */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Manage Project Settings:</strong> You can edit the project's name, description, and sharing policy (e.g., changing it from Private to Public).
                </p>
              </div>

              {/* Capability: Manage Project Members */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Manage Project Members:</strong> You can invite new users to the project, manage the roles of existing project members, and remove them from the project.
                </p>
              </div>

              {/* Capability: Publish Submissions */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Publish Submissions:</strong> You have the authority to publish <em>any</em> draft submission within the project, making its data visible to other members.
                </p>
              </div>

              {/* Capability: View All Data */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>View All Data:</strong> You have complete visibility into all data within the project, including both draft and published submissions from all users.
                </p>
              </div>

              {/* Capability: Delete the Project */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Delete the Project:</strong> You have the permission to permanently delete the project and all of its associated data.
                </p>
              </div>

              {/* Summary */}
              <div className="text-base leading-7 text-zinc-700 mt-4">
                <p>
                  Your administrative powers are confined to the projects you are assigned to. You cannot manage members or settings for projects where you are only a Contributor or Viewer.
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

export default GuideProjectAdminPage;

