import React, {useState,useEffect} from 'react'
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom'


export default function Detail() {
    const [character, setCharacter] = useState({})
    const {detailId} = useParams();


    console.log(detailId);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);



  return (
    <div className= {styles.detail}>
      
            <div className={styles.texto}>

                    <h1>{character.name}</h1>
                    <h3>{character.status}</h3>

                    <h3>{character.species}</h3>

                    <h3>{character.gender}</h3>
                    <h3>{character.origin?.name}</h3>



            </div>
            <img src={character.image} alt={character.name}/>
      </div>
  )
}
