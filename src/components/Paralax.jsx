import { Parallax } from 'react-parallax';
import image from '../images/image2.jpg'
import Titles from './Titles';


const Paralax = () => (
    <Parallax className='paralimage' bgImage={image} strength={800}>
    <Titles/>
    <h2 style={{marginTop:''}}  className='fst-italic fs-1 text-warning text-center  mt-5' > What we drive says a lot about who we are</h2>
    </Parallax>
);

export default Paralax