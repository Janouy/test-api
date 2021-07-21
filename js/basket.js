function addToBasket(articleId){
    let listOfBasket = getBasket();
    listOfBasket.push(articleId);
    saveBasket(listOfBasket);
    
}

function getBasket(){
    let listOfBasket = localStorage.getItem("listOfBasket");
    if(listOfBasket == null){
        return[];
    }else{
        return JSON.parse(listOfBasket);
    }
}

function saveBasket(listOfBasket){
    localStorage.setItem("listOfBasket",JSON.stringify(listOfBasket));
}