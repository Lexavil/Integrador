import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return (
   <div>
      {characters.map(({id, name, species,status, gender, image}) => (
         <Card
         key={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         image={image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </div>
   );
}
