
//!ESTA PRUEBA SIRVE PARA REVISAR QUE EL COMPONENTE SE QUEDE COMO ESTE Y SABER SI HUBIERON CAMBIOS DESPUES DE HACER EL SNAPSHOP

import {shallowMount} from '@vue/test-utils'
import counter from '@/components/01Counter'


describe('Componente del counter',()=>{

    //este es para inicializar el componente si volver a escribirlo en cada prueba
    let wrapper;
    beforeEach(() => {//esta funcion sirve para reiniciar el valor del wraper cuando sea usado
        wrapper = shallowMount( counter )
    });





    // test('debe de hacer mach con el snapshot', () => {
        
    //     const wrapper = shallowMount(counter )
    //     //? lo que se hacer aqui es mantener una copia fisica de la fotografia del componente
    //     //en este caso extraeremos el html del componente
    //     expect( wrapper.html()).toMatchSnapshot() 
    // })


    test('h2 debe de tener por defecto el valor de counter',()=>{
        //?con este podemos verificar si exite el h1 y  el tobeTruthy mandara true si existe y se ejecutara lo faltante 
        expect(wrapper.find('h1').exists()).toBeTruthy()
        //?con este revisaremos que el valor que tenga la etiqueta que quermos buscar , tenga el valr por defecto que le indicamos
        const h1value = wrapper.find('h1').text()
        expect(h1value).toBe('Contador')

    })



    test('El valor por defecto debe de ser 100 ',()=>{
    
        //buscar los <p>
        //?con el metodo find('p').html() muestra los datos como esta en el componente
        //prueba1:// const pTangs = wrapper.findAll('p')
        //!se hizo con un identificador especifico porque si se cambia de posicion puede hacer que la prueba falle
        const p = wrapper.find('[data-testid="2contador"]').text()

        //expect segundo p == 100
        //prueba1://expect(pTangs[1].text() ).toBe('100')//*en el tobe va el valor que debe de tener por defecto
        expect(p).toBe('100')
        
    })



//se uso el async y await para poder esperar que el dom se actualice
    test('debe de incrementar y decrementar en 1 el valor del contador', async()=>{
        const [incraseBtn , DecreaseBtn] = wrapper.findAll('button')
        //el trigger es un disparador y podemos poner cualquier accion de un boton
        await incraseBtn.trigger('click')
        await incraseBtn.trigger('click')
        await incraseBtn.trigger('click')

        await DecreaseBtn.trigger('click')
        await DecreaseBtn.trigger('click')

        const p = wrapper.find('[data-testid="2contador"]').text()//se pone de ultimo para que funcione
        expect( p ).toBe('101')
    })




    test('props deben de establecer un valor por defecto', () => {
        const start = wrapper.props('start')
        const value = wrapper.find('[data-testid="2contador"]').text()
        expect( Number( value)).toBe(start)
    })




    test('Debe mostrar la prop title ', () =>  {
        //?aqui se definira de nuevo el wraper para poder mostrar los datos de los props

        const titulo = 'hola mundo!!!'
        const wrapper = shallowMount(counter, {
            props:{
                titulo
            }
        })

      expect(wrapper.find( 'h1' ).text() ).toBe(titulo)
    })







})