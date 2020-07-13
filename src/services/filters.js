import Vue from 'vue'

Vue.filter('capitalize', (value) => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('snippet', (value) => {
    return value.slice(0,105) + "... "
})


Vue.filter('snippetTitle', (value) => {
    return value.slice(0,50)
})






