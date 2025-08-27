export const projectsData = [
    {
        id: 1,
        name: 'AIcademy',
        description: "AIcademy is a Next.js SaaS platform that enables users to generate, manage, and track AI-curated courses. It leverages the Groq API for automated course creation and the YouTube API for personalized video lessons, while Clerk ensures secure authentication. Each course has its own dynamic page with progress tracking and resources, supported by Supabase for storage and a scalable Drizzle ORM + Neon PostgreSQL database. With integrated Stripe payments, AIcademy offers a seamless end-to-end experience for AI-driven learning",
        tools: ['Next.js', 'Tailwind CSS', 'Groq API', 'PrismaORM', 'Clerk', 'PostgreSQL', 'YoutubeAPI', 'SupaBase'],
        role: 'Full Stack Developer',
        code: 'https://github.com/raghavv483/AIcademy',
        demo: 'https://a-icademy-gmwp.vercel.app/',
    },
    {
        id: 2,
        name: 'Netflix GPT',
        description: "A personalized movie recommendation app that combines TMDB API with Gemini to suggest movies and TV shows based on user mood and preferences. Users can search, filter, and view trending shows in real-time. Implemented authentication and deployed with production-ready optimizations.",
        tools: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Firebase', 'TMDB API', 'GeminiAPI'],
        role: 'Frontend Developer',
        code: 'https://github.com/raghavv483/netflix-gpt',
        demo: 'https://netflix-gpt-two-azure.vercel.app'
    },
    {
        id: 3,
        name: 'Mystery Messenger',
        description: "Mystery Messenger is an anonymous real-time chat web application where users can send and receive secret messages. It features authentication, message encryption, and secure database storage. Built with Socket.io for live messaging and Firebase for authentication and hosting.",
        tools: ['Next.js', 'Tailwind CSS', 'Firebase', 'MongoDB'],
        role: 'Full Stack Developer',
        code: 'https://github.com/raghavv483/mystery-messager',
        demo: '',
    },
    {
        id: 4,
        name: 'Solana Token Launchpad',
        description: "A decentralized application (dApp) for creating and launching tokens on the Solana blockchain. Users can connect wallets, create SPL tokens, and manage token distribution. The project integrates Solana Web3.js, smart contracts, and Phantom wallet for transactions.",
        tools: ['Solana Web3.js', 'Next.js', 'Tailwind CSS', 'Phantom Wallet'],
        role: 'Blockchain Developer',
        code: 'https://github.com/raghavv483/solana-token-launchpad',
        demo: '',
    }
];
