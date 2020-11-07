new Vue({
    el:'#vue-app',
    data:{
        name: 'emir',
        job: 'DevOps',
        website: 'http://www.emirhakan.me',
        age: 19,
        x: 0,
        y: 0,
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

         updateXY: function(event) {
             this.x = event.offsetX
             this.y = event.offsetX

         }

     },
});
