/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {
            myFullName:'tejasvi bhatnagar',
            pressureMonitorValue:65,
            pressureMonitorLevels:[
                {id:'danger-low',color:'danger',label:'danger-low',min:0,max:10},
                {id:'warn-low',color:'warning',label:'warning-low',min:11,max:30},
                {id:'safe',color:'safe',label:'safe',min:31,max:70},
                {id:'warn-high',color:'warning',label:'warning-high',min:71,max:90},
                {id:'danger-high',color:'danger',label:'danger-high',min:91,max:100},
            ]

        };
    },
    /// Define the methods for the app
    methods: {
        isActive(pressureLevel) {
            /// Logic here for if the pressure is within the level parameters return boolean
            return this.pressureMonitorValue >= pressureLevel.min && this.pressureMonitorValue <= pressureLevel.max;
        }
    }
});

/// Mount the app to the #app element
app.mount('#app');
