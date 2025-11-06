import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideDownloadDataPage() {
  return (
    <GuidePage
      title="How do I select and download sample data?"
      breadcrumbLabel="How do I select and download sample data?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          AGARI allows you to export detailed isolate data for offline research and analysis. This guide explains how to use the Isolates Table to select and download the specific data you need.
        </p>
      </div>

      {/* Who can download data? */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Who can download data?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Any authenticated user can download published data that they have permission to view. Access to data is determined by your role and the sharing policies of the projects.
        </p>
      </div>

      {/* Step-by-Step Guide to Downloading Data */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step-by-Step Guide to Downloading Data
        </h2>
      </div>

      {/* Step 1: Navigate to an Isolates Table */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 1: Navigate to an Isolates Table
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          You can download data from any Isolates Table in the application. These are found in two main places:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>On a main pathogen dashboard (e.g., Cholera, COVID-19), click the "Isolates table" tab. This table aggregates all published data you can see for that pathogen.</li>
          <li>On a specific project page, click the "Isolates table" tab. This table contains all published data for that specific project.</li>
        </ul>
      </div>

      {/* Step 2: Filter Your Data */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 2: Filter Your Data
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Before selecting isolates, use the powerful filter toolbar above the table to narrow down your dataset. You can filter by collection date, country, lineage, and many other parameters. This is a crucial step to ensure your download is targeted and contains only the data you need.
        </p>
      </div>

      {/* Step 3: Select Isolates */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 3: Select Isolates
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Once you have filtered the data, use the checkboxes on the left side of the table to select the isolates you want to download:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li><strong>Select individual isolates:</strong> Click the checkbox in each row you want to include.</li>
          <li><strong>Select all on a page:</strong> Click the checkbox in the table header to select all visible isolates on the current page.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          Your selections are preserved as you navigate between pages, allowing you to build a selection set from across the entire filtered dataset. The text "X of Y row(s) selected" below the table keeps track of your total selection.
        </p>
      </div>

      {/* Step 4: Initiate the Download */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Step 4: Initiate the Download
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          When you have selected at least one isolate, the "Download" button above the table will become active. Click it to begin the download process.
        </p>
      </div>

      {/* The Downloaded File */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          The Downloaded File
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>A toast notification will confirm that your download has started.</li>
          <li>Your browser will download a file named something like <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">agari_data_export_YYYY-MM-DD.tsv</code>.</li>
          <li>The file will be in TSV (Tab-Separated Values) format, which can be opened in any spreadsheet software like Excel or Google Sheets.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          <strong>Important:</strong> The downloaded file will contain all metadata columns for the selected isolates, not just the columns that were visible in the table at the time of download.
        </p>
      </div>

      {/* Audit & Security */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Audit & Security
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Please note that all data downloads are recorded in the corresponding project's activity log. This creates an auditable trail of who downloaded what data and when, ensuring data security and accountability.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideDownloadDataPage;
