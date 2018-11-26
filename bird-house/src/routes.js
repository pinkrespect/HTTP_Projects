import Index from './components/Index'
import HelloWorld from './components/HelloWorld'

export default [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/counter',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '*',
    redirect: '/'
  }
]
