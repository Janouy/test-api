

fetch("http://localhost:3000/api/cameras")
.then(function(res){
    if(res.ok){
        return res.json();

    }
})

.then(function (value){

   
    for(let jsonArticle of value){
        let article = new Article(jsonArticle);
        console.log(article);
        document.querySelector(".container").innerHTML += 
       `<div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body" id="carte_test">
                    <img class="card-img-top" src="${article.imageUrl}">
                    <div class="card-title"> ${article.name} </div>
                    <div class="card-text">${article.description}</div>
                </div>
            </div>
        </div>
    </div>`
        }
})
.catch(function(err){

});


