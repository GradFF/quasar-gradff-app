<template>
  <q-layout view="lhh LpR lFf">
    <q-header class="bg-primary text-white">
      <div class="container">
        <q-toolbar>
          <q-btn
            dense
            flat
            round
            icon="menu"
            @click="toggleLeftDrawer"
            class="lt-md"
          />

          <q-toolbar-title class="text-weight-bold"> GradFF </q-toolbar-title>
          <div class="q-gutter-sm">
            <q-btn v-if="!store.user" outline label="Entrar" to="/login" />
            <q-btn
              v-if="store.user"
              outline
              icon="logout"
              @click="store.logout"
            />
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from "src/stores/auth-store";
import { ref } from "vue";

const store = useAuthStore();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
