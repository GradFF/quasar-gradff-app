<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Esqueceu a senha</div>
        <div class="text-body">
          Informe seu e-mail e enviaremos instruções para você uma nova senha.
        </div>
      </q-card-section>

      <q-card-section>
        <form @submit.prevent="store.resetPassword(email)" class="q-gutter-md">
          <q-input type="email" v-model="email" label="E-mail *" lazy-rules />

          <div>
            <q-btn
              :loading="store.loading"
              label="Enviar"
              type="submit"
              color="primary"
              class="full-width"
            />
          </div>
        </form>
        <p class="q-mt-sm">
          <RouterLink to="/login">voltar ao login</RouterLink>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useAuthStore } from "src/stores/auth-store";
import { ref } from "vue";

const email = ref(null);

const store = useAuthStore();
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 320px
</style>
