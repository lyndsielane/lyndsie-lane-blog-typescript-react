import { NavBarItem, Footer } from "../";
import "./NavBar.scss";
import LyndsieLane from "../../assets/images/LyndsieLane.jpeg";
import Logo from "../../assets/images/Logo.png";
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
          <NavBarItem label="BOOKS" href="/books" />
          <NavBarItem label="BLOG" href="/blog" />
        </div>
      </div>
      <img className="Logo" src={Logo} alt="Logo" />
      <Footer />
    </div>
  );
}

export default NavBar;
