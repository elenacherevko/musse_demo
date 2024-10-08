import cakes from '../../cakes.json'
import { Cake } from '../../components/cake/cake'
import './home.css'

export const Home = () => {
  return (
    <div className="home">
      {cakes?.map((cake, index) => (
        <Cake key={index} id={cake.id} />
      ))}
    </div>
  )
}
export default Home
