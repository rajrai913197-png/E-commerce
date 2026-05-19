import Carousel from 'react-bootstrap/Carousel';
import f1 from './imges/h1.jpg'
import f2 from './imges/h2.jpg'
import f3 from './imges/h3.jpg'

let Poster =()=>{
    return(
        <>
   <Carousel>
      <Carousel.Item>
        <img src={f1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={f2} alt="" style={{height:"400px", width:"100%"}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={f3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Poster