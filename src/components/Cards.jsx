import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className= {styles.cards}>
        {

         characters.map( e => {
               return(
               <Card
                  name={e.name}
                  species={e.species}
                  gender={e.gender}
                  image={e.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />)
               }
            )

        }
   </div>
)}
