import { NavBarItem, Footer } from "../";
import "./NavBar.scss";
import { LyndsieLane } from "../../assets/images";
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
          <NavBarItem label="EXPERIENCE" href="/experience" />
          <NavBarItem label="EDUCATION" href="/education" />
          <NavBarItem label="PORTFOLIO" href="/portfolio" />
          <NavBarItem label="SKILLS" href="/skills" />
          <NavBarItem label="INTERESTS" href="/interests" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NavBar;
