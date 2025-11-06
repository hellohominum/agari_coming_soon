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

function GuideCreateSubmissionPage() {
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
              <span className="text-zinc-900">How do I create a new submission and upload files?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I create a new submission and upload files?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Creating a submission is the first step to getting your data into the AGARI platform. This guide will walk you through the process, from starting a new submission to uploading your files.
                </p>
              </div>

              {/* Who can create a submission? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can create a submission?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  The ability to upload data is limited to users with the appropriate permissions for a specific project. This includes the following roles:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Organisation Owner</li>
                  <li>Organisation Admin</li>
                  <li>A project-specific Admin</li>
                  <li>A project-specific Contributor</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  Users with a "Viewer" role cannot create submissions or upload data.
                </p>
              </div>

              {/* Step-by-Step Guide */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step-by-Step Guide
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  The process is managed through a guided dialog.
                </p>
              </div>

              {/* Step 1: Start a New Submission */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step 1: Start a New Submission
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the Projects page and click on the project where you want to add data.</li>
                  <li>Select the "Submissions" tab.</li>
                  <li>Click the "New Submission" button to open the dialog.</li>
                </ol>
              </div>

              {/* Step 2: Choose Genomic Format */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step 2: Choose Genomic Format
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  The first step in the dialog is to declare how your sequence data is formatted. This is crucial for the system to correctly link your metadata to your sequences.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Single Genome FASTAs:</strong> Choose this if you have one or more FASTA files, where each file contains the sequence for a single genome (e.g., bacteria, parasites). Your metadata TSV will need a <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">sequenceFileName</code> column.</li>
                  <li><strong>Multi-genome FASTAs:</strong> Choose this if you have a single FASTA file containing sequences for multiple genomes, with each record header matching an <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">isolateId</code> in your metadata (e.g., viruses).</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  Click "Next" to proceed.
                </p>
              </div>

              {/* Step 3: Upload Your Files */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step 3: Upload Your Files
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Provide a Title for your submission (e.g., "Q1 2024 Cholera Samples").</li>
                  <li>If you haven't already, download the metadata template to ensure your file is formatted correctly.</li>
                  <li>Either drag and drop your files into the upload area or click to browse your computer. You must upload one .tsv metadata file and one or more .fasta/.fa sequence files.</li>
                  <li>Once you have provided a title and uploaded a TSV file, click the "Create Submission" button.</li>
                </ol>
              </div>

              {/* What Happens Next? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  What Happens Next?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  After you create the submission, the system will process your files. A success notification will appear, and you will be automatically taken to the detail page for your new draft submission. Here, you can review the data, check for any validation errors, and publish the submission when it is ready.
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

export default GuideCreateSubmissionPage;

