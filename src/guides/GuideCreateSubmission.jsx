import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideCreateSubmissionPage() {
  return (
    <GuidePage
      title="How do I create a new submission and upload files?"
      breadcrumbLabel="How do I create a new submission and upload files?"
    >
      <div className="text-base leading-7 text-zinc-700">
        <p>
          Creating a submission is the first step to getting your data into the AGARI platform. This guide will walk you through the process, from starting a new submission to uploading your files.
        </p>
      </div>

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

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The process is managed through a guided dialog.
        </p>
      </div>

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

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          What Happens Next?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          After you create the submission, the system will process your files. A success notification will appear, and you will be automatically taken to the detail page for your new draft submission. Here, you can review the data, check for any validation errors, and publish the submission when it is ready.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideCreateSubmissionPage;
