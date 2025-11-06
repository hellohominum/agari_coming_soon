import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideDeleteProjectPage() {
  return (
    <GuidePage
      title="How do I delete a project?"
      breadcrumbLabel="How do I delete a project?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Deleting a project is a permanent action that removes the project and all of its associated data, including submissions and member access settings. This guide explains who can perform this action and how to do it.
        </p>
      </div>

      {/* Who can delete a project? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can delete a project?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Due to the permanent nature of this action, only users with high-level administrative permissions for a project can delete it. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Organisation Owner</li>
          <li>Organisation Admin</li>
          <li>A project-specific Admin</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Follow these steps to permanently delete a project:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the Projects page and click on the project you wish to delete.</li>
          <li>Select the "Settings" tab.</li>
          <li>In the "Project Details" card, click the "Edit" button.</li>
          <li>In the dialog that appears, click the red "Delete Project" button at the bottom left.</li>
          <li>A final confirmation dialog will appear. To proceed, click the "Confirm Delete" button.</li>
        </ol>
      </div>

      {/* Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
        <p className="text-base leading-7 text-red-900 font-semibold">
          <strong>Warning:</strong> This action cannot be undone. All project data will be lost permanently.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideDeleteProjectPage;
