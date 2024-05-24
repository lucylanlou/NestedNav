import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] mx-auto flex flex-col gap-9 lg:p-48 py-48 px-24">
      <h1 className="text-[48px]">Nested Nav Bar</h1>
      <p>
        -Hi I literally pulled an all nighter after a 4 hour dance rehearsal
        that ended at midnight to finish this, have a showcase in a few hours,
        and came back from greece a few days ago LOL.
      </p>
      <p>
        -So anyways I thought it would be creative to make this navbar like a
        "resume" so you all can get to know me better, but apparently there's
        too much about me to know bc I definitely had to cut things SHORT. But
        the gist is here.
      </p>
      <p>
        -This website uses React and Tailwindcss and is written in Typescript
      </p>
      <p>
        -Lots of different components, nested ones and ones with icons,
        short/long. Check out my figma file under the "Prototype" tab! Its
        incomplete I had to get going with actually implementing, but the
        components are named the same as in the code.
      </p>
      <p>
        -It's responsive til screen size sm. I didn't have time to do mobile, my
        call time for my show is in 2 hours and I haven't even choreographed my
        solo.
      </p>
      <p>
        -"Skills" is disabled to show what that would look like and also I think
        its funny to be like I have no skills.
      </p>
    </section>
  );
};

export default Hero;
