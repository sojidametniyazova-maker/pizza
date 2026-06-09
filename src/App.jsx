import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeSkeleton from './components/skeletons/HomeSkeleton'
import MenuSkeleton from './components/skeletons/MenuSkeleton'
import EventsSkeleton from './components/skeletons/EventsSkeleton'
import AboutSkeleton from './components/skeletons/AboutSkeleton'
const Layout = lazy(() => import('./components/layout/layout'))
const Home = lazy(() => import('./components/home/home'))
const Menu = lazy(() => import('./components/menu/menu'))
const Events = lazy(() => import('./components/events/events'))
const AboutUs = lazy(() => import('./components/AboutUs/About'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        } />
        <Route path='/menu' element={
          <Suspense fallback={<MenuSkeleton />}>
            <Menu />
          </Suspense>
        } />
        <Route path='/events' element={
          <Suspense fallback={<EventsSkeleton />}>
            <Events />
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<AboutSkeleton />}>
            <AboutUs />
          </Suspense>
        } />
      </Route>
    </Routes>
  )
}

export default App