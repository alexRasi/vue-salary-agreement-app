import { shallowMount } from '@vue/test-utils'
import TabNav from '@/components/TabNav'
import sinon from 'sinon'

describe('TabNav', () => {
    const emitClickSpy = sinon.spy(TabNav.methods, 'emitClickEvent')

    const wrapper = shallowMount(TabNav);

    it('should emit a click event when clicked', () => {
        wrapper.find('.tab').trigger('click');
        expect(emitClickSpy.calledWith()).toBe(true);
    });
})
