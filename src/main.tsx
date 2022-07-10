import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import App from './Components/App'
import "@fontsource/inter"
import './Styles/index.css'
import Index from './Pages/Index'

const documentRoot = document.getElementById('root') as Element

ReactDOM.createRoot(documentRoot).render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            {/*<Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </App>
  </React.StrictMode>
)
