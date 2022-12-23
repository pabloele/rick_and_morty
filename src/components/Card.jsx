import styles from './Card.module.css';

export default function Card(props) {
   console.log(props);
   return (
      
      <div className={styles.card}>
         <button onClick={() => props.onClose()}>X</button>
         <div className={styles.txt}>       
         
         
         
         <h2>{props.name}</h2>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <img  src={props.image} alt="" /> 
         </div>
      </div>
   );
}
