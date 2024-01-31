import '@/assets/style/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import componentsCustom from '@/components/UI'
import ClickOutsideDirective from './directive/focus'
import i18n from './plugins/i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

const app = createApp(App)

componentsCustom.forEach((component) => {
  app.component(component.name, component)
})
app.directive('focus', ClickOutsideDirective)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
