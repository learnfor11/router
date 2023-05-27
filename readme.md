# Router mini

##### 安装
``` bash
npm install router-mini
```

## React
``` jsx
import { Router, Link, useRoute } from 'router-mini/react.js'

export default function App() {
  return <Router
    routes = {[
      { path: '/', element: <Home /> },
      { path: '/a', element: <PageA /> },
      { path: '/b', element: <PageB /> },
      { path: '/c', element: <PageC /> }
    ]}
  />
}

function Home() {
  return <div>
    <Link to="/a">a</Link>
    <Link to="/b">b</Link>
    <Link to="/c">c</Link>
  </div>
}

function PageA() {
  return <div>page a</div>
}
function PageB() {
  return <div>page b</div>
}
function PageC() {
  const route = useRoute().value
  console.log({ route }) // "/c"
  return <div>page c</div>
}
```

## License
the Unlicense
