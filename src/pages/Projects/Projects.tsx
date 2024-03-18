import "./Projects.scss";
import portfolioImg from "../../assets/images/lyndsielane.com-LyndsieLane.jpeg";
import parallaxImg from "../../assets/images/Parallax Site.png";
import signupImg from "../../assets/images/signuppage.png";

function Projects() {
  return (
    <div>
      <div className="ProjectsItem">
        <div>
          <div className="ProjectsTitle">Sign-up Page</div>
          <div className="projectsDescription">
            A basic Sign-up Page designed using HTML & CSS.
          </div>
          <div className="projectScreenshot">
            <img src={signupImg} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a
                href="https://github.com/lyndsielane/signup-page"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="siteLink">
              <a
                href="https://lyndsielane.github.io/signup-page//"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="ProjectsTitle">Parallax Website</div>
          <div className="projectsDescription">
            A basic Parallax Website designed using HTML & CSS.
          </div>
          <div className="projectScreenshot">
            <img src={parallaxImg} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a
                href="https://github.com/lyndsielane/html-css-parallaxsite"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="siteLink">
              <a
                href="https://lyndsielane.github.io/html-css-parallaxsite/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="ProjectsTitle">Portfolio</div>
          <div className="projectsDescription">
            This portfolio created using React and Typescript.
          </div>
          <div className="projectScreenshot">
            <img src={portfolioImg} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a
                href="https://github.com/lyndsielane/lyndsie-lane-blog-typescript-react/tree/main/public"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="siteLink">
              <a
                href="https://lyndsielane.com/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
