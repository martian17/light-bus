# light-bus

## Installation
```
npm install light-bus
```

## Usage
```JavaScript
const Bus = require("light-bus");
let bus = new Bus();

bus.on("randomEvent",function(val1,val2){
    console.log(val1,val2);
});

setTimeout(function(){
    bus.emit("randomEvent",810,1919);
},11451.4);
```