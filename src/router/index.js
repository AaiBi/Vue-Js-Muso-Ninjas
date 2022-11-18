import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'
import PlaylistDetails from '@/views/playlists/PlaylistDetails.vue'
import UserPlaylists from '@/views/playlists/UserPlaylists.vue'
import { projectAuth } from '@/firebase/config'

// route guard
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requiredAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/CreatePlaylist/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requiredAuth
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requiredAuth,
    props: true
  },
  {
    path: '/playlists/user',
    name: 'UserPlaylists',
    component: UserPlaylists,
    beforeEnter: requiredAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
