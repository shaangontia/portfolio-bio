// Types for the bio data
export interface Bio {
	name: string;
	tagline: string;
	heroText: string;
	about: string;
	skills: string[];
}

export interface Experience {
	company: string;
	role: string;
	date: string;
	description: string[];
	url: string;
}
export type Experiences = Experience[];

export interface Education {
	school: string;
	degree: string;
	date: string;
	location: string;
	achievements: string[];
}

export interface Project {
	title: string;
	description: string;
	tech: string[];
	links: {
		external: string;
		github?: string;
	};
}
export type Projects = Project[];

export interface Publication {
	title: string;
	publisher: string;
	date: string;
	url: string;
	description: string;
}
export type Publications = Publication[];

// Data
export const bio: Bio = {
	name: 'Shantanu Gontia',
	tagline:
		'I build accessible, inclusive products and digital experiences for the web.',
	heroText:
		"I'm an Engineering Manager and software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
	about: `Hello! My name is Shantanu and I enjoy creating things that live on the internet. My interest in web development started back when I was exploring data science and leadership, which surprisingly led me to the world of frontend engineering.

Fast-forward to today, and I've had the privilege of writing comprehensive articles on React optimizations, TypeScript, and architectural patterns. My main focus these days is building accessible, inclusive products and digital experiences for a variety of customers.

I also love sharing knowledge through writing. I've published articles on "Advanced React Optimization", "Zod for Data Validation", and "Micro-Frontends".`,
	skills: [
		'TypeScript',
		'React',
		'Redux-toolkit',
		'React-Native',
		'Vite',
		'Next.js',
		'Node.js',
		'Material UI',
	],
};

export const experiences: Experiences = [
	{
		company: 'Thinkproject',
		role: 'Software Develppment Manager',
		date: 'January 2022 - Present',
		description: [
			'Responsible for leading cross-functional engineering teams to deliver the Field Manager product.',
			'Owns technical strategy, delivery execution, and quality across the product lifecycle.',
			'Collaborates with Product, QA, and stakeholders to align roadmap and business goals.',
			'Drives engineering excellence, team growth, and continuous improvement.',
			'Leading frontend development for core products using React and TypeScript.',
			'Implementing micro-frontend architectures to improve scalability and team autonomy.',
			'Focusing on performance optimization, reducing load times and improving Core Web Vitals.',
			'Mentoring junior developers and conducting code reviews to maintain high code quality.',
		],
		url: 'https://thinkproject.com',
	},
	{
		company: 'Oracle India Pvt Ltd',
		role: 'Principal Engineer',
		date: '2018 - 2021',
		description: [
			"Developed and maintained critical components for the company's main web application.",
			'Collaborated closely with designers to implement pixel-perfect user interfaces.',
			'Migrated legacy codebases to modern React with Hooks and Context API.',
			"Led the technical direction and architecture of the company's main web application.",
			'Mentored junior developers and conducted code reviews to maintain high code quality.',
		],
		url: 'www.oracle.com',
	},
	{
		company: 'Cura Tech Pvt Ltd',
		role: 'Senior iOS Developer',
		date: '2017 - 2018',
		description: [
			"Developed and maintained critical components for the company's main web application.",
			'Collaborated closely with designers to implement pixel-perfect user interfaces.',
			'Migrated legacy codebases to modern React with Hooks and Context API.',
			"Led the technical direction and architecture of the company's main web application.",
			'Mentored junior developers and conducted code reviews to maintain high code quality.',
		],
		url: 'www.oracle.com',
	},
	{
		company: 'Oracle India Pvt Ltd',
		role: 'Associate Application Engineer',
		date: 'Jul 2014 - Aug 2017',
		description: [
			"Engineered the frontend architecture for Oracle Primavera's Enterprise Project Portfolio Management application using JavaScript, HTML5, and CSS.",
			'Implemented robust backend integration involving RESTful web services and WebSockets using Java, ensuring real-time data synchronization and high performance.',
		],
		url: 'https://www.oracle.com',
	},
	{
		company: 'Oracle India Pvt Ltd',
		role: 'Graduate Student Intern',
		date: 'Jun 2013 - May 2014',
		description: [
			'Served as a Sustaining Engineering Developer for the Oracle Retail Merchandising System, focusing on system stability and reliability.',
			'Conducted in-depth root cause analysis to diagnose and resolve critical product defects reported by enterprise customers, significantly improving system uptime.',
		],
		url: 'https://www.oracle.com',
	},
	{
		company: 'Cognizant Technology Solutions',
		role: 'Programmer Analyst',
		date: 'Apr 2011 - Jul 2012',
		description: [
			"Developed scalable Business Intelligence solutions for Dun & Bradstreet's Global Linkage application as a Java BI Developer.",
			'Leveraged a technology stack comprising J2EE, Spring Framework, JDBC, JavaScript, and JSP to deliver data-driven features in an Agile environment.',
		],
		url: 'https://www.cognizant.com',
	},
];

export const education: Education[] = [
	{
		school: 'Manipal Institute of Technology, Manipal',
		degree: 'Master of Technology - MTech, Computer Science and Engineering',
		date: '2012 - 2014',
		location: 'Manipal, India',
		achievements: [
			'Ministry of Human Resource and Development Scholarship',
			'Graduate Aptitude  examination (GATE) qualified',
		],
	},
];

export const projects: Projects = [
	{
		title: 'Know Your Weather',
		description:
			'The application quickly finds and displays the current weather of your area. Search by your area/city/country/pincode and you would get the weather details in a single click.',
		tech: ['React', 'API Integration', 'Heroku'],
		links: {
			external: 'https://shaan-weather-application.herokuapp.com',
		},
	},
	{
		title: 'URL Encoder and Decoder',
		description:
			'An application that encodes/decodes URL/text to ensure security and reliability during data transmission.',
		tech: ['JavaScript', 'Utilities', 'Security'],
		links: {
			external: 'https://url-encoder-decoder.herokuapp.com',
		},
	},
];

export const publications: Publications = [
	{
		title:
			'Advanced React Optimization: Fine-Tuning Re-renders with Memoization',
		publisher: 'Stackademic',
		date: 'Sep 11, 2024',
		url: 'https://medium.com/@shaangontia/re-render-46db65929abb',
		description:
			"A deep dive into React's reconciliation process and how to effectively use React.memo and useMemo to prevent unnecessary re-renders in large scale applications.",
	},
	{
		title: 'Boost Your TypeScript Skills: Effortless Data Validation with Zod',
		publisher: 'Stackademic',
		date: 'Jun 13, 2024',
		url: 'https://blog.stackademic.com/boost-your-typescript-skills-effortless-data-validation-with-zod-4eb05177fb5f',
		description:
			'Exploring how Zod can be used for runtime validation to ensure TypeScript types match runtime data, eliminating unexpected errors.',
	},
	{
		title: 'Vite Bundler with React and TypeScript: A Quick Guide',
		publisher: 'Medium',
		date: 'Dec 21, 2023',
		url: 'https://blog.stackademic.com/vite-bundler-with-react-and-typescript-a-quick-guide-e2955ec7271e',
		description:
			"Setting up a lightning-fast development environment using Vite, explaining why it's faster than Webpack and how to configure it for React projects.",
	},
	{
		title: 'Integrate Micro-Frontends in an easy way with React',
		publisher: 'Medium',
		date: 'Sep 21, 2023',
		url: 'https://medium.com/@shaangontia/integrate-micro-frontends-in-an-easy-way-with-react-50f0ef26ba60',
		description:
			'A practical guide to implementing micro-frontends architecture using React, discussing the benefits and common pitfalls.',
	},
];

// Social links configuration
export const socialLinks = {
	github: 'https://github.com/shaangontia',
	linkedin: 'https://www.linkedin.com/in/shantanu-gontia/',
	email: 'shaan.ce@gmail.com',
};
