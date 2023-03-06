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
            console.log(element + data);
        })
    }

    return {register: registerObserver, remove: removeObserver, notify: notifyObservers};

}


let newsPaperSubscription = subject();



function makeSubscriber(name){
    let subscriber = Object.create();
    subscriber.name = name;
    return subscriber;
}

// Leger lidt med prototype læsning
let firstSubscriber = "Peter";

let secondSubscriber = "Dennis";


let thirdSubscriber = "Anne";


newsPaperSubscription.register(firstSubscriber);
newsPaperSubscription.register(secondSubscriber);
newsPaperSubscription.register(thirdSubscriber);
newsPaperSubscription.notify(" Der er udkommet en ny avis");
newsPaperSubscription.remove(secondSubscriber);
newsPaperSubscription.notify(" Hvem er tilbage");
