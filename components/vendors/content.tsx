import locales from "./locales";
import styles from "./content.module.scss";

type Props = {
  title?: string;
  rate?: number;
  voteCount?: number;
  deliveryFee?: number;
  description?: string;
  isZFExpress?: boolean;
  deliveryTime?: number;
};

const Content = ({
  title,
  rate,
  description,
  voteCount,
  deliveryFee,
  isZFExpress,
  deliveryTime = 0,
}: Props) => {
  return (
    <div className={styles["c-content"]}>
      <strong className={styles["c-content__title"]}>{title}</strong>
      <div className={styles["c-content__rate"]}>
        <span className={styles["c-content__voteCount"]}>{voteCount}</span>
        <span className={styles["c-content__rateTag"]}>{rate}</span>
      </div>
      <div className={styles["c-content__description"]}>{description}</div>
      <div className={styles["c-content__deliveryFee"]}>
        <label>{isZFExpress ? locales.express_courier : locales.courier}</label>
        <span>{deliveryFee}</span>
        <label>{locales.toman}</label>
      </div>
      {deliveryTime > 0 && (
        <div className={styles["c-content__deliveryTime"]}>
          <label>{locales.until}</label>
          <span>{deliveryTime}</span>
          <label>{locales.minutes}</label>
        </div>
      )}
    </div>
  );
};

export default Content;
