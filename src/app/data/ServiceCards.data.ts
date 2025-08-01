export type ServiceCardType = {
    id: number,
    title: string,
    text: string,
    tags: string[]
    img: string
}

const ServiceDataCards: ServiceCardType[] = [
  {
    id: 1,
    title: 'Branding',
    text: 'Developing a unique identity for a business, including its logo, voice, and overall image to resonate with the target audience.',
    tags: ['Identity', 'Strategy', 'Logos', 'Typography', 'Messaging', 'Packaging'],
    img: '/Images/3.avif'
  },
  {
    id: 2,
    title: 'Design',
    text: 'Creating visually engaging and functional designs for various mediums, from digital interfaces to print materials.',
    tags: ['Web', 'Graphics', 'Layouts', 'Animations', 'Mockups', 'UI / UX'],
    img: '/Images/4.avif'
    
  },
  {
    id: 3,
    title: 'Photography',
    text: 'Capturing high-quality images for branding, advertising, and product promotion, tailored to meet client needs.',
    tags: ['Portrait', 'Product', 'Lifestyle', 'Commercial', 'Event', 'Corporate'],
    img: '/Images/5.avif'
  }
]

export default ServiceDataCards