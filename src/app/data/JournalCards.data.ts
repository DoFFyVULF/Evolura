export type JournalCardDataType = {
    id: number,
    title: string,
    tag: string,
    img: string
}

const JournalCardData: JournalCardDataType[] = [
    {
        id: 1,
        title: 'How to Use Color Psychology in Branding',
        tag: 'Branding',
        img: '/Images/9.avif'
    },
    {
        id: 2,
        title: 'The Importance of Branding in the Digital Age',
        tag: 'Branding',
        img: '/Images/10.avif'
    },
    {
        id: 3,
        title: 'The Role of User Experience in Branding',
        tag: 'Branding',
        img: '/Images/11.avif'
    },
    {
        id: 4,
        title: 'Maximizing Marketing with Content Strategy',
        tag: 'Marketing',
        img: '/Images/10.avif'
    }
]

export default JournalCardData