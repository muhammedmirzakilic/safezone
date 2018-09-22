export const Model = props => {
  return {
    title: "Tour Page",
    cups: [
      {
        name: "tall",
        isActive: false
      },
      {
        name: "grande",
        isActive: false
      },
      {
        name: "venti",
        isActive: false
      }
    ],
    level: 0,
    avatars: ["superman", "batman", "vecihi"],
    stateText: "Hayde baslayalim",
    uuids: [
      "FDA50693-A4E2-4FB1-AFCF-C6EB07647825",
      "FDA50693-A4E2-4FB1-AFCF-C6EB07647825",
      "f7826da6-4fa2-4e98-8024-bc5b71e0893e"
    ],
    proximities: ["FAR", "NEAR", "IMMEDIATE"],
    lastProximityIndex: 3,
    proximityTexts: [
      "Veee hedeftesin",
      "Iyi gidiyorsun boyle devam",
      "Hedef ufukta gozuktu",
      "Yeni hedef zamani. Hadi yukardaki logoyu bulmaya calisalim"
    ]
  };
};
