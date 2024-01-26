import { defineStore } from 'pinia'

import { auth } from '@/firebase-config.js'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCredential,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    setLoading(loading) {
      this.loading = loading
    },
    setError(error) {
      this.error = error
    },

    async saveLoginUserData(loginResult) {
      const user = loginResult?.user
      this.setUser(user)

      let credential = GoogleAuthProvider.credentialFromResult(loginResult)
      localStorage.setItem('authCredential', JSON.stringify(credential))
    },

    async loginWithGoogle() {
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
        .then((loginResult) => {
          this.saveLoginUserData(loginResult)
        })
        .catch((error) => {
          this.setError(error)
        })
    },

    async loginWithCredential() {
      return new Promise((resolve, reject) => {
        let credential = localStorage.getItem('authCredential')

        if (credential) {
          credential = JSON.parse(credential)
          credential = GoogleAuthProvider.credential(credential.idToken)
          signInWithCredential(auth, credential)
            .then((loginResult) => {
              this.saveLoginUserData(loginResult)
              resolve(loginResult)
            })
            .catch((error) => {
              console.log(error)
              this.setError(error)
              reject(false)
            })
        } else resolve(false)
      })
    },

    // async loginWithCredentialEmail() {
    //   return new Promise((resolve, reject) => {
    //     let credential = localStorage.getItem('authEmail')

    //     if (credential) {
    //       credential = JSON.parse(credential)
    //       credential = EmailAuthProvider({email, password})
    //       signInWithCredential(auth, credential)
    //         .then((loginResult) => {
    //           this.saveLoginUserData(loginResult)
    //           resolve(loginResult)
    //         })
    //         .catch((error) => {
    //           console.log(error)
    //           this.setError(error)
    //           reject(false)
    //         })
    //     } else resolve(false)
    //   })
    // },

    signUpWithWithEmailAndPassword(email, password) {
      return new Promise((resolve, reject) => {
        if (!email || !password) reject(false)
        else {
          const auth = getAuth()

          createUserWithEmailAndPassword(auth, email, password)
            .then((loginResult) => {
              // this.saveLoginUserData(loginResult)
              this.setUser(loginResult?.user)
              // localStorage.setItem('authEmail', JSON.stringify(this.user))
              // let credential = EmailAuthProvider({email, password})
              // localStorage.setItem('authEmail', JSON.stringify(credential))
              console.log(loginResult)
              resolve(loginResult?.user)
            })
            .catch((error) => {
              reject(error)
              // const errorCode = error.code;
              // const errorMessage = error.message;
            })
        }
      })
    },
    signInWithWithEmailAndPassword(email, password) {
      return new Promise((resolve, reject) => {
        if (!email || !password) reject(false)
        else {
          const auth = getAuth()
          signInWithEmailAndPassword(auth, email, password)
            .then((loginResult) => {
              this.setUser(loginResult?.user)
              resolve(loginResult?.user)
            })
            .catch((error) => {
              reject(error)
              // const errorCode = error.code;
              // const errorMessage = error.message;
            })
        }
      })
    },

    logout() {
      signOut(auth)
        .then(() => {
          localStorage.removeItem('authCredential')
          localStorage.removeItem('authEmail')
          this.setUser(null)
        })
        .catch((error) => {
          this.setError(error)
        })
    }
  }
})

//    signUpWithWithEmailAndPassword(email, password) {
//     try {
//         const auth = getAuth();
//         const userCredential = signInWithEmailAndPassword(auth, email, password);
//         console.log(userCredential);
//         const user = userCredential.user;
//         console.log("User successfully signed in:", user);
//         return user;
//     } catch (error) {
//         console.error("Error signing in:", error);
//         throw error;
//     }
// },
