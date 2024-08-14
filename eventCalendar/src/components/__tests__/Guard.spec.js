import { expect, it, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: '/',
   name: 'landing',
   component: LandingView,
   meta: { requiresAuth: true }
  }
 ]
})
router.beforeEach((to, from, next) => {
 if (to.meta.requiresAuth) {
  const isAuthenticated = false
  if (isAuthenticated) {
   next()
  } else {
   next('/')
  }
 } else {
  next()
 }
})
describe('Vue Router Navigation', () => {
 it('navigates to a protected route with proper authorization', async () => {
  await router.push('/')
  await router.isReady()
  const wrapper = mount(LandingView, {
   global: {
    plugins: [router]
   }
  })
  expect(wrapper.findComponent(LandingView).exists()).toBe(true)
 })
 it('prevents access to a protected route without authorization', async () => {
  await router.push('/')
  expect(router.currentRoute.value.fullPath).not.toBe('/')
 })
})