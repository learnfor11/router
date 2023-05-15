import { createContext, useContext, useState } from 'react'
import { $, useMount } from '@ppzp/utils.rc'

export
const RouterConfig = {
  base_path: ''
}

const RouterContext = createContext()

export
function Router({ routes }) {
  const [route, setRoute] = useState(location.pathname + location.search)

  const [routes_map] = useState(() => { // 初始化 path => route 的映射
    const map = new Map()
    for(const route of routes)
      map.set(RouterConfig.base_path + route.path, route)
    return map
  })

  useMount(function() { // 监听浏览器前进后退
    window.addEventListener('popstate', function() {
      // console.debug('[router mini] listen popstate')
      setRoute(location.pathname)
    })
  })

  return $(RouterContext.Provider,
    {
      value: {
        route,
        setRoute(route) {
          history.pushState({}, '', route) // 更新浏览器地址栏
          setRoute(route) // 更新 Context
        }
      }
    },
    
    routes_map.get(route.split('?')[0]).element
  )
}

export
function Link({ className, to, target, children }) {
  to = RouterConfig.base_path + to
  const { setRoute } = useContext(RouterContext)
  return $.a(
    {
      className,
      href: to,
      target,
      onClick(e) {
        e.preventDefault()
        // console.debug('[router mini] click link')
        setRoute(to)
      }
    },
    children
  )
}

export
function useRoute() {
  return useContext(RouterContext).route
}

export
function useQuery() {
  const route = useRoute()
  const qs = route.split('?')[1]
  if(qs === undefined)
    return null
  const query = {}
  const sp = new URLSearchParams(qs)
  sp.forEach(function(value, key) {
    query[key] = value
  })
  return query
}
