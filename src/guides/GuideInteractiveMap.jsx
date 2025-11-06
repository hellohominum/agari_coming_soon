import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideInteractiveMapPage() {
  return (
    <GuidePage
      title="How do I use the interactive map on a pathogen dashboard?"
      breadcrumbLabel="How do I use the interactive map on a pathogen dashboard?"
    >
      {/* Intro */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          The interactive map is the central feature of the pathogen dashboard, providing a powerful way to visualize the geographic distribution of isolates. This guide covers its main features and how to use them for analysis.
        </p>
      </div>

      {/* Understanding the Map Views */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Understanding the Map Views
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The map has two primary visualization modes that you can switch between to explore the data differently.
        </p>
      </div>

      {/* 1. Regional Bubbles */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-xl text-zinc-950">
          1. Regional Bubbles (Default View)
        </h3>
        <p className="text-base leading-7 text-zinc-700">
          This is the default view when you land on a pathogen dashboard. Each bubble on the map represents a geographic region (like a province or state). The size of the bubble corresponds to the total number of isolates reported in that region for the selected time period. At wider zoom levels, nearby bubbles will automatically cluster together into larger bubbles to give you a high-level overview of isolate density.
        </p>
      </div>

      {/* 2. Lineage Donuts */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-xl text-zinc-950">
          2. Lineage Donuts
        </h3>
        <p className="text-base leading-7 text-zinc-700">
          This view allows you to see the proportional breakdown of different genetic lineages within a region. Each cluster on the map is represented by a donut chart. The size of each colored segment in the donut reflects the proportion of a specific lineage within that cluster, making it easy to spot geographic hotspots for certain lineages.
        </p>
      </div>

      {/* How to Switch Views */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          How to Switch Views
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          To switch from Regional Bubbles to Lineage Donuts:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Navigate to the "Lineages" card in the side panel.</li>
          <li>Toggle the "Show on map" switch to the "on" position.</li>
          <li>The map will automatically update to display the lineage donut clusters. Toggling the switch off will return you to the default Regional Bubbles view.</li>
        </ol>
      </div>

      {/* Filtering the Map Data */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Filtering the Map Data
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The map is fully interactive and responds to the global controls in the header and the filters you apply in the side panel. Filters work together to narrow down the results shown on the map.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>Temporal (Time) Filtering:</strong> The date controls in the header are the primary way to filter by time. You can switch between viewing the last 12 months of data or focusing on a specific month. The data displayed on the map will automatically update to reflect your selected time period.</li>
          <li><strong>Geographic Filtering:</strong> In the "Locations" card, clicking on a country or province will filter all dashboard data and automatically zoom the map to that specific area. You can use the breadcrumbs at the top of the page to zoom back out.</li>
          <li><strong>Lineage Filtering:</strong> When the "Show on map" switch is enabled, you can use the checkboxes next to each lineage in the "Lineages" card. Unchecking a lineage will remove it from the map's visualization, allowing you to focus on the geographic spread of specific lineages of interest.</li>
        </ul>
        <p className="text-base leading-7 text-zinc-700">
          For example, by selecting "Kenya" in the Locations card and setting the timeframe to "July 2024", the map will only show isolates collected in Kenya during July 2024.
        </p>
      </div>

      {/* Navigating the Map */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Navigating the Map
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li><strong>Zoom & Pan:</strong> Use your mouse or the on-screen controls to zoom in and out or pan across the map.</li>
          <li><strong>Pop-ups:</strong> Hovering over a donut will display a pop-up with detailed information on the isolate count by lineage.</li>
        </ul>
      </div>
    </GuidePage>
  );
}

export default GuideInteractiveMapPage;
