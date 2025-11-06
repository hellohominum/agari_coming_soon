import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideTransferOwnershipPage() {
  return (
    <GuidePage
      title="How do I transfer organisation ownership?"
      breadcrumbLabel="How do I transfer organisation ownership?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Transferring ownership of an organisation is a critical and permanent action that passes full control to another user. This guide explains the permissions required and the step-by-step process.
        </p>
      </div>

      {/* Who can transfer ownership? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can transfer ownership?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          This action is reserved exclusively for the current Organisation Owner. No other user role, including Organisation Admins, can initiate an ownership transfer.
        </p>
      </div>

      {/* Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-base leading-7 text-red-900 font-semibold">
          <strong>Warning:</strong> This action is permanent and cannot be undone by you once the new owner accepts. Proceed with caution.
        </p>
      </div>

      {/* Step-by-Step Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the Settings page from the user menu in the header.</li>
          <li>Scroll down to the "Organisation" section.</li>
          <li>Find the "Organisation owner" card at the bottom of this section.</li>
          <li>Click the red "Assign new owner" button.</li>
          <li>In the dialog that appears, carefully enter the email address of the member you wish to transfer ownership to. This user must be an existing member of your organisation.</li>
          <li>Click "Send Invitation".</li>
        </ol>
      </div>

      {/* What Happens Next? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          What Happens Next?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The transfer is not immediate. It follows a secure, invitation-based process:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Invitation Sent:</strong> An email invitation is sent to the designated new owner.</li>
          <li><strong>Pending State:</strong> On the Settings page, you will see a "Ownership Transfer Pending" notice. During this time, you remain the owner. You have the option to cancel the transfer request before it is accepted.</li>
          <li><strong>Acceptance:</strong> The designated user must click the link in the email to accept the ownership transfer.</li>
          <li><strong>Transfer Complete:</strong> Once they accept, the transfer is finalized.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          The new user is now the sole Organisation Owner.
        </p>
        <p className="text-base leading-7 text-zinc-700">
          Your role is automatically changed to Organisation Admin. You will retain administrative access but will no longer be able to manage organisation details or initiate another ownership transfer.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideTransferOwnershipPage;
