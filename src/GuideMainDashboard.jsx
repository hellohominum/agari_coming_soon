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

function GuideMainDashboardPage() {
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
              <span className="text-zinc-900">How do I use the main dashboard to track pathogen activity?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I use the main dashboard to track pathogen activity?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  The main dashboard is your mission control for at-a-glance surveillance. It provides a high-level, multi-pathogen overview of activity, helping you spot trends and decide where to focus your analysis.
                </p>
              </div>

              {/* Header & Global Controls */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Header & Global Controls
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  The controls at the top of the page set the context for all the data you see on the dashboard.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Geographic Filter:</strong> By default, you see data for all of Africa. Click the "Africa" dropdown to filter the entire dashboard to a specific country (e.g., "Kenya"). This updates all pathogen cards to show data only from that location.</li>
                  <li><strong>Timeframe Toggle:</strong> Switch between two views:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>12 months:</strong> Shows aggregated data for the 12 months leading up to the platform's current date.</li>
                      <li><strong>Monthly:</strong> Focuses on a single calendar month for a more granular view.</li>
                    </ul>
                  </li>
                  <li><strong>Date Navigation:</strong> When in "Monthly" view, you can use the arrow buttons to move forward or backward one month at a time. The "Today" button returns you to the current month.</li>
                </ul>
              </div>

              {/* Understanding the Pathogen Cards */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Understanding the Pathogen Cards
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Each card on the dashboard is a summary for a single pathogen. It contains several key pieces of information:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>New Isolates:</strong> The large number shows the total new isolates for the selected time and location.</li>
                  <li><strong>Trend Indicator:</strong> When viewing a past month, this shows the percentage change in isolates compared to the previous month.</li>
                  <li><strong>Interactive Bar Graph:</strong> This shows the trend of new isolates over a 13-month period. You can click on any bar in this graph to instantly switch the entire dashboard to view that specific month's data.</li>
                  <li><strong>Top Affected Locations & Lineages:</strong> These lists show the top 5 countries (or provinces, if a country is selected) and the top 5 genetic lineages with the most isolates.</li>
                  <li><strong>"More Info" Button:</strong> Click this button to navigate to the detailed, pathogen-specific dashboard for that pathogen, where you can find an interactive map and advanced filtering tools.</li>
                </ul>
              </div>

              {/* Important Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                <p className="text-base leading-7 text-blue-900">
                  The dashboard only displays data from <strong>Published</strong> submissions that you have permission to view. Data from Drafts will not appear here until it is published.
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

export default GuideMainDashboardPage;

