import './cartIcon.scss';

interface PropsIcon {
    value: number;
}
export const CartIcon = ({ value }: PropsIcon) => {
    return (
        <div className='icon'>
            <p className='icon__counter'>{value}</p>
            <img className='icon__img' src='https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png' alt='cart' />
        </div>
    )
}
