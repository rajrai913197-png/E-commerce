import Carousel from 'react-bootstrap/Carousel';
import poster1 from "./new/pumap1.jpg"
import poster2 from "./new/pumap3.jpg"
import poster3 from "./new/pumap2.jpg"

const Home =()=>{
    return(
        <>
          <Carousel fade>
      <Carousel.Item>
        <img src={poster1} alt="" style={{width:"100%", height:"600px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={poster2} alt=""  style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Home;