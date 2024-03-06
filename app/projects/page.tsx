import { projectsData } from "@/lib/data";
import { ProjectCard } from "./_components/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lautaro Aguilar Projects",
  description:
    "Here are some of the projects I've worked on. I'm always looking for new opportunities and challenges. I'm open to work and collaborate on new projects. Feel free to contact me.",
};

const ProjectsPage = () => {
  return (
    <section className="px-4 flex flex-wrap">
      {projectsData.map((project, index) => (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-w-full" key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
};
export default ProjectsPage;
