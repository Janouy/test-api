class Article{
    constructor(jsonArticle){
        this.id = jsonArticle.id;
        this.name = jsonArticle.name;
        this.price = jsonArticle.price;
        this.description = jsonArticle.description;
        this.imageUrl = jsonArticle.imageUrl;
    }
}