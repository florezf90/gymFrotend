
import styles from './global.module.css'
import ControlledCarousel from "@florezf90gym/components/carousel";
import CardSection from '@florezf90gym/components/cardSection';
import introCardsInfo from "@florezf90gym/utils/introCardsInfo";
import CardComponent from '@florezf90gym/components/cardComponent';
import FixedBackgroundSec from '@florezf90gym/components/fixedBacgroundSec';
import PerksInfo from "@florezf90gym/utils/perks.info";
export default function Home() {
  const { sectionInfo } = introCardsInfo();
  const { title, subtitle, cards } = sectionInfo;

  const  perksInfo  = PerksInfo();
  const {
    title: perksTitle,
    subtitle: perksSubtitle,
    cards: perksCards,
  } = perksInfo.perksSectionInfo;

  const finalPerksCards = perksCards.map((card, index) => (
    <CardComponent
      key={index}
      title={card.title}
      text={card.Text}
      buttonType={card.buttonType}
      styling={card.styling}
    />
  ));

  const finalCards = cards.map((card, index) => (
    <CardComponent
      key={index}
      title={card.title}
      text={card.text}
      buttonType={card.buttonType}
      styling={card.styling}
    />
  ))

    return (
      <main>
        <ControlledCarousel />
        <CardSection
          sectionTitle={title}
          subtitle={subtitle}
          cards={finalCards}
        />
   <FixedBackgroundSec title={perksTitle} subtitle={perksSubtitle} cards={finalPerksCards} />
      </main>
    );
}