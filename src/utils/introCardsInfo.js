export default function introCardsInfo () {

  const cardData = [
    {
      title: "gropus workout",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonType: "view schedule",
      styling: "my-5",
    },
    {
      title: "body building ",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonType: "view schedule",
    },
    {
      title: "boxing",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonType: "view schedule",
      styling: "my-5",
    },
  ];

    const sectionInfo = {
      title: "welcome to florezf90gym!",
      subtitle:
        "Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.",
      cards: cardData,
    };

  return { sectionInfo };
}