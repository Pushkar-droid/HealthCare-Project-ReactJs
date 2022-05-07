import React from "react";

function Side_menu() {
  return (
    <div
      id="category-menu"
      className="navbar collapse mb_40 hidden-sm-down in"
      aria-expanded="true"
      role="button"
    >
      <div className="nav-responsive">
        <ul className="nav  main-navigation collapse in ">
          <li>
            <a href="#">Pharmacy</a>
          </li>
          <li>
            <a href="#">Health</a>
          </li>
          <li>
            <a href="#">Beauty</a>
          </li>
          <li>
            <a href="#">Vitamins</a>
          </li>
          <li>
            <a href="#">Sweating</a>
          </li>
          <li>
            <a href="#">Coughs &amp; Colds</a>
          </li>
          <li>
            <a href="#">Hair Loss</a>
          </li>
          <li>
            <a href="#">Weight Loss</a>
          </li>
          <li>
            <a href="#">Antifungals</a>
          </li>
          <li>
            <a href="#">Pain Relief</a>
          </li>
          <li>
            <a href="#">Stop Smoking</a>
          </li>
          <li>
            <a href="#">Skin Conditions</a>
          </li>
          <li>
            <a href="#">Top Brands</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Side_menu;
