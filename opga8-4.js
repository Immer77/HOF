function subject(){
    let observers = [];

    const registerObserver = function(observer){
        observers.push(observer);
        
    }

    const removeObserver = function(observer){
        const indexOfObserver = observers.indexOf(observer);
        observers.splice(indexOfObserver, 1);
    }

    const notifyObservers = function(data){
        observers.forEach(element => {
            console.log(element.name + data);
        })
    }

    return {register: registerObserver, remove: removeObserver, notify: notifyObservers};

}


let newsPaperSubscription = subject();



function Subscriber(name){
    this.name = name;
    
}

// Leger lidt med prototype læsning
let firstSubscriber = new Subscriber("Peter");

let secondSubscriber = new Subscriber("Dennis");


let thirdSubscriber = new Subscriber("Anne");


newsPaperSubscription.register(firstSubscriber);
newsPaperSubscription.register(secondSubscriber);
newsPaperSubscription.register(thirdSubscriber);
newsPaperSubscription.notify(" Der er udkommet en ny avis");
newsPaperSubscription.remove(secondSubscriber);
newsPaperSubscription.notify(" Hvem er tilbage");
