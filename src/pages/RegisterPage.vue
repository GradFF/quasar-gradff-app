<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Crie sua conta</div>
      </q-card-section>

      <q-card-section>
        <form
          @submit.prevent="store.register(email, password, cpassword)"
          class="q-gutter-md"
        >
          <q-input type="email" v-model="email" label="E-mail *" lazy-rules />

          <q-input type="password" v-model="password" label="Senha *" />
          <q-input
            type="password"
            v-model="cpassword"
            label="Conforme a Senha *"
          />

          <div>
            <q-btn
              :loading="store.loading"
              label="Cadastrar"
              type="submit"
              color="primary"
              class="full-width"
            />
          </div>
        </form>
        <p class="q-mt-sm text-caption">
          Já tem uma conta?
          <RouterLink to="/login">Fazer login</RouterLink>
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
const cpassword = ref(null);

const store = useAuthStore();
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 320px
</style>
