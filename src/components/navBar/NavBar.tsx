import { NavBarItem, Footer } from "../";
import "./NavBar.scss";
import LyndsieLane from "../../assets/images/LyndsieLane.jpeg";
import Logo from "../../assets/images/Logo.png";
import linkedIn from "../../assets/images/linkedin.jpeg";
import dribble from "../../assets/images/dribble.webp";
import github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";
//import { FiMenu } from "react-icons/fi";
//import { useState, useEffect } from "react";

function NavBar() {
  //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //const [isSmallScreen, setIsSmallScreen] = useState(windowWidth <= 640);
  //const [showMenu, setShowMenu] = useState(!isSmallScreen);
  //const onMenuClickHandler = () => setShowMenu(!showMenu);
  //const onMenuItemsClickHandler = () => setShowMenu(!isSmallScreen);

  /*
  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
      setIsSmallScreen(windowWidth <= 640);
      setShowMenu(!isSmallScreen);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [windowWidth, isSmallScreen, setWindowWidth, setIsSmallScreen, setShowMenu]);
  */

  return (
    <div className="NavBar">
      <div className="topSection">
        <img src={LyndsieLane} alt="Lyndsie Lane" />
        {/*<FiMenu className="menuIcon" onClick={ onMenuClickHandler } />*/}
        <div className="items">
          <NavBarItem label="ABOUT" href="/" isHome={true} />
          <NavBarItem label="RESUME" href="/resume" />
          <NavBarItem label="PROJECTS" href="/projects" />
          <NavBarItem label="SKILLS" href="/skills" />
          <NavBarItem label="BLOG" href="/blog" />
        </div>
      </div>
      <img className="logo" src={Logo} alt="Logo" />
      <div className="social">
        <a
          href="https://www.linkedin.com/in/lyndsielane/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedIn" />
        </a>
        <a
          href="https://dribbble.com/lyndsielane"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribble} alt="dribble" />
        </a>
        <a
          href="https://github.com/lyndsielane"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="mailto:lyndsieelane@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="email" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default NavBar;
