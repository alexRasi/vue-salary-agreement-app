import { shallowMount } from '@vue/test-utils'
import SubmitForm from '@/components/SubmitForm'
import sinon from 'sinon'

describe('SubmitForm', () => {
  const wrapper = shallowMount(SubmitForm, {
    propsData: {
      visible: true
    }
  })

  describe('when given showInput=true', () => {
    const wrapper = shallowMount(SubmitForm, {
      propsData: {
        showInput: true
      }
    });
    
    it('should render an input', () => {
      expect(wrapper.find('input').exists()).toBe(true);
    });
  })

  describe('when given showInput=false', () => {
    const wrapper = shallowMount(SubmitForm, {
      propsData: {
        showInput: false
      }
    });
    
    it('should not render an input', () => {
      expect(wrapper.find('input').exists()).toBe(false);
    });
  })

  describe('when given a placeholder value', () => {
    const placeholderValue = 'test placeholder';
    const wrapper = shallowMount(SubmitForm, {
      propsData: {
        placeholderValue: placeholderValue,
        showInput: true
      }
    });
    
    it('should render an input with the given placeholder value', () => {
      expect(wrapper.find('input').attributes('placeholder')).toBe(placeholderValue);
    });
  })

  describe('when clicking the submit button with an input value', () => {
    const placeholderValue = 'test placeholder';
    const emitSubmitSpy = sinon.spy(SubmitForm.methods, 'emitSubmitEvent')

    const salary = 100;


    const wrapper = shallowMount(SubmitForm, {
      propsData: {
        placeholderValue: placeholderValue,
        showInput: true
      }
    });
    
    const input = wrapper.find('.salary-input').setValue(salary);
    it('should call emitSubmitEvent', () => {
      wrapper.find('.submit-button').trigger('click');
      expect(emitSubmitSpy.calledWith()).toBe(true);
    });

    it('and emit an event', () => {
      expect(wrapper.emitted().submitEvent[0][0]).toEqual(salary.toString());
    });
  })
})
