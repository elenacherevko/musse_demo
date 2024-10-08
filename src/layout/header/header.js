import './header.css'
import LinkIcon from '../../components/linkIcon/linkIcon'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const linksOnSocials = {
  twitter: 'https://www.instagram.com/musseconfectionery/',
  instagram: 'https://www.instagram.com/musseconfectionery/',
  facebook: 'https://www.facebook.com/musse.com.ua/',
}

export const Header = () => {
  const navigate = useNavigate()

  const { cartCount } = useContext(CartContext)

  return (
    <div className="Header">
      <div> </div>
      <div className="Title">Músse</div>
      <div className="Icons">
        <LinkIcon icon={'facebook'} link={linksOnSocials.facebook} />
        <LinkIcon icon={'instagram'} link={linksOnSocials.instagram} />

        {cartCount > 0 && (
          <div className="CartIcon" onClick={() => navigate('/cart')}>
            <FaShoppingCart />
            <div className="item-count">{cartCount}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
