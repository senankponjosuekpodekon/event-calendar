import { defineStore } from 'pinia';

const getUsersDatabase = () => JSON.parse(localStorage.getItem('usersDatabase')) || {};
const setUsersDatabase = (db) => localStorage.setItem('usersDatabase', JSON.stringify(db));

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('currentUser')) || null,
    token: localStorage.getItem('authToken') || null,
    errorMessage: null,
  }),
  actions: {
    signup(name, email, password) {
      try {
        const usersDatabase = getUsersDatabase();
        if (usersDatabase[email]) {
          throw new Error('User already exists');
        }
        usersDatabase[email] = { name, password };
        setUsersDatabase(usersDatabase);

        const theToken = Math.random().toString(36);

        this.user = { name, email };
        this.token = theToken;
        localStorage.setItem('authToken', this.token);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.errorMessage = null;
      } catch (error) {
        console.error('Error during signup:', error);
        this.errorMessage = error.message || 'Signup failed. Please try again.';
      }
    },
    login(email, password) {
      try {
        const usersDatabase = getUsersDatabase();
        const user = usersDatabase[email];
        if (!user || user.password !== password) {
          throw new Error('Invalid email or password');
        }


        const theToken = Math.random().toString(36);
        this.user = { name: user.name, email };
        this.token = theToken;
        localStorage.setItem('authToken', this.token);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.errorMessage = null;
      } catch (error) {
        console.error('Error during login:', error);
        this.errorMessage = error.message || 'Login failed. Please try again.';
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    },
  },
});
