import Login from "@/components/views/Login"
import Home from "@/components/views/Home"
import NotFound from "@/components/views/NotFound"

export const routes = [
  {
    component: Login,
    meta: { requiresAuth: false },
    path: "/login"
  }, {
    component: Home,
    meta: { requiresAuth: true },
    path: "/"
  }, {
    component: NotFound,
    meta: { requiresAuth: true },
    path: "*"
  }
]