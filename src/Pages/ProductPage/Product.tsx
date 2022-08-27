import React from 'react';

const Product = () => {
	return (
		<div>
			<h1>Product A</h1>
			<p>Price: 10 USD</p>

			<button onClick={() => console.warn('Not implemented!')}>Add to cart</button>

			<div>
				<img src={`${process.env.PUBLIC_URL}/images/b.jpg`} width={640} />
			</div>
		</div>
	);
};

export default Product;
