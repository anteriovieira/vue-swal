import swal from 'sweetalert'

function plugin (Vue) {
  Vue.prototype.$swal = swal
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  swal,
  version
}
