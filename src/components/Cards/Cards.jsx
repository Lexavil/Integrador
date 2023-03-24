import Card from '../Card/Card';
import styled from "styled-components"

const Div = styled.div`
display: flex;

`;

export default function Cards(props) {
   const {characters} = props;
   return (
   <Div>
      {characters.map(({id, name, species, gender, image}) => (
         <Card
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </Div>
   );
}
