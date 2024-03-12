import "./ProjectsItem.scss";
import { AiFillGithub } from "react-icons/ai";

interface ProjectsItemProps {
  imgSrc: string;
  alt: string;
  techStack: string;
  githubRepo: string;
}

function ProjectsItem(props: ProjectsItemProps) {
  return (
    <div className="ProjectsItem">
      <img src={props.imgSrc} alt={props.alt} />
      <a
        className="details"
        href={props.githubRepo}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="icon" />
        <span className="techStack">{props.techStack}</span>
      </a>
    </div>
  );
}

export default ProjectsItem;
