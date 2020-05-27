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
    
    it('should render a modal with the given message', () => {
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
