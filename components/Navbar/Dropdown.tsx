import * as React from "react";
import { Child } from "./Navbar";
import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
  title: string;
  children: Child[];
  active: boolean;
  open: boolean;
  onOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Dropdown = ({
  title,
  children,
  active,
  open,
  onOpen,
}: DropdownProps): JSX.Element => {
  const handleOpen = (): void => {
    onOpen((current) => !current);
  };

  React.useEffect((): void => {
    onOpen(active);
  }, [active]);

  return (
    <>
      <div
        className={`${styles.dropdown} ${open && styles.active}`}
        onClick={handleOpen}
        tabIndex={0}
      >
        <div
          className={`${styles.link} ${active && styles.active}`}
          tabIndex={0}
        >
          {title}
        </div>
        <div className={styles.container}>
          {children.map((child: Child, index) => (
            <DropdownItem
              title={child.title}
              href={child.href}
              key={child.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
