import './news-article.js';
import { toHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', () => {
    fetchNews();
});

async function fetchNews() {
    const res = await fetch(toHeadlinesUrl);
    const json = await res.json();

    const main = document.querySelector('main');

    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}