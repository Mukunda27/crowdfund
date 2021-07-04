import React, { useState } from "react";
import styles from "./header.module.scss";
import { ReactComponent as Hamburger } from "../../assets/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/icon-close-menu.svg";

const links = [
  { id: 1, name: "About", href: "#" },
  { id: 2, name: "Discover", href: "#" },
  { id: 3, name: "Get Started", href: "#" },
];

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function showHideMenu() {
    setShowMenu((state) => !state);
  }

  const navLinks = links.map((link) => {
    return (
      <a key={link.id} className={styles.navLink} href={link.href}>
        {link.name}
      </a>
    );
  });

  return (
    <header className={styles.header}>
      <span className={styles.brand}>crowdfund</span>
      <div className={styles.horizontalNavlinks}> {navLinks} </div>
      {showMenu && <div className={styles.verticalNavlinks}>{navLinks}</div>}
      {showMenu ? (
        <Close onClick={showHideMenu} className={styles.close} />
      ) : (
        <Hamburger onClick={showHideMenu} className={styles.hamburger} />
      )}
    </header>
  );
}

export default Header;
