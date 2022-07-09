import { useGlobalState, GlobalStateProvider } from "./Context/GlobalStateProvider"
import Header from "./Components/Header/Header"

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}

function App() {
  return (
    <GlobalStateProvider>
      <Header />
    </GlobalStateProvider>
  )
}

export default App
