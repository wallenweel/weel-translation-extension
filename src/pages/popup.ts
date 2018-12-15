import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue, { VueConstructor } from 'vue';

Vue.config.productionTip = false;

import VueMDCAdapter from 'vue-mdc-adapter';
Vue.use(VueMDCAdapter);

import MdcAdapterPatch from '@/plugins/mdc-adapter-patch';
Vue.use(MdcAdapterPatch);

import Scrollbar from '@/plugins/scrollbar';
Vue.use(Scrollbar);

import router from '@/routers/popup';
import store from '@/stores/popup';
import i18n from '@/i18n';

import App from './Popup.vue';

store.dispatch('init');

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App as VueConstructor),
}).$mount('#app');

// import debug from '@/functions/debug';
// debug.log(TARGET_BROWSER);
