<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import './assets/main.css'

onMounted(() => {
  const chatterApp = document.querySelector('#app')
  chatterApp?.setAttribute('class', 'DayApp')
})

function closeError() {
  const error = document.getElementById('ErrorShow') as HTMLDivElement
  error.style.display = 'none'
}

</script>

<template>
  <RouterView />
  <div id="ErrorShow"><button @click="closeError">X</button><span></span></div>
  <div id="warningShow"></div>
</template>
<style scoped>
#ErrorShow {
  position: fixed;
  top: 80%;
  align-self: center;
  width: 300px;
  height: 60px;
  padding: 10px;
  border: 2px outset black;
  background-color: black;
  overflow-y: scroll;
  color: azure;
  font-weight: 600;
  font-size: 12px;
  display: none;
  align-items: center;
}

#ErrorShow button{
  position: absolute;
  top: 0;
  right: 5px;
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bolder;
}
#ErrorShow span{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
#warningShow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px outset #efefef;
  display: none;
  text-align: center;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
}

.DayApp #warningShow {
  color: #efefef;
  background-color: black;
}

.NightApp #warningShow {
  color: black;
  background-color: #efefef;
}

@keyframes dance {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}</style>
