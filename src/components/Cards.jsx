import Card from './Card';

import './Cards.css';
export default function Cards(props) {
   const { characters } = props;
   return (
   <div className='cards'>
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
