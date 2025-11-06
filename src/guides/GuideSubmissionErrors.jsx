import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideSubmissionErrorsPage() {
  return (
    <GuidePage
      title="How do I view and correct errors in my submission?"
      breadcrumbLabel="How do I view and correct errors in my submission?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          After you upload your files, the AGARI platform performs a comprehensive validation to ensure data quality and integrity. If any issues are found, they are flagged as errors. This guide explains how to find, understand, and correct these errors.
        </p>
      </div>

      {/* Step 1: Locating Errors */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 1: Locating Errors
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          When your submission is in a Draft state, its detail page is organized into several tabs. All isolates that failed validation will be listed under the "Errors" tab.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the project and then to the "Submissions" tab.</li>
          <li>Click on your draft submission to open its detail page.</li>
          <li>Select the "Errors" tab to view a table of all validation errors.</li>
        </ol>
      </div>

      {/* Step 2: Understanding the Error Table */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 2: Understanding the Error Table
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The error table provides specific details to help you pinpoint the problem in your original file. It includes the following columns:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Isolate ID / Row:</strong> Identifies which record has the error. It will show the <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">isolateId</code> if available, or the row number from your original TSV file (e.g., "Row: 8").</li>
          <li><strong>Error Description:</strong> A clear message explaining what is wrong. This could be a missing required field, an invalid date format, or a value that doesn't match a predefined list.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          You can also use the "Download Errors" button to get a CSV file of all errors, which can be useful for large datasets.
        </p>
      </div>

      {/* Step 3: Correcting Errors in Your Local File */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 3: Correcting Errors in Your Local File
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Errors must be corrected in your original spreadsheet or TSV file on your computer. You cannot edit the data directly within the AGARI platform.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Open your original metadata file (e.g., in Excel or Google Sheets).</li>
          <li>Use the information from the error table to find the exact row and column that needs fixing.</li>
          <li>Correct the data. For example, change <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">2024/08/15</code> to the required <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">2024-08-15</code> format, or fix a typo in a picklist value.</li>
          <li>Save your changes and, if you are using spreadsheet software, re-export the file as a TSV.</li>
        </ol>
      </div>

      {/* Step 4: Uploading the Corrected Version */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 4: Uploading the Corrected Version
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Return to the submission detail page in AGARI.</li>
          <li>Click the "Edit submission" dropdown button and select "Upload new version".</li>
          <li>In the dialog, re-upload your corrected TSV file. You can also re-upload your FASTA files if they needed changes.</li>
          <li>Click "Save Changes".</li>
        </ol>
        <p className="text-base leading-7 text-zinc-700">
          The system will process your new files and re-run the validation. If all errors have been fixed, the "Errors" tab should show a count of zero, and your corrected isolates will move to the "Eligible for publishing" or "Missing sequence data" tabs.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideSubmissionErrorsPage;
