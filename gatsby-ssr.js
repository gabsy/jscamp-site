/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://ove.ro/embed/b893los.js?en"
      src="https://ove.ro/embed/b893los.js?en"
      crossOrigin="anonymous"
      defer
    />
  ])
}
