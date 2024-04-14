import React from "react";
import { headerTopMenus } from "../../data/header";
import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <nav className="header_info">
      <ul className="info_ul">
        {headerTopMenus.map((info, key) => (
          <li key={key} className="info_li">
            <Link to={info.src} className="info_text">
              {info.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
