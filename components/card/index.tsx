import styles from "./card.module.scss";

type Props = {
  title?: string;
  logo?: string;
  backgroundImage?: string;
  children: JSX.Element;
};

const Card = ({
  title = "",
  logo = "",
  backgroundImage = "",
  children,
}: Props) => {
  return (
    <section className={styles["c-card"]}>
      <header className={styles["c-card__header"]}>
        <img
          className={styles["c-card__cover"]}
          alt={title}
          src={backgroundImage}
        />
        <img className={styles["c-card__logo"]} alt={title} src={logo} />
      </header>
      <main className={styles["c-card__body"]}>
        {children}
      </main>
    </section>
  );
};

export default Card;
