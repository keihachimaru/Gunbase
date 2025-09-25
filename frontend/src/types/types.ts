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
    info: { id: number; name: string; image: string};
}
