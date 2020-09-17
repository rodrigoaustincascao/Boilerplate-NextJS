import GlobalStyle from '../src/styles/global'

// import { ThemeProvider } from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]
