new Vue({
    el:'#vue-app',
    data:{
        name: 'emir',
        job: 'DevOps',
        website: 'http://www.emirhakan.me',
        age: 19,
     },
     methods: {
         greet: function(time) {
             return 'good ' + time + ' ' +this.name
         },

         add: function(year) {
            this.age += year;
            console.log("added " + year + " year.")
         },
         subtract: function(year) {
             this.age -= year;
             console.log("subtracted " + year + " year.")
         },

     },
});
