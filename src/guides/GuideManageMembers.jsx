import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideManageMembersPage() {
  return (
    <GuidePage
      title="How do I change a member's role or remove them?"
      breadcrumbLabel="How do I change a member's role or remove them?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          As a project evolves, you may need to change a member's level of access or remove them from the project entirely. These actions can be performed from the project's settings.
        </p>
      </div>

      {/* Who can manage project members? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can manage project members?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Only users with administrative permissions for a project can manage its members. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Organisation Owner</li>
          <li>Organisation Admin</li>
          <li>A project-specific Admin</li>
        </ul>
      </div>

      {/* How to Change a Member's Role */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          How to Change a Member's Role
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the project and select the "Settings" tab.</li>
          <li>Find the user in the "Members" table.</li>
          <li>Click on the dropdown menu in the "Role" column for that user.</li>
          <li>Select their new role from the list (Admin, Contributor, or Viewer). The change is saved automatically.</li>
        </ol>
        <p className="text-base leading-7 text-zinc-700">
          <strong>Note:</strong> You can only change the roles of members who have project-specific access. Users with organisation-wide roles (like Organisation Contributor) must have their roles managed from the main organisation Settings page.
        </p>
      </div>

      {/* How to Remove a Member from a Project */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          How to Remove a Member from a Project
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the project and select the "Settings" tab.</li>
          <li>Find the user in the "Members" table.</li>
          <li>Click the "More actions" (three dots) icon at the end of the user's row.</li>
          <li>Select "Remove from project" from the menu.</li>
        </ol>
        <p className="text-base leading-7 text-zinc-700">
          This will revoke the user's access to this specific project. It will not remove them from the organisation or from other projects they may be a part of.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideManageMembersPage;
