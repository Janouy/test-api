const urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams.get('id'));
fetch("http://localhost:3000/api/cameras/"+urlParams.get('id'))// TO DO : envoyer l'id
.then(function(res){
    if(res.ok){
        return res.json();

    }
})

.then(function (value){
    //console.log(value);
   
        let article = new Article(value);
        document.getElementById("article").innerHTML += 
       `<div class="row">
         <div class="col">
            <div class="card">
                <div class="card-body" id="carte_test">
                    <img class="card-img-top" src="${article.imageUrl}">
                    <i class="fas fa-shopping-basket addBasket" data-id="${article.id}"></i> 
                    <div class="card-title"> ${article.name} </div>
                    <div class="card-text">${article.description}</div>
                    <div class="card-text">${article.price}</div>
                    <p> <label for="lenses"> Choississez votre lentille</label>
                    <select name ="lenses" id ="lenses">
                    </select>
                    </p>
                </div>
            </div>
        </div>
    </div>`

    for (let i=0; i<article.lenses.length; i++){
        document.getElementById("lenses").innerHTML += `<option value =""> ${article.lenses[i]} </option>`;
    }

    document.querySelectorAll(".addBasket").forEach(function(elt){
        elt.addEventListener("click", function(){
            addToBasket(this.dataset.id);
            this.setAttribute("class", "fas fa-shopping-basket addBasket activated");
        })})
})


.catch(function(err){

}); 



