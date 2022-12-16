export default function SearchBar(props) {
   console.log('asdasdasd',props)
   return (
      <div>
            <input type='search' />
            <button onClick={() => props.onSearch('not found id')}>Agregar</button> 
      </div>
   );
}
