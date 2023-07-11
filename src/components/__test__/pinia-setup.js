import { createPinia } from 'pinia';

// Create Pinia instance
const pinia = createPinia();

// Install Pinia globally
beforeEach(() => {
  pinia._testing = true;
    pinia._testingResetStore();
    });

    export default pinia;