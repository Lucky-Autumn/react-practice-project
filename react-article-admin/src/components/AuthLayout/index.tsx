import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";

const AuthLayuout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  );
};

export default AuthLayuout;
