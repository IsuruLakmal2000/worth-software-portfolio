import restauranatImg from '../assets/portfolio/hungrypuppet.PNG'
import outsourceImg from '../assets/portfolio/talentphere.PNG'
import vehicleRentingImg from '../assets/portfolio/southroadtrips.PNG'
import organicquestImg from '../assets/portfolio/organic-quest.PNG'
import dishupImg from '../assets/portfolio/dishup.PNG'
import focusfarmImg from '../assets/portfolio/focusfarm.PNG'
import mobileposImg from '../assets/portfolio/mobilepos.webp'
import rqMenuImg from '../assets/portfolio/rq menu.avif'

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    client: string;
    year: string;
    services: string[];
    detailedDescription: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Restaurant Management System',
        description: 'Restaurant Management System with advanced features',
        image: restauranatImg,
        client: 'Hungry Puppet',
        year: '2025',
        services: ['Web Development', 'UI/UX Design', 'Database Management'],
        detailedDescription: 'Hungry Puppet is a state-of-the-art Restaurant Management System designed to streamline culinary operations and enhance the dining experience. By integrating real-time order processing, intelligent inventory tracking, and dynamic staff scheduling into a single, cohesive platform, we empowered the client to reduce operational bottlenecks and focus on what truly matters—serving exceptional food. The system features a robust kitchen display interface that synchronizes instantly with front-of-house terminals, ensuring seamless communication and improving table turnover rates by over 30%. This project stands as a testament to how digital transformation can revolutionize traditional hospitality workflows.'
    },
    {
        id: 2,
        title: 'Talents Outsource Platform',
        description: 'Comprehensive talent and client management solution',
        image: outsourceImg,
        client: 'Talent Sphere',
        year: '2025',
        services: ['Platform Development', 'Cloud Infrastructure'],
        detailedDescription: 'Talent Sphere defines the future of remote work by bridging the gap between world-class organizations and elite global talent. This comprehensive outsourcing platform was engineered to handle the complexities of modern recruitment, featuring an automated vetting engine and an AI-driven matching algorithm that connects clients with the perfect candidates in record time. Beyond simple job postings, the ecosystem provides secure contract management, milestone tracking, and integrated payment solutions, creating a frictionless environment for professional collaboration. The result is a scalable, secure, and intuitive platform that has facilitated hundreds of successful placements since its launch.'
    },
    {
        id: 3,
        title: 'Vehicle Renting Website',
        description: 'System with features to manage rentings and tours',
        image: vehicleRentingImg,
        client: 'South Road Trips',
        year: '2025',
        services: ['E-commerce', 'Booking System'],
        detailedDescription: 'South Road Trips offers a premium digital gateway to adventure, designed to make vehicle rental and tour booking as effortless as the journey itself. We crafted a custom booking engine that eliminates the chaos of manual scheduling, offering real-time availability, instant confirmations, and secure payment processing. The platform\'s sleek, responsive design ensures a flawless experience across all devices, allowing travelers to plan their trips on the go. By automating complex logistical details and preventing double-bookings, we helped the client increase operational efficiency and boost online reservations by 40%.'
    },
    {
        id: 4,
        title: 'Organic Quest – Online Education Platform',
        description: 'A comprehensive and engaging online education solution',
        image: organicquestImg,
        client: 'Organic Quest',
        year: '2025',
        services: ['EdTech', 'Interactive Design'],
        detailedDescription: 'Organic Quest reimagines online education by transforming passive learning into an immersive, interactive adventure. Recognizing that engagement is the key to retention, we developed a learning management system infused with gamification elements that reward progress and curiosity. The platform offers structured courses, interactive quizzes, and detailed progress analytics, providing a personalized learning path for every student. This dynamic approach not only captured the attention of younger demographics but also delivered a 60% increase in student engagement, proving that education can be both effective and undeniably fun.'
    },
    {
        id: 5,
        title: 'Dishup – Smart Restaurant Menu Scan App',
        description: 'Comprehensive digital menu scanning and contactless ordering solution',
        image: dishupImg,
        client: 'Dishup Tech',
        year: '2025',
        services: ['Mobile App', 'QR Technology'],
        detailedDescription: 'Dishup allows restaurants to leap into the digital age with a contactless, QR-based menu solution that requires no app downloads. Born from the need for hygiene and efficiency, this web application delivers dynamic, visually rich menus directly to customers\' smartphones instantly. It empowers restaurant owners to update prices and items in real-time, eliminating printing costs and waste. With a lightning-fast interface and intuitive navigation, Dishup has enhanced the customer dining experience in over 50 locations, setting a new standard for modern restaurant service.'
    },
    {
        id: 6,
        title: 'Focusfarm – Personal Goal Focusing App',
        description: 'A smart and motivating solution to set goals and track progress',
        image: focusfarmImg,
        client: 'FocusFarm',
        year: '2025',
        services: ['Productivity Tool', 'Mobile Development'],
        detailedDescription: 'Focusfarm is more than just a habit tracker; it is a dedicated partner in personal growth. Designed to combat procrastination and lack of motivation, this application combines psychological principles with sleek, user-centric design to help users stay committed to their long-term goals. Featuring visual progress streaks, social accountability tools, and insightful analytics, Focusfarm turns daily routines into rewarding achievements. The app\'s engaging interface and smart reminder systems have helped users double their goal completion rates, making self-improvement a sustainable and enjoyable lifestyle.'
    },
    {
        id: 7,
        title: 'QR Based Restaurant Menu System',
        description: 'QR-based digital menu and table-side ordering system (Under development)',
        image: rqMenuImg,
        client: 'WorthSoftware',
        year: '2026',
        services: ['Web App', 'QR Technology', 'Admin Dashboard'],
        detailedDescription: 'This QR based restaurant menu system delivers mobile-first menus that open instantly from table QR codes, with real-time item availability, pricing, and category management. The platform includes a secure admin dashboard for staff to update menus, manage table sections, and review order analytics. It is currently under development, with ordering workflows, multilingual support, and POS integration in active build and testing phases.'
    },
    {
        id: 8,
        title: 'Mobile POS System',
        description: 'Mobile point-of-sale solution for fast billing and inventory sync (Under development)',
        image: mobileposImg,
        client: 'WorthSoftware',
        year: '2026',
        services: ['Mobile App', 'POS Integration', 'Payments'],
        detailedDescription: 'The mobile POS system is designed for small to mid-sized retailers who need fast billing, barcode scanning, and real-time inventory synchronization across devices. It supports offline mode with automatic sync, role-based access for staff, and printable or digital receipts for customers. This project is under development, with payment integrations, reporting dashboards, and hardware compatibility currently being finalized.'
    }
];
