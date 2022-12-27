import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className= {styles.cards}>
        {

         characters.map( (e) => {
               return(
               <Card
                  id = {e.id}
                  name={e.name}
                  species={e.species}
                  gender={e.gender}
                  image={e.image}
                  onClose={() => props.onClose(e.id)}
               />)
               }
            )

        }
   </div>
)}
