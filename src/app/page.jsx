import CharacterList from "../components/characterList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CharacterList />
      </main>

      <footer className={styles.footer}>
        <p>Desenvolver uma aplicação web que consuma uma API do Harry Potter</p>
      </footer>
    </div>
  );
}