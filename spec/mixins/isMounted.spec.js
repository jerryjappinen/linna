import { shallowMount } from '@vue/test-utils'
import isMounted from '../../mixins/isMounted'

const Component = {
  mixins: [isMounted],
  template: `
    <div>
      <template v-if="isMounted">Mounted</template>
      <template v-else>Not mounted</template>
    </div>
  `
}

describe('isMounted', () => {

  // it('Does not show as mounted when not mounted', () => {
  //   const app = new Vue({
  //     render (h) {
  //       return Component()
  //     }
  //   })
  // })

  it('Show as mounted after being mounted', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.vm.isMounted).toBe(true)
  })

})
