export const projectsData = [
    {
        id: 1,
        name: 'TrendLama',
        description: "TrendLama is a microservices-based e-commerce platform featuring completely autonomous Auth, Product, Order, Payment, and Email services built with independently deployable APIs. It leverages Fastify and MongoDB for scalable order workflows alongside Express and Prisma ORM for product management. Utilizes Apache Kafka for high-throughput, asynchronous event streaming across service clusters, with Stripe processing payments and the entire system containerized via Docker and Docker Compose.",
        tools: ['Next.js', 'Express.js', 'Fastify', 'Hono', 'Apache Kafka', 'Docker', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'Stripe'],
        role: 'Backend & System Design Developer',
        code: 'https://github.com/raghavv483/microservices-ecommerce',
        demo: 'https://microservices-ecommerce-client.vercel.app/',
    },
    {
        id: 2,
        name: 'AIcademy',
        description: "AIcademy is a Next.js SaaS platform that enables users to generate, manage, and track AI-curated courses. It leverages the Groq API for automated course creation and the YouTube API for personalized video lessons, while Clerk ensures secure authentication. Each course has its own dynamic page with progress tracking and resources, supported by Supabase for storage and a scalable Drizzle ORM + Neon PostgreSQL database. With integrated Stripe payments, AIcademy offers a seamless end-to-end experience for AI-driven learning.",
        tools: ['Next.js', 'Tailwind CSS', 'Groq API', 'Drizzle ORM', 'Clerk', 'PostgreSQL', 'YoutubeAPI', 'SupaBase', 'Stripe'],
        role: 'Full Stack Developer',
        code: 'https://github.com/raghavv483/AIcademy',
        demo: 'https://a-icademy-gmwp.vercel.app/',
    },
    {
        id: 3,
        name: 'Netflix GPT',
        description: "A personalized movie recommendation app that combines TMDB API with Gemini to suggest movies and TV shows based on user mood and preferences. Users can search, filter, and view trending shows in real-time. Implemented authentication and deployed with production-ready optimizations.",
        tools: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Firebase', 'TMDB API', 'GeminiAPI'],
        role: 'Frontend Developer',
        code: 'https://github.com/raghavv483/netflix-gpt',
        demo: 'https://netflix-gpt-two-azure.vercel.app',
    },
];