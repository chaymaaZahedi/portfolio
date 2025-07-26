
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Science",
    icon: Terminal,
    skills: ["Python", "Machine Learning", "Data Visualization", "Statistics", "Data Cleaning" , "nlp"],
  },
  {
    name: "Web Development",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "Laravel"],
  },
  {
    name: "Soft Skills",
    icon: Database,
    skills: ["Analytical Thinking", "Problem Solving", "Adaptability", "Autonomy", "Communication"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Jupyter Notebook", "Google Colab", "Git", "GitHub", "Docker"],
  },
  {
    name: "Embedded Systems",
    icon: Palette,
    skills: ["Arduino", "raspberry pi", "Sensors", "Serial Communication", "IoT"],
  },
  {
    name: "SEO & Analytics",
    icon: Code,
    skills: ["SEO", "Google Analytics", "Google Search Console", "Keyword Research", "Content Optimization"],
  },
];
