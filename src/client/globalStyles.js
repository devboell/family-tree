import { injectGlobal, css } from 'styled-components'

/* eslint no-unused-expressions: 0 */

injectGlobal`
  * { margin: 0; padding: 0; }
  html,
  body {
    height: 100%;
  }

  #main, #main > [data-reactroot] { height: 100%; }
`

/* eslint-disable import/prefer-default-export */
export const pageBlock = css`
  min-height: 700px;
  padding: 20px 20px;
`
