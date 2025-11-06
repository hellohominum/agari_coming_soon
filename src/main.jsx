import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Dashboard from './pages/Landing.jsx';
import GuidesPage from './pages/Guides.jsx';
import GuideDetailPage from './guides/GuideDetail.jsx';
import GuideOrgOwnerPage from './guides/GuideOrgOwner.jsx';
import GuideOrgAdminPage from './guides/GuideOrgAdmin.jsx';
import GuideProjectAdminPage from './guides/GuideProjectAdmin.jsx';
import GuideViewerPage from './guides/GuideViewer.jsx';
import GuideCreateProjectPage from './guides/GuideCreateProject.jsx';
import GuideSharingPoliciesPage from './guides/GuideSharingPolicies.jsx';
import GuideEditProjectPage from './guides/GuideEditProject.jsx';
import GuideDeleteProjectPage from './guides/GuideDeleteProject.jsx';
import GuideInviteMembersPage from './guides/GuideInviteMembers.jsx';
import GuideManageMembersPage from './guides/GuideManageMembers.jsx';
import GuideSubmissionPage from './guides/GuideSubmission.jsx';
import GuideCreateSubmissionPage from './guides/GuideCreateSubmission.jsx';
import GuideFastaFormatsPage from './guides/GuideFastaFormats.jsx';
import GuideMetadataFormatPage from './guides/GuideMetadataFormat.jsx';
import GuideSubmissionErrorsPage from './guides/GuideSubmissionErrors.jsx';
import GuidePublishSubmissionPage from './guides/GuidePublishSubmission.jsx';
import GuideUnpublishSubmissionPage from './guides/GuideUnpublishSubmission.jsx';
import GuideDeleteSubmissionPage from './guides/GuideDeleteSubmission.jsx';
import GuideMainDashboardPage from './guides/GuideMainDashboard.jsx';
import GuideInteractiveMapPage from './guides/GuideInteractiveMap.jsx';
import GuideIsolatesTablePage from './guides/GuideIsolatesTable.jsx';
import GuideDownloadDataPage from './guides/GuideDownloadData.jsx';
import GuideEditProfilePage from './guides/GuideEditProfile.jsx';
import GuideChangeEmailPage from './guides/GuideChangeEmail.jsx';
import GuideOrgSettingsPage from './guides/GuideOrgSettings.jsx';
import GuideInviteOrgMembersPage from './guides/GuideInviteOrgMembers.jsx';
import GuideManageOrgMembersPage from './guides/GuideManageOrgMembers.jsx';
import GuideTransferOwnershipPage from './guides/GuideTransferOwnership.jsx';
import TermsOfServicePage from './pages/TermsOfService.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicy.jsx';
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
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

