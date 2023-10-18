import "./EducationItem.scss";

interface EducationItemProps {
  schoolName: string;
  title: string;
  description: string;
  toDate: string;
  gpa: string;
  skills: string;
}

function EducationItem(props: EducationItemProps) {
  return (
    <div className="EducationItem">
      <div className="topRow">
        <span className="schoolName">{props.schoolName}</span>
        <div className="dates">
          <span>{props.toDate}</span>
        </div>
      </div>
      <span className="title">{props.title}</span>
      <span className="gpa">{props.gpa}</span>
      <br></br>
      <span className="description">{props.description}</span>
      <span className="skills">{props.skills}</span>
    </div>
  );
}

export default EducationItem;
