class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const price = this.getAttribute('price');
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ddd;
                    padding: 20px;
                    margin: 10px;
                    width: 200px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    background-color: white;
                }

                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
                }

                .card h3 {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                    color: #2d3e50;
                }

                .card p {
                    font-size: 1em;
                    margin-bottom: 10px;
                    color: #555;
                }

                .price {
                    font-weight: bold;
                    color: #e74c3c;
                    font-size: 1.2em;
                }
            </style>
            <div class="card">
                <h3>${name}</h3>
                <p>${description}</p>
                <p class="price">${price}</p>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);