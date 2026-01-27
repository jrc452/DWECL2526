"use strict";

const body = document.getElementById("body");

let getLowStock = false;
const products = [];
const lowStockProducts = [];

window.onload = getProducts();

document.getElementById("lowStockFilter").addEventListener('click', function () {
    if (!getLowStock) getLowStock = true; else getLowStock = false;
    render();
});

async function getProducts() {
    try {
        const resProductList = await fetch('https://dummyjson.com/products');
        const productList = await resProductList.json();
        productList.products.forEach(product => {
            products.push(product);
            if (product.stock < 10) lowStockProducts.push(product);
        });
    } catch (error) {
        console.log("Error: ", error);
    }
    render();
}

function render() {
    body.innerHTML = null;
    if (!getLowStock)
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
    else
        lowStockProducts.forEach(product => {
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