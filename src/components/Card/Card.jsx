import styles from "./Card.module.css"

export default function Card({name, species, image, gender, onClose}) {
   return (
      <div className={styles.container}>
         
         <div className={styles.buttonContainer}>

         
         <button onClick={onClose}className={styles.button}>X</button>
         </div>
         <div className={styles.imageContainer}>
         <img src={image} alt='No se encontro' /> 
      </div>
         <h2 className={styles.name}>{name}</h2>
         <div className={styles.propsContainer}>
            <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
      </div>
   );
}
/*Modificamos si queremos que no aparezca
el boton cerrar en los que no sean Rick Sanchez
<div className={styles.container}>
         {name !== "Rick Sanchez" ? (<div className={styles.buttonContainer}>

         
         <button onClick={onClose}className={styles.button}>X</button>
         </div>):<></>}*/