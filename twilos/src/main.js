import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as Keycloak from 'keycloak-js';
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')



let initOptions = {
  url: 'http://localhost:8080/auth', realm: 'twilos', clientId: 'twilos', onLoad:'login-required'
}

let keycloak = Keycloak(initOptions);
//console.log(keycloak)
keycloak.init({ onLoad: initOptions.onLoad }).success((auth) =>{
    
    if(!auth) {
      window.location.reload();
    } else {
      //console.log(keycloak.token)
      //Vue.$log.info("Authenticated");
    
 console.log(keycloak)
/*    new Vue({
      store,
      render: h => h(App),
    }).$mount('#app')
*/
console.log('test')
      let payload = {
    idToken: keycloak.idToken,
    accessToken: keycloak.token
  }
  console.log(keycloak.tokenParsed)
  if (keycloak.token && keycloak.idToken && keycloak.token != '' && keycloak.idToken != '') {
    //console.log('test')
    store.commit("login", payload);
    console.log("User has logged in: " + keycloak.subject)
  }
  }
  

    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setInterval(() =>{
      keycloak.updateToken(70).success((refreshed)=>{
        if (refreshed) {
          Vue.$log.debug('Token refreshed'+ refreshed);
        } else {
          Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).error(()=>{
          Vue.$log.error('Failed to refresh token');
      });


    }, 60000)

}).error(() =>{
  Vue.$log.error("Authenticated Failed");
});
