<template>
  <section class="bg-indigo-50 text-gray-600 body-font flex justify-center items-center">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <AnimationMail />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center"
      >
        <div class="flex flex-col items-start">
          <h2 class="text-gray-900 text-lg mb-1 font-medium">Haciendo realidad tu proyecto...</h2>
          <p
            class="leading-relaxed mb-2 text-gray-600"
          >Nuestro amable equipo se pondrá en contacto contigo</p>
          <div class="flex gap-4 w-full">
            <div class="flex-1">
              <label for="name" class="leading-7 text-sm text-gray-600">Nombre/s</label>
              <input
                v-model.trim="formData.userNames"
                type="text"
                id="name"
                name="name"
                placeholder="Jhon Santiago"
                autocomplete="off"
                class="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                v-if="useValidator(formData.userNames, [isEmpty])"
                for="name"
                class="text-xs text-red-600"
              >* Este campo no puede estar vacío</label>
            </div>
            <div class="flex-1">
              <label for="lastname" class="leading-7 text-sm text-gray-600">Apellído/s</label>
              <input
                v-model.trim="formData.lastNames"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Smith Cole"
                autocomplete="off"
                class="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                v-if="useValidator(formData.lastNames, [isEmpty])"
                for="lastname"
                class="text-xs text-red-600"
              >* Este campo no puede estar vacío</label>
            </div>
          </div>
          <div class="flex gap-4 w-full">
            <div class="flex-1">
              <label for="mail" class="leading-7 text-sm text-gray-600">Correo</label>
              <input
                type="email"
                v-model.trim="formData.mail"
                id="mail"
                name="mail"
                placeholder="ejemplo@mail.com"
                autocomplete="off"
                class="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                v-if="useValidator(formData.mail, [isMail])"
                for="lastname"
                class="block text-xs text-red-600"
              >* Correo no válido</label>
              <label
                v-if="useValidator(formData.mail, [isEmpty])"
                for="lastname"
                class="block text-xs text-red-600"
              >* Este campo no puede estar vacío</label>
            </div>
            <div class="flex-1">
              <label for="mail" class="leading-7 text-sm text-gray-600">Número telefónico</label>
              <input
                v-model.trim="formData.phoneNumber"
                type="text"
                id="phone"
                name="phone"
                placeholder="9993949110"
                autocomplete="off"
                class="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                v-if="useValidator(formData.phoneNumber, [isPhoneNumber])"
                for="lastname"
                class="text-xs text-red-600"
              >* Número telefonico no válido</label>
            </div>
          </div>
          <div class="flex w-full gap-4 mb-2">
            <div class="flex-1">
              <label class="leading-7 text-sm text-gray-600" for="state-project">Tipo de servicio</label>
              <select
                v-model="formData.service"
                class="w-full appearance-none bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                name="state-project"
                id="state-project"
              >
                <option selected disabled>Seleccionar...</option>
                <option value="dw">Diseño web</option>
                <option value="du">Diseño UX</option>
                <option value="cm">Creación de contenido</option>
                <option value="c">Consulta</option>
                <option value="s">Estrategia</option>
                <option value="o">Otro</option>
              </select>
              <label
                v-if="useValidator(formData.service, [isSelected])"
                class="text-xs text-red-600"
                for="state-project"
              >* Debe seleccionar alguna opción</label>
            </div>
            <div class="flex-1">
              <label class="leading-7 text-sm text-gray-600" for="state-project">Estado del proyecto</label>
              <select
                v-model="formData.projectState"
                class="appearance-none w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                name="state-project"
                id="state-project"
              >
                <option selected disabled>Seleccionar...</option>
                <option value="i">Idea</option>
                <option value="e">Empezado</option>
                <option value="m">Mantenimiento</option>
                <option value="ex">Extensión</option>
                <option value="no">No estoy seguro</option>
              </select>
              <label
                v-if="useValidator(formData.projectState, [isSelected])"
                class="text-xs text-red-600"
                for="state-project"
              >* Debe seleccionar alguna opción</label>
            </div>
          </div>
          <div class="w-full">
            <div class="flex-1 mb-2">
              <label class="leading-7 text-sm text-gray-600" for="state-project">Adjuntar archivo/s</label>
              <div class="relative flex justify-center">
                <button
                  class="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
                >Subir archivos (Máximo 3 archivos)</button>
                <input type="file" class="cursor-pointer absolute w-full block opacity-0 h-full" />
              </div>
            </div>
          </div>
          <div class="w-full mb-2">
            <label for="comment" class="leading-7 text-sm text-gray-600">Comentario</label>
            <textarea
              id="comment"
              name="comment"
              class="w-full bg-white rounded-2xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div class="w-full">
            <button
              @click="sendMail"
              :disabled="disbleButton"
              :class="{ 'bg-indigo-400': disbleButton, 'bg-indigo-500': !disbleButton, 'hover:bg-indigo-600': !disbleButton }"
              class="w-full block text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg"
            >Enviar</button>
          </div>
          <p
            class="text-xs text-gray-500 mt-3"
          >Gracias por elegirnos - Erik Ciau - Jose Eb - Oswaldo Casarubias - Jhonatan Tamay</p>
        </div>
      </div>
      <DButton />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import AnimationMail from './components/AnimateMailer.vue'
import { DButton } from '@erikciau/vueisy-ui'

export default defineComponent({
  components: {
    AnimationMail,
    DButton
  },

  mounted() { },
  data: () => ({
    formData: {
      userNames: '',
      lastNames: '',
      mail: '',
      phoneNumber: '',
      service: 'Seleccionar...',
      projectState: 'Seleccionar...'
    }
  }),
  computed: {
    useValidator() {
      return (value, validators = []) => {
        const validatorsActives = validators.map(cb => cb(value))
        return validatorsActives.reduce((previus, current) => previus && current, [])
      }
    },
    disbleButton() {
      return (
        this.formData.userNames.length === 0
        || this.formData.lastNames.length === 0
        || this.formData.mail.length === 0
        || this.formData.phoneNumber.length === 0
        || this.formData.service === 'Seleccionar...'
        || this.formData.projectState === 'Seleccionar...'
      )
    }
  },
  methods: {
    isEmpty(value = '') {
      const toEvaluate = value.length
      return toEvaluate === 0
    },
    isMail(value = '') {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !regex.test(value)
    },
    isPhoneNumber(phoneNumber = '') {
      const toEvaluate = phoneNumber.length
      return toEvaluate < 10
    },
    isSelected(value = '') {
      return value === 'Seleccionar...'
    },
    sendMail() {
      alert('Enviado')
    }
  }

})
</script>