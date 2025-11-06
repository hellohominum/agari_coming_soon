import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideEditProfilePage() {
  return (
    <GuidePage
      title="How do I edit my personal profile information?"
      breadcrumbLabel="How do I edit my personal profile information?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          All users on the AGARI platform can manage their own personal profile information. This guide explains how to access your profile and what you can change.
        </p>
      </div>

      {/* Accessing Your Profile */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Accessing Your Profile
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Click on your user avatar in the top-right corner of the application header to open the user menu.</li>
          <li>Select "Profile" from the dropdown menu.</li>
          <li>This will take you to your personal profile page, which displays your current information.</li>
        </ol>
      </div>

      {/* Editing Your Profile Information */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Editing Your Profile Information
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>On your profile page, click the "Edit Profile" button.</li>
          <li>
            A dialog will appear where you can update the following fields:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Full Name:</strong> Your display name across the platform.</li>
              <li><strong>Email Address:</strong> Your primary contact and login email.</li>
              <li><strong>About:</strong> A short biography or description about yourself.</li>
            </ul>
          </li>
          <li>After making your desired changes, click "Save Changes".</li>
        </ol>
      </div>

      {/* Changing Your Email Address */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Changing Your Email Address
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Changing your email address is a sensitive action and requires a verification step for security. When you enter a new email and save, the system will send a confirmation link to the new address. Your email will not be updated on the platform until you click this link to verify ownership. Your old email remains active until the new one is confirmed.
        </p>
      </div>

      {/* Information You Cannot Change */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Information You Cannot Change
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          You cannot change the following information from your profile page, as it is managed by your organisation's administrators:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Your assigned roles (e.g., Contributor, Admin)</li>
          <li>Your organisation</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          If you need to change this information, please contact your Organisation Owner or an Organisation Admin.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideEditProfilePage;
