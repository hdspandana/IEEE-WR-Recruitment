export interface TeamMember {
  id: number;
  name: string;
  chapter: string;
  position: string;
  description: string;
  imageUrl: string;
}

export const teamData: TeamMember[] = [
  // ─── APS ───
  {
    id: 1,
    name: "Vikram Nair",
    chapter: "APS",
    position: "Chapter Lead",
    description: "Leads antenna design research and propagation studies, organizing workshops on RF engineering and electromagnetic theory.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
  },
  {
    id: 2,
    name: "Shreya Menon",
    chapter: "APS",
    position: "Technical Member",
    description: "Works on antenna simulation projects using HFSS and CST, contributing to real-world RF design challenges.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/74.jpg",
  },

  // ─── Computer Society ───
  {
    id: 3,
    name: "Aditya Kumar",
    chapter: "Computer Society",
    position: "Chapter Lead",
    description: "Drives computing initiatives, hackathons, and coding competitions across the RITB campus.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
  },
  {
    id: 4,
    name: "Divya Krishnan",
    chapter: "Computer Society",
    position: "Technical Member",
    description: "Passionate about algorithms and open-source, organizes coding bootcamps and peer learning sessions.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/62.jpg",
  },

  // ─── COMSOC ───
  {
    id: 5,
    name: "Arjun Sharma",
    chapter: "COMSOC",
    position: "Chairperson",
    description: "Leads IEEE RITB COMSOC chapter, overseeing all communication technology events and technical talks.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg",
  },
  {
    id: 6,
    name: "Priya Nair",
    chapter: "COMSOC",
    position: "Vice Chairperson",
    description: "Organizes seminars on 5G, IoT, and networking technologies, bridging industry and academia.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/45.jpg",
  },

  // ─── PES ───
  {
    id: 7,
    name: "Suresh Babu",
    chapter: "PES",
    position: "Chapter Lead",
    description: "Leads power systems research, renewable energy projects, and smart grid awareness campaigns.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/33.jpg",
  },
  {
    id: 8,
    name: "Kavitha Rao",
    chapter: "PES",
    position: "Technical Member",
    description: "Works on solar energy modelling and EV charging infrastructure projects within the chapter.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/33.jpg",
  },

  // ─── MTTS ───
  {
    id: 9,
    name: "Karthik Bhat",
    chapter: "MTTS",
    position: "Chapter Lead",
    description: "Heads microwave and RF research activities, organizes lab sessions on transmission line theory.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/27.jpg",
  },
  {
    id: 10,
    name: "Nisha Pillai",
    chapter: "MTTS",
    position: "Technical Member",
    description: "Focuses on microwave filter design and waveguide experiments as part of MTTS activities.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/27.jpg",
  },

  // ─── SPS ───
  {
    id: 11,
    name: "Rahul Verma",
    chapter: "SPS",
    position: "Chapter Lead",
    description: "Leads signal processing workshops covering DSP, image processing, and machine learning applications.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/19.jpg",
  },
  {
    id: 12,
    name: "Anjali Singh",
    chapter: "SPS",
    position: "Technical Member",
    description: "Works on audio and speech processing projects, contributing to research publications and IEEE events.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/19.jpg",
  },

  // ─── EMBS ───
  {
    id: 13,
    name: "Deepak Hegde",
    chapter: "EMBS",
    position: "Chapter Lead",
    description: "Bridges engineering and healthcare, leading biomedical instrumentation projects and health-tech hackathons.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/38.jpg",
  },
  {
    id: 14,
    name: "Pooja Iyer",
    chapter: "EMBS",
    position: "Technical Member",
    description: "Develops biosignal acquisition systems and contributes to wearable health monitoring research.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/38.jpg",
  },

  // ─── CIS ───
  {
    id: 15,
    name: "Nikhil Joshi",
    chapter: "CIS",
    position: "Chapter Lead",
    description: "Heads AI/ML workshops, neural network projects, and fuzzy logic research within IEEE RITB.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/55.jpg",
  },
  {
    id: 16,
    name: "Riya Desai",
    chapter: "CIS",
    position: "Technical Member",
    description: "Passionate about deep learning and computer vision, leads study circles on modern AI frameworks.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/55.jpg",
  },

  // ─── WIE ───
  {
    id: 17,
    name: "Ananya Iyer",
    chapter: "WIE",
    position: "WIE Lead",
    description: "Empowers women in STEM through mentorship programs, industry talks, and leadership development initiatives.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/41.jpg",
  },
  {
    id: 18,
    name: "Meera Kulkarni",
    chapter: "WIE",
    position: "Events Coordinator",
    description: "Organizes WIE workshops, panel discussions, and outreach programs inspiring the next generation of women engineers.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/29.jpg",
  },

  // ─── Sensor Council ───
  {
    id: 19,
    name: "Rohan Mehta",
    chapter: "Sensor Council",
    position: "Chapter Lead",
    description: "Leads sensor technology projects, IoT integrations, and hands-on hardware workshops at RITB.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/48.jpg",
  },
  {
    id: 20,
    name: "Lakshmi Venkat",
    chapter: "Sensor Council",
    position: "Technical Member",
    description: "Works on environmental sensing and smart agriculture projects using Arduino and Raspberry Pi.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/48.jpg",
  },

  // ─── RoboRIT ───
  {
    id: 21,
    name: "Siddharth Rao",
    chapter: "RoboRIT",
    position: "Team Lead",
    description: "Heads robotics and automation projects, leads the team in national-level robotics competitions.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg",
  },
  {
    id: 22,
    name: "Harini Subramanian",
    chapter: "RoboRIT",
    position: "Robotics Engineer",
    description: "Designs autonomous robot systems and contributes to ROS-based navigation and control projects.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/22.jpg",
  },

  // ─── Digital Design ───
  {
    id: 23,
    name: "Yash Malhotra",
    chapter: "Digital Design",
    position: "Design Lead",
    description: "Creates stunning visual assets for IEEE RITB events, maintaining a consistent and modern brand identity.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/31.jpg",
  },
  {
    id: 24,
    name: "Tanvi Kulkarni",
    chapter: "Digital Design",
    position: "UI/UX Designer",
    description: "Designs user interfaces for IEEE RITB platforms and creates motion graphics for social media campaigns.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/31.jpg",
  },

  // ─── Documentation ───
  {
    id: 25,
    name: "Amit Patil",
    chapter: "Documentation",
    position: "Documentation Lead",
    description: "Maintains official records, event reports, and technical documentation for all IEEE RITB activities.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/17.jpg",
  },
  {
    id: 26,
    name: "Sonali Deshmukh",
    chapter: "Documentation",
    position: "Content Writer",
    description: "Writes technical articles, newsletters, and event summaries that capture the spirit of IEEE RITB.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/17.jpg",
  },

  // ─── PR ───
  {
    id: 27,
    name: "Varun Choudhary",
    chapter: "PR",
    position: "PR Lead",
    description: "Manages IEEE RITB's public image, media outreach, and external communications strategy.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/66.jpg",
  },
  {
    id: 28,
    name: "Ishita Ghosh",
    chapter: "PR",
    position: "Social Media Manager",
    description: "Handles IEEE RITB's social media presence, crafting engaging content that grows the community.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/66.jpg",
  },

  // ─── Sponsorship ───
  {
    id: 29,
    name: "Dev Patel",
    chapter: "Sponsorship",
    position: "Sponsorship Lead",
    description: "Secures strategic partnerships and funding from industry sponsors for IEEE RITB's flagship events.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/71.jpg",
  },
  {
    id: 30,
    name: "Nandini Sharma",
    chapter: "Sponsorship",
    position: "Outreach Coordinator",
    description: "Builds and maintains relationships with corporate sponsors, alumni, and industry professionals.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/71.jpg",
  },

  // ─── Web Resources ───
  {
    id: 31,
    name: "Spandana D Gowda",
    chapter: "Web Resources",
    position: "Web Dev Lead",
    description: "Manages the RITB digital presence, recruits developers, and leads web-based technical events.",
    imageUrl: "/images/spandana.jpg",
  },
  {
    id: 32,
    name: "Pranav Nambiar",
    chapter: "Web Resources",
    position: "Frontend Developer",
    description: "Builds responsive and accessible web interfaces for IEEE RITB platforms using React and Tailwind.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/57.jpg",
  },

  // ─── Creativity ───
  {
    id: 33,
    name: "Keerthi Prasad",
    chapter: "Creativity",
    position: "Creative Lead",
    description: "Drives the creative vision of IEEE RITB, from event themes to merchandise and brand storytelling.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
  },
  {
    id: 34,
    name: "Aryan Bhatt",
    chapter: "Creativity",
    position: "General Member",
    description: "Contributes fresh ideas and creative energy across all IEEE RITB teams and interdisciplinary projects.",
    imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/44.jpg",
  },
];

export const chapters = ["All", ...new Set(teamData.map((m) => m.chapter))];