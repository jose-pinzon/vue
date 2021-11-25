import {shallowMount} from '@vue/test-utils'
import pokemonPage from '@/pages/PokemonPage'
import { pokemonesMock } from '../mocks/pokemones.mock';

describe('Pokemon page component', () => {

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(pokemonPage)
    })

    test('debe de llamar mixPokemonArray al montar',()=>{
        const mixpokemon = jest.spyOn(pokemonPage.methods, 'pokemonesAll')
        const wrapper = shallowMount(pokemonPage)
        expect(mixpokemon).toHaveBeenCalled()
    })


    test('Debe de hacer match cuando los datos cargan', () => {
        /*
        *   La diferencia en entre el shallowMount y mount , es que el primero no ejecutara los componentes hijos
        *solo hara una simulacion de estos , a diferencia del mount que este si ejecuta los componetes
        *hijos pero eso puede volver lentos las pruebas
        */

    const wrapper = shallowMount( pokemonPage, {
            data(){
                return{
                    pokemonArr:pokemonesMock,
                    pokemon:pokemonesMock[0],
                    PokemonShow: false,
                    showmessage:false,
                    message:'',
                    vidas:3,
                    puntos:0
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions',() => {

        const wrapper = shallowMount( pokemonPage, {
            data(){
                return{
                    pokemonArr:pokemonesMock,
                    pokemon:pokemonesMock[0],
                    PokemonShow: false,
                    showmessage:false,
                    message:'',
                    vidas:3,
                    puntos:0
                }
            }
        })
        //? PokemonPicture debe de existir   
        let componente1 = wrapper.findComponent({ name: 'PokemonPicture' })
        expect( componente1.exists() ).toBeTruthy()

        //? PokemonOptions debe de existir  
        let componente2 = wrapper.findComponent({ name: 'PokemonOptions' })
        expect( componente2.exists() ).toBeTruthy()


        //PokemonPicture atributo pokemonid === '1'
        expect(componente1.attributes('pokemonid')).toBe('1')


        //PokemonOptions atributo pokemon tobe true 
        expect(componente2.attributes('pokemones')).toBeTruthy()

        //?resolvido en el curso, tambien se podia hacer de esta forma
        //*expect(wrapper.find('pokemon-options-stub').attributes('pokemones')).toBeTruthy()
        
    })
    
    test('pruebas con checkAnswer', async () => {
        const wrapper = shallowMount( pokemonPage, {
            data(){
                return{
                    pokemonArr:pokemonesMock,
                    pokemon:pokemonesMock[2],
                    PokemonShow: false,
                    showmessage:false,
                    message:'',
                    vidas:3,
                    puntos:0
                }
            }
        })
        //con el vm , se puede acceder a varios metodos o funciones.
        await wrapper.vm.checkAnswer(3)//?se tiene que hacer el await para esperar
        //?que todo cargue y no cause error por no haberse mostrado los datos por el v-if

        expect( wrapper.find('h3').exists() ).toBeTruthy()
        expect(wrapper.vm.PokemonShow).toBeTruthy()
        expect( wrapper.find('h3').text() ).toBe(`Correcto el pokemon si es ${pokemonesMock[2].name}`)


        await wrapper.vm.checkAnswer(10)
    
        expect(wrapper.vm.message).toBe(`Lastima, era ${pokemonesMock[2].name}`)




    })


})