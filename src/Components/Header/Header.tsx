import * as React from 'react';

import { useGlobalState, GlobalStateInterface } from '../../Context/GlobalStateProvider';
import { MoonIcon, SunIcon, SearchIcon } from '@heroicons/react/outline'
import Logo from './Logo';
import NavItem from './NavItem';

export default function Header() {
  const { state, setState } = useGlobalState()

  const handleModeSwitchClick = (setState: React.Dispatch<React.SetStateAction<Partial<GlobalStateInterface>>>): void => {
    if ('theme' in localStorage) {
      setState({
        mode: localStorage.theme === 'dark' ? 'light' : 'dark'
      })
      localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'

      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
        return
      }
      document.documentElement.classList.remove('dark')
    }
  }

  // TODO (dogukanoksuz): Add mobile menu
  // TODO (dogukanoksuz): Add search modal
  return (
    <header className="relative">
      <div className="max-w-6xl px-5 xl:px-0 mx-auto xl:py-14 lg:py-8 md:py-4 py-0">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="https://dogukan.dev">
              <span className="sr-only">Doğukan Öksüz</span>
              <Logo mode={state.mode ?? ''} />
            </a>
          </div>

          <nav className="hidden md:flex space-x-10">
            <NavItem url="#">Hakkımda</NavItem>
            <NavItem url="#">İşler</NavItem>
            <NavItem url="#">İletişim</NavItem>
          </nav>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <a id="search" className="modal-open float-left p-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              <SearchIcon className="w-6 h-6" />
            </a>

            <a onClick={() => handleModeSwitchClick(setState)} id="mode-switch" className=" float-left p-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              {
                state.mode == 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />
              }
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
