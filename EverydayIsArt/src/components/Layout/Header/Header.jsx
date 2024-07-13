import { useState } from 'react';
import { NavLink } from "react-router-dom";

import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import Title from '../Title/Title.jsx';

import useIsDesktop from '../../../hooks/useIsDesktop.jsx';

import './Header.scss';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const isDesktop = useIsDesktop();

    function inverseNavOpen() {
        setIsNavOpen(!isNavOpen);
    }

    function getNavLinkClass(isActive) {
        let normal = "nav-link";
        let active = normal + " nav-link-active";
        return isActive ? active : normal;
    }

    let mobileHeader = <div className="header-mobile">
        <Title></Title>
        <button onClick={inverseNavOpen} className="button-symbol">☰</button>
        <ColorSchemeButton></ColorSchemeButton>
    </div>;

    let fullNav = <>
        <NavLink to="/all" className={({ isActive }) => getNavLinkClass(isActive)}>General Gallery</NavLink>
        <div className="line"></div>
        <NavLink to="/tretyakov" className={({ isActive }) => getNavLinkClass(isActive)}>The State Tretyakov Gallery</NavLink>
        <NavLink to="/vam" className={({ isActive }) => getNavLinkClass(isActive)}>The Victoria and Albert Museum</NavLink>
        <NavLink to="/metmuseum" className={({ isActive }) => getNavLinkClass(isActive)}>The Metropolitan Museum of Art</NavLink>
        <div className="line"></div>
        <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>About the Project</NavLink>
        <NavLink to="/termsofuse" className={({ isActive }) => getNavLinkClass(isActive)}>Terms of Use</NavLink>
        <div className="line"></div>
        <a href="https://github.com/lebedeva-svetlana/EverydayIsArt" className="nav-link">GitHub</a>
    </>;

    return (
        <header className="header">
            <nav className="nav">
                {isDesktop ? <Title></Title> : mobileHeader}
                {(isDesktop || isNavOpen) && fullNav}
            </nav>
        </header>
    );
}

export default Header;