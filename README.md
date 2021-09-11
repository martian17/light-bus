# tiny-bus

## Installation
```
npm install tiny-bus
```

## Usage
```JavaScript
const Bus = require("event-bus");
let bus = new Bus();

bus.on("randomEvent",function(val1,val2){
    console.log(val1,val2);
});

setTimeout(function(){
    bus.emit("randomEvent",810,1919);
},11451.4);
```