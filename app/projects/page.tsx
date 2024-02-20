import { projectsData } from "@/lib/data";
import { ProjectCard } from "./_components/project-card";
import { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
  title: "Lautaro Aguilar Projects",
  description:
    "Here are some of the projects I've worked on. I'm always looking for new opportunities and challenges. I'm open to work and collaborate on new projects. Feel free to contact me.",
};

const ProjectsPage = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-28 sm:pt-36">
      {projectsData.map((project, index) => (
        <div className="w-full" key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
};
export default ProjectsPage;
