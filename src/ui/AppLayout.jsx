import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import ShowPage from './ShowPage'
import SelectCityContent from '../features/SelectCity.jsx/SelectCityContent'
function AppLayout() {

  return (
      <>
          <Header></Header>
          <main>
              <Outlet></Outlet>
          </main>
          <ShowPage><SelectCityContent></SelectCityContent></ShowPage>
      </>
  )
}

export default AppLayout
