<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <q-list bordered v-if="store.user">
          <q-item class="q-my-sm">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                class="text-uppercase"
              >
                {{ store.user.email.substr(1, 1) }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ store.user?.email }}</q-item-label>
              <q-item-label caption lines="1">{{
                store.user?.uid
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered v-else>
          <q-item class="q-my-sm">
            <q-item-section>
              <q-item-label>Nenhum usuário logado</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useAuthStore } from "src/stores/auth-store";

const store = useAuthStore();
</script>
