import "./SkillsItem.scss";
import { AiFillGithub } from "react-icons/ai";

interface SkillsItemProps {
  imgSrc: string;
  alt: string;
  techStack: string;
  githubRepo: string;
}

function SkillsItem(props: SkillsItemProps) {
  return (
    <div className="SkillsItem">
      <img src={props.imgSrc} alt={props.alt} />
      <a className="details" href={props.githubRepo} target="_blank" rel="noreferrer">
        <AiFillGithub className="icon" />
        <span className="techStack">{props.techStack}</span>
      </a>
    </div>
  );
}

export default SkillsItem;
