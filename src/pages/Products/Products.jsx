import React, { useState } from 'react';
import './Products.css';
import ProductList from '../../components/ProductList/ProductList';

const Products = () => {
    

    return (
        <>
         {/* p-b-50 */}
         <div className="sec-banner bg0 p-t-80 "> 
                <div className="container">
                    <div className="p-b-32">
                        <h3 className="ltext-105 cl5 txt-center respon1">Lista de Artículos</h3>
                    </div>
                </div>
            </div>
            <ProductList />
        </>
    );
};

export default Products;
