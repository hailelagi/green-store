import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }
    render() {
        return (
            <div>
                <Product/>
            </div>
        );
    }
}

export default ProductList;
