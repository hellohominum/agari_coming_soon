import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideProjectAdminPage() {
  return (
    <GuidePage
      title="As a Project Admin, what can I do?"
      breadcrumbLabel="As a Project Admin, what can I do?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          As a Project Admin, your permissions are scoped to the specific project(s) where you have been assigned this role. You are responsible for the day-to-day management of that project.
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Key Capabilities (within your assigned projects)
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Within each project you administer, you can:
        </p>
      </div>

      {/* Capability: Manage Project Settings */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Manage Project Settings:</strong> You can edit the project's name, description, and sharing policy (e.g., changing it from Private to Public).
        </p>
      </div>

      {/* Capability: Manage Project Members */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Manage Project Members:</strong> You can invite new users to the project, manage the roles of existing project members, and remove them from the project.
        </p>
      </div>

      {/* Capability: Publish Submissions */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Publish Submissions:</strong> You have the authority to publish <em>any</em> draft submission within the project, making its data visible to other members.
        </p>
      </div>

      {/* Capability: View All Data */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>View All Data:</strong> You have complete visibility into all data within the project, including both draft and published submissions from all users.
        </p>
      </div>

      {/* Capability: Delete the Project */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Delete the Project:</strong> You have the permission to permanently delete the project and all of its associated data.
        </p>
      </div>

      {/* Summary */}
      <div className="text-base leading-7 text-zinc-700 mt-4">
        <p>
          Your administrative powers are confined to the projects you are assigned to. You cannot manage members or settings for projects where you are only a Contributor or Viewer.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideProjectAdminPage;
