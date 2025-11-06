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

function GuideMetadataFormatPage() {
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
              <span className="text-zinc-900">How do I format my metadata TSV file correctly?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I format my metadata TSV file correctly?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Correctly formatting your metadata file is the most critical step for a successful submission. A TSV (Tab-Separated Values) file is a simple text file, similar to a spreadsheet, where each column is separated by a single tab character.
                </p>
                <p className="mt-4">
                  The easiest way to ensure your file is correct is to download our provided template from the submission dialog, fill it in with your data, and export it as a TSV from your spreadsheet software (like Excel, Google Sheets, or LibreOffice Calc).
                </p>
              </div>

              {/* Key Formatting Rules */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Key Formatting Rules
                </h2>
              </div>

              {/* 1. Header Row */}
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-xl text-zinc-950">
                  1. Header Row
                </h3>
                <p className="text-base leading-7 text-zinc-700">
                  The very first line of your file must be the header row. The column names in this row must exactly match the official AGARI schema. Do not change the spelling, capitalization, or order of the headers from the template.
                </p>
              </div>

              {/* 2. Tab Separators */}
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-xl text-zinc-950">
                  2. Tab Separators
                </h3>
                <p className="text-base leading-7 text-zinc-700">
                  Each column in every row must be separated by a single Tab character. Using spaces or commas will cause the validation to fail. When you export from a spreadsheet program, ensure you select "Tab-Separated Values (.tsv)" as the file type.
                </p>
              </div>

              {/* 3. Required Fields */}
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-xl text-zinc-950">
                  3. Required Fields
                </h3>
                <p className="text-base leading-7 text-zinc-700">
                  The following fields are mandatory and must contain a value for every isolate:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-base leading-7 text-zinc-700">
                  <li><code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">sampleId</code></li>
                  <li><code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">collectionDate</code></li>
                  <li><code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">country</code></li>
                  <li><code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">lineageName</code></li>
                  <li><code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">studyIdentifier</code></li>
                  <li><code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">geoLocState</code></li>
                </ul>
              </div>

              {/* 4. Data Formatting */}
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-xl text-zinc-950">
                  4. Data Formatting
                </h3>
                <p className="text-base leading-7 text-zinc-700">
                  Data within the columns must adhere to specific formats:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li><strong>Dates:</strong> Must be in YYYY-MM-DD format (e.g., <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">2024-08-15</code>).</li>
                  <li><strong>Numbers:</strong> Must only contain numerical digits (e.g., <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">25</code>, <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">38.5</code>). Do not include text like "years".</li>
                  <li><strong>Picklist Values:</strong> For fields like <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">subjectGender</code> or <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">rdtTestResult</code>, the value must exactly match one of the predefined options listed in the template.</li>
                  <li><strong>Array Values:</strong> For fields that can have multiple values (like <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">signsAndSymptoms</code> or <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">resistanceGenes</code>), each value must be separated by a semicolon (;) with no space after it. For example: <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Vomiting;Dehydration</code>.</li>
                </ul>
              </div>

              {/* Example TSV Structure */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Example TSV Structure
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-zinc-300">
                    <thead className="bg-zinc-100">
                      <tr>
                        <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">sampleId</th>
                        <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">collectionDate</th>
                        <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">country</th>
                        <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">signsAndSymptoms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SAMP-001</td>
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">2024-01-15</td>
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Nigeria</td>
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Dehydration;Vomiting</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SAMP-002</td>
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">2024-02-20</td>
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Kenya</td>
                        <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Diarrhea (watery stool)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Troubleshooting Common Errors */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Troubleshooting Common Errors
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>"Required header is missing":</strong> Check that all mandatory columns from the template exist in your file and that the names have not been changed.</li>
                  <li><strong>"Invalid date format":</strong> Ensure all your dates are formatted as YYYY-MM-DD.</li>
                  <li><strong>"Invalid value. Allowed values are...":</strong> Make sure the data in your picklist columns exactly matches one of the allowed options. Check for extra spaces or spelling mistakes.</li>
                  <li><strong>My file won't upload or all data is in one column:</strong> This usually means the columns are separated by spaces or commas instead of tabs. Re-export your file, making sure to select TSV as the format.</li>
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

export default GuideMetadataFormatPage;

