import React from 'react';

// Asset URLs - Local (from Figma)
const imgGraphicStrip = "/assets/graphic-strip.png";
const imgAfricaCdcLogoEn1 = "/assets/africa-cdc-logo.png";
const imgAslmLogoFinalFinal211 = "/assets/aslm-logo.png";
const imgMap = "/assets/map.png";
const imgGroup37 = "/assets/logo-symbol-small.svg";
const imgAgari = "/assets/logo-text-small.svg";
const imgGroup38 = "/assets/logo-symbol-large.svg";
const imgAgari1 = "/assets/logo-text-large.svg";
const img = "/assets/play-icon.svg";
const imgGroup = "/assets/governance-icon.svg";
const imgLucideUpload = "/assets/upload-icon.svg";
const imgGroup1 = "/assets/share-icon.svg";
const imgGroup2 = "/assets/explore-icon.svg";
const imgGroup3 = "/assets/download-icon.svg";

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
  return (
    <div className={className} data-name="size=large">
      <div className="absolute bottom-[0.96%] flex items-center justify-center left-[0.33%] right-[65.17%] top-0">
        <div className="flex-none h-[94.089px] rotate-[180deg] scale-y-[-100%] w-[72.785px]">
          <div className="relative size-full">
            <img alt="" className="block max-w-none size-full" src={imgGroup38} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[26.32%_0.29%_24.42%_40.38%]" data-name="AGARI">
        <img alt="" className="block max-w-none size-full" src={imgAgari1} />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        {/* Navigation */}
        <div className="bg-white border-b border-zinc-200 border-solid box-border content-stretch flex items-center justify-between p-6 relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex gap-6 items-center relative shrink-0">
              <LogoHorizontal size="small" className="h-[32px] relative shrink-0 w-[71px]" />
            </div>
            <div className="content-stretch flex gap-4 items-center relative shrink-0">
              <div className="box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0">
                <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
                  <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                    Guides
                  </p>
                </div>
              </div>
              <div className="bg-zinc-100 box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0">
                <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
                  <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                    Sign in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-4 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-start max-w-[860px] px-0 py-[90px] relative shrink-0 w-full">
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
              <div className="bg-zinc-100 box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0 cursor-pointer hover:bg-zinc-200 transition-colors">
                <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
                  <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                    Watch Overview Video
                  </p>
                </div>
                <div className="overflow-clip relative shrink-0 size-4">
                  <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]">
                    <div className="absolute inset-[-4.17%_-5.36%]">
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Strip */}
        <div className="bg-repeat h-[120px] shrink-0 w-full" style={{ backgroundImage: `url('${imgGraphicStrip}')`, backgroundSize: '788.5px 144.5px', backgroundPosition: 'top left' }} />

        {/* Section 2 - Built for Collaboration */}
        <div className="bg-white box-border content-stretch flex flex-col gap-10 items-center px-8 py-20 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start max-w-[860px] relative shrink-0 w-full">
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
              <div className="content-center flex flex-wrap gap-[30px] items-center justify-center relative shrink-0 w-full">
                <div className="h-[65px] relative shrink-0 w-[143px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="Africa CDC" className="absolute h-[145.78%] left-[-9.89%] max-w-none top-[-19.1%] w-[118.45%]" src={imgAfricaCdcLogoEn1} />
                  </div>
                </div>
                <div className="h-[49.788px] relative shrink-0 w-[157px]">
                  <img alt="ASLM" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAslmLogoFinalFinal211} />
                </div>
                <div className="bg-[#eeeeee] h-[58px] overflow-clip relative shrink-0 w-[146px]">
                  <p className="absolute font-semibold leading-none left-[73px] text-lg text-black text-center text-nowrap top-5 tracking-[-0.45px] translate-x-[-50%] whitespace-pre">
                    Logo
                  </p>
                </div>
                <div className="bg-[#eeeeee] h-[58px] overflow-clip relative shrink-0 w-[146px]">
                  <p className="absolute font-semibold leading-none left-[73px] text-lg text-black text-center text-nowrap top-5 tracking-[-0.45px] translate-x-[-50%] whitespace-pre">
                    Logo
                  </p>
                </div>
                <div className="bg-[#eeeeee] h-[58px] overflow-clip relative shrink-0 w-[146px]">
                  <p className="absolute font-semibold leading-none left-[73px] text-lg text-black text-center text-nowrap top-5 tracking-[-0.45px] translate-x-[-50%] whitespace-pre">
                    Logo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Upload and Validate */}
        <div className="bg-white box-border content-stretch flex flex-col gap-4 items-start px-8 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-4 items-center relative shrink-0 w-full">
            <div className="bg-[#f7f6ef] box-border content-stretch flex flex-col gap-10 items-center overflow-clip px-8 py-20 relative rounded-lg shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-10 items-start max-w-[860px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-medium leading-6 relative shrink-0 text-[#204727] text-base w-full">
                    Upload and Validate Pathogen Data
                  </p>
                  <p className="font-bold leading-9 max-w-[800px] relative shrink-0 text-zinc-950 text-3xl tracking-[-0.75px] w-full">
                    Submit genomic sequences and metadata directly from your lab.
                  </p>
                </div>
                <div className="content-stretch flex gap-10 items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-[370px]">
                    <p className="font-normal leading-6 min-w-full relative shrink-0 text-zinc-950 text-base w-[min-content]">
                      Each submission is validated against pathogen-specific templates to ensure consistency and quality.
                    </p>
                    <div className="bg-[#204727] box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0 cursor-pointer hover:bg-[#1a5632] transition-colors">
                      <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
                        <p className="font-medium leading-6 relative shrink-0 text-[#f3faf3] text-sm text-nowrap whitespace-pre">
                          See guides on how to use the templates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 font-normal grow leading-none max-w-[640px] min-h-px min-w-px relative shrink-0 text-zinc-950">
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
        <div className="bg-white box-border content-stretch flex flex-col gap-4 items-start px-8 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-4 items-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center overflow-clip px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-10 md:py-14 lg:py-20 xl:py-24 relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-between max-w-[860px] relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start pb-3 sm:pb-4 md:pb-6 pt-0 px-0 relative shrink-0 w-full">
                    <p className="font-medium text-sm sm:text-base leading-5 sm:leading-6 relative shrink-0 text-[#204727] w-full">
                      Explore Shared Data
                    </p>
                    <p className="font-bold leading-7 sm:leading-8 md:leading-9 relative shrink-0 text-zinc-950 text-xl sm:text-2xl md:text-3xl tracking-[-0.75px] w-full">
                      Access aggregated, quality-controlled datasets.
                    </p>
                  </div>
                  <p className="font-normal text-sm sm:text-base leading-5 sm:leading-6 relative shrink-0 text-zinc-950 w-full">
                    Browse by pathogen, region, or date, and download data based on your permission level.
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col gap-2 items-center px-2 sm:px-4 md:px-6 lg:px-8 py-0 relative shrink-0 w-full">
                <div className="h-[700.5px] relative shrink-0 w-[1043px] max-w-full">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="Map of Africa showing data" className="absolute left-0 max-w-none w-full h-full object-contain top-0" src={imgMap} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 - Governance & Access */}
        <div className="bg-white box-border content-stretch flex flex-col gap-4 items-center pb-20 pt-0 px-8 relative shrink-0 w-full">
          <div className="bg-[#1a5632] box-border content-stretch flex gap-8 items-start justify-center overflow-clip px-8 py-20 relative rounded-lg shrink-0 w-full">
            <div className="basis-0 content-stretch flex gap-8 grow items-start max-w-[860px] min-h-px min-w-px relative shrink-0">
              <div className="h-[274px] overflow-clip relative shrink-0 w-[178px]">
                <div className="absolute inset-[28.24%_16.29%_27.96%_16.29%]">
                  <div className="absolute inset-[-3.33%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex flex-col grow items-start max-w-[640px] min-h-px min-w-px pb-0 pt-4 px-0 relative shrink-0">
                <p className="font-medium leading-6 relative shrink-0 text-[#b4a269] text-base w-full">
                  A Trusted Space
                </p>
                <p className="font-bold leading-9 relative shrink-0 text-[#f3faf3] text-3xl tracking-[-0.75px] w-full">Governance & Access</p>
                <div className="h-[14px] shrink-0 w-full" />
                <div className="font-normal leading-none relative shrink-0 text-[#f3faf3] text-base w-full">
                  <p className="leading-6 mb-0">The platform operates on a multi-layered governance model:</p>
                  <ul className="list-disc">
                    <li className="mb-2 ms-6">
                      <span className="leading-6">Sub-national users can upload data for national review.</span>
                    </li>
                    <li className="mb-2 ms-6">
                      <span className="leading-6">National authorities approve visibility and sharing rules.</span>
                    </li>
                    <li className="mb-2 ms-6">
                      <span className="leading-6">Regional bodies coordinate alerts and standards.</span>
                    </li>
                    <li className="ms-6">
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
        <div className="bg-white box-border content-stretch flex flex-col gap-4 items-center px-8 py-0 relative shrink-0 w-full">
          <div className="bg-[#f7f6ef] box-border content-stretch flex flex-col gap-10 items-center overflow-clip px-8 py-20 relative rounded-lg shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start max-w-[860px] relative shrink-0 w-full">
              <div className="box-border content-stretch flex items-center justify-between pb-0 pt-4 px-0 relative shrink-0 w-full">
                <p className="basis-0 font-medium grow leading-6 min-h-px min-w-px relative shrink-0 text-[#204727] text-base">
                  The Challenge
                </p>
              </div>
              <div className="box-border content-stretch flex items-center justify-between pb-4 pt-0 px-0 relative shrink-0 w-full">
                <p className="basis-0 font-bold grow leading-9 min-h-px min-w-px relative shrink-0 text-zinc-950 text-3xl tracking-[-0.75px]">
                  Overcoming Data Fragmentation in African Public Health
                </p>
              </div>
              <div className="box-border content-stretch flex items-center justify-between pb-8 pt-0 px-0 relative shrink-0 w-full">
                <p className="basis-0 font-normal grow leading-6 min-h-px min-w-px relative shrink-0 text-zinc-950 text-base">
                  The increasing volume of pathogen genomic data across Africa presents a critical opportunity for continental surveillance. However, this data is often generated across disparate systems without common standards, leading to information silos. This fragmentation creates significant hurdles for timely, cross-border analysis and slows the coordinated public health response required to effectively manage disease threats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 - The Solution */}
        <div className="bg-white box-border content-stretch flex flex-col gap-4 items-center px-8 py-20 relative shrink-0 w-full">
          <div className="content-stretch flex gap-10 items-center justify-center max-w-[860px] relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start max-w-[860px] min-h-px min-w-px relative shrink-0">
              <div className="box-border content-stretch flex items-center justify-between pb-0 pt-4 px-0 relative shrink-0 w-full">
                <p className="basis-0 font-medium grow leading-6 min-h-px min-w-px relative shrink-0 text-[#204727] text-base">
                  The Solution
                </p>
              </div>
              <div className="box-border content-stretch flex items-center justify-between pb-4 pt-0 px-0 relative shrink-0 w-full">
                <p className="basis-0 font-bold grow leading-9 min-h-px min-w-px relative shrink-0 text-zinc-950 text-3xl tracking-[-0.75px]">
                  An Integrated Ecosystem for Genomic Surveillance
                </p>
              </div>
              <div className="box-border content-stretch flex items-center justify-between pb-8 pt-0 px-0 relative shrink-0 w-full">
                <p className="basis-0 font-normal grow leading-6 min-h-px min-w-px relative shrink-0 text-zinc-950 text-base">
                  AGARI provides a secure, standardized framework for the entire genomic surveillance lifecycle. By harmonizing metadata and streamlining data exchange protocols, the platform transforms isolated data points into a coherent, continental-scale resource. This enables researchers and public health officials to generate actionable insights, track pathogen evolution in real-time, and make more informed, data-driven decisions.
                </p>
              </div>
            </div>
            <div className="basis-0 gap-4 grid grid-cols-2 grid-rows-2 grow h-[329px] max-w-[960px] min-h-px min-w-px relative shrink-0">
              <div className="bg-[#204727] box-border content-stretch flex flex-col gap-2 items-start overflow-clip p-4 relative shrink-0 rounded-lg">
                <div className="relative shrink-0 size-6">
                  <img alt="" className="block max-w-none size-full" src={imgLucideUpload} />
                </div>
                <p className="font-bold leading-none relative shrink-0 text-[#f3faf3] text-lg text-nowrap whitespace-pre">
                  Upload
                </p>
                <p className="font-normal leading-none min-w-full relative shrink-0 text-zinc-50 text-sm w-[min-content]">
                  Securely upload pathogen sequence and associated metadata.
                </p>
              </div>
              <div className="bg-[#9f2241] box-border content-stretch flex flex-col gap-2 items-start overflow-clip p-4 relative shrink-0 rounded-lg">
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[8.33%_12.5%]">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-none relative shrink-0 text-[#f3faf3] text-lg text-nowrap whitespace-pre">
                  Share
                </p>
                <p className="font-normal leading-none min-w-full relative shrink-0 text-zinc-50 text-sm w-[min-content]">
                  Share data in real-time according to country-specific guidelines.
                </p>
              </div>
              <div className="bg-[#348f41] box-border content-stretch flex flex-col gap-2 items-start overflow-clip p-4 relative shrink-0 rounded-lg">
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-5.556%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-none relative shrink-0 text-[#f3faf3] text-lg text-nowrap whitespace-pre">
                  Explore
                </p>
                <p className="font-normal leading-none min-w-full relative shrink-0 text-zinc-50 text-sm w-[min-content]">
                  Explore and visualize data with powerful filtering and mapping tools.
                </p>
              </div>
              <div className="bg-[#440d1c] box-border content-stretch flex flex-col gap-2 items-start overflow-clip p-4 relative shrink-0 rounded-lg">
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-5.556%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-none relative shrink-0 text-[#f3faf3] text-lg text-nowrap whitespace-pre">
                  Download
                </p>
                <p className="font-normal leading-none min-w-full relative shrink-0 text-zinc-50 text-sm w-[min-content]">
                  Download selected datasets for further offline analysis and research.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-zinc-200 border-solid box-border content-stretch flex items-center justify-between px-6 py-8 relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex grow items-center max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="basis-0 content-stretch flex gap-6 grow items-center min-h-px min-w-px relative shrink-0">
              <LogoHorizontal size="small" className="h-[32px] relative shrink-0 w-[71px]" />
            </div>
            <div className="content-stretch flex font-normal gap-6 items-center justify-center leading-6 relative shrink-0 text-zinc-500 text-sm text-nowrap whitespace-pre">
              <p className="relative shrink-0 cursor-pointer hover:text-zinc-700">
                Terms of Service
              </p>
              <p className="relative shrink-0 cursor-pointer hover:text-zinc-700">
                Privacy Policy
              </p>
              <p className="relative shrink-0 cursor-pointer hover:text-zinc-700">
                Guides
              </p>
            </div>
            <div className="basis-0 content-stretch flex gap-2 grow items-center justify-end min-h-px min-w-px relative shrink-0">
              <p className="font-normal leading-6 relative shrink-0 text-zinc-500 text-sm text-nowrap whitespace-pre">
                © 2025 AGARI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
