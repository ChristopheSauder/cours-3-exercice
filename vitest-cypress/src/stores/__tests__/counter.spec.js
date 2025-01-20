// stores/counter.spec.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './../counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('store increments', () => {
    const counter = useCounterStore()
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('store decrements', () => {
    const counter = useCounterStore()
    counter.decrement()
    expect(counter.count).toBe(-1)
  });

})