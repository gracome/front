<template>
  <div class="container">
    <h2 class="font-weight-bold">Connexion</h2>
    <form class="mb-3">
      <div class="form-group">
        <label for="name">Nom d'utilisateur</label>
        <input
          type="text"
          class="form-control form-control-md"
          id="login"
          placeholder="Entrer votre nom d'utilisateur"
          v-model="form.username"
        />
        <span class="error-text"></span>
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          class="form-control form-control-md"
          id="password"
          placeholder="Entrer votre mot de passe"
          v-model="form.password"
        />
        <span class="error-text"></span>
      </div>

      <!-- <p>
          
          <a class="font-weight-semibold" href="/reset_password"
            >Mot de passe oublié</a
          >.
        </p> -->

      <button
        class="
          btn btn-primary btn-lg btn-block
          text-uppercase
          font-weight-semibold
        "
        type="submit"
        :disabled="on_loading"
        @click.prevent="logUser()"
      >
        <span v-if="on_loading == true" class="spinner-border" role="status">
        </span>
        <span v-else-if="on_loading == false"> Se connecter </span>
      </button>
      <!-- <p class="mt-3">
         Vous n'avez pas un compte?
      <a class="font-weight-semibold" href="/register">Inscrivez-vous</a>.
    </p> -->
    </form>
  </div>
</template>

<script>
import { accountService } from "../../api/services";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      on_loading: false,
    };
  },
  methods: {
    logUser() { 
      console.log("ffff");
      accountService.login(this.form).then((res) => {
        console.log("dddd");
        // Handling success message

        // Storing the token into the localStorage
        accountService.saveToken(res.data.token);
        // Moving the user to the conversations page
         this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style >
#app {
  text-align: left !important;
}

.spinner-border {
  width: 20px !important;
  height: 20px !important;
}
</style>