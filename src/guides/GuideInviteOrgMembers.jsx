import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideInviteOrgMembersPage() {
  return (
    <GuidePage
      title="How do I invite members to my organisation?"
      breadcrumbLabel="How do I invite members to my organisation?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Inviting members at the organisation level is the way to grant users broad, cross-project permissions. This guide explains who can invite members and how to do it.
        </p>
      </div>

      {/* Who can invite organisation members? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can invite organisation members?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          This powerful administrative action is restricted to users with the highest-level roles:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Organisation Owner</li>
          <li>Organisation Admin</li>
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the Settings page by clicking on your user avatar in the top-right corner and selecting "Settings" from the dropdown.</li>
          <li>On the left-hand navigation menu, ensure you are in the "Members" section.</li>
          <li>Click the "Invite Organisation Member" button.</li>
          <li>
            In the dialog that appears:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Enter email addresses:</strong> Type or paste the email addresses of the users you want to invite. You can separate them with commas, spaces, or new lines.</li>
              <li><strong>Select a role:</strong> Choose the role you want to assign to all these new members from the dropdown. This role will apply to all projects in your organisation.</li>
            </ul>
          </li>
          <li>Click "Send Invitations".</li>
        </ol>
        <p className="text-base leading-7 text-zinc-700">
          The invited users will receive an email prompting them to create their AGARI account. Their status in the members table will appear as "Invited" until they complete the setup process.
        </p>
      </div>

      {/* Organisation vs. Project Members */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Organisation vs. Project Members
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          It is important to understand the difference between inviting a member to the organisation versus inviting them to a single project.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>An <strong>Organisation Member</strong> (invited via this process) has a role that applies to all current and future projects.</li>
          <li>A <strong>Project Member</strong> is invited from a specific project's settings and their role only applies to that project.</li>
        </ul>
      </div>
    </GuidePage>
  );
}

export default GuideInviteOrgMembersPage;
