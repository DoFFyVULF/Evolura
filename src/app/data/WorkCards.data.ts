export type WorkCardType = {
    id: number,
    title: string,
    tag: string,
    img: string
}

const WorkCardsData: WorkCardType[] = [
    {
        id: 1,
        title: 'Luminosity',
        tag: 'Photography',
        img: '/Images/6.avif'
    },
     {
        id: 2,
        title: 'Vibrance',
        tag: 'Branding',
        img: '/Images/7.avif'
    },
     {
        id: 3,
        title: 'Marketing',
        tag: 'Photography',
        img: '/Images/8.avif'
    }
]

export default WorkCardsData