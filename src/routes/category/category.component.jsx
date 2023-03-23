import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategories } from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx'

const Category = () => {
    const { category } = useParams();   
    const categoriesMap = useSelector(selectCategories)
    
    const [products, setProducts] = useState(categoriesMap[category])


    useEffect(() => {
        setProducts(categoriesMap[category])
     },[category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{ category.toLocaleUpperCase() }</CategoryTitle>
            <CategoryContainer>
                
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </Fragment>
    

)
}

export default Category