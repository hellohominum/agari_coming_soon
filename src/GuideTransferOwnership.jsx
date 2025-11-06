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

function GuideTransferOwnershipPage() {
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
              <span className="text-zinc-900">How do I transfer organisation ownership?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I transfer organisation ownership?
              </h1>

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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuideTransferOwnershipPage;

