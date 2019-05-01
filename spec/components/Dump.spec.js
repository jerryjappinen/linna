import { shallowMount } from '@vue/test-utils'
import Dump from '../../components/Dump'

describe('Dump', () => {
  it('renders value prop when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(Dump, {
      propsData: {
        value: message
      }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
