import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>posts</h1>
        <p>this is my posts</p>
        <p>
            <a href="/posts" data-link></a>
        </p>
        `;
    }
}