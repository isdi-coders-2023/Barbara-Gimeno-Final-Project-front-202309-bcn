import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavBarStyled className="navigation">
      <li>
        <NavLink className="navigation__content" aria-label="home" to="/home">
          {({ isActive }) => (
            <span
              className={
                isActive ? "navigation__text-active" : "navigation__text"
              }
            >
              Home
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigation__content"
          aria-label="create pool"
          to="/create-pool"
        >
          {({ isActive }) => (
            <span
              className={
                isActive ? "navigation__text-active" : "navigation__text"
              }
            >
              Create
            </span>
          )}
        </NavLink>
      </li>
    </NavBarStyled>
  );
};
export default Navigation;
