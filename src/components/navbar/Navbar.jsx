import { useState } from "react";
import { assets } from "../../assets/assets.js";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className={cx("navbar")}>
      <img src={assets.logo} className={cx("logo")} />
      <ul className={cx("navbar__menu")}>
        <li
          onClick={() => setMenu("home")}
          className={cx({ active: menu === "home" })}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={cx({ active: menu === "menu" })}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile")}
          className={cx({ active: menu === "mobile" })}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={cx({ active: menu === "contact" })}
        >
          Contact us
        </li>
      </ul>
      <div className={cx("navbar__right")}>
        <img src={assets.search_icon} alt="" />
        <div className={cx("navbar__search-icon")}>
          <img src={assets.basket_icon} alt="" />
          <div className={cx("dot")}>0</div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
