import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import Dashboard from './App.jsx';
import GuidesPage from './Guides.jsx';
import GuideDetailPage from './GuideDetail.jsx';
import GuideOrgOwnerPage from './GuideOrgOwner.jsx';
import GuideOrgAdminPage from './GuideOrgAdmin.jsx';
import GuideProjectAdminPage from './GuideProjectAdmin.jsx';
import GuideViewerPage from './GuideViewer.jsx';
import GuideCreateProjectPage from './GuideCreateProject.jsx';
import GuideSharingPoliciesPage from './GuideSharingPolicies.jsx';
import GuideEditProjectPage from './GuideEditProject.jsx';
import GuideDeleteProjectPage from './GuideDeleteProject.jsx';
import GuideInviteMembersPage from './GuideInviteMembers.jsx';
import GuideManageMembersPage from './GuideManageMembers.jsx';
import GuideSubmissionPage from './GuideSubmission.jsx';
import GuideCreateSubmissionPage from './GuideCreateSubmission.jsx';
import GuideFastaFormatsPage from './GuideFastaFormats.jsx';
import GuideMetadataFormatPage from './GuideMetadataFormat.jsx';
import GuideSubmissionErrorsPage from './GuideSubmissionErrors.jsx';
import GuidePublishSubmissionPage from './GuidePublishSubmission.jsx';
import GuideUnpublishSubmissionPage from './GuideUnpublishSubmission.jsx';
import GuideDeleteSubmissionPage from './GuideDeleteSubmission.jsx';
import GuideMainDashboardPage from './GuideMainDashboard.jsx';
import GuideInteractiveMapPage from './GuideInteractiveMap.jsx';
import GuideIsolatesTablePage from './GuideIsolatesTable.jsx';
import GuideDownloadDataPage from './GuideDownloadData.jsx';
import GuideEditProfilePage from './GuideEditProfile.jsx';
import GuideChangeEmailPage from './GuideChangeEmail.jsx';
import GuideOrgSettingsPage from './GuideOrgSettings.jsx';
import GuideInviteOrgMembersPage from './GuideInviteOrgMembers.jsx';
import GuideManageOrgMembersPage from './GuideManageOrgMembers.jsx';
import GuideTransferOwnershipPage from './GuideTransferOwnership.jsx';
import './input.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/create-account" element={<GuideDetailPage />} />
        <Route path="/guides/org-owner" element={<GuideOrgOwnerPage />} />
        <Route path="/guides/org-admin" element={<GuideOrgAdminPage />} />
        <Route path="/guides/project-admin" element={<GuideProjectAdminPage />} />
        <Route path="/guides/viewer" element={<GuideViewerPage />} />
        <Route path="/guides/create-project" element={<GuideCreateProjectPage />} />
        <Route path="/guides/sharing-policies" element={<GuideSharingPoliciesPage />} />
        <Route path="/guides/edit-project" element={<GuideEditProjectPage />} />
        <Route path="/guides/delete-project" element={<GuideDeleteProjectPage />} />
        <Route path="/guides/invite-members" element={<GuideInviteMembersPage />} />
        <Route path="/guides/manage-members" element={<GuideManageMembersPage />} />
        <Route path="/guides/what-is-submission" element={<GuideSubmissionPage />} />
        <Route path="/guides/create-submission" element={<GuideCreateSubmissionPage />} />
        <Route path="/guides/fasta-formats" element={<GuideFastaFormatsPage />} />
        <Route path="/guides/metadata-format" element={<GuideMetadataFormatPage />} />
        <Route path="/guides/submission-errors" element={<GuideSubmissionErrorsPage />} />
        <Route path="/guides/publish-submission" element={<GuidePublishSubmissionPage />} />
        <Route path="/guides/unpublish-submission" element={<GuideUnpublishSubmissionPage />} />
        <Route path="/guides/delete-submission" element={<GuideDeleteSubmissionPage />} />
        <Route path="/guides/main-dashboard" element={<GuideMainDashboardPage />} />
        <Route path="/guides/interactive-map" element={<GuideInteractiveMapPage />} />
        <Route path="/guides/isolates-table" element={<GuideIsolatesTablePage />} />
        <Route path="/guides/download-data" element={<GuideDownloadDataPage />} />
        <Route path="/guides/edit-profile" element={<GuideEditProfilePage />} />
        <Route path="/guides/change-email" element={<GuideChangeEmailPage />} />
        <Route path="/guides/org-settings" element={<GuideOrgSettingsPage />} />
        <Route path="/guides/invite-org-members" element={<GuideInviteOrgMembersPage />} />
        <Route path="/guides/manage-org-members" element={<GuideManageOrgMembersPage />} />
        <Route path="/guides/transfer-ownership" element={<GuideTransferOwnershipPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

