require('./bootstrap');

import { store } from './vuex/store';
import { router } from './router/router';
import vuetify from './plugins/vuetify'



import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  //!!!!!!!!!!!!!!!!!!!!!!
  uri: 'http://graphql/graphql',
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


import App from './components/app'

const app = new Vue({
	store,
  	router,
  	vuetify,
  	apolloProvider,
  	render: h => h(App)
}).$mount('#app');