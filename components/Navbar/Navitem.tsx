import Link from "next/link";
import * as React from "react";
import styles from "./Navitem.module.css";

interface NavitemProps {
  href: string;
  text: string;
  active: boolean;
}

const Navitem = ({ href, text, active }: NavitemProps): JSX.Element => {
  return (
    <Link href={href} className={`${styles.link} ${active && styles.active}`}>
      {text}
    </Link>
  );
};

export default Navitem;
