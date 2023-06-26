import Link from "next/link";
import styles from "./DropdownItem.module.css";

interface DropdownItemProps {
  title: string;
  href: string;
}

const DropdownItem = ({ title, href }: DropdownItemProps): JSX.Element => {
  return (
    <Link href={href} className={styles.link}>
      {title}
    </Link>
  );
};

export default DropdownItem;
