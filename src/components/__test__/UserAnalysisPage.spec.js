import {mount} from '@vue/test-utils'
import {describe, expect, it, beforeEach, vi} from 'vitest'
import UserAnalysisPage from '@/views/UserAnalysisPage.vue'
import {setActivePinia, createPinia} from 'pinia'
import {useChatterStore} from '@/stores/store'

let store;

beforeEach(() => {
    setActivePinia(createPinia());
    
    store = useChatterStore();
})

describe('UserAnalysisPage rendered correctly', () => {
    it('should render correctly', () => {
        const wrapper = mount(UserAnalysisPage);
        expect(wrapper.html()).toMatchSnapshot();
    });
    it('should have a signedUser', async () => {
        new Promise((resolve) => {
            setTimeout(resolve, 5000);
        }).then(() => {
            expect(store.signedUser.length).toBeGreaterThan(0);
            const wrapper = mount(UserAnalysisPage);
            const createPie = vi.fn(wrapper.vm.createPie);
            createPie(1,1,3,4);
            expect(createPie).toHaveBeenCalled(2);
            expect(wrapper.find('#pieChart')).childNodes.length.toBeGreaterThan(0); 
        });
    })
})