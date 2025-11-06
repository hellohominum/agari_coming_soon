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

function GuideDownloadDataPage() {
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
              <span className="text-zinc-900">How do I select and download sample data?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I select and download sample data?
              </h1>

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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuideDownloadDataPage;

