import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideCreateProjectPage() {
  return (
    <GuidePage
      title="How do I create a new project?"
      breadcrumbLabel="How do I create a new project?"
    >
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Projects are the primary containers for data within an organisation. Creating a new project can only be done by users with high-level administrative permissions.
        </p>
      </div>

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

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Creating a new project is a simple two-step process:
        </p>
      </div>

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

      <div className="text-base leading-7 text-zinc-700 mt-4">
        <p>
          Your new project is now created, and you will be automatically assigned as a Project Admin, allowing you to manage its settings and members.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideCreateProjectPage;
