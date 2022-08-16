function receivesAFunction(callback){
     callback();
     return;
}

function returnsANamedFunction(){
    return function namedFn(name){
        console.log("named a function");
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("anonymous function");
    }
}