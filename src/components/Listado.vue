<template>

  <section class="src-components-listado">
    <div class="jumbotron -mt-3">
      <h2>Gastos</h2>
            <hr/>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Importe</th>
                    <th scope="col">Fecha de creacion</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(gasto) in formData" v-bind:key="gasto.id">
                    <th scope="row">{{gasto.id}}</th>
                    <td>{{gasto.nombre}}</td>
                    <td>{{gasto.descripcion}}</td>
                    <td>{{gasto.importe | formatoImporte}}</td>
                    <td>{{gasto.createdAt | formatoFecha }}</td>
                </tr>
                </tbody>
            </table>
        </div>

  </section>

</template>

<script lang="js">
  import axios from 'axios'
  const url = 'https://5ee29b1e8b27f30016094cf8.mockapi.io/recuperatorio/'
  export default  {
    name: 'Listado',
    props: [],
    mounted () {
          this.listar()
    },
    data () {
      return {
          formData : [],
      }
    },
    methods: {
        listar(){
          axios.get(url)
          .then(res => {
              console.log(res.data)
              this.formData = res.data})
          .catch(error=>{
              console.log('error get', error)})
        }
    },
    computed: {
     
    }
}


</script>

<style scoped lang="css">
  .src-components-listado {


  }
</style>
