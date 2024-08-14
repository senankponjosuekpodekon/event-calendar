<template>
  <div class="font-[sans-serif] max-w-4xl flex items-center mx-auto md:h-screen p-4">
    <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
      <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
        <div>
          <h4 class="text-white text-lg font-semibold">Create Your Account</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our TaskStia page! Get started by creating your account.</p>
        </div>
        <div>
          <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
        </div>
      </div>

      <form @submit.prevent="navigateToSignup" class="md:col-span-2 w-full py-6 px-6 sm:px-16 bg-white">
        <div class="mb-6">
          <h3 class="text-gray-800 text-2xl font-bold">Create an account</h3>
        </div>

        <div v-if="authStore.errorMessage" class="mb-4">
          <ul class="text-red-600 text-sm">
            <li>{{ authStore.errorMessage }}</li>
          </ul>
        </div>

        <div class="space-y-6">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Name</label>
            <div class="relative flex items-center">
              <input v-model="name" name="name" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block">Email</label>
            <div class="relative flex items-center">
              <input v-model="email" name="email" type="email" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block">Password</label>
            <div class="relative flex items-center">
              <input v-model="password" name="password" type="password" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
          </div>
        </div>

        <div class="!mt-12">
          <button type="submit" class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
            Create an account
          </button>
        </div>
        <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1" @click="navigateToLogin">Login here</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const name = ref('');
    const email = ref('');
    const password = ref('');

    const validateForm = () => {
      if (!name.value || !/^[A-Za-z][A-Za-z0-9_]{5,10}$/.test(name.value)) {
        authStore.errorMessage = 'Name is required.';
        return false;
      }
    //'password' => 'required|confirmed|regex:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/',

      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        authStore.errorMessage = 'A valid email is required.';
        return false;
      }
      if (!password.value || !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password.value)) {
        authStore.errorMessage = 'Password must be at least 8 characters long, Contains major, minor characters, specials and numbers.';
        return false;
      }
      authStore.errorMessage = null;
      return true;
    };

    const navigateToSignup = () => {
      if (validateForm()) {
        authStore.signup(name.value, email.value, password.value);
        if (!authStore.errorMessage) {
         router.push('/home');
          console.log("success");

        }
      } else{
        console.log("erros");
      }
    };

     const navigateToLogin = () => {
       router.push('/login');
     };

    return {
      name,
      email,
      password,
      authStore,
      navigateToSignup,
      navigateToLogin,
    };
  },
};
</script>
