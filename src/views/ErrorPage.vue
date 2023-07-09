<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <router-link to="/">Go back to homepage</router-link>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  h1 {
    font-size: xx-large;
    margin-bottom: 10px;
  }
  
  p {
    color: #888;
    margin-bottom: 20px;
  }
  
  router-link {
    color: #2d8cf0;
    text-decoration: underline;
  }
  </style>
  