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
    stateText: "Hadi başlayalım",
    uuids: [
      "BE6E45F7-E8DB-4EDA-99D6-56AAAFDD0FC2",
      "E82B67CC-F5F4-4976-AA95-05C705909D57",
      "FDA50693-A4E2-4FB1-AFCF-C6EB07647825"
    ],
    proximities: ["IMMEDIATE", "NEAR","FAR" ],
    lastProximityIndex: 3,
    proximityTexts: [
      "Veee hedeftesin🥇",
      "Çok iyi gidiyorsun böyle devam👏",
      "Hedef ufukta gözüktü😉",
      "Yukarıdaki logo sana çok yakınlarda☝️ Bulup yeni bir seviyeye geçebilirsin🏃🏼"
    ]
  };
};
