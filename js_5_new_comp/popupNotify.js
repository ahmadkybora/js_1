const template = document.createElement('template');
template.innerHtml = `
<style>
</style>
<div class="tooltip-container">
test
</div>
` 
class PopupNotify extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

let Component = window.customElements;

Component.define('popup-notify', PopupNotify);