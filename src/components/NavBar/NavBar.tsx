import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavBarStyled className="navigation">
      <li>
        <NavLink className="navigation__home" aria-label="home" to="/home">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigation__create"
          aria-label="create pool"
          to="/pools-create"
        >
          <span>Create</span>
        </NavLink>
      </li>
    </NavBarStyled>
  );
};
export default Navigation;
