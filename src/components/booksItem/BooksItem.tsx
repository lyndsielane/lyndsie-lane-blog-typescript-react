import "./BooksItem.scss";
import { AiFillGithub } from "react-icons/ai";

interface BooksItemProps {
  imgSrc: string;
  alt: string;
  techStack: string;
  githubRepo: string;
}

function BooksItem(props: BooksItemProps) {
  return (
    <div className="BooksItem">
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

export default BooksItem;
