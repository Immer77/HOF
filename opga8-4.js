function subject(){
    let observers = [];

    const registerObserver = function(observer){
        observers.push(observer);
        
    }

    const notifyObservers = function(data){
        observers.forEach(element => {
            console.log(element.name + data);
        })
    }

    return {register: registerObserver, notify: notifyObservers};

}


let newsPaperSubscription = subject();



function makeSubscriber(name){
    let subscriber = Object.create();
    subscriber.name = name;
    return subscriber;
}

// Leger lidt med prototype læsning
let firstSubscriber = Object.create(subscriber);
firstSubscriber.name = "Peter";

let secondSubscriber = Object.create(subscriber);
secondSubscriber.name = "Dennis";

let thirdSubscriber = Object.create(subscriber);
thirdSubscriber.name = "Anne";

newsPaperSubscription.register(firstSubscriber);
newsPaperSubscription.register(secondSubscriber);
newsPaperSubscription.register(thirdSubscriber);
newsPaperSubscription.notify(" Der er udkommet en ny avis");


