import './App.scss'
import { Carousel } from './components/carousel'
import carouselData from './data/carouselData.json'

export const App = () => {
  
  return (
    <div className="App">
      <Carousel data={ carouselData.slides }/>
    </div>
  )
}
