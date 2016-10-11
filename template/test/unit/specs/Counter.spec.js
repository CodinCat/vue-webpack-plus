import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Counter from 'src/components/Counter'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { getVM, getMockedStore } from '../utils'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Counter.vue', () => {
  it('rendered correctly', () => {
    const store = getMockedStore(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = getVM(Counter, store){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    expect(vm.$el).to.be.ok{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$refs.component.increment).to.be.a('function'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('.counter h2').textContent).to.equal(`Count: ${store.state.count}`){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('increment', () => {
    const store = getMockedStore(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = getVM(Counter, store){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: 0'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    vm.$refs.component.increment(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Vue.nextTick(() => {
      expect(store.state.count).to.equal(1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: 1'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('decrement', () => {
    const store = getMockedStore(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = getVM(Counter, store){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: 0'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    vm.$refs.component.decrement(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Vue.nextTick(() => {
      expect(store.state.count).to.equal(-1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: -1'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('should reactive when store updated', () => {
    const store = getMockedStore(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = getVM(Counter, store){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: 0'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    store.dispatch('increment'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: 1'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      store.dispatch('decrement'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.counter h2').textContent).to.equal('Count: 0'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
