import { defineStore } from "pinia";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "src/boot/firebase";
import { Notify } from "quasar";
import verifyErroCode from "src/helpes/firebaseErrors";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
  }),
  getters: {
    isLogged: (state) => !state.user,
  },
  actions: {
    async register(email, password, cpassword) {
      if (password !== cpassword) {
        Notify.create({ type: "negative", message: "Senha não confere" });
        return;
      }

      this.loading = true;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        this.router.replace("/");
        Notify.create({
          type: "positive",
          message: "Conta criada com sucesso!",
        });
      } catch (error) {
        Notify.create({
          type: "negative",
          message: verifyErroCode(error.code),
        });
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async login(email, password) {
      this.loading = true;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        this.router.replace("/");
        Notify.create({
          type: "positive",
          message: "Usuário logado com sucesso!",
        });
      } catch (error) {
        Notify.create({
          type: "negative",
          message: verifyErroCode(error.code),
        });
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.loading = true;
      try {
        await signOut(auth);
        this.router.replace({ name: "login" });
        Notify.create({
          type: "positive",
          message: "Usuário desconectado!",
        });
      } catch (error) {
        Notify.create({
          type: "negative",
          message: verifyErroCode(error.code),
        });
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async resetPassword(email) {
      this.loading = true;
      try {
        await sendPasswordResetEmail(auth, email);
        this.router.replace("/");
        Notify.create({
          type: "positive",
          message:
            "Enviamos um link de redefinição de senha para o e-mail fornecido.",
        });
      } catch (error) {
        Notify.create({
          type: "negative",
          message: verifyErroCode(error.code),
        });
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    getCurrentUser() {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          (u) => {
            // const databaseStore = useDatabaseStore();
            if (u) {
              this.user = { email: u.email, uid: u.uid };
            } else {
              this.user = null;
              // databaseStore.$reset();
            }
            resolve(u);
          },
          (e) => reject(e)
        );
      });
    },
  },
});
