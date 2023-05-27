import { $ } from '@ppzp/utils.rc'
import { createRoot } from 'react-dom/client'
import { Router, Link, useRoute } from 'router-mini/react'

createRoot(document.getElementById('app')).render($(App))

function App() {
  return $(Router, {
    routes: [
      { path: '/', element: $(Home) },
      { path: '/a', element: $(PageA) },
      { path: '/b', element: $(PageB) },
      { path: '/c', element: $(PageC) },
    ]
  })
}

function Home() {
  return $.div(
    $(Link, { to: '/a' }, 'a'),
    $(Link, { to: '/b' }, 'b'),
    $(Link, { to: '/c' }, 'c')
  )
}

function PageA() {
  return $.div('page a')
}
function PageB() {
  return $.div('page b')
}
function PageC() {
  const route = useRoute().value
  console.log({ route })
  return $.div('page c')
}
