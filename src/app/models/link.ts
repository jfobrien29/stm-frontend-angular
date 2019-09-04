export interface SimpleLink {
    url: string;
    title: string;
    avgTimeInSeconds: number;
}

export const SAMPLE_LINKS: SimpleLink[]  = [
    {
        url: 'google.com',
        title: 'Google',
        avgTimeInSeconds: 500,
    },
    {
        url: 'nyt.com',
        title: 'New York Times',
        avgTimeInSeconds: 400,
    },
    {
        url: 'medium.com',
        title: 'Medium',
        avgTimeInSeconds: 180,
    }
]