import { NavLink } from "react-router-dom";
import {
  TiHomeOutline,
  TiUserOutline,
  TiStopwatch,
  TiCoffee,
  TiPowerOutline,
} from "react-icons/ti";
import logo from "../../assets/logo.svg";

import "./styles.scss";

export function Sidebar() {
  return (
    <aside>
      <div className="logo">
        <img src={logo} alt="Logo Health Track" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <TiHomeOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to="weight">
              <TiUserOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to="physical_activites">
              <TiStopwatch />
            </NavLink>
          </li>
          <li>
            <NavLink to="food">
              <TiCoffee />
            </NavLink>
          </li>
          <li>
            <TiPowerOutline />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
