{{#if_eq lintConfig "airbnb"}}
/* eslint-disable no-param-reassign, no-shadow */
{{/if_eq}}export const INCREMENT = (state) => {
  state.count += 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const DECREMENT = (state) => {
  state.count -= 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
