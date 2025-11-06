import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideUnpublishSubmissionPage() {
  return (
    <GuidePage
      title="What happens when I unpublish a submission?"
      breadcrumbLabel="What happens when I unpublish a submission?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Unpublishing a submission is a reversible action that allows you to withdraw published data from view, typically to make corrections or updates. This moves the submission from a "Published" state back to a "Draft" state.
        </p>
      </div>

      {/* Who can unpublish a submission? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can unpublish a submission?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The same users who can publish a submission can also unpublish it. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>The project's Organisation Owner</li>
          <li>An Organisation Admin</li>
          <li>A project-specific Admin</li>
          <li>The original Contributor who created the submission.</li>
        </ul>
      </div>

      {/* What Happens When You Unpublish? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          What Happens When You Unpublish?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          When you click the "Unpublish" button on a submission's detail page, the following actions occur immediately:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Status Reverts to Draft:</strong> The submission's status badge changes from "Published" back to "Draft".</li>
          <li><strong>Visibility is Restricted:</strong> The data is immediately hidden from users who can only see published data (e.g., those with a "Viewer" role). It is also removed from all aggregated views like the main pathogen dashboards.</li>
          <li><strong>Log Entry is Created:</strong> A new entry is added to the submission's log, indicating that the submission was unpublished and by whom.</li>
          <li><strong>The Data is Not Deleted:</strong> Your data remains safe within the draft submission, ready for you to edit.</li>
        </ul>
      </div>

      {/* What to Do Next */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          What to Do Next
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          After unpublishing, you can treat the submission just like any other draft. This is your opportunity to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Upload a new version of your metadata or sequence files to correct errors.</li>
          <li>Edit the submission's title.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          <strong>Important:</strong> Once you have made your corrections, you must go through the publishing process again to make your updated data visible to all project members.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideUnpublishSubmissionPage;
