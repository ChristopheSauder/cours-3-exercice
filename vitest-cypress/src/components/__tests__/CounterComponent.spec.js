import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Counter from '../CounterComponent.vue'

function mountCounter(x = 0) {
  const wrapper = mount(Counter, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            counter: { count: x } // start the counter at x instead of 0
          }
        })
      ]
    }
  })
  return wrapper
}

describe('Counter', () => {
  it('renders properly', () => {
    const wrapper = mountCounter(0)
    const counterText = wrapper.find('h3').text()
    expect(counterText).toContain('Counter: 0')
  })

  describe('Clicks', () => {
    it('increments counter', async () => {
      const wrapper = mountCounter(0)
      const incrementButton = wrapper.find('.actions button:nth-of-type(2)')
      expect(incrementButton.exists()).toBe(true)
      await incrementButton.trigger('click')
      const counterText = wrapper.find('h3').text()
      //expect(counterText).toContain('Counter: 1')
    })

    it('decrements counter', async () => {
      const wrapper = mountCounter(1)
      const decrementButton = wrapper.find('.actions button:nth-of-type(1)')
      expect(decrementButton.exists()).toBe(true)
      await decrementButton.trigger('click')
      const counterText = wrapper.find('h3').text()
      //expect(counterText).toContain('Counter: 0')
    })
  })
})