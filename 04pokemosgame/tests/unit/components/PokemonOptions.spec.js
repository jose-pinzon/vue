import {shallowMount} from '@vue/test-utils'
import pokemonOptions from '@/components/PokemonOptions'
import { pokemonesMock } from '../mocks/pokemones.mock'


describe('Pokemon Options',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(pokemonOptions,{
            props:{
                pokemones:pokemonesMock
            }
        })
    })

    test('debe  de hacer match con el snapshot',()=>{
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente',()=>{
        //que existan 4 li
        const li = wrapper.findAll('li');
        expect(li.length).toBe(4)
        //cada li debe de tener su nombre de pokemon
        
        expect(li[0].text()).toBe('bulbasaur')
        expect(li[1].text()).toBe('ivysaur')
        expect(li[2].text()).toBe('venusaur')
        expect(li[3].text()).toBe('charmander')

    })

    test('debe de emitir "seleccion" con sus respectivos parametros al hacer click' ,()=>{
        
        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

        //hacer click en cualquier li
        li1.trigger('click')

        //el emitted sirve para saber cuales son los valores del dato emitido
        console.log(wrapper.emitted('selection'))

        
       
     expect(wrapper.emitted('selection').length).toBe(1)//?saber que por lo menos se emitio 1 vez



    //TODO: El toEqual nos ayudara a para comparar objetos o array  
    expect(wrapper.emitted('selection')[0]).toEqual([1])//?saber que la id donde se hizo click sea la misma que del pokemon

    })

})