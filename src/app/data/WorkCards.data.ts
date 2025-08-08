export type WorkCardType = {
    id: number,
    title: string,
    desc: string,
    tag: string,
    previewImg: string,
    link: string,
    images: string[],
    client: string,
    year: number,
    webiste: string
}

const WorkCardsData: WorkCardType[] = [
    {
        id: 1,
        title: 'Luminosity',
        desc: `A captivating photoshoot focused on glowing, ethereal lighting to highlight the brand’s luxury image.`,
        tag: 'Photography',
        previewImg: '/Images/6.avif',
        link: 'luminosity',
        images: [
            '/Images/Lum/1.avif',
            '/Images/Lum/2.avif',
            '/Images/Lum/3.avif',
            '/Images/Lum/4.avif',
            '/Images/Lum/5.avif',
        ],
        client: 'Aetherium',
        year: 2025,
        webiste: 'Luminosity'
    },
    {
        id: 2,
        title: 'Vibrance',
        desc: `A high-fashion photoshoot for the brand's seasonal campaign, capturing unique styles and looks.`,
        tag: 'Branding',
        previewImg: '/Images/7.avif',
        link: 'vibrance',
        images: [
            '/Images/Vib/1.avif',
            '/Images/Vib/2.avif',
            '/Images/Vib/3.avif',
            '/Images/Vib/4.avif',
            '/Images/Vib/5.avif',
        ],
        client: 'Luxe',
        year: 2025,
        webiste: 'Vibrance'
    },
    {
        id: 3,
        title: 'Inspirana',
        desc: `Designed an impactful digital ad campaign for a fashion retailer, creatively highlighting a new seasonal line, leading to increased online engagement and sales.`,
        tag: 'Marketing',
        previewImg: '/Images/8.avif',
        link: 'marketing',
         images: [
            '/Images/Insp/1.avif',
            '/Images/Insp/2.avif',
            '/Images/Insp/3.avif',
            '/Images/Insp/4.avif',
            '/Images/Insp/5.avif',
        ],
        client: 'ModeStreet',
        year: 2025,
        webiste: 'inspirana'
    },
    {
        id: 4,
        title: 'Momentum',
        desc: `Carefully curating the perfect set of models for a high-concept fashion show, blending diversity with cutting-edge style.`,
        tag: 'Branding',
        previewImg: '/Images/12.avif',
        link: 'momentum',
         images: [
            '/Images/Mnt/1.webp',
            '/Images/Mnt/2.webp',
            '/Images/Mnt/3.webp',
            '/Images/Mnt/4.avif',
            '/Images/Mnt/5.webp',
        ],
        client: 'Reverie',
        year: 2025,
        webiste: 'Momentum'
    }
]

export default WorkCardsData