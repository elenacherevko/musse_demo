import './linkIcon.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export const LinkIcon = ({ icon, link }) => {
  const iconsObj = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
  }
  return (
    <a
      className="linkIcon"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconsObj[icon]}
    </a>
  )
}

export default LinkIcon
