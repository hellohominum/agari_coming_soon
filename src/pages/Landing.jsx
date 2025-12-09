import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import FadeIn from '../components/FadeIn.jsx';
import GeneticsHeroBackground from '../components/GeneticsHeroBackground.jsx';
import imgGraphicStrip from '../assets/graphic-strip.png';
import imgAslmLogoFinalFinal211 from '../assets/aslm-logo.png';
import imgCeLogo from '../assets/LOGO_CE_EN_RGB_HORIZONTAL_POS.svg';
import imgSsl from '../assets/sll.jpg';
import imgRobertKochInstitute from '../assets/robertkochinstitute.jpeg';
import imgSanbi from '../assets/sanbi.svg';
import imgIllumina from '../assets/illumina.jpeg';
import imgBmgf from '../assets/gates_foundation.png';
import imgAdb from '../assets/adb.png';
import imgWb from '../assets/wb.jpg';
import imgOntLogo from '../assets/ont-logo.svg';
import imgLogoSymbol from '../assets/logo-symbol-small.svg';

function Landing() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-background min-h-screen">
      <main className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Hero Section */}
        <section className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-4 relative shrink-0 w-full overflow-hidden">
          <GeneticsHeroBackground />
          <div className="box-border content-stretch flex flex-col gap-6 items-start max-w-[1200px] mx-auto px-0 py-[90px] relative shrink-0 w-full">
            {/* Logo */}
            <FadeIn delay={0} className="content-stretch flex items-center justify-center relative shrink-0 w-full mb-2">
              <img src={imgLogoSymbol} alt="AGARI Symbol" className="w-[120px] h-auto" />
            </FadeIn>
            
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <FadeIn delay={0.1} className="basis-0 font-semibold grow leading-none min-h-px min-w-px relative shrink-0 text-[#9f2241] text-6xl text-center tracking-[-1.5px]">
                <h1 className="leading-none mb-0 text-[#2e221a]">Uniting Africa </h1>
                <p className="leading-none">
                  <span className="text-[#2e221a]">Against</span>
                  <span> Infectious Diseases</span>
                </p>
              </FadeIn>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <FadeIn delay={0.3} className="basis-0 font-normal grow leading-6 min-h-px min-w-px relative shrink-0 text-zinc-900 text-base text-center max-w-[800px] mx-auto">
                AGARI is a continental platform for archiving and sharing pathogen genomic information, enabling real-time surveillance to empower a swift response to disease threats across Africa.
              </FadeIn>
            </div>
            <FadeIn delay={0.5} className="content-stretch flex gap-3 items-start justify-center relative shrink-0 w-full">
              <p className="font-bold leading-6 relative shrink-0 text-[#204727] text-2xl tracking-wider">
                COMING SOON
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Graphic Strip */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "-788.5px 0px"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
          className="bg-repeat h-[120px] shrink-0 w-full"
          style={{ backgroundImage: `url('${imgGraphicStrip}')`, backgroundSize: '788.5px 144.5px' }}
        />

        {/* Section 2 - Built for Collaboration */}
        <section className="bg-white box-border content-stretch flex flex-col gap-10 items-center px-8 py-20 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start max-w-[1200px] mx-auto relative shrink-0 w-full">
            <FadeIn className="box-border content-stretch flex flex-col items-start pb-6 pt-0 px-0 relative shrink-0 text-center w-full">
              <p className="font-medium leading-6 relative shrink-0 text-[#204727] text-base w-full">
                A Trusted Space
              </p>
              <h2 className="font-bold leading-9 relative shrink-0 text-zinc-950 text-3xl tracking-[-0.75px] w-full">
                Built for collaboration, governed by countries
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} className="box-border content-stretch flex items-center justify-between pb-10 pt-0 px-0 relative shrink-0 w-full">
              <p className="basis-0 font-normal grow leading-6 min-h-px min-w-px relative shrink-0 text-zinc-950 text-base text-center max-w-[800px] mx-auto">
                The Platform enables African institutions to upload, manage, and share pathogen genomic data securely under national control, with regional coordination through Africa CDC and ASLM. Each dataset remains governed by its originating country, ensuring data sovereignty and compliance with local policies.
              </p>
            </FadeIn>
            <div className="content-stretch flex flex-col gap-2 items-center relative shrink-0 w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="content-center flex flex-wrap gap-12 items-center justify-center relative shrink-0 w-full max-w-[840px] mx-auto"
              >
                {[
                  { src: imgAdb, alt: "ADB", className: "h-[95px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgAslmLogoFinalFinal211, alt: "ASLM", className: "h-[71px]", imgClass: "h-full w-auto object-contain pointer-events-none" },
                  { src: imgCeLogo, alt: "CE Logo", className: "h-[87px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgBmgf, alt: "Gates Foundation", className: "h-[58px] sm:h-[58px] md:h-[61px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgIllumina, alt: "Illumina", className: "h-[41px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgOntLogo, alt: "ONT Logo", className: "h-[56px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgRobertKochInstitute, alt: "Robert Koch Institute", className: "h-[56px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgSanbi, alt: "SANBI", className: "h-[87px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgSsl, alt: "SSL Logo", className: "h-[87px]", imgClass: "h-full w-auto object-contain" },
                  { src: imgWb, alt: "WB", className: "h-[87px]", imgClass: "h-full w-auto object-contain" }
                ].map((logo, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className={`${logo.className} relative shrink-0 flex items-center justify-center`}
                  >
                    {logo.imgClass.includes('absolute') ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt={logo.alt} className={logo.imgClass} src={logo.src} />
                      </div>
                    ) : (
                      <img alt={logo.alt} className={logo.imgClass} src={logo.src} />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
