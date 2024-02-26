import { Parallax } from 'react-parallax';
import image from '../images/image2.jpg'
import Titles from './Titles';


const Paralax = () => (
    <Parallax className='paralimage' bgImage={image} strength={800}>
    <Titles/>
    </Parallax>
);

export default Paralax