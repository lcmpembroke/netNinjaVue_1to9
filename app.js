new Vue({
    el: '#vue-app',
    data: {
        name: 'Eleanor',
        job: 'Gardener',
        age: 21,
        name1: '',
        age1: '',
        a: 0,
        b: 0,
        website: 'www.johnlewis.com',
        websiteTag: '<a href="www.johnlewis.com">John Lewis</a>',
        x: 0,
        y: 0
    },
    methods: {
        greet(time) {
            return 'Good ' + ' ' + time + ' ' + this.name;
        },
        add(increment) {
            this.age += increment;
        },
        subtract(decrement) {
            this.age -= decrement;
        },
        updateXY(event) {
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;

        },
        clickLink() {
            alert("Link has been clicked!")
        },
        logName() {
            console.log("You entered you name");
        },
        logAge() {
            console.log("You entered you age");
        },
        addToA() {
            console.log("Function addToA has run");            
            return this.a + this.age;
        },        
        addToB() {
            console.log("Function addToB has run");                 
            return this.b + this.age;
        },        
        
    },
    computed: {
        addToAComputedProperty() {
            console.log("inside addToAComputedProperty computed function");            
            return this.a + this.age;
        },
        addToBComputedProperty() {
            console.log("inside addToBComputedProperty computed function");                 
            return this.b + this.age;
        }
    },
});