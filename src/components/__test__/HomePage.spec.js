import { shallowMount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useChatterStore } from '@/stores/store'
import { describe, expect, it, beforeEach } from 'vitest'
import HomePage from '@/views/HomePage.vue'

let store

beforeEach(() => {
  setActivePinia(createPinia())

  store = useChatterStore()
})

describe('HomePage rendered correctly', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(HomePage)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should be created', () => {
    expect(store).toBeDefined()
  })
  it('should have a signedUser', () => {
    new Promise((resolve) => {
      setTimeout(resolve, 5000)
    }).then(() => {
      expect(store.signedUser.length).toBeGreaterThan(0)
    })
  })
  it('sidebarbtn clicked', () => {
    const wrapper = shallowMount(HomePage)
    new Promise((resolve) => {
      setTimeout(resolve, 5000)
    }).then(() => {
      const sidebarBtn = wrapper.find('.sidebarOpenBtn')
      sidebarBtn.trigger('click')
      expect(sidebarBtn).toHaveBeenCalled(1)
    })
  })
})
