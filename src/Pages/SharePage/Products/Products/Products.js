import React from 'react';
import MenShopings from '../../Porduct/MenShopings/MenShopings';
import ShopNows from '../../Porduct/ShopNows/ShopNows';
import WeeklyProducts from '../WeeklyProducts/WeeklyProducts';
const Products = (props) => {
    const { product } = props
    console.log(product)
    return (
        <div>
            <WeeklyProducts></WeeklyProducts>
            <ShopNows></ShopNows>
            <MenShopings></MenShopings>
        </div>
    );
};

export default Products;