import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/">
        <img
          src="/icon/home_icon_ua.svg"
          alt="Home"
          className={css.icon}
          style={{ width: "24px", height: "24px" }}
        />
      </NavLink>

      {isLoggedIn ? (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      ) : (
        <>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navigation;
