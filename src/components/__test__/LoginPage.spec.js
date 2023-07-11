import {mount} from '@vue/test-utils'
import {describe, expect, it, beforeEach, vi} from 'vitest'
import JoinChatterPage from '@/views/JoinChatterPage.vue'
import {setActivePinia, createPinia} from 'pinia'
import {useChatterStore} from '@/stores/store'

let store;

beforeEach(() => {
    setActivePinia(createPinia());
    
    store = useChatterStore();
});

describe('JoinChatterPage rendered correctly', () => {
    it('should render correctly', () => {
        const wrapper = mount(JoinChatterPage);
        expect(wrapper.html()).toMatchSnapshot();
    });
    it('should be created', () => {
        expect(store).toBeDefined();
    });
    it('should have a signedUser', () => {
        new Promise((resolve) => {
            setTimeout(resolve, 5000);
        }).then(() => {
            expect(store.signedUser.length).toBeGreaterThan(0);
        });
    });
    it('login button clicked', () => {
        const wrapper = mount(JoinChatterPage);
        new Promise((resolve) => {
            setTimeout(resolve, 5000);
        }).then(() => {
            const loginBtn = wrapper.find('.google-button');
            loginBtn.trigger('click');
            expect(loginBtn).toHaveBeenCalled(1);
            const LoginWithGmail = vi.fn(wrapper.vm.LoginWithGmail);
            expect(LoginWithGmail).toHaveBeenCalled(1);
        });
    });
});