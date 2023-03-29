import { atom, selector } from "recoil";

export const preference = atom({
  key: "preference",
  default: {
    gender: "",
    age: "",
    price: "",
    isExperience: "",
    whiskies: [],
    flavor: {
      smoky: 0,
      peaty: 0,
      spicy: 0,
      herbal: 0,
      oily: 0,
      body: 0,
      rich: 0,
      sweet: 0,
      salty: 0,
      vanilla: 0,
      tart: 0,
      fruity: 0,
      floral: 0,
    },
  },
});

export const recommendResult = atom({
  key: "recommendResult",
  default: [
    {
      id: 1467,
      name: "Port Askaig 10 Year 10th Anniversary",
      imageUrl:
        "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_1466.png",
      category: "Peated Single Malt",
      location: "Islay, Scotland",
      priceTier: 4,
      abv: 55.85,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 3368,
      name: "Compass Box Flaming Heart 15th Anniversary Limited Edition",
      imageUrl:
        "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_3367.png",
      category: "Blended Malt",
      location: "Scotland",
      priceTier: 4,
      abv: 48.9,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 327,
      name: "Laphroaig Cairdeas 2018 Fino Cask Finish",
      imageUrl: "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_326.png",
      category: "Peated Single Malt",
      location: "Islay, Scotland",
      priceTier: 4,
      abv: 51.8,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 239,
      name: "Octomore 06.1/167 Scottish Barley",
      imageUrl: "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_238.png",
      category: "Peated Single Malt",
      location: "Islay, Scotland",
      priceTier: 4,
      abv: 57.0,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 1989,
      name: "Longrow Red 11 Year Cabernet Sauvignon Finish",
      imageUrl:
        "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_1988.png",
      category: "Peated Single Malt",
      location: "Campbeltown, Scotland",
      priceTier: 4,
      abv: 52.1,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 1982,
      name: "Kilchoman Loch Gorm (2015 Edition)",
      imageUrl:
        "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_1981.png",
      category: "Peated Single Malt",
      location: "Islay, Scotland",
      priceTier: 4,
      abv: 46.0,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 599,
      name: "Talisker Distillers Edition",
      imageUrl: "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_598.png",
      category: "Peated Single Malt",
      location: "Islands, Scotland",
      priceTier: 4,
      abv: 45.8,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 96,
      name: "Lagavulin Distillers Edition",
      imageUrl: "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_95.png",
      category: "Peated Single Malt",
      location: "Islay, Scotland",
      priceTier: 4,
      abv: 43.0,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
    {
      id: 950,
      name: "Westland Peat Week 2016",
      imageUrl: "https://half-moon-bear.s3.ap-northeast-2.amazonaws.com/images/whiskies/NO_949.png",
      category: "American Single Malt",
      location: "Washington, USA",
      priceTier: 4,
      abv: 50.0,
      reviewCount: 0,
      avgRating: 0.0,
      isKept: false,
    },
  ],
});
