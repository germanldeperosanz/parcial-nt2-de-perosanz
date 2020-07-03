<template>
  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2>Agregar Gastos</h2>
      <hr />
      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate class="form-group" tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            v-model.trim="formData.nombre"
            required
          />
        </validate>
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">El campo nombre es requerido</div>
        </field-messages>

        <validate class="form-group" tag="div">
          <label for="descripcion">Descripcion</label>
          <input
            type="text"
            class="form-control"
            id="descripcion"
            name="descripcion"
            v-model.trim="formData.descripcion"
            required
          />
        </validate>
        <field-messages name="descripcion" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">El campo descripcion es requerido</div>
        </field-messages>

        <validate class="form-group" tag="div">
          <label for="importe">Importe</label>
          <input
            type="number"
            class="form-control"
            id="importe"
            name="importe"
            v-model.number="formData.importe"
            required
          />
        </validate>
        <field-messages name="importe" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">el importe es requerido</div>
          <div slot="number" class="alert alert-danger my-1">importe no válido</div>
        </field-messages>

        <button type="submit" class="btn btn-primary" :disabled="formState.$invalid">Submit</button>
      </vue-form>
      <br>
      <Listado />
    </div>
  </section>
</template>

<script lang="js">
  import axios from 'axios'
  import Listado from './Listado.vue'
  const url = 'https://5ee29b1e8b27f30016094cf8.mockapi.io/recuperatorio/'
  export default  {
    name: 'Formulario',
    components: {
    Listado
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        enviando: false
      }
    },
    methods: {
      getInitialData() {
      return {
        nombre: '',
        descripcion: '',
        importe: ''
      }
    },
    enviar() {
      this.enviando = true
      console.log(this.formData)
      axios.post(url, this.formData,{
        'content-type' : 'application.json'
      })
      .then( res =>{
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.enviando = false
      })
      .catch(error=>{
        console.log(error)
        
      })
      
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-formulario {
}
</style>
