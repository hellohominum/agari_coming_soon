import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideChangeEmailPage() {
  return (
    <GuidePage
      title="How do I change my primary email address?"
      breadcrumbLabel="How do I change my primary email address?"
    >
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Changing your primary email address is an important security feature that updates the core identity of your AGARI account. This guide provides a detailed walkthrough of the process, including the necessary verification steps.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li><strong>Navigate to your Profile:</strong> Click on your user avatar in the top-right corner of the header and select "Profile" from the menu.</li>
          <li><strong>Open the Edit Dialog:</strong> On your profile page, click the "Edit Profile" button.</li>
          <li><strong>Enter Your New Email:</strong> In the dialog that appears, find the "Email Address" field. Delete your current email and type in the new one you wish to use.</li>
          <li><strong>Save Your Changes:</strong> After entering the new email, click the "Save Changes" button.</li>
        </ol>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          The Verification Process
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          For your security, changing your email is a two-step process. After you save the new address, the change is considered "pending" until you verify it.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li><strong>Check Your New Email Inbox:</strong> The AGARI platform will immediately send a verification email to the new email address you provided.</li>
          <li><strong>Click the Confirmation Link:</strong> Open this email and click the confirmation link inside. This action proves you have access to the new inbox and finalizes the change.</li>
          <li><strong>Old Email Remains Active:</strong> Until you click the confirmation link, your old email address remains the primary contact and login for your account. All platform notifications will continue to go to your old address.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Managing a Pending Change
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          While an email change is pending verification, you will see a notification on your profile page indicating the new email address that is waiting for confirmation.
        </p>
        <p className="text-base leading-7 text-zinc-700">
          If you made a mistake, entered the wrong address, or changed your mind, you can click the "Cancel Request" button within this notification. This will cancel the change and your original email will remain as your primary address.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Troubleshooting
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>I didn't receive the verification email:</strong> Please check your spam or junk mail folders. If it still hasn't arrived after a few minutes, you can try the process again to have a new email sent.</li>
          <li><strong>The verification link expired:</strong> For security, verification links are time-sensitive. If your link has expired, please restart the email change process from your profile to receive a new one.</li>
        </ul>
      </div>
    </GuidePage>
  );
}

export default GuideChangeEmailPage;
