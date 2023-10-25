import "./ResumeItem.scss";

interface ResumeItemProps {
  companyName: string;
  title: string;
  description: string;
  fromDate: string;
  toDate: string;
}

function ResumeItem(props: ResumeItemProps) {
  return (
    <div className="ResumeItem">
      <div className="topRow">
        <span className="companyName">{props.companyName}</span>
        <div className="dates">
          <span>{props.fromDate}</span>&nbsp;&mdash;&nbsp;
          <span>{props.toDate}</span>
        </div>
      </div>
      <span className="title">{props.title}</span>
      <span className="description">{props.description}</span>
    </div>
  );
}

export default ResumeItem;
