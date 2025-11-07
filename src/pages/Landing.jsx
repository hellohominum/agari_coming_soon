import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import imgGraphicStrip from '../assets/graphic-strip.png';
import imgAfricaCdcLogoEn1 from '../assets/africa-cdc-logo.png';
import imgAslmLogoFinalFinal211 from '../assets/aslm-logo.png';
import imgMap from '../assets/map.png';
import imgGroup from '../assets/governance-icon.svg';
import imgLucideUpload from '../assets/upload-icon.svg';
import imgGroup1 from '../assets/share-icon.svg';
import imgGroup2 from '../assets/explore-icon.svg';
import imgGroup3 from '../assets/download-icon.svg';
import imgCeLogo from '../assets/LOGO_CE_EN_RGB_HORIZONTAL_POS.svg';
import imgSsl from '../assets/sll.jpg';

function Landing() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-background min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Hero Section */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-4 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-start max-w-[1200px] mx-auto px-0 py-[90px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="basis-0 font-semibold grow leading-none min-h-px min-w-px relative shrink-0 text-[#9f2241] text-6xl text-center tracking-[-1.5px]">
                <p className="leading-none mb-0 text-[#2e221a]">Uniting Africa </p>
                <p className="leading-none">
                  <span className="text-[#2e221a]">Against</span>
                  <span> Infectious Diseases</span>
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="basis-0 font-normal grow leading-6 min-h-px min-w-px relative shrink-0 text-zinc-900 text-base text-center">
                The African Genomic Archive for Response & Insight (AGARI) is a continental platform for archiving and sharing pathogen genomic information, enabling real-time surveillance to empower a swift response to disease threats across Africa.
              </p>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-center relative shrink-0 w-full">
              <div className="bg-[#204727] box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0 cursor-pointer hover:bg-[#1a5632] transition-colors">
                <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
                  <p className="font-medium leading-6 relative shrink-0 text-[#f3faf3] text-sm text-nowrap whitespace-pre">
                    Sign in to AGARI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Strip */}
        <div className="bg-repeat h-[120px] shrink-0 w-full" style={{ backgroundImage: `url('${imgGraphicStrip}')`, backgroundSize: '788.5px 144.5px', backgroundPosition: 'top left' }} />

        {/* Section 2 - Built for Collaboration */}
        <div className="bg-white box-border content-stretch flex flex-col gap-10 items-center px-8 py-20 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start max-w-[1200px] mx-auto relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start pb-6 pt-0 px-0 relative shrink-0 text-center w-full">
              <p className="font-medium leading-6 relative shrink-0 text-[#204727] text-base w-full">
                A Trusted Space
              </p>
              <p className="font-bold leading-9 relative shrink-0 text-zinc-950 text-3xl tracking-[-0.75px] w-full">
                Built for collaboration, governed by countries
              </p>
            </div>
            <div className="box-border content-stretch flex items-center justify-between pb-10 pt-0 px-0 relative shrink-0 w-full">
              <p className="basis-0 font-normal grow leading-6 min-h-px min-w-px relative shrink-0 text-zinc-950 text-base text-center">
                The Platform enables African institutions to upload, manage, and share pathogen genomic data securely under national control, with regional coordination through Africa CDC and ASLM. Each dataset remains governed by its originating country, ensuring data sovereignty and compliance with local policies.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-2 items-center relative shrink-0 w-full">
              <div className="content-center flex flex-wrap gap-8 items-center justify-center relative shrink-0 w-full">
                <div className="h-[98px] relative shrink-0 w-[215px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="Africa CDC" className="absolute h-[145.78%] left-[-9.89%] max-w-none top-[-19.1%] w-[118.45%]" src={imgAfricaCdcLogoEn1} />
                  </div>
                </div>
                <div className="h-[75px] relative shrink-0 flex items-center justify-center">
                  <img alt="ASLM" className="h-full w-auto object-contain pointer-events-none" src={imgAslmLogoFinalFinal211} />
                </div>
                <div className="h-[87px] relative shrink-0 flex items-center justify-center">
                  <img alt="CE Logo" className="h-full w-auto object-contain" src={imgCeLogo} />
                </div>
                <div className="h-[87px] relative shrink-0 flex items-center justify-center">
                  <img alt="SSL Logo" className="h-full w-auto object-contain" src={imgSsl} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Upload and Validate */}
        <div className="bg-white box-border flex flex-col gap-4 items-start px-4 sm:px-6 md:px-8 py-0 relative w-full">
          <div className="flex flex-col gap-4 items-center relative w-full max-w-[1200px] mx-auto">
            <div className="bg-[#f7f6ef] box-border flex flex-col gap-6 sm:gap-8 md:gap-10 items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative rounded-lg w-full">
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-start max-w-[1200px] relative w-full">
                <div className="flex flex-col gap-3 sm:gap-4 items-start relative w-full">
                  <p className="font-medium leading-6 text-[#204727] text-base w-full">
                    Upload and Validate Pathogen Data
                  </p>
                  <p className="font-bold leading-tight sm:leading-9 text-zinc-950 text-2xl sm:text-3xl tracking-tight w-full">
                    Submit genomic sequences and metadata directly from your lab.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start relative w-full">
                  <div className="flex flex-col gap-6 items-start relative w-full md:w-[370px] md:flex-shrink-0">
                    <p className="font-normal leading-6 text-zinc-950 text-base w-full">
                      Each submission is validated against pathogen-specific templates to ensure consistency and quality.
                    </p>
                    <Link to="/guides/create-submission" className="bg-[#204727] box-border flex gap-1 items-center justify-center px-3 py-2 relative rounded-md cursor-pointer hover:bg-[#1a5632] transition-colors self-start">
                      <div className="flex gap-0 items-start px-1 py-0">
                        <p className="font-medium leading-6 text-[#f3faf3] text-sm whitespace-nowrap">
                          See guides on how to use the templates
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col items-start relative w-full md:flex-1">
                    <div className="font-normal leading-6 text-zinc-950 w-full">
                      <p className="leading-6 mb-0">Download Metadata Templates</p>
                      <p className="underline decoration-solid font-normal leading-6 mb-0 text-[#348f41]">SARS-CoV-2.xls</p>
                      <p className="underline decoration-solid font-normal leading-6 mb-0 text-[#348f41]">Klebsiella .xls</p>
                      <p className="underline decoration-solid font-normal leading-6 mb-0 text-[#348f41]">Cholera .xls</p>
                      <p className="underline decoration-solid font-normal leading-6 mb-0 text-[#348f41]">Mpox .xls</p>
                      <p className="underline decoration-solid font-normal leading-6 mb-0 text-[#348f41]">Malaria(human).xls</p>
                      <p className="underline decoration-solid font-normal leading-6 text-[#348f41]">Malaria(vector).xls</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 - Explore Shared Data */}
        <div className="bg-white box-border flex flex-col gap-4 items-start px-4 sm:px-6 md:px-8 py-0 relative w-full">
          <div className="flex flex-col gap-4 items-center relative w-full max-w-[1200px] mx-auto">
            <div className="box-border flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 relative w-full">
              <div className="flex items-start justify-center max-w-[1200px] relative w-full">
                <div className="flex flex-col items-start relative w-full">
                  <div className="box-border flex flex-col items-start pb-3 sm:pb-4 md:pb-6 pt-0 px-0 relative w-full">
                    <p className="font-medium text-sm sm:text-base leading-5 sm:leading-6 text-[#204727] w-full">
                      Explore Shared Data
                    </p>
                    <p className="font-bold leading-tight sm:leading-8 md:leading-9 text-zinc-950 text-xl sm:text-2xl md:text-3xl tracking-tight w-full mt-2">
                      Access aggregated, quality-controlled datasets.
                    </p>
                  </div>
                  <p className="font-normal text-sm sm:text-base leading-5 sm:leading-6 text-zinc-950 w-full mt-4">
                    Browse by pathogen, region, or date, and download data based on your permission level.
                  </p>
                </div>
              </div>
              <div className="box-border flex flex-col gap-2 items-center px-2 sm:px-4 md:px-6 lg:px-8 py-0 relative w-full">
                <div className="relative w-full max-w-full aspect-[1043/700.5]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="Map of Africa showing data" className="w-full h-full object-contain" src={imgMap} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 - Governance & Access */}
        <div className="bg-white box-border flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20 pt-0 relative w-full">
          <div className="bg-[#1a5632] box-border flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-center px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-14 md:py-20 lg:py-24 relative rounded-lg w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start max-w-[1200px] relative w-full">
              <div className="flex-shrink-0 w-full md:w-[178px] flex justify-center md:justify-start">
                <div className="relative h-[200px] sm:h-[240px] md:h-[274px] w-[130px] sm:w-[150px] md:w-[178px]">
                  <div className="absolute inset-[28.24%_16.29%_27.96%_16.29%]">
                    <div className="absolute inset-[-3.33%]">
                      <img alt="" className="block max-w-none size-full object-contain" src={imgGroup} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 pb-0 pt-0 md:pt-4 px-0 relative w-full">
                <p className="font-medium leading-6 text-[#b4a269] text-sm sm:text-base w-full">
                  A Trusted Space
                </p>
                <p className="font-bold leading-tight sm:leading-8 md:leading-9 text-[#f3faf3] text-2xl sm:text-3xl tracking-tight w-full mt-1">Governance & Access</p>
                <div className="h-3 sm:h-4 md:h-[14px] w-full" />
                <div className="font-normal leading-6 text-[#f3faf3] text-sm sm:text-base w-full">
                  <p className="leading-6 mb-0">The platform operates on a multi-layered governance model:</p>
                  <ul className="list-disc mt-2 sm:mt-3">
                    <li className="mb-2 ms-4 sm:ms-6">
                      <span className="leading-6">Sub-national users can upload data for national review.</span>
                    </li>
                    <li className="mb-2 ms-4 sm:ms-6">
                      <span className="leading-6">National authorities approve visibility and sharing rules.</span>
                    </li>
                    <li className="mb-2 ms-4 sm:ms-6">
                      <span className="leading-6">Regional bodies coordinate alerts and standards.</span>
                    </li>
                    <li className="ms-4 sm:ms-6">
                      <span className="leading-6">
                        Access is by invitation only, granted through your national institution.
                        <br aria-hidden="true" />
                        {` If your organization is not yet onboarded, contact your national focal point to request access.`}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section - The Challenge */}
        <div className="bg-white box-border flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 py-0 relative w-full">
          <div className="bg-[#f7f6ef] box-border flex flex-col gap-10 items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative rounded-lg w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col items-start max-w-[1200px] relative w-full">
              <div className="box-border flex items-center justify-between pb-0 pt-0 sm:pt-4 px-0 relative w-full">
                <p className="font-medium leading-6 text-[#204727] text-sm sm:text-base w-full">
                  The Challenge
                </p>
              </div>
              <div className="box-border flex items-center justify-between pb-3 sm:pb-4 pt-0 px-0 relative w-full">
                <p className="font-bold leading-tight sm:leading-8 md:leading-9 text-zinc-950 text-2xl sm:text-3xl tracking-tight w-full">
                  Overcoming Data Fragmentation in African Public Health
                </p>
              </div>
              <div className="box-border flex items-center justify-between pb-6 sm:pb-8 pt-0 px-0 relative w-full">
                <p className="font-normal leading-6 text-zinc-950 text-sm sm:text-base w-full">
                  The increasing volume of pathogen genomic data across Africa presents a critical opportunity for continental surveillance. However, this data is often generated across disparate systems without common standards, leading to information silos. This fragmentation creates significant hurdles for timely, cross-border analysis and slows the coordinated public health response required to effectively manage disease threats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 - The Solution */}
        <div className="bg-white box-border flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative w-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-start lg:items-center justify-center max-w-[1200px] mx-auto relative w-full">
            <div className="flex flex-col items-start flex-1 relative w-full">
              <div className="box-border flex items-center justify-between pb-0 pt-0 sm:pt-4 px-0 relative w-full">
                <p className="font-medium leading-6 text-[#204727] text-sm sm:text-base w-full">
                  The Solution
                </p>
              </div>
              <div className="box-border flex items-center justify-between pb-3 sm:pb-4 pt-0 px-0 relative w-full">
                <p className="font-bold leading-tight sm:leading-8 md:leading-9 text-zinc-950 text-2xl sm:text-3xl tracking-tight w-full">
                  An Integrated Ecosystem for Genomic Surveillance
                </p>
              </div>
              <div className="box-border flex items-center justify-between pb-6 sm:pb-8 pt-0 px-0 relative w-full">
                <p className="font-normal leading-6 text-zinc-950 text-sm sm:text-base w-full">
                  AGARI provides a secure, standardized framework for the entire genomic surveillance lifecycle. By harmonizing metadata and streamlining data exchange protocols, the platform transforms isolated data points into a coherent, continental-scale resource. This enables researchers and public health officials to generate actionable insights, track pathogen evolution in real-time, and make more informed, data-driven decisions.
                </p>
              </div>
            </div>
            <div className="gap-3 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full lg:w-auto lg:flex-1 relative">
              <div className="bg-[#204727] box-border flex flex-col gap-2 items-start p-4 relative rounded-lg">
                <div className="relative shrink-0 size-6">
                  <img alt="" className="block max-w-none size-full" src={imgLucideUpload} />
                </div>
                <p className="font-bold leading-tight text-[#f3faf3] text-base sm:text-lg">
                  Upload
                </p>
                <p className="font-normal leading-5 sm:leading-6 text-zinc-50 text-xs sm:text-sm w-full">
                  Securely upload pathogen sequence and associated metadata.
                </p>
              </div>
              <div className="bg-[#9f2241] box-border flex flex-col gap-2 items-start p-4 relative rounded-lg">
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[8.33%_12.5%]">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-tight text-[#f3faf3] text-base sm:text-lg">
                  Share
                </p>
                <p className="font-normal leading-5 sm:leading-6 text-zinc-50 text-xs sm:text-sm w-full">
                  Share data in real-time according to country-specific guidelines.
                </p>
              </div>
              <div className="bg-[#348f41] box-border flex flex-col gap-2 items-start p-4 relative rounded-lg">
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-5.556%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-tight text-[#f3faf3] text-base sm:text-lg">
                  Explore
                </p>
                <p className="font-normal leading-5 sm:leading-6 text-zinc-50 text-xs sm:text-sm w-full">
                  Explore and visualize data with powerful filtering and mapping tools.
                </p>
              </div>
              <div className="bg-[#440d1c] box-border flex flex-col gap-2 items-start p-4 relative rounded-lg">
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-5.556%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-tight text-[#f3faf3] text-base sm:text-lg">
                  Download
                </p>
                <p className="font-normal leading-5 sm:leading-6 text-zinc-50 text-xs sm:text-sm w-full">
                  Download selected datasets for further offline analysis and research.
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

export default Landing;
