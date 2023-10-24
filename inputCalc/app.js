const app = Vue.createApp({
  data() {
    return {
      var1: 0,
      var2: 0,
      hasil: 0,
    };
  },
  methods: {
    add() {
      this.hasil = parseFloat(this.var1) + parseFloat(this.var2);
    },
    subtract() {
      this.hasil = parseFloat(this.var1) - parseFloat(this.var2);
    },
    multiply() {
      this.hasil = parseFloat(this.var1) * parseFloat(this.var2);
    },
    divide() {
      this.hasil = parseFloat(this.var1) / parseFloat(this.var2);
    },
  },
});

app.mount('#app');