import { projectsData } from "@/lib/data";
import { ProjectCard } from "./_components/project-card";

const ProjectsPage = () => {
  return (
    <section className="px-4 flex flex-wrap">
      {projectsData.map((project, index) => (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
};
export default ProjectsPage;
