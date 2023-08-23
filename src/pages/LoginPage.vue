<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Acesse sua conta</div>
      </q-card-section>

      <q-card-section>
        <form
          @submit.prevent="store.login(email, password)"
          class="q-gutter-md"
        >
          <q-input type="email" v-model="email" label="E-mail *" lazy-rules />

          <q-input type="password" v-model="password" label="Senha *" />
          <RouterLink
            tabindex="-1"
            to="/forgot-password"
            class="text-primary text-caption q-mt-sm"
            >Esqueceu a senha?</RouterLink
          >
          <div>
            <q-btn
              :loading="store.loading"
              label="Entrar"
              type="submit"
              color="primary"
              class="full-width"
            />
          </div>
        </form>
        <p class="q-mt-sm text-caption">
          Não tem uma conta?
          <RouterLink to="/register">Cadastre-se</RouterLink>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useAuthStore } from "src/stores/auth-store";
import { ref } from "vue";

const email = ref("mrfneto@gmail.com");
const password = ref(null);

const store = useAuthStore();
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 320px
</style>
