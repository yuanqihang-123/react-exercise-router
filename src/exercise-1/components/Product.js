import React,{Fragment} from 'react';

const Product = (props)=>{
    console.log(props)
    return (
        <Fragment>
            <span>Product details11:</span>
            <br></br>
            <div>
            <span>name: </span>
            <span>{props.location.item.name}</span>
            </div>
            <div>
            <span>id:   </span>
            <span>{props.location.item.id}</span>
            </div>
            <div>
            <span>price:    </span>
            <span>{props.location.item.price}</span>
            </div>
            <div>
            <span>quantity:  </span>
            <span>{props.location.item.quantity}</span>
            </div>
            <div>
            <span>desc:  </span>
            <span>{props.location.item.desc}</span>
            </div>
            <div>
            <span>url:   </span>
            <span>{props.match.url}</span>
            </div>
            
        </Fragment>
    );
}

export default Product;