import './sidebar.css'
import Link from './../../components/Link/link'

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link to="/" label="Меню" />
      <Link to="/about" label="Доставка" />
    </div>
  )
}
export default Sidebar
