"use client";

import * as React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Navitem from "./Navitem";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

export interface Child {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  children?: Child[];
}

const MENU_LIST = [
  { title: "JAPEK", href: "#japek" },
  {
    title: "PRODUKTY",
    href: "#produkty",
    children: [
      { title: "Produkty", href: "#" },
      { title: "Pánske", href: "#" },
      { title: "Dámske", href: "#" },
      { title: "Šaty", href: "#" },
      { title: "Detské", href: "#" },
      { title: "Všetky", href: "#" },
    ],
  },
  { title: "KONTAKT", href: "#kontakt" },
];

const Navbar = (): JSX.Element => {
  const [navActive, setNavActive] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const handleToggleBurgerMenu = (): void => {
    setNavActive((current) => !current);
  };

  const handleSetActiveIndex = (
    index: number,
    hasNotChildren: boolean
  ): void => {
    setActiveIndex(index);
    if (hasNotChildren) setNavActive(false);
  };

  const handleClickOnBackground = (): void => {
    if (openDropdown) setOpenDropdown(false);
    if (navActive) setNavActive(false);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"} onClick={(): void => setActiveIndex(0)}>
          <h1 className={styles.logo}>JAPEK</h1>
        </Link>

        <div
          className={`${styles["menu-bar"]} ${navActive && styles.active}`}
          onClick={handleToggleBurgerMenu}
          tabIndex={0}
        >
          <Hamburger active={navActive} />
        </div>

        <div className={`${styles["menu-list"]} ${navActive && styles.active}`}>
          {MENU_LIST.map((item: MenuItem, index: number) => (
            <div
              onClick={(): void =>
                handleSetActiveIndex(index, item?.children === undefined)
              }
              key={item.title}
              tabIndex={0}
            >
              {item.children && (
                <Dropdown
                  title={item.title}
                  children={item.children}
                  active={activeIndex === index}
                  open={openDropdown}
                  onOpen={setOpenDropdown}
                />
              )}
              {!item.children && (
                <Navitem
                  href={item.href}
                  text={item.title}
                  active={activeIndex === index}
                />
              )}
            </div>
          ))}
        </div>
        <div
          className={styles.background}
          onClick={handleClickOnBackground}
          style={
            openDropdown || navActive
              ? { display: "block" }
              : { display: "none" }
          }
        ></div>
      </nav>
    </header>
  );
};

export default Navbar;
