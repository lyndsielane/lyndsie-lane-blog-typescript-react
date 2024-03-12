import "./Projects.scss";
import imgPlaceholder from "../../assets/images/ImgPlaceholder.png";

function Projects() {
  return (
    <div>
      <div className="ProjectsItem">
        <div>
          <div className="ProjectsTitle">Project 4</div>
          <div className="projectsDescription">project description here</div>
          <div className="projectScreenshot">
            <img src={imgPlaceholder} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a href="#">Repo</a>
            </div>
            <div className="siteLink">
              <a href="#">Site</a>
            </div>
          </div>
        </div>
        <div>
          <div className="ProjectsTitle">Project 3</div>
          <div className="projectsDescription">project description here</div>
          <div className="projectScreenshot">
            <img src={imgPlaceholder} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a href="#">Repo</a>
            </div>
            <div className="siteLink">
              <a href="#">Site</a>
            </div>
          </div>
        </div>
        <div>
          <div className="ProjectsTitle">Project 2</div>
          <div className="projectsDescription">project description here</div>
          <div className="projectScreenshot">
            <img src={imgPlaceholder} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a href="#">Repo</a>
            </div>
            <div className="siteLink">
              <a href="#">Site</a>
            </div>
          </div>
        </div>
        <div>
          <div className="ProjectsTitle">Project 1</div>
          <div className="projectsDescription">project description here</div>
          <div className="projectScreenshot">
            <img src={imgPlaceholder} alt="screenshot of project" />
          </div>
          <div className="linksContainer">
            <div className="repoLink">
              <a href="#">Repo</a>
            </div>
            <div className="siteLink">
              <a href="#">Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
