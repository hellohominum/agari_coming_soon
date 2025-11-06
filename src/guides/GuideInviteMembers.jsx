import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideInviteMembersPage() {
  return (
    <GuidePage
      title="How do I invite members to a project?"
      breadcrumbLabel="How do I invite members to a project?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          You can grant other users access to your project by inviting them as members. This guide explains who can invite members and how the process works.
        </p>
      </div>

      {/* Who can invite members? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can invite members?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Only users with administrative permissions for a project can add or invite new members. This includes:
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
          To invite a member to a specific project:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li>Navigate to the Projects page and click on the relevant project.</li>
          <li>Select the "Settings" tab.</li>
          <li>In the "Members" card, click the "Invite Members" button.</li>
          <li>
            The dialog provides two ways to add members:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Invite new members:</strong> Enter one or more email addresses into the text area. Select a project-specific role (Admin, Contributor, or Viewer) that will be assigned to all new invitees.</li>
              <li><strong>Add existing members:</strong> Below the text area, you will see a list of users who are part of your organisation but not yet members of this project. Check the box next to their name and assign them a role using the dropdown menu that appears.</li>
            </ul>
          </li>
          <li>Click "Add Members" to finish.</li>
        </ol>
      </div>

      {/* Summary */}
      <div className="text-base leading-7 text-zinc-700 mt-4">
        <p>
          New users will receive an email invitation to join the platform. Existing members will be granted access to the project immediately.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideInviteMembersPage;
