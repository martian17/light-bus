const Events = function(){
    const eventTable = {};
    this.on = function(type, callback){
        if(!(type in eventTable)){
            eventTable[type] = [];
        }
        eventTable[type].push(callback);
    };
    this.emit = function(type){
        const elist = eventTable[type] || [];
        for(let i = 0; i < elist.length; i++){
            elist[i].apply(this,[...arguments].slice(1));
        }
    };
};

module.exports = Events;