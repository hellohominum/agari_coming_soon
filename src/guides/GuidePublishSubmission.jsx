import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuidePublishSubmissionPage() {
  return (
    <GuidePage
      title="How do I publish a draft submission?"
      breadcrumbLabel="How do I publish a draft submission?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Publishing a submission is the final step in making your data official and visible to other project members and the wider AGARI community. This guide explains who can publish, what is required, and what happens after you publish.
        </p>
      </div>

      {/* Who can publish a submission? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can publish a submission?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The ability to publish is a significant action and is restricted to users with administrative or creator privileges for a submission. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>The project's Organisation Owner</li>
          <li>An Organisation Admin</li>
          <li>A project-specific Admin</li>
          <li>The original Contributor who created the draft submission.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          Contributors can only publish their own submissions, while Admins and Owners can publish any submission within the project.
        </p>
      </div>

      {/* Prerequisites for Publishing */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Prerequisites for Publishing
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Before a submission can be published, it must contain at least one valid, complete isolate. The "Publish" button will only be enabled if your submission has one or more isolates in the "Eligible for publishing" tab. To be eligible, an isolate must meet two key criteria:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>It must have passed all server-side validation checks (i.e., it is not in the "Errors" tab).</li>
          <li>It must have associated sequence data (i.e., it is not in the "Missing sequence data" tab).</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the project and click on the draft submission you wish to publish.</li>
          <li>On the submission detail page, carefully review the isolates in each tab. If there are errors, you must correct them by uploading a new version.</li>
          <li>Once you have at least one eligible isolate, the "Publish" button in the top-right corner of the page will be active.</li>
          <li>Click the "Publish" button. The system will process the eligible isolates.</li>
          <li>Once complete, the submission's status badge will change to "Published," and a toast notification will confirm the action.</li>
        </ol>
      </div>

      {/* What Happens After Publishing? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          What Happens After Publishing?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Increased Visibility:</strong> The published data becomes visible to all members of the project, including those with a "Viewer" role.</li>
          <li><strong>Inclusion in Dashboards:</strong> The data will now be included in the main pathogen dashboards and other aggregated views, subject to the project's sharing policy.</li>
          <li><strong>Activity Logging:</strong> A "Published" event is recorded in the project's activity log, creating an auditable record of the action.</li>
        </ul>
      </div>
    </GuidePage>
  );
}

export default GuidePublishSubmissionPage;
