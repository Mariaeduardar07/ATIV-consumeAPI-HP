"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./characterList.module.css";

const CharacterList = () => {
  const url = " https://hp-api.onrender.com/api/characters"; // Link do API externa

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(url);
        setCharacters(response.data);
        setLoading(false);
      } catch (error) {
        console.log("erro ao buscar personagens na API");
        setError("Não foi possível carregar os personagens. Tente novamente mais tarde #sorry");
      }
    };
    fetchCharacters();
  }, []);

  if (loading) {
    return (
        <div className={styles.loading}>
            carregando Personagens...
        </div>
    );
  };

  if (error) {
    return (
      <div className={styles.error}>
        {error}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titlePrincipal}>Personagens do Harry Potter</h1>
      <div className={styles.characterGrid}>
        {characters.map((characters) => (
          <div key={characters.id} className={styles.characterCard}>
            <div className={styles.imageContainer}>
              <img src={characters.image} alt={characters.name} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.nameCharacter}>{characters.name}</h2>
              <p className={styles.actor}>{characters.actor}</p>
              <p className={styles.house}>{characters.house}</p>
              <p className={styles.dateBirth}>{characters.dateOfBirth}</p>
              <div className={styles.rating}>
                <span className={styles.patronus}>{characters.patronus}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
