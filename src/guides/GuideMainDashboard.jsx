import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideMainDashboardPage() {
  return (
    <GuidePage
      title="How do I use the main dashboard to track pathogen activity?"
      breadcrumbLabel="How do I use the main dashboard to track pathogen activity?"
    >
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
    </GuidePage>
  );
}

export default GuideMainDashboardPage;
