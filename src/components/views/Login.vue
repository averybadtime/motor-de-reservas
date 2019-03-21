<template>
  <div class="container">
    <label for="email">E-mail</label>
    <input
      placeholder="jon@doe.com"
      type="email"
      v-model="email"
    >
    <br>
    <label for="password">Contraseña</label>
    <input
      placeholder="••••••"
      type="password"
      v-model="password"
    >
    <br>
    <button @click="signIn">Iniciar sesión</button>
  </div>
</template>

<script>
  import { auth } from "@/firebase"

  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      async signIn() {
        if (
          this.email && this.email.trim() != "" &&
          this.password && this.password.trim() != ""
        ) {
          try {
            await auth.signInWithEmailAndPassword(this.email, this.password)
          } catch (ex) {
            return alert("Ocurrió un error al iniciar sesión. Intente nuevamente.")
          }
        }
      }
    }
  }
</script>
