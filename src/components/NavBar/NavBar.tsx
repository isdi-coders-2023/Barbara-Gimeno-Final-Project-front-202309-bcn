import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavBarStyled className="navigation">
      <li>
        <NavLink className="navigation__content" to="/home">
          {({ isActive }) => (
            <>
              <span
                className={
                  isActive ? "navigation__text-active" : "navigation__text"
                }
              >
                Home
              </span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation__content" to="/add-pool">
          {({ isActive }) => (
            <>
              <span
                className={
                  isActive ? "navigation__text-active" : "navigation__text"
                }
              >
                Add
              </span>
            </>
          )}
        </NavLink>
      </li>
    </NavBarStyled>
  );
};
export default Navigation;
