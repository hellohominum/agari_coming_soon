import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideOrgAdminPage() {
  return (
    <GuidePage
      title="As an Organisation Admin, what can I do?"
      breadcrumbLabel="As an Organisation Admin, what can I do?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          As an Organisation Admin, you have extensive permissions to manage the members and projects within your organisation, acting as a deputy to the Organisation Owner.
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Key Capabilities
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Your role is critical for the day-to-day management of your organisation's activities:
        </p>
      </div>

      {/* Capability: Full Member Management */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Full Member Management:</strong> You have the ability to invite new users, manage the roles of existing members, and remove users from the organisation. The only member you cannot manage is the Organisation Owner.
        </p>
      </div>

      {/* Capability: Create New Projects */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Create New Projects:</strong> You can initiate new projects, define their scope, and set their initial sharing policies.
        </p>
      </div>

      {/* Capability: Universal Project Admin Access */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Universal Project Admin Access:</strong> Your role grants you automatic "Admin" privileges on all projects within the organisation, allowing you to manage settings, members, and data across the board.
        </p>
      </div>

      {/* Capability: View Organisation Activity Log */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>View Organisation Activity Log:</strong> You can access the high-level activity log to monitor key events like project creation and member changes throughout the organisation.
        </p>
      </div>

      {/* Key Difference from Owner */}
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Key Difference from Owner
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          While you have broad administrative powers, you cannot perform top-level actions such as changing the organisation's name or transferring ownership. These responsibilities are reserved for the Organisation Owner.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideOrgAdminPage;
