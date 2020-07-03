import Vue from 'vue'

Vue.filter('formatoFecha', function (value) {
    value = value.toString()
    return value.slice(0, 19).replace('T', ' ')
})

Vue.filter('formatoImporte', function(value){
    value = value.toString()
    return "$"+ value
})