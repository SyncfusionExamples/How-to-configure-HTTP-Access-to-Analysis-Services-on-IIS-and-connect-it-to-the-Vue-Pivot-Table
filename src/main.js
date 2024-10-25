import Vue from 'vue'
import './App.css'
import App from './App.vue'
import TreeView from './Components/TreeView.vue'
import Maps from './Components/Maps.vue'
import Chart from './Components/Chart.vue'
import Form from './Components/Form.vue'
import Grid from './Components/Grid.vue'

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': App,
  '/TreeView': TreeView,
  '/Maps': Maps,
  '/Chart': Chart,
  '/Form': Form,
  '/Grid': Grid,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})