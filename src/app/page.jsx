
import CardSection from '@florezf90gym/components/cardSection';
import introCardsInfo from "@florezf90gym/utils/introCardsInfo";
import CardComponent from '@florezf90gym/components/cardComponent';

export default function Home() {
  const { sectionInfo } = introCardsInfo();
  const { title, subtitle, cards } = sectionInfo;



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
        <CardSection
          sectionTitle={title}
          subtitle={subtitle}
          cards={finalCards}
        />
      </main>
    );
}