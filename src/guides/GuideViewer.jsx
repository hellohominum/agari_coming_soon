import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideViewerPage() {
  return (
    <GuidePage
      title="As a Viewer, what can I do?"
      breadcrumbLabel="As a Viewer, what can I do?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          As a Viewer, you have read-only access to data in the projects you are a member of. This role is designed for users who need to analyze data without modifying it.
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Key Capabilities (within your assigned projects)
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Your permissions are focused on data consumption:
        </p>
      </div>

      {/* Capability: View Project Details */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>View Project Details:</strong> You can see the project's description, pathogen type, and sharing policy.
        </p>
      </div>

      {/* Capability: View Published Data */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>View Published Data:</strong> You can access the "Isolates Table" for a project to view all isolate data that has been officially published.
        </p>
      </div>

      {/* Capability: Download Published Data */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Download Published Data:</strong> You can select and download published isolate data and metadata for offline analysis.
        </p>
      </div>

      {/* Capability: Explore Dashboards */}
      <div className="flex flex-col gap-3">
        <p className="text-base leading-7 text-zinc-700">
          <strong>Explore Dashboards:</strong> You can use the main pathogen dashboards to see aggregated, visual representations of the published data you have access to.
        </p>
      </div>

      {/* Limitations */}
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Limitations
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          As a Viewer, you have no permissions to edit, upload, or manage data. You cannot see draft submissions, manage project settings, or manage members.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideViewerPage;
