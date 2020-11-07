new Vue({
    el:'#vue-app',
    data:{
        name: '',
        age: '',
     },
     methods: {
        logName: function(name) {
            this.name = name
        },
        logAge: function(age) {
            this.age = age
        },
     },
});
