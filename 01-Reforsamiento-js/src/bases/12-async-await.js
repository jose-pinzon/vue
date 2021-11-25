
//?lo que hace el async es que convierte cualquier funcion , en una asincrona que hara que devuelva
//? un .then y .catch ayuda a disminuir el codigo al crear una promesa 
const medirTiempoAsync = async()=>{
    return 'Se solciono correctamente' //TODO: con return se devuelve el resultado correcto
    // throw 'No se solciono' //TODO: Con throw mostrara el error
}

medirTiempoAsync()
.then(res => console.log(res))
.catch(res => console.log(res))









//!Ejemplo de la diferencia de async y await vs then y cathch
///las apis siempre causan retrazos por eso cuando usamos uno , se tiene que usar una promesa para poder esperar 
// que este cargue y mostrar los datos no undefined
    const users = [
     {
      nombre:'jose',
       edad:15
    },
    {
       nombre:'eduardo',
       edad:15            
    }
    ];

    
    function normal (){
       return users
    }



   //Forma normal-----------------------------------------------------------------------
    
    const getdatos1 = () => {
      
      return new Promise((resolve,reject)=>{
        
           setTimeout(() =>{
                resolve(users);
           },1500) ;    
      });

    }
    
//  getdatos1().then(resp => console.log(resp))



const datos2 = async() =>{
  //el try y el catch para poder enviar error si no se optiene el api
    try{
       const datosFech = await getdatos1();
      console.log(datosFech)
    }catch{
      console.log('error')
      }
 
}

datos2();