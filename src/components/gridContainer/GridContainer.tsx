import { User } from "@/App";
import styles from "./GridContainer.module.css";

interface GridContainerProps {
  datas: User[];
}

const GridContainer = ({ datas }: GridContainerProps) => {
  return (
    <div className={styles.gridContainer}>
      {datas.map((user) => (
        <div className="max-w-lg h-96 object-contain" key={user.id}>
          <h2>{user.title}</h2>
          <img src={user.picture} alt="" loading="lazy" />
          <div>
            <p>
              {user.firstName}
              {user.lastName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
