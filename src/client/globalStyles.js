import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */

injectGlobal`
  * { margin: 0; padding: 0; }
  html,
  body {
    height: 100%;
  }

  #main, #main > [data-reactroot] { height: 100%; }
`
