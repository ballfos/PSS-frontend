import { NavLink } from "react-router-dom";
import "./FooterButtons.css";

function FooterButtons() {
  const isCurrent = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => (isActive ? "linkButton activeLink" : "linkButton");

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/Home" className={isCurrent}>
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" className={isCurrent}>
            カレンダー
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={isCurrent}>
            設定
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FooterButtons;
