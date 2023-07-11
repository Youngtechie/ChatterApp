import { mount } from '@vitest/jest';
import { createApp } from 'vue';
import pinia from './test-setup.js';
import HomePage from '@/views/HomePage.vue';

describe('MyComponent', () => {
  it('should render properly', async () => {
      const app = createApp(HomePage);

          // Use Pinia as a plugin
              app.use(pinia);

                  const wrapper = mount(app);

                      // Perform your test assertions
                          expect(wrapper.text()).toContain('Hello, world!');
                            });
                            });
