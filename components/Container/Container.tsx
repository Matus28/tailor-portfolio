import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
