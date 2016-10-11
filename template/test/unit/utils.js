import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as actions from 'src/store/actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as mutations from 'src/store/mutations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import state from 'src/store/state'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export function getVM{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(component, store = {}) {
  return new Vue({
    el: document.createElement('div'),
    store,
    render: h => h(component, { ref: 'component' }){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }).$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export function getMockedStore{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
  return new Vuex.Store({
    actions,
    mutations,
    state: JSON.parse(JSON.stringify(state)){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
