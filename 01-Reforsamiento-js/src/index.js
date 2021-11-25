const users = [
{
    nombre:'jose',
    edad:15
},
{
    nombre:'eduardo',
    edad:14            
}
];

   function normal(){
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



const datos2 = async() =>{
 //el try y el catch para poder enviar error si no se optiene el api
   try{
      const datosFech = await getdatos1();
     console.log(datosFech)
   }catch{
     console.log('error')
     }

}
// datos2();




