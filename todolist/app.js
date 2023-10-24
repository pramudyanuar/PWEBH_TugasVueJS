const app = Vue.createApp({
  data() {
    return {
      items: [
        { text: 'A quiet house is nice until you are ordered to stay in it for months.', backgroundColor: 'white' },
        { text: 'The efficiency with which he paired the socks in the drawer was quite admirable.', backgroundColor: 'white' },
        { text: 'At that moment I was the most fearsome weasel in the entire swamp.', backgroundColor: 'white' },
        { text: 'You\'\ll see the rainbow bridge after it rains cats and dogs', backgroundColor: 'white' }
      ]
    };
  },
  methods: {
    toggleBackgroundColor(index) {
      const item = this.items[index];
      item.backgroundColor = item.backgroundColor === 'white' ? 'lightblue' : 'white';
    },
  },
});

app.mount('.app');