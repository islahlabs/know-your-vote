import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { Home } from './pages/Home'
import { California } from './pages/California'
import { Layout } from './components/Layout'

// Root route with layout
const rootRoute = createRootRoute({
  component: Layout,
})

// Home route (single page with all sections)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

// California route
const californiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/california',
  component: California,
})

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  californiaRoute,
])

// Create the router
export const router = createRouter({ routeTree })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
