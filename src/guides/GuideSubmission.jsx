import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideSubmissionPage() {
  return (
    <GuidePage
      title='What is a "submission"?'
      breadcrumbLabel='What is a "submission"?'
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          A submission is a container for a batch of related data that you upload to a project. Think of it as a single "unit of work" that groups together your metadata file and all its associated sequence files.
        </p>
      </div>

      {/* The Submission Lifecycle */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          The Submission Lifecycle
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Every submission moves through a lifecycle from a private draft to a visible, published state.
        </p>
      </div>

      {/* 1. Draft */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          1. Draft
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          When you first create a submission and upload your files, it begins in the Draft state. This is a private, temporary space for you and your project's administrators to review the data.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>The system automatically validates your files and organizes your isolates into tabs: "Eligible for publishing," "Missing sequence data," and "Errors."</li>
          <li>You can upload new versions of your files to correct any errors found during validation.</li>
          <li>Data in a draft submission is not visible to project members with a "Viewer" role.</li>
        </ul>
      </div>

      {/* 2. Published */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          2. Published
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Once you are confident that your data is correct and complete, you can Publish it. This is a critical step that makes the data official.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Only the valid, error-free isolates that have associated sequence data will be included in the published set.</li>
          <li>Once published, the data becomes visible to all members of the project, including Viewers.</li>
          <li>The data will also be included in the main pathogen dashboards and aggregated views, according to the project's sharing policy.</li>
        </ul>
      </div>

      {/* Versioning and Editing */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Versioning and Editing
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Submissions are designed to be version-controlled.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>If you need to make corrections after publishing, you can upload a new version of the data.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          <strong>Important:</strong> Uploading a new version to a Published submission will automatically revert it to a Draft state. You will need to re-publish it for the changes to become visible to others.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideSubmissionPage;
