import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import data from '../../exercise-2/mockups/data.json'

class Products extends Component {
    render() {
        return (
            <Fragment>
                <div>All products:</div>
                {Object.values(data).map((item,index) => {
                    return <div key={index}>
                        <Link to={{ pathname: `/products/${item.id}`, item: item }}>{item.name}</Link>
                            </div>
                })}
            </Fragment>
        )
    }
}

export default Products;
