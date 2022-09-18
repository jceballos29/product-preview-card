/** @format */

import './styles/Card.css';

import productDesktop from '@/assets/images/image-product-desktop.jpg';
import cartIcon from '@/assets/images/icon-cart.svg'

const Card = () => {
	return (
		<div className='card'>
			<figure className='card__thumb'>
				<img src={productDesktop} alt='product' />
			</figure>
			<div className='card__content'>
				<h3>Perfume</h3>
				<h1>Gabrielle Essence Eau De Parfum</h1>
				<p>
					A floral, solar and voluptuous interpretation composed by
					Olivier Polge, Perfumer-Creator for the House of CHANEL.
				</p>
				<h2>$149.99<span>$169.99</span></h2>
				<button>
					<img src={cartIcon} alt="cart-icon" />
					<span>Add to Cart</span>
				</button>
			</div>
		</div>
	);
};

export default Card;
