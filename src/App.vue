<template>
  <div>
    <h1 class="mt-4">Timer</h1>
    <p class="resultado display-4">{{ resultado }}</p>
    <button class="btn btn-primary init" @click="startTimer">Iniciar</button>
    <button class="btn btn-primary pause" @click="pauseTimer">Pausar</button>
    <button class="btn btn-primary res" @click="resetTimer">Reiniciar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultado: '00:00:00',
      timer: null,
      segundos: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.segundos++;
        this.resultado = this.cria(this.segundos);
      }, 1000);
    },
    pauseTimer() {
      clearInterval(this.timer);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.segundos = 0;
      this.resultado = '00:00:00';
    },
    cria(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
      });
    },
  },
};
</script>
