import './link.css'

const Link = ({ to, label }) => {
  return (
    <a href={to} className="Link">
      {label}
    </a>
  )
}

export default Link
