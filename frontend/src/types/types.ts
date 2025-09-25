export type CarouselProps = {
    items: { id: number; title: string; image: string }[];
}

export type NewsProps = {
    items : { id: number; title: string; content: string; link: string}[];
}

export type LatestProps = {
    items : { id: number; title: string; content: string}[];
}

export type KitProps = {
  info: {
    id: number;
    name: string;
    series: string;
    grade: string;
    scale: string;
    releaseDate: string; // YYYY-MM-DD
    runners: number;
    MSRP: number; // in €
    colorSeparation: string;
    polycaps: boolean;
    innerFrame: boolean;
    galleries: {
      type: "official" | "user";
      url: string;
      caption: string;
    }[];
    difficulty: number; // 1-5
    buildTime: string; // e.g. "3-4h"
    stickerLoad: "Light" | "Medium" | "Heavy";
    articulation: number; // stars 1-5
    accessories: string[];
  };
};
