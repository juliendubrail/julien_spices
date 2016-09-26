var obj = {
    name : 'jlaw',
    hello: function(){
        var fn = () => {
            console.log('hi, i am' + this.name);
        };
        fn();
    }
};

obj.hello();
