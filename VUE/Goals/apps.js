
var vm = new Vue({
  el: '#app',
  data: {
    goal: [],
    enteredValue: 'hola'
  },
  methods: {
    addGoal: function () {
      console.log(this.goal);
      console.log("goal added" + this.enteredValue);
      this.goal.push(this.enteredValue);
      this.enteredValue = ' ';
    }
  }
})