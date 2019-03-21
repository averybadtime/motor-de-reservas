import Vue from 'vue'
import App from './App.vue'

import { db, auth } from "@/firebase"
import { routes } from "@/routes"
import { store } from "@/store"

import "babel-polyfill"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
})

// auth.signInWithEmailAndPassword("vartan@dev.com", "123456")

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const user = store.state.user

  if (requiresAuth && !user) return next("/login")
  else if (!requiresAuth && user) return next("/")
  else return next()
})

async function getUserProfile(uid) {
  try {
    return (
      await db
      .child("profiles")
      .child(uid)
      .once("value")
    ).val()
  } catch (ex) {
    throw "user-profile"
  }
}

auth.onAuthStateChanged(async user => {
  if (user) {
    let profile
    try {
      profile = await getUserProfile(user.uid)
    } catch (ex) {
      if (ex == "user-profile") {
        return alert("Error al obtener el perfil del usuario.")
      }
    }
    store.commit("setUser", profile)
    router.replace("/")
  } else {
    store.commit("clearUser")
    router.replace("/login")
  }

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })

})