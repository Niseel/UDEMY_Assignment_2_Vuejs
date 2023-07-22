const app = Vue.createApp({
  data() {
    return {
      outputKeydown: "",
      outputEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hi Max");
    },
    updateKeydown(event) {
      this.outputKeydown = event.target.value;
    },
    updateEnter(event) {
      this.outputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
