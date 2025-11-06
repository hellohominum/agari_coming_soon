import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideDeleteSubmissionPage() {
  return (
    <GuidePage
      title="How do I delete a submission?"
      breadcrumbLabel="How do I delete a submission?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Deleting a submission is a permanent action that removes all of its associated data from the project. This guide explains who can perform this action and the steps to do it safely.
        </p>
      </div>

      {/* Who can delete a submission? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can delete a submission?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Permission to delete is restricted to ensure data integrity. The following roles can delete a submission:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>The project's Organisation Owner, Organisation Admin, or a project-specific Admin can delete any submission within the project.</li>
          <li>A Contributor can only delete submissions that they originally created, whether it is in a Draft or Published state.</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the project and click on the submission you wish to delete to open its detail page.</li>
          <li>Click the "Edit submission" dropdown button in the top-right corner of the page.</li>
          <li>Select "Delete submission" from the menu.</li>
          <li>A confirmation dialog will appear, warning you that this action is permanent and will delete all associated isolates.</li>
          <li>To proceed, click the "Confirm Delete" button.</li>
        </ol>
      </div>

      {/* What Happens After Deletion? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          What Happens After Deletion?
        </h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-base leading-7 text-red-900 font-semibold mb-3">
            <strong>Warning:</strong> This action cannot be undone. All data associated with the submission will be lost permanently.
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>The submission and all its associated isolate data are permanently removed from the system.</li>
          <li>An activity log entry with the action 'Submission Deleted' is created for the user who performed the action, recording the project ID and submission title.</li>
          <li>You will be redirected back to the project's "Submissions" list page.</li>
        </ul>
      </div>
    </GuidePage>
  );
}

export default GuideDeleteSubmissionPage;
