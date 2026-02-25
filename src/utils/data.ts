import type { Project, SkillGroup, Experience, SocialLink } from '../types';


export const personalInfo = {
  name: 'Sabona Misgana',
  title: 'Software Engineering Graduate',
  tagline: 'Full-Stack Developer',
  email: 'sebonamisgana@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  bio: `I'm a passionate Software Engineering Graduate with a strong foundation in full-stack development.
  I love building scalable web applications and creating exceptional user experiences.
  Currently pursued my degree while working on exciting projects that solve real-world problems.`,
  resumeUrl: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sabboo5',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sabonamisgana',
    icon: 'linkedin',
  },
 {
  name: 'Facebook',
  url: 'https://facebook.com/sabboonaa.mkabboomaa',
  icon: 'facebook',
},
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 50 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 60 },
      { name: 'Express', level: 65 },
      { name: 'Python', level: 70 },
      { name: 'PostgreSQL', level: 45 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 70 },
      { name: 'Linux', level: 70 },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'REST APIs', level: 80 },
      { name: 'GraphQL', level: 50 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'UI/UX Design', level: 75 },
      { name: 'Testing', level: 90 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Job Match Platform',
    description:
      'User-friendly web application where job seekers and employers can seamlessly connect and interact, featuring personalized job and candidate recommendations based on users’ preferences.',
    image: 'https://plus.unsplash.com/premium_vector-1770322694580-f5536f23369e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMHNlZWtpbmd8ZW58MHx8MHx8fDA%3D',
    technologies: ['python', 'React', 'Chart.js', 'Node.js','Tailwind CSS','Typescript'],
    githubUrl: 'https://github.com/Sabboo5/Job_match',
    featured:true
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an admin dashboard.',
    image: 'https://media.istockphoto.com/id/2237056850/photo/distributor-online-shopping-management-frontend-and-backend-developer-customer-relationship.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSK5RTB3_a0-NRDQUjY3IZQV-KzSePUB5pPja-yroiU=',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Typescript'],
    githubUrl: 'https://github.com/Sabboo5/e-commerce',
    featured: true,
  },
  {
    id: 3,
    title: 'Social Media App',
    description:
      'A feature-rich social media platform with real-time news feed updates, interactive posts, direct messaging, and personalized user profiles.',
    image: 'https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D',
    technologies: ['Next.js', 'TypeScript', 'React', 'Node.js','mongoDB'],
    githubUrl: 'https://github.com/Sabboo5/Social_App',
  },
  
  
  {
    id: 4,
    title: 'Student Clearance Management System',
    description:
    'A comprehensive student clearance management system with automated clearance tracking, role-based access for students and admins, document verification, notifications, and reporting capabilities.' , 
     image: 'https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D',
    technologies: ['React', 'Node.js', 'Typescript', 'MongoDB'],
    githubUrl: 'https://github.com/Sabboo5/student-clearance-system',
  },


  {
    id: 5,
    title: 'Expense Tracker Application',
    description:
    'Tired of guessing your daily spending? Record every expense quickly and see instant updates on your budget. Analyze trends with interactive charts and detailed financial reports. Take charge of your money, reach goals, and reduce financial stress. , 
     image: 'https://media.istockphoto.com/id/1389342737/photo/track-your-spending-is-shown-on-the-photo-using-the-text.jpg?s=1024x1024&w=is&k=20&c=QVzGSh77dccB8Pzndw6ApSkWHmnA_pPLFvelAkBcfYA=',
    technologies: ['React', 'Node.js', 'Typescript', 'MongoDB','Chart.js'],
    githubUrl: 'https://github.com/Sabboo5/expense-tracker',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'AASTU ICT Department',
    location: 'Addis Ababa',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description: [
'Clearance Management System',
'Designed and developed a web-based clearance management system to automate student and staff clearance processes, reducing manual paperwork and processing time.',
'Developed core system features including clearance requests, approval tracking, status notifications, and report generation. Collaborated with supervisors and end users to gather requirements, test system functionality.'
    ],
    type: 'work',
  },
  {
    id: 2,
    title: 'Junior Web Developer',
    company: 'Self-taught',
    location: 'Addis Ababa',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [


'Developed responsive and user-friendly websites using modern web technologies such as HTML5, CSS3, JavaScript, and React.js, improving my front-end development skills.',
'Implemented interactive features like dynamic forms, sliders, and modals to enhance user experience.',
'Applied version control with Git/GitHub to manage projects and track progress efficiently.',
'Optimized websites for mobile devices and cross-browser compatibility, ensuring consistent performance.',
'Experimented with Tailwind CSS and Bootstrap for rapid and visually appealing UI design.',
'Learned and practiced basic backend integration using Node.js and APIs to build full-stack web applications.',

      
    ],
    type: 'work',
  },
  {
    id: 3,
    title: 'Bachelor of Science in Software Engineering',
    company: 'Addis Ababa Science and Technology University(AASTU)',
    location: 'Addis Ababa, Ethiopia',
    startDate: 'Sep 2020',
    endDate: 'June 2025',
    description: [
      'GPA: 3.21/4.0',
      'Relevant Coursework: Data Structures & Algorithms, Web Development, Machine Learning, Distributed Systems, Human-Computer Interaction, Computer Architecture, Software Design and Architecture.',
    ],
    type: 'education',
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
