

//todo esto es conocido como tetsuit
describe('Example component',()=>{

  test('Debe de ser mayor a 10',()=>{
    //!Arreglar
    let value = 10;

    //!Estimulo
    value = value + 2

    //!observar el resultado
    //*El if casi no se usa para hacer pruebas con jest
    // if(value > 10){
    //   //TODO: si paso la prueba
    // }else{
    //     throw `${value} no es mayor a 10`
    // }

    //*En este caso es mejor usar expect
     expect(value).toBeGreaterThan( 10 )





  } )
})