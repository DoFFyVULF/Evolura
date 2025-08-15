export type TeamCardsData = {
    id: number;
    name: string;
    post: string;
    img: string;
    links: string[]
}


const TeamCardsData: TeamCardsData[] = [
    {
        id: 1,
        name: 'James Anderson',
        post: 'Lead Web Designer',
        img: '/Images/Team/1.avif',
        links: ['https://instagram.com/', 'https://bsky.app/', 'https://linkedin.com/']
    },
    {
        id: 2,
        name: 'Sophia Patel',
        post: 'Digital Marketing Manager',
        img: '/Images/Team/2.avif',
        links: ['https://instagram.com/', 'https://bsky.app/', 'https://linkedin.com/']
    },
    {
        id: 3,
        name: 'Nathan Carter',
        post: 'Senior App Developer',
        img: '/Images/Team/3.avif',
        links: ['https://instagram.com/', 'https://bsky.app/', 'https://linkedin.com/']
    },
    {
        id: 4,
        name: 'Emily Wright',
        post: 'Creative Director',
        img: '/Images/Team/4.avif',
        links: ['https://instagram.com/', 'https://bsky.app/', 'https://linkedin.com/']
    },
]

export default TeamCardsData