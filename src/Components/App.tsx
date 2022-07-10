import * as React from 'react';

import { GlobalStateProvider } from "../Context/GlobalStateProvider"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

export interface IAppProps {
  children: JSX.Element
}

export default class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props)
  }

  componentDidMount() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  public render() {
    return (
      <GlobalStateProvider>
        <Header />
        {this.props.children}
        <Footer />
      </GlobalStateProvider >
    )
  }
}
