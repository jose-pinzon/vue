import { shallowMount}  from '@vue/test-utils';
import indecicion from '@/components/indecision'

describe('componente de Indecision',()=>{

    let wrapper;
    let clgSpy;
    global.fetch = jest.fn(()=>Promise.resolve({//este es para poder acceder a fech y al then, en node
        json: () => Promise.resolve({//este es para acceder al json
                answer: 'yes',
                forced: false,
                image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    })) 

    beforeEach(()=>{
        wrapper = shallowMount(indecicion)
        clgSpy = jest.spyOn(console, 'log')//este es para espiar el console.log
        jest.clearAllMocks() //este metodo es para borrar los mocks y no afecte a los demas test por los datos guardados en estos



    })

    test('mach con el snapshop', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })


    test('escribir en el input no debe disparar nada solo el console.log',async()=>{

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer' )//con la vm accedemos a la instancia de vue para poder acceder al metodo

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')//insertar valor al input

        expect( clgSpy ).toHaveBeenCalled()//este es para saber si se uso una vez el console.log
        expect( getAnswerSpy ).not.toHaveBeenCalled()//se revisa que esta funcion no haya sido llamado 
    })



    test('escribir el simbolo de "?" debe de disparar el getAnswer', async()=>{
            //saber que la funcion se a llamado
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        // expect( clgSpy ).toHaveBeenCalled()
        expect( getAnswerSpy ).toHaveBeenCalled()
    })
    
    test('pruebas en el getAnswer',async ()=>{
        await wrapper.vm.getAnswer()
        const image = wrapper.find('img')

        expect(image.exists() ).toBeTruthy()
        expect( wrapper.vm.img  ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer  ).toBe('si')


    })

    test('pruebas en el getAnswer - fallor en la API',async()=>{

        fetch.mockImplementationOnce(() => Promise.reject('Api no cargo'))
        await wrapper.vm.getAnswer()

        const image = wrapper.find('img')
        expect(image.exists() ).toBeFalsy()
        expect(wrapper.vm.answer).toBe('no se pudo cargar el API')
    })

    test('comprobar si la imagen esta null',()=>{

        const p = wrapper.find('[data="parrafo"]').text()
    expect(p).toBe('recuerda terminar con signo de interrogacion (?)')
        // expect(wrapper.find('input').exists()).toBeTruthy()

    })




})