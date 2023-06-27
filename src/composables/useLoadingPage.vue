<script setup lang="ts">
const props = defineProps({
    'actionName': {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="loading-page">
      <div class="spinner"></div>
      <h1>{{ props.actionName }}.</h1>
    </div>
  </template>
  
  <style>
  .loading-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .spinner {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid #4285f4;
    border-top-color: transparent;
    animation: spin 1s infinite linear;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  h1 {
    font-size: 24px;
  }
  </style>
