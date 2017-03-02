import * as mutations from '@/store/mutations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#if_eq lintConfig "airbnb"}}
/* eslint-disable new-cap */
{{/if_eq}}describe('mutations', () => {
  it('INCREMENT', () => {
    const state = { count: 0 }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    mutations.INCREMENT(state){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(state.count).to.equal(1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('DECREMENT', () => {
    const state = { count: 0 }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    mutations.DECREMENT(state){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(state.count).to.equal(-1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
