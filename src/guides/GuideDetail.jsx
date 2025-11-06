import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideDetailPage() {
  return (
    <GuidePage
      title="How do I create an account?"
      breadcrumbLabel="How do I create an account?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Accounts on the AGARI platform are created by invitation only. You cannot sign up directly. To get an account, an existing <strong>Organisation Owner</strong> or <strong>Admin</strong> must invite you to join their organisation or a specific project.
        </p>
      </div>

      <div className="text-base leading-7 text-zinc-700">
        <p>
          Here is the step-by-step process from receiving an invitation to accessing your new account:
        </p>
      </div>

      {/* Step 1 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 1: Receive an Invitation Email
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The process begins when an administrator invites you. You will receive an email from the AGARI platform. This email will contain a unique link to begin the account setup process. Click this link to proceed.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 2: Authenticate Your Email Address
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          To ensure security, we need to verify that you own the email address that was invited.
        </p>
        <p className="text-base leading-7 text-zinc-700">
          After clicking the link in the first email, you will be taken to the AGARI login screen with your email pre-filled.
        </p>
        <p className="text-base leading-7 text-zinc-700">
          When you continue, the system will send a <strong>second email</strong> to your address. This email contains two methods for authentication:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>A magic link that signs you in automatically when clicked.</li>
          <li>A temporary, single-use <strong>Login Code</strong> for manual entry.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          To verify your identity, you can either click the magic link for immediate access or return to the AGARI platform and enter the login code.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 3: Create Your Profile
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Once your email is verified, you will be asked to provide your personal details to set up your profile. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Your title (e.g., Dr., Prof., Mr., Ms.)</li>
          <li>Your first name</li>
          <li>Your surname</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          This information will be used to identify you within your organisation and on projects you contribute to.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 4: Accept Terms and Conditions
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The final step is to review and accept the platform's legal and data governance terms. You will need to agree to both the <strong>Governance Terms</strong> and the general <strong>AGARI Terms and Conditions</strong> before your account can be activated.
        </p>
      </div>

      {/* Step 5 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 5: Account Activated
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          That's it! After accepting the terms, your account will be fully active. You will be automatically logged in and redirected to the appropriate starting page based on the role you were assigned by your administrator.
        </p>
      </div>

      {/* Troubleshooting */}
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Troubleshooting
        </h2>

        <div className="flex flex-col gap-3">
          <p className="text-base leading-7 text-zinc-700">
            <strong>I haven't received an invitation:</strong> Please contact the administrator of the organisation you wish to join and ask them to send an invitation to your email address.
          </p>

          <p className="text-base leading-7 text-zinc-700">
            <strong>My login code or magic link expired:</strong> Login codes and magic links are temporary. If yours has expired, simply restart the login process from the AGARI homepage to receive a new one.
          </p>
        </div>
      </div>
    </GuidePage>
  );
}

export default GuideDetailPage;
