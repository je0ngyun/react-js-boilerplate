import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@stores/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@styles/theme'
import { getThemeFromStorage } from '@utils/storage'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import GlobalStyle from '@styles/global'

import Header from './components/Layout/Header/index'
import Main from '@components/Layout/Main'
import Footer from '@components/Layout/Footer'

function App() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState)
  const theme = currentTheme === ThemeFlag.light ? lightTheme : darkTheme

  useEffect(() => {
    const storageTheme = getThemeFromStorage()
    if (storageTheme !== undefined) {
      setCurrentTheme(storageTheme)
    }
  }, [])

  const queryClient = new QueryClient()
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Header />
          <Main>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Main>
          <Footer />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
