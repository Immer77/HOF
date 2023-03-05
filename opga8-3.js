

function subject(){
    let observers = [];

    const registerObserver = function(observer){
        observers.push(observer);
        
    }

    const notifyObservers = function(data){
        observers.forEach(element => {
            console.log(element + data);
        })
    }

    return {register: registerObserver, notify: notifyObservers};

}


let newsPaperSubscription = subject();
let firstSubscriber = "Peter";
let secondSubscriber = "Anne";
let thirdSubscriber = "Dennis";
newsPaperSubscription.register(firstSubscriber);
newsPaperSubscription.register(secondSubscriber);
newsPaperSubscription.register(thirdSubscriber);
newsPaperSubscription.notify(" Der er udkommet en ny avis");


