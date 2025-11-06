import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideEditProjectPage() {
  return (
    <GuidePage
      title="How do I edit my project's details?"
      breadcrumbLabel="How do I edit my project's details?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Keeping your project information up-to-date is simple. This guide explains who can edit project details and how to do it.
        </p>
      </div>

      {/* Who can edit a project? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can edit a project?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Only users with administrative permissions for a project can modify its details. This includes the following roles:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Organisation Owner</li>
          <li>Organisation Admin</li>
          <li>A project-specific Admin</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          If you are a Contributor or Viewer, you will not be able to see the "Settings" tab for a project.
        </p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Follow these steps to update a project's name or description:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the Projects page from the main header.</li>
          <li>Click on the project card you wish to edit to go to its detail page.</li>
          <li>Select the "Settings" tab.</li>
          <li>In the "Project Details" card at the top, click the "Edit" button.</li>
          <li>A dialog will appear where you can update the Project Name and Description.</li>
          <li>After making your changes, click "Save Changes".</li>
        </ol>
        <p className="text-base leading-7 text-zinc-700">
          Your project's details will be updated immediately across the platform.
        </p>
      </div>

      {/* Warning */}
      <div className="text-base leading-7 text-zinc-700 mt-4">
        <p>
          The "Delete Project" button is also located within this dialog. Be aware that this is a permanent action that will delete the project and all of its data.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideEditProjectPage;
