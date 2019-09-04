export interface SimpleLink {
    url: string;
    title: string;
    avgTimeInSeconds: number;
}

export const SAMPLE_LINKS: SimpleLink[]  = [
    {
        url: 'http://www.google.com',
        title: 'Google',
        avgTimeInSeconds: 500,
    },
    {
        url: 'http://www.nyt.com',
        title: 'New York Times',
        avgTimeInSeconds: 400,
    },
    {
        url: 'http://www.medium.com',
        title: 'Medium',
        avgTimeInSeconds: 180,
    }
]