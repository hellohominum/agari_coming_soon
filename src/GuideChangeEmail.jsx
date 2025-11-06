import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Asset URLs
const imgGroup37 = "/assets/logo-symbol-small.svg";
const imgAgari = "/assets/logo-text-small.svg";

function LogoHorizontal({ className, size = "large" }) {
  if (size === "small") {
    return (
      <div className={className} data-name="size=small">
        <div className="absolute bottom-[0.96%] flex items-center justify-center left-[0.28%] right-[65.19%] top-0">
          <div className="flex-none h-[31.693px] rotate-[180deg] scale-y-[-100%] w-[24.517px]">
            <div className="relative size-full">
              <img alt="" className="block max-w-none size-full" src={imgGroup37} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[25.74%] left-[40.38%] right-[0.24%] top-1/4" data-name="AGARI">
          <img alt="" className="block max-w-none size-full" src={imgAgari} />
        </div>
      </div>
    );
  }
  return null;
}

function GuideChangeEmailPage() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Content Area */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-12 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 max-w-[800px] relative shrink-0 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Link to="/guides" className="text-zinc-600 hover:text-[#348f41] transition-colors">
                Guides
              </Link>
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-zinc-900">How do I change my primary email address?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I change my primary email address?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Changing your primary email address is an important security feature that updates the core identity of your AGARI account. This guide provides a detailed walkthrough of the process, including the necessary verification steps.
                </p>
              </div>

              {/* Step-by-Step Guide */}
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

              {/* The Verification Process */}
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

              {/* Managing a Pending Change */}
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

              {/* Troubleshooting */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Troubleshooting
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>I didn't receive the verification email:</strong> Please check your spam or junk mail folders. If it still hasn't arrived after a few minutes, you can try the process again to have a new email sent.</li>
                  <li><strong>The verification link expired:</strong> For security, verification links are time-sensitive. If your link has expired, please restart the email change process from your profile to receive a new one.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuideChangeEmailPage;

