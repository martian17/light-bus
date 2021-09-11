# light-bus

## Installation
```
npm install light-bus
```

## Usage
```JavaScript
const Bus = require("light-bus");
let bus = new Bus();

bus.on("randomChimpEvent",function(val1,val2,val3,val4){
    console.log(val1,val2,val3,val4);
});

setTimeout(function(){
    bus.emit("randomChimpEvent",810,1919,420,69);
},11451.4);
```