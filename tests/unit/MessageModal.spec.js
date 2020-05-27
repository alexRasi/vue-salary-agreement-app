import { shallowMount } from '@vue/test-utils'
import MessageModal from '@/components/MessageModal'

describe('MessageModal', () => {
  const wrapper = shallowMount(MessageModal, {
    propsData: {
      message: 'test',
      visible: true
    }
  })

  describe('when given visible=true and a message', () => {
    const wrapper = shallowMount(MessageModal, {
      propsData: {
        message: 'test',
        visible: true
      }
    });
    
    it('should render the given message', () => {
      expect(wrapper.find('p').text()).toBe('test');
    });
  })

  describe('when given visible=false', () => {
    const wrapper = shallowMount(MessageModal, {
      propsData: {
        message: 'test',
        visible: false
      }
    });

    it('should not render anything', () => {
      expect(wrapper.find('.modal').exists()).toBe(false);
    });
  })
})

// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
