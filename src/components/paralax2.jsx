import { Parallax } from 'react-parallax';
import image from  "../images/img3.jpg"
import About from './About';



const Paralax2 = () => (
    <Parallax className='paralimage' bgImage={image}  blur={2} strength={200}>
    <About/>
   
    </Parallax>
);

export default Paralax2