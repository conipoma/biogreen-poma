import React from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import '../Carousel/Carousel.css'
import varios from '../../Assets/image/varios_carousel.JPG'
import verde from '../../Assets/image/teverde.jpg'
import piedras from '../../Assets/image/piedras_carousel.JPG'

const items = [
    {
      src: varios,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: verde,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: piedras,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  

  export default class App extends Carousel {
 
    componentWillMount() {
      window.setTimeout(() => Bootstrap.carousel('#carouselExampleControls'), 2000);
    }
  
    render() {
      return (
        <Carousel w="100" id="carouselExampleControls">
          <Carousel.Inner>
            <Carousel.Item active><BImg className="img-carousel" display="block" w="100" src={varios} /></Carousel.Item>
            <Carousel.Item><BImg className="img-carousel" display="block" w="100" src={verde} /></Carousel.Item>
            <Carousel.Item><BImg className="img-carousel" display="block" w="100" src={piedras} /></Carousel.Item>
          </Carousel.Inner>
          <Carousel.Prev href="#carouselExampleControls">
            <Carousel.Prev.Icon />
          </Carousel.Prev>
          <Carousel.Next href="#carouselExampleControls">
            <Carousel.Next.Icon />
          </Carousel.Next>
        </Carousel>
      )
    }
  }