import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideOrgOwnerPage() {
  return (
    <GuidePage
      title="As an Organisation Owner, what can I do?"
      breadcrumbLabel="As an Organisation Owner, what can I do?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          As an Organisation Owner, you have the highest level of permissions and full control over your organisation. This is the most powerful role in the AGARI platform.
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Key Capabilities
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Your primary responsibilities and capabilities include:
        </p>
      </div>

      {/* Capability: Manage Organisation Settings */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Manage Organisation Settings:</strong> You can edit your organisation's name, abbreviation, website URL, and "About" description from the main Settings page.
        </p>
      </div>

      {/* Capability: Full Member Management */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Full Member Management:</strong> You can invite, disable, change the roles of, and completely delete any member of your organisation except for yourself.
        </p>
      </div>

      {/* Capability: Transfer Ownership */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Transfer Ownership:</strong> You are the only user who can transfer ownership of the organisation to another member. This is a critical and irreversible action.
        </p>
      </div>

      {/* Capability: Create New Projects */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Create New Projects:</strong> You can create new projects for your organisation to start tracking new pathogens or surveillance initiatives.
        </p>
      </div>

      {/* Capability: Complete Project Access */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Complete Project Access:</strong> You automatically have full "Admin" privileges on every single project within your organisation, including any that are created in the future.
        </p>
      </div>

      {/* Capability: View Organisation Activity Log */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>View Organisation Activity Log:</strong> You have access to the complete, high-level activity log for your organisation, tracking major events like project creation and member changes.
        </p>
      </div>

      {/* Summary */}
      <div className="text-base leading-7 text-zinc-700 mt-4">
        <p>
          In essence, the Organisation Owner is the ultimate administrator, responsible for the overall structure, membership, and security of their organisation on the AGARI platform.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideOrgOwnerPage;
