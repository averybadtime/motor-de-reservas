<template>
  <div class="container">
    <p>Logueado como: {{ user.email }}</p>
    <button @click="signOut">Cerrar sesión</button>
  </div>
</template>

<script>
  import { auth } from "@/firebase"
  export default {
    computed: {
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      async signOut() {
        try {
          await auth.signOut()
          this.$store.commit("clearUser")
        } catch (ex) {
          alert("Ocurrió un error al cerrar la sesión. Intente nuevamente.")
        }
      }
    }
  }
</script>
