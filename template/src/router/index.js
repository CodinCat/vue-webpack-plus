import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import HomeView from '../views/HomeView'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import CounterView from '../views/CounterView'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: HomeView{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }, {
    path: '/counter',
    component: CounterView{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
