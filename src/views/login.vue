<template>
  <div class="signup">
 <div class="main-layout card-bg-1">
        <div class="container d-flex flex-column">
            <div class="row no-gutters align-items-center justify-content-center min-vh-100">
                <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                    <auth />
                </div>
            </div> 
        </div>
    </div>
    </div>
</template>

<script>
import auth from '@/components/loginPage.vue'

export default{
 name: auth,
 components: {
  auth
 }

}
</script>
