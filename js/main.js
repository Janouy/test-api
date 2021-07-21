
fetch("http://localhost:3000/api/cameras")
.then(function(res){
    if(res.ok){
        return res.json();

    }
})

.then(function (value){
    for(let jsonArticle of value){
        let article = new Article(jsonArticle);
        document.getElementById("article").innerHTML += 
       `<div class="row">
        <div class="col">
            <div class="card article">
                <div class="card-body" id="carte_test">
                    <img src="${article.imageUrl}"  class="card-img-top">
                    <a href="article.html?id=${article.id} ">test</a>
                    <div class="card-title"> ${article.name} </div>
                    <div class="card-text">${article.description}</div>
                    <div class="card-text">${article.price}</div>
                </div>
               
            </div>
        </div>
    </div>`
        }
    
})

.catch(function(err){

}); 




