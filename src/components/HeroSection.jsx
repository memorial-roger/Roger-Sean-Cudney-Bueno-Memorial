import React, { useState } from "react";
import img1 from "../assets/f1.jpg";
import GuestbookPopup from "../components/GuestbookPopup";

const HeroSection = () => {
  const [showGuestbook, setShowGuestbook] = useState(false);

  const handleOpenGuestbook = (e) => {
    e.preventDefault();
    setShowGuestbook(true);
  };

  const handleCloseGuestbook = () => {
    setShowGuestbook(false);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center font-[Poppins] w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0 py-10">
        {/* Profile Image */}
        <div className="w-[180px] h-[180px] md:w-[326px] md:h-[326px] rounded-full overflow-hidden mb-8">
          <img
            src={img1}
            alt="Roger Sean Cudney Bueno"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[24px] md:text-[34px] font-medium mb-[22px] md:mb-[42px]">
          In memory of Roger Sean Cudney Bueno
        </h1>

        {/* Description */}
        <div className="text-black space-y-6 text-[16px] md:text-[18px] leading-relaxed">
          <p>
            On July 29, 2025, the scientific community lost Professor Roger Sean Cudney Bueno, a remarkable physicist, teacher, and mentor. Drawing on the best of American, Spanish, and Mexican cultures, Roger combined sharp intuition and creativity with a solid scientific foundation, a “no-nonsense” attitude, and a unique sense of humor, which made him stand out among his scientific peers.
          </p>
          <p>
            Born in Santa Monica, California in 1961, he moved with his family to Mexico City in 1967, completing his studies at Mexico’s National Autonomous University (UNAM) before earning a Ph.D. in Electrical Engineering with a specialization in Electrophysics from the University of Southern California (USC). He completed a postdoctoral fellowship at ETH Zurich and, in 1994, returned to Mexico, joining the Optics Department at CICESE, where he worked for 31 years while collaborating internationally with colleagues at Exeter University and the University of Southampton (United Kingdom), UC Davis, USC (USA), and ETH Zurich, where he was a visiting researcher for more than ten years.
          </p>
          <p>
            Professor Cudney dedicated his career to nonlinear optics, with a particular focus on the photorefractive effect in ferroelectric crystals. He conducted detailed studies of barium titanate, investigating photogalvanic and charge-transport effects on diffraction, two-beam coupling, and the fundamental physics of photorefractive gratings, as well as their applications. He also contributed to the development of optical parametric oscillators and generators using periodically and aperiodically poled lithium niobate and lithium tantalate, and to lasers - including tunable continuous-wave Cr:LiSAF, sub-nanosecond Q-switched, and dual-wavelength systems.
          </p>
          <p>
            Beyond his scientific contributions, Roger was a creative and unique teacher. He often used a guitar to illustrate laser concepts and gave seminars with titles such as <span className="italic">“La luz como chismosa sutil pero confiable” (“Light as a subtle—but reliable—gossiper”). </span> He demonstrated his care for students through rigor, insisting that they work diligently and write with clarity, always encouraging them to do things well.
          </p>
          <p>
            Roger pursued many passions beyond the realm of physics. He mastered photography, sculpturing, painting, lutherie, and guitar playing – be it in a punk band in high school or playing classical guitar in his home. He had a special fondness for <span className="italic">Roxy Music,</span> Janis Joplin and Joe Cocker, often imitating their voices and unique styles purely for shared fun and laughter. Roger was also a great cook — his almond-crust cheesecake being legendary among friends and family.
          </p>
          <p>
            His creativity and generosity left an indelible mark on the international photorefractive and nonlinear optics community, as well as on everyone who had the privilege of working with him and building lasting friendships. He leaves behind his wife, Deyanira; his sons, Daniel and Javier; an extended and loving family; and a lasting legacy of scientific excellence, mentorship, and cherished friendships.
          </p>
        </div>

        {/* Celebration */}
        {/* <div className="mt-10 text-start">
          <h2 className="text-[36px] font-semibold text-black mb-6">Celebration of Life </h2>
          <p className="text-[18px] font-normal mb-6">Professor Sayan Mukherjee, 54, passed away in Leipzig, Germany, on March 31, 2025. Sayan loved music, food and cooking (especially for others), funny t-shirts (sometimes on the border of good taste), and working with his colleagues and students. He took great joy in translating between ideas from different fields and in sharing this love with his students. And he especially loved being a father to his son, Kiran.</p>

          <h2 className="text-[28px] font-semibold mb-6">Program</h2>
          <p className="text-[18px] font-normal mb-6">A musical prelude and slideshow will begin at 10 am. The program will begin at 10:30 am.</p>

          <div className="flex justify-start sm:justify-start gap-12 sm:gap-24 mb-6 text-left">
            <div className="flex flex-col text-lg space-y-2 font-normal">
              <p>Opening Words</p>
              <p>Eulogy</p>
              <p>Words of Remembrance</p>
              <p>Remembrances</p>
            </div>

            <div className="flex flex-col text-lg space-y-2 font-normal">
              <p>Tribute</p>
              <p>Reflections</p>
              <p>Poem Reading</p>
              <p>Closing Words</p>
            </div>
          </div>

          <p className="text-[18px] font-normal mb-6">Following the program, please join us for a reception and lunch on the first floor of Gross Hall.</p>
        </div> */}

      </section>

      {/* Popup Guestbook Modal */}
      {showGuestbook && <GuestbookPopup onClose={handleCloseGuestbook} />}
    </>
  );
};

export default HeroSection;
