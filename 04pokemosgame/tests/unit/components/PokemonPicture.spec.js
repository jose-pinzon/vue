import {shallowMount} from '@vue/test-utils'
import pokemonPicture from '@/components/PokemonPicture'

describe('Pokemon picture',()=>{


    test('debe de hacer match con el snapshot', () =>{
        const wrapper  = shallowMount( pokemonPicture,{
            props:{
                pokemonId:1,
                showPokemon:false,
                vidas:3
            }
        } )

        expect(wrapper.html()).toMatchSnapshot()
    })


    test('debe de mostrar la imagen oculta y el pokemon 100', () =>{
        const wrapper  = shallowMount( pokemonPicture,{
            props:{
                pokemonId:100,
                showPokemon:false,
                vidas:3
            }
        })
        const [img1 , img2 ] = wrapper.findAll('img')
        expect(img1.exists() ).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes('pokemon-hidden')).toBeTruthy()
        console.log(img1.attributes('src'))//con attributes se puede acceder a los atributos de un elemento
        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    

    })



    test('debe de mostrar el pokemon si el showPokemon:true', () =>{
        const wrapper  = shallowMount( pokemonPicture,{
            props:{
                pokemonId:1,
                showPokemon:true,
                vidas:3
            }
        })

//??buscaremo la imagen y veremon que no tenga la clase de ocuntarse y tenga la clase de mostrase
//??pero no se puede hacer como en el anterios porque ya se tiene escrito una vez  y no se puede 
//??mostrar con cambios diferentes 
        const img = wrapper.find('img')
        expect(img.exists() ).toBeTruthy()
        expect(img.classes('pokemon-hidden')).toBe(false)
        expect(img.classes('fade-in')).toBeTruthy()

    })
})

