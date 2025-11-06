import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function GuidePage({
  title,
  breadcrumbLabel,
  breadcrumbPath = '/guides',
  breadcrumbText = 'Guides',
  children,
}) {
  const hasBreadcrumbLink = Boolean(breadcrumbText && breadcrumbPath);
  const finalBreadcrumbLabel = breadcrumbLabel ?? title;

  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-12 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 max-w-[800px] relative shrink-0 w-full">
            <div className="flex items-center gap-2 text-sm">
              {hasBreadcrumbLink ? (
                <Link
                  to={breadcrumbPath}
                  className="text-zinc-600 hover:text-[#348f41] transition-colors"
                >
                  {breadcrumbText}
                </Link>
              ) : (
                breadcrumbText && (
                  <span className="text-zinc-600">{breadcrumbText}</span>
                )
              )}

              {finalBreadcrumbLabel && (
                <>
                  <svg
                    className="w-4 h-4 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-zinc-900">{finalBreadcrumbLabel}</span>
                </>
              )}
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {title && (
                <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                  {title}
                </h1>
              )}
              {children}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuidePage;
