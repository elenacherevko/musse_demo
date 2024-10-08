import './about.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <div className="about">
        <h3>Доставка кур’єром по Києву до дверей:</h3>
        <h4>Інтервали доставки: з 11:00 до 15:00, з 15:00 до 19:00.</h4>
        <h4>Вартість доставки 150 грн в межах нашої зони на мапі. </h4>
        <h4>Вартісь поза зоною розраховується менеджером.</h4>
        <h4>При замовленні від 2000 грн, доставка безкоштовна. </h4>

        <div className="delivery-icon" onClick={() => navigate('/cart')}>
          <TbTruckDelivery />
        </div>
      </div>
    </div>
  )
}
export default About
