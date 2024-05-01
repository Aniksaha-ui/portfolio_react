import { Fragment } from "react";
import Inner from "./inner";
import AboutSection from "./AboutSection";
import Stats from "./Stats";
import Team from "./Team";

const About = () => {
  return (
    <Fragment>
      <div>
        {/* inner banner */}
        <Inner />
        {/* //inner banner */}
        {/* about block */}
        <AboutSection />
        {/* //about block */}
        {/* stats */}
        <Stats />
        {/* //stats */}
        {/* team */}
        <Team />
        {/* team */}
      </div>
    </Fragment>
  );
};

export default About;
