import "./PortfolioItem.scss";
import { AiFillGithub } from "react-icons/ai";

interface PortfolioItemProps {
  imgSrc: string;
  alt: string;
  techStack: string;
  githubRepo: string;
}

function PortfolioItem(props: PortfolioItemProps) {
  return (
    <div className="PortfolioItem">
      <img src={props.imgSrc} alt={props.alt} />
      <a className="details" href={props.githubRepo} target="_blank" rel="noreferrer">
        <AiFillGithub className="icon" />
        <span className="techStack">{props.techStack}</span>
      </a>
    </div>
  );
}

export default PortfolioItem;
