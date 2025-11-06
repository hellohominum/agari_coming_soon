import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideSharingPoliciesPage() {
  return (
    <GuidePage
      title="What are sharing policies and how do they work?"
      breadcrumbLabel="What are sharing policies and how do they work?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Sharing policies are a critical security feature in AGARI. They are set for each project and define the default visibility and access rules for users who are not explicitly assigned as members. This includes both unassigned members within your own organisation and all members of other organisations on the platform.
        </p>
      </div>

      {/* Private */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Private
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          This is the most restrictive policy, designed for sensitive data that should not be visible to anyone outside the immediate project team.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Project Page Access:</strong> Strictly limited to explicitly assigned project members. The project is completely invisible to all other users.</li>
          <li><strong>Data Visibility:</strong> All project data (metadata and genomic sequences) is visible only to assigned project members.</li>
          <li><strong>Aggregated Views:</strong> Data from private projects does not appear in any cross-project aggregated views, such as the main pathogen dashboards.</li>
        </ul>
      </div>

      {/* Semi-private */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Semi-private
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          This policy balances the need for data privacy with the goal of contributing to continental surveillance efforts.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Project Page Access:</strong> Same as Private. Access is strictly limited to explicitly assigned project members.</li>
          <li><strong>Data Viewing & Download:</strong> Only explicitly assigned project members can view detailed data tables and download any data.</li>
          <li><strong>Aggregated Views:</strong> To assist with surveillance, a limited, aggregated subset of metadata is shared for visualization on the main pathogen dashboards. This includes location, clade, and collection date, but never allows access to the underlying detailed data for non-members.</li>
        </ul>
      </div>

      {/* Public */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Public
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          This policy is for data that is intended to be openly accessible to all authenticated users on the AGARI platform to maximize collaboration.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Project Page Access:</strong> The project is visible and accessible to all authenticated AGARI users, regardless of their organisation. Non-members are automatically granted 'Viewer' level permissions.</li>
          <li><strong>Data Visibility:</strong> All of the project's published data is visible to all authenticated users in all views, including aggregated dashboards and detailed isolate tables.</li>
          <li><strong>Data Download:</strong> Any authenticated user can download the published data from the project.</li>
        </ul>
      </div>
    </GuidePage>
  );
}

export default GuideSharingPoliciesPage;
