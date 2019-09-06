export interface SimpleLink {
    url: string;
    title: string;
    avgTimeInSeconds: number;
}

export const SAMPLE_LINKS: SimpleLink[]  = [
    {
        url: 'https://www.wired.com/story/trump-tweeted-a-sensitive-photo-internet-sleuths-decoded-it/',
        title: 'Trump drone story',
        avgTimeInSeconds: 500,
    },
    {
        url: 'https://www.nytimes.com/2019/09/04/world/americas/bahamas-stunned-as-water-recedes-its-like-a-bomb-went-off.html?action=click&module=Top%20Stories&pgtype=Homepage',
        title: 'Dorian, Bahamas',
        avgTimeInSeconds: 400,
    },
    {
        url: 'https://onezero.medium.com/how-to-ensure-our-digital-legacy-isnt-lost-to-the-future-f6a226bc6792',
        title: 'Bit rot',
        avgTimeInSeconds: 180,
    }
]