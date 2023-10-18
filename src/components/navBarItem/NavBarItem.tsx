import "./NavBarItem.scss";
import { NavLink } from "react-router-dom";

interface NavBarItemProperties {
  label: string;
  href: string;
  isHome?: boolean;
}

function NavBarItem(props: NavBarItemProperties) {
  return (
    <NavLink className="NavBarItem" end={props.isHome} to={props.href}>
      {props.label}
    </NavLink>
  );
}

export default NavBarItem;
