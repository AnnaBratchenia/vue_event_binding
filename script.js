const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    showAlert() {
      alert("My project");
    },
    showNameKeydown(event) {
      this.name = event.target.value;
    },
    showNameEnter() {
      this.confirmedName = this.name;
    },
  },
});
app.mount(".container");
