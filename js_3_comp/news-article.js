class NewsArticle extends HTMLElement {
    set article(article){
        this.innerHTML = ``
    }
}

customElements.define('news-article', NewsArticle)