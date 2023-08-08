import { Link } from 'react-router-dom';
import iconFacebook from '../../assets/icons/facebook.png';
import iconInstagram from '../../assets/icons/instagram.png';
import iconTwitter from '../../assets/icons/twitter.png';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="bg-light py-4 content-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled mb-3">
              <li>
                <Link className='link' to={'/privacy-policies'}>Política de Privacidad</Link>
              </li>
              <li>
                <Link className='link' to={'/terms-of-service'}>Términos de Servicio</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-right mb-0">
              <li className="list-inline-item social-icon"><a href="https://facebook.com/pet-shop" target="_blank" rel="facebook">
                <img className='social-icon__img' src={iconFacebook} alt='facebook' />
              </a></li>
              <li className="list-inline-item social-icon"><a href="https://twitter.com/pet-shop" target="_blank" rel="noopener noreferrer">
                <img className='social-icon__img social-icon__img--twiter' src={iconTwitter} alt='twitter' />
              </a></li>
              <li className="list-inline-item social-icon"><a href="https://instagram.com/pet-shop" target="_blank" rel="noopener noreferrer">
                <img className='social-icon__img' src={iconInstagram} alt='instagram' />
              </a></li>
            </ul>
          </div>
          <div className='col-md-12 rights-reserved'>
            <p className="rights-reserved__text">&copy; {new Date().getFullYear()} Pet Shop. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
