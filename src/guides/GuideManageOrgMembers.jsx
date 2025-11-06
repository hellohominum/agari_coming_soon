import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideManageOrgMembersPage() {
  return (
    <GuidePage
      title="How do I change a member's role or remove them?"
      breadcrumbLabel="How do I change a member's role or remove them?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          As your organisation grows, you may need to adjust a member's permissions or remove their access entirely. This guide explains how to manage user roles and remove members at the organisation level.
        </p>
      </div>

      {/* Who can manage organisation members? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can manage organisation members?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Only users with the highest administrative privileges can manage other members for the entire organisation. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Organisation Owner</li>
          <li>Organisation Admin</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          Project Admins can only manage members within their specific projects and cannot change organisation-level roles.
        </p>
      </div>

      {/* How to Change a Member's Role */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          How to Change a Member's Role
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          You can change a member's permissions, switching them between organisation-wide access and project-specific access.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the Settings page from the user menu in the header.</li>
          <li>Find the user in the "Members" table.</li>
          <li>Click the "More actions" (three dots) icon at the end of the user's row and select "Manage role(s)".</li>
          <li>
            In the dialog, you can choose between two access scopes:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>All projects:</strong> Grant the user a role (e.g., Organisation Admin, Contributor) that applies across all current and future projects.</li>
              <li><strong>Specific projects:</strong> Define the user's role and access on a project-by-project basis. You can grant them different roles for different projects or remove access entirely.</li>
            </ul>
          </li>
          <li>After configuring their access, click "Save Changes".</li>
        </ol>
      </div>

      {/* How to Disable or Delete a Member */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          How to Disable or Delete a Member
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Disabling a user temporarily revokes their access, while deleting them is a permanent removal.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the "Members" table in the organisation Settings.</li>
          <li>Click the "More actions" (three dots) icon for the desired user.</li>
          <li>
            Choose one of the following options:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Disable user:</strong> This temporarily revokes the user's ability to log in. Their data and roles are preserved, and you can re-enable them later from the same menu.</li>
              <li><strong>Delete user:</strong> This will permanently remove the user from your organisation and all associated projects. A confirmation dialog will appear to prevent accidental deletion.</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
        <p className="text-base leading-7 text-red-900 font-semibold">
          <strong>Warning:</strong> Deleting a user is irreversible. They will lose access to all projects and data.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideManageOrgMembersPage;
