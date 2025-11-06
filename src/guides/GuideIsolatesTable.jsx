import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideIsolatesTablePage() {
  return (
    <GuidePage
      title="How do I filter and customize the Isolates Table?"
      breadcrumbLabel="How do I filter and customize the Isolates Table?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          The Isolates Table is a powerful tool for in-depth data exploration. You can customize the table's layout and use a comprehensive set of filters to find the specific isolates you are interested in for analysis or download.
        </p>
      </div>

      {/* Customizing Your View */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Customizing Your View
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          You can tailor the table to your specific needs by customizing the columns that are displayed and adjusting their widths.
        </p>
      </div>

      {/* Showing and Hiding Columns */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Showing and Hiding Columns
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Click the "Columns" button located above the table.</li>
          <li>A dropdown menu will appear with a categorized list of all available data fields.</li>
          <li>Use the checkboxes next to each field name to show or hide the corresponding column in the table.</li>
          <li>You can use the search bar at the top of the dropdown to quickly find specific columns.</li>
          <li>To restore the original set of columns, click "Reset to default" at the bottom of the menu.</li>
        </ol>
      </div>

      {/* Resizing Columns */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Resizing Columns
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          To adjust the width of a column, hover your mouse over the right edge of the column header. Your cursor will change to a resize icon. Click and drag to make the column wider or narrower.
        </p>
      </div>

      {/* Applying Filters */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Applying Filters
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          As you interact with any filter control in the toolbar, the data table will update in real-time to reflect your selections. You can combine as many filters as you need to progressively refine your results. All active filters work together using an "AND" logic, meaning an isolate must match all the criteria you've set to be displayed.
        </p>
      </div>

      {/* Types of Filters */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Types of Filters
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The toolbar provides several types of controls, each tailored to a specific kind of data.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Text Filters:</strong> For fields like <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Isolate ID</code>, <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Sample ID</code>, or <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">City</code>. Simply type into the input field to search for matching text.</li>
          <li><strong>Date Range Filters:</strong> For any date field, such as <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Collection Date</code>. Clicking the button opens a calendar where you can select a start date, an end date, or both to define a period.</li>
          <li><strong>Multi-Select Dropdowns:</strong> For categorical data like <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Country</code> or <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Lineage Name</code>. Clicking the button opens a dropdown menu with a searchable list of all available options. You can select multiple values using the checkboxes.</li>
          <li><strong>Numerical Range Filters:</strong> For numerical data like <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Subject Age</code> or <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">Sequencing Depth</code>. These controls feature a dual-handle slider to visually set a minimum and maximum range. You can also type precise numbers into the input boxes for more exact filtering.</li>
        </ul>
      </div>

      {/* Resetting Filters */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Resetting Filters
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Whenever one or more filters are active, a "Reset" button will appear at the end of the filter toolbar. Clicking this button will instantly clear all active filters, returning the table to its default, unfiltered state.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideIsolatesTablePage;
