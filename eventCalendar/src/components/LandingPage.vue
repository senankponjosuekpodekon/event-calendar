<script>

import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const navigateToSignup = () => {
      router.push('/signup');
    };

    const navigateToLogin = () => {
      router.push('/login');
    };

    const dashBoard = () => {
      router.push('/home');
    };

    const handleLogout = () => {
      authStore.logout();
      router.push('/login');
    };

    return {
      authStore,
      navigateToSignup,
      navigateToLogin,
      handleLogout,
      dashBoard,
    };
  },
};

</script>

<template>
    <div
      id="home"
      class="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div class="container">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4">
            <div
              class="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1
                class="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
              >
                Todo App, Are you an entrepreneur? Be updated for your plan from Today!
              </h1>
              <p
                class="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
              >
                Todo Web App Built with Favourite
                Technology - Tailwind and VueJs.
              </p>
              <ul
                class="mb-10 flex flex-wrap items-center justify-center gap-5"
              >
                <li class="cursor-pointer" v-if="!authStore.user">
                  <a
                    @click="navigateToSignup"
                    class="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  >
                    Signup Now
                  </a>
                </li>
                <li class="cursor-pointer" v-if="!authStore.user">
                  <a
                  @click="navigateToLogin"
                    class="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                  >
                    Signin Now
                  </a>
                </li>

                <!-- <div class="text-gray-500 order-3 w-full md:w-auto md:order-2" id="dashn">
                  <ul class="flex font-semibold justify-between cursor-pointer" v-if="authStore.user">
                    <li class="md:px-4 md:py-2 bg-green-500 text-white rounded-xl text-center"><a @click="dashBoard">Dashboard</a></li>
                  </ul>
                 </div> -->
              </ul>
              <div>
                <p class="mb-4 text-center text-base font-medium text-white">
                  Built with latest technology
                </p>
                <div
                  class="wow fadeInUp flex items-center justify-center gap-4 text-center"
                  data-wow-delay=".3s"
                >
                  <a
                    href="https://github.com/TailGrids/play-tailwind/"
                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                    target="_blank"
                  >
                    <svg
                      class="fill-current"
                      width="41"
                      height="26"
                      viewBox="0 0 41 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_2005_10783"
                        style="mask-type: luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="41"
                        height="26"
                      >
                        <path
                          d="M0.521393 0.949463H40.5214V25.0135H0.521393V0.949463Z"
                        />
                      </mask>
                      <g mask="url(#mask0_2005_10783)">
                        <path
                          d="M20.5214 0.980713C15.1882 0.980713 11.8546 3.64743 10.5214 8.98071C12.5214 6.31399 14.8546 5.31399 17.5214 5.98071C19.043 6.36103 20.1302 7.46495 21.3342 8.68667C23.295 10.6771 25.5642 12.9807 30.5214 12.9807C35.8546 12.9807 39.1882 10.314 40.5214 4.98071C38.5214 7.64743 36.1882 8.64743 33.5214 7.98071C31.9998 7.60039 30.9126 6.49651 29.7086 5.27479C27.7478 3.28431 25.4786 0.980713 20.5214 0.980713ZM10.5214 12.9807C5.18819 12.9807 1.85459 15.6474 0.521393 20.9807C2.52139 18.314 4.85459 17.314 7.52139 17.9807C9.04299 18.361 10.1302 19.465 11.3342 20.6867C13.295 22.6771 15.5642 24.9807 20.5214 24.9807C25.8546 24.9807 29.1882 22.314 30.5214 16.9807C28.5214 19.6474 26.1882 20.6474 23.5214 19.9807C21.9998 19.6004 20.9126 18.4965 19.7086 17.2748C17.7478 15.2843 15.4786 12.9807 10.5214 12.9807Z"
                        />
                      </g>
                    </svg>
                  </a>
                  
                  <a
                    href="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                    target="_blank"
                  >
                    <svg
                      class="mt-0.5 fill-current"
                      width="30"
                      height="38"
                      viewBox="0 0 30 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2412_2096)">
                        <path
                          d="M9.54022 32.0145C7.86872 30.4866 7.38074 27.2761 8.07717 24.9502C9.28468 26.4166 10.9578 26.8812 12.6908 27.1434C15.3662 27.548 17.9937 27.3967 20.479 26.1739C20.7633 26.0338 21.0261 25.8477 21.3368 25.6591C21.57 26.3357 21.6306 27.0187 21.5492 27.7139C21.3511 29.407 20.5086 30.7148 19.1685 31.7062C18.6326 32.1027 18.0656 32.4572 17.5121 32.8311C15.8119 33.9803 15.3519 35.3278 15.9907 37.2877C16.0059 37.3358 16.0195 37.3835 16.0538 37.5C15.1857 37.1114 14.5516 36.5456 14.0684 35.8018C13.5581 35.017 13.3153 34.1486 13.3026 33.209C13.2962 32.7518 13.2962 32.2905 13.2347 31.8397C13.0845 30.7407 12.5686 30.2486 11.5967 30.2203C10.5992 30.1912 9.81018 30.8078 9.60094 31.779C9.58497 31.8535 9.5618 31.9271 9.53863 32.0137L9.54022 32.0145Z"
                        />
                        <path
                          d="M0 24.5627C0 24.5627 4.94967 22.1515 9.91317 22.1515L13.6555 10.5697C13.7956 10.0096 14.2046 9.62894 14.6665 9.62894C15.1283 9.62894 15.5374 10.0096 15.6775 10.5697L19.4198 22.1515C25.2984 22.1515 29.333 24.5627 29.333 24.5627C29.333 24.5627 20.9256 1.65922 20.9092 1.61326C20.6679 0.936116 20.2605 0.5 19.7113 0.5H9.62256C9.07337 0.5 8.68245 0.936116 8.42473 1.61326C8.40654 1.65835 0 24.5627 0 24.5627Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2412_2096">
                          <rect
                            width="29.3925"
                            height="37"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a
                    href="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                    target="_blank"
                  >
                    <svg
                      class="mt-0.5 fill-current"
                      width="30"
                      height="38"
                      viewBox="0 0 30 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2412_2096)">
                        <path
                          d="M9.54022 32.0145C7.86872 30.4866 7.38074 27.2761 8.07717 24.9502C9.28468 26.4166 10.9578 26.8812 12.6908 27.1434C15.3662 27.548 17.9937 27.3967 20.479 26.1739C20.7633 26.0338 21.0261 25.8477 21.3368 25.6591C21.57 26.3357 21.6306 27.0187 21.5492 27.7139C21.3511 29.407 20.5086 30.7148 19.1685 31.7062C18.6326 32.1027 18.0656 32.4572 17.5121 32.8311C15.8119 33.9803 15.3519 35.3278 15.9907 37.2877C16.0059 37.3358 16.0195 37.3835 16.0538 37.5C15.1857 37.1114 14.5516 36.5456 14.0684 35.8018C13.5581 35.017 13.3153 34.1486 13.3026 33.209C13.2962 32.7518 13.2962 32.2905 13.2347 31.8397C13.0845 30.7407 12.5686 30.2486 11.5967 30.2203C10.5992 30.1912 9.81018 30.8078 9.60094 31.779C9.58497 31.8535 9.5618 31.9271 9.53863 32.0137L9.54022 32.0145Z"
                        />
                        <path
                          d="M0 24.5627C0 24.5627 4.94967 22.1515 9.91317 22.1515L13.6555 10.5697C13.7956 10.0096 14.2046 9.62894 14.6665 9.62894C15.1283 9.62894 15.5374 10.0096 15.6775 10.5697L19.4198 22.1515C25.2984 22.1515 29.333 24.5627 29.333 24.5627C29.333 24.5627 20.9256 1.65922 20.9092 1.61326C20.6679 0.936116 20.2605 0.5 19.7113 0.5H9.62256C9.07337 0.5 8.68245 0.936116 8.42473 1.61326C8.40654 1.65835 0 24.5627 0 24.5627Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2412_2096">
                          <rect
                            width="29.3925"
                            height="37"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-4">
            <div
              class="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
              data-wow-delay=".25s"
            >
        
              <div class="absolute -left-9 bottom-0 z-[-1]">
                <svg
                  width="134"
                  height="106"
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 60.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 60.3333 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 88.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 117.667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 74.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 103 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 132 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 31 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 103 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 132 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 31 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 103 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 132 1.66707)"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="absolute -right-6 -top-6 z-[-1]">
                <svg
                  width="134"
                  height="106"
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 60.3333 104)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 60.3333 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 88.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 117.667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 74.6667 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 103 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 132 31.0001)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 31 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 103 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 132 16.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 31 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="31"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3336)"
                    fill="white"
                  />
                  <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="60.3333"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="88.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="117.667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="74.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="103"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 103 1.66707)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill="white"
                  />
                  <circle
                    cx="132"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 132 1.66707)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
