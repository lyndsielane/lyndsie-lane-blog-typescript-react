import "./Skills.scss";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import nodejs from "../../assets/images/nodejs.png";
import wordpress from "../../assets/images/wordpress.png";
import react from "../../assets/images/react.png";

function Skills() {
  return (
    <div className="SkillsItem">
      <img src={html} alt="html" />
      <img src={css} alt="css" />
      <img src={javascript} alt="javascript" />
      <img src={nodejs} alt="nodejs" />
      <img src={react} alt="react" />
      <img id="wordpress" src={wordpress} alt="wordpress" />
    </div>
  );
}

export default Skills;
