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

function GuideSection({ title, questions }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg p-6 flex flex-col gap-4">
      <h3 className="font-semibold text-xl text-zinc-950">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {questions.map((item, index) => {
          const question = typeof item === 'string' ? item : item.text;
          const link = typeof item === 'object' ? item.link : null;
          
          const content = (
            <>
              <p className="font-normal text-sm text-zinc-700 group-hover:text-[#348f41]">
                {question}
              </p>
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-[#348f41] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          );

          if (link) {
            return (
              <Link
                key={index}
                to={link}
                className="flex items-center justify-between gap-2 py-2 cursor-pointer group hover:text-[#348f41] transition-colors"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2 py-2 cursor-pointer group hover:text-[#348f41] transition-colors"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GuidesPage() {
  const guideSections = [
    {
      title: "User Roles & Permissions",
      questions: [
        { text: "How do I create an account?", link: "/guides/create-account" },
        { text: "As an Organisation Owner, what can I do?", link: "/guides/org-owner" },
        { text: "As an Organisation Admin, what can I do?", link: "/guides/org-admin" },
        { text: "As a Project Admin, what can I do?", link: "/guides/project-admin" },
        "As a Contributor, what can I do?",
        { text: "As a Viewer, what can I do?", link: "/guides/viewer" }
      ]
    },
    {
      title: "Project Management",
      questions: [
        { text: "How do I create a new project?", link: "/guides/create-project" },
        { text: "What are sharing policies and how do they work?", link: "/guides/sharing-policies" },
        { text: "How do I edit my project's details?", link: "/guides/edit-project" },
        { text: "How do I delete a project?", link: "/guides/delete-project" },
        { text: "How do I invite members to a project?", link: "/guides/invite-members" },
        { text: "How do I change a member's role or remove them?", link: "/guides/manage-members" }
      ]
    },
    {
      title: "Submissions & Data Uploads",
      questions: [
        { text: "What is a \"submission\"?", link: "/guides/what-is-submission" },
        { text: "How do I create a new submission and upload files?", link: "/guides/create-submission" },
        { text: "What is the difference between single-genome and multi-genome FASTA formats?", link: "/guides/fasta-formats" },
        { text: "How do I format my metadata TSV file correctly?", link: "/guides/metadata-format" },
        { text: "How do I view and correct errors in my submission?", link: "/guides/submission-errors" },
        { text: "How do I publish a draft submission?", link: "/guides/publish-submission" },
        { text: "What happens when I unpublish a submission?", link: "/guides/unpublish-submission" },
        { text: "How do I delete a submission?", link: "/guides/delete-submission" }
      ]
    },
    {
      title: "Data Exploration & Analysis",
      questions: [
        { text: "How do I use the main dashboard to track pathogen activity?", link: "/guides/main-dashboard" },
        { text: "How do I use the interactive map on a pathogen dashboard?", link: "/guides/interactive-map" },
        { text: "How do I filter and customize the Isolates Table?", link: "/guides/isolates-table" },
        { text: "How do I select and download sample data?", link: "/guides/download-data" }
      ]
    },
    {
      title: "Account Management",
      questions: [
        { text: "How do I edit my personal profile information?", link: "/guides/edit-profile" },
        { text: "How do I change my primary email address?", link: "/guides/change-email" },
      ]
    },
    {
      title: "Organisation Management",
      questions: [
        { text: "How do I manage my organisation's settings?", link: "/guides/org-settings" },
        { text: "How do I invite members to my organisation?", link: "/guides/invite-org-members" },
        { text: "How do I change a member's role or remove them?", link: "/guides/manage-org-members" },
        { text: "How do I transfer organisation ownership?", link: "/guides/transfer-ownership" }
      ]
    }
  ];

  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Hero Section */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-8 items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-center max-w-[1200px] mx-auto px-0 relative shrink-0 w-full text-center">
            <h1 className="font-bold leading-tight text-zinc-950 text-5xl tracking-tight">
              Guides & FAQs
            </h1>
            <p className="font-normal leading-6 text-zinc-600 text-lg max-w-[600px]">
              Find answers to common questions and learn how to use the AGARI platform effectively.
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20 pt-0 relative shrink-0 w-full">
          <div className="content-stretch max-w-[1200px] mx-auto relative shrink-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guideSections.map((section, index) => (
                <GuideSection
                  key={index}
                  title={section.title}
                  questions={section.questions}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuidesPage;

