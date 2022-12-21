<template>
    
  <div class="container pt-5">
    <h2 class="font-weight-bold">Ajouter un utilisateur</h2>
      <form class="mb-3" >
        <div class="row">

        
          <div class="col-6 form-group">
            <label for="name">Nom d'utilisateur</label>
            <input
              type="text"
              class="form-control form-control-md"
              
              placeholder="Entrer votre nom d'utilisateur"
               v-model="form.username"
             
            />
            <span class="error-text"></span>
          </div>

          <div class="col-6 form-group">
            <label for="name">Rôle</label>
            <select class="form-control form-control-md"  v-model="form.role">
            <option> Admin</option>
            <option >Agent</option>
            </select>
            <span class="error-text"></span>
          </div>
       

          
        
          <div class="col-6 form-group">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              class="form-control form-control-md"
             
              placeholder="Entrer votre mot de passe"
               v-model="form.password"
              
            />
            <span class="error-text"></span>
          </div>

           <div class="col-6 form-group">
            <label for="password">Confirmer votre mot de passe</label>
            <input
              type="password"
              class="form-control form-control-md"
             
              placeholder="Confirmez votre mot de passe"
              
            />
            <span class="error-text"></span>
          </div>
        
    <div class="container">
         <button
          class="
            btn btn-dark btn-lg btn-block
            text-uppercase
            font-weight-semibold
          "
          type="submit"
         @click.prevent="addUser()"
        >
          
          <span> Ajouter </span>
        </button>
               
    </div>
       
        </div>
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
        role: "",
        password: "",
      },
success: false
    };
  },
  methods: {
    addUser() { 
      accountService.register(this.form).then(()=>{alert("L'utilisateur à été créé avec succès")}).catch(()=>{alert("Une erreur s'est produite")})
    },
  },
};
</script>