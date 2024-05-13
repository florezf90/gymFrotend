export default function PerksInfo() {

    const perkData = [
      {
        title: "Perk 1",
        Text: "free membership",
        buttonType: "View Details",
        styling: "my-3",
      },

      {
        title: "Perk 2",
        Text: "free membership",
        buttonType: "View Details",
        styling: "my-5",
      },
      {
        title: "Perk 3",
        Text: "free membership",
        buttonType: "View Details",
        styling: "my-3",
      },

      {
        title: "Perk 4",
        Text: "free membership",
        buttonType: "View Details",
        styling: "my-5",
      },
    ];

    const perksSectionInfo = {
      title: "Perks",
      subtitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      cards: perkData,
    };

    return { perksSectionInfo };
}
