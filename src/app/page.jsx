
import introCardsInfo from "@florezf90gym/utils/introCardsInfo";

import FixedBackground from '@florezf90gym/components/fixedBackground';
import gymgirl from "../../public/gymgirl.webp";
import styles from'../components/components.module.css';

import HomeAboutSect from '@florezf90gym/components/homeAboutSect';


import HomeBenefits from "@florezf90gym/components/HomeBenefits";
import Team from "@florezf90gym/components/Team";


export default function Home() {

  const herotext = "Where Fitness Becomes Your Lifestyle";

  const { sectionInfo } = introCardsInfo();
  const { title  } = sectionInfo;


    return (
      <main>
        <FixedBackground
          background={gymgirl}
          title={title}
          text={herotext}
          style={styles.fixedImgContainer}
        />
        <HomeAboutSect />
        <HomeBenefits />
        <Team />
      </main>
    );
}