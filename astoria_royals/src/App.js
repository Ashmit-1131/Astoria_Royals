
import './App.css';
import AmenitiesCarousel from './Components/AmenitiesCorousel/AmenitiesCorousel';
import BrandStory from './Components/BrandStory/BrandStory';
import ContactForm from './Components/ContactForm/ContactForm';
import DistancedGrid from './Components/DistancedGrid/DistancedGrid';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">

     <Header/>
     <HeroSection/>
     <ContactForm/>
     <AmenitiesCarousel/>
     <DistancedGrid/>
     <BrandStory/>
     <Footer/>
    </div>
  );
}

export default App;
