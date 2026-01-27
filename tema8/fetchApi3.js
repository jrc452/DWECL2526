"use strict";

const body = document.getElementById("body");

let products = [];

document.getElementById("search").addEventListener('click', function () {
    getProductsByQuery(document.getElementById("query").value);
});

async function getProductsByQuery(query) {
    try {
        products = [];
        const resProductList = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const productList = await resProductList.json();
        productList.products.forEach(product => {
            products.push(product);
        });
    } catch (error) {
        console.log("Error: ", error);
    }
    render();
}

function render() {
    body.innerHTML = null;
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>                                    
                        <p>${product.title}</p>
                    </td>
                    <td>                                    
                        <p>${product.price} €</p>
                    </td>
                    <td>                                    
                        <p>${product.stock}</p>
                    </td>
                    <td>                                    
                        <p>${product.brand}</p>
                    </td>
                    `;
        body.appendChild(tr);
    });
}