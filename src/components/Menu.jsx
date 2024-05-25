import { NavLink } from "react-router-dom";

const Menu = () => {
    const classNameSwitch = ({ isActive }) =>
        "menu__item" + (isActive ? " menu__item-active" : "");

    return (
        <nav className="menu">
            <NavLink to="/" className={classNameSwitch} href="/">Главная</NavLink>
            <NavLink to="/drift" className={classNameSwitch} href="/drift">Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className={classNameSwitch} href="/timeattack">Time Attack</NavLink>
            <NavLink to="/forza" className={classNameSwitch} href="/forza">Forza Karting</NavLink>
        </nav>
    );
}

export default Menu