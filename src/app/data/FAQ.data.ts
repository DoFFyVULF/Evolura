export type FAQType = {
    id?: number,
    question: string,
    answer: string
}

const FAQ: FAQType[] = [
    {
        id: 1,
        question: 'What services do you offer?',
        answer: 'We specialize in branding, marketing, and design services to help businesses build a strong and cohesive identity. Our offerings include brand strategy, logo design, website design, digital marketing, social media management, and more. We work with you to create custom solutions that align with your goals and vision.'
    },
      {
        id: 2,
        question: 'How long does it take to complete a branding or design project?',
        answer: 'The timeline for a project can vary based on its complexity and scope. Typically, branding and design projects can take anywhere from a few weeks to a few months. We work closely with clients to ensure timelines are clear and realistic, keeping you informed every step of the way.'
    },
      {
        id: 3,
        question: 'How do you determine the pricing for your services?',
        answer: 'Our pricing is tailored to the specific needs of each project. Factors such as the scope of work, complexity, and deliverables influence the cost. We offer transparent pricing and will provide a detailed proposal before starting any project so you know exactly what to expect.'
    },
      {
        id: 4,
        question: 'Can you help with both rebranding and creating a new brand from scratch?',
        answer: `Absolutely! Whether you're looking to refresh an existing brand or build a new one from the ground up, we have the expertise to guide you through the entire process. Our team works with you to create a brand identity that resonates with your audience and sets you apart from competitors.`
    },
      {
        id: 5,
        question: 'Will I own the rights to the designs you create for my brand?',
        answer: 'Yes, once the project is complete and payment is made, you will own full rights to the designs and assets we create for your brand. We provide all necessary files and documentation so you have complete control over how your brand is represented.'
    }
]

export default  FAQ