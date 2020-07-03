<template>
  <div id="app">
    <div>
      <h1>Respuestas</h1>
      <h4>1: A</h4>
      <h4>2: B</h4>
      <h4>3: A, B, C</h4>
      <h4>4: B</h4>
      <h4>5: B y D</h4>
    </div>
    <formulario />
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    Formulario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
