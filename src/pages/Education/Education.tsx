import { EducationItem } from "../../components";
import "./Education.scss";

function Education() {
  return (
    <div className="Education">
      <EducationItem
        schoolName="Georgia Tech Coding Bootcamps"
        title="Full Stack Coding Certification"
        gpa="GPA = 4.0"
        description=" Graduated from a 12 week, full-time Bootcamp to develop full stack web development skills."
        skills="HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git"
        toDate="October 2021"
      />
      <hr />
    </div>
  );
}

export default Education;
