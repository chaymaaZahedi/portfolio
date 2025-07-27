
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Named Entity Recognition (NER) for Biological Entities",
    description: "This project implements a Named Entity Recognition system that extracts fine-grained biological entities from fish-related texts. The system was fine-tuned on a custom dataset, using a modified version of RoBERTa with a Focal Loss adaptation to better handle class imbalance.",
    image: "/imgs/interface.png",
    tags: ["NLP", "Python", "RoBERTa model", "BeautifulSoup"],
    links: {
      github: "https://github.com/chaymaaZahedi/bio-ner-roberta",
      live: "",
    },
  },
  {
    id: 2,
    title: "Moroccan Census Visualization with PowerBi",
    description: "This project focuses on the visualization of Moroccan census data for the years 2004, 2014, and 2024, with a particular emphasis on demographics and education levels.The data was extracted from the HCP (Haut Commissariat au Plan) website, transformed using Pentaho Data Integration, and visualized with Power BI to create clear, actionable insights.",
    image: "/imgs/demography2014-2024.png",
    tags: ["Power Bi", "Pentaho"],
    links: {
      github: "https://github.com/chaymaaZahedi/Moroccan-Census-Visualization",
      live: "",
    },
  },
  {
    id: 3,
    title: "Fire Detection System with AI",
    description: "This project focuses on developing an embedded fire detection system that uses sensors and AI-based real-time image analysis through a camera to detect fire hazards. The system automatically triggers alerts via SMS and email, stores incident video clips, and aims to reduce emergency response time and minimize damage.",
    image: "/imgs/fire-detection5.jpeg",
    tags: ["Raspberry Pi", "AI Model in TFLite", "Flask", "Streamlit" , "Infobip","Sensors"],
    links: {
      github: "",
      // github: "https://github.com/chaymaaZahedi/fire-detection-raspberry",
      live: "https://www.youtube.com/watch?v=zdFhL5z31As&t=3s&ab_channel=chaymaazahedi"
    },
  },
  // {
  //   id: 4,
  //   title: "Minders",
  //   description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
  //   image: "/imgs/p3.png",
  //   tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
  //   links: {
  //     github: "https://github.com/AathifZahir/Minders",
  //     live: "https://minders-sigma.vercel.app/",
  //   },
  // },
];
