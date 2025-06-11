import { Link } from 'react-router';
import Carousel from '../components/Carousel';
import classes from './Home.module.css';
import Socials from '../components/Socials';

export default function Home() {
    return (
        <>
            <Carousel />

            <div className={classes['home-overlay']}>
                <Link to={'/about'} style={{ marginBottom: '1rem' }}>
                    <h3>photographer</h3>
                </Link>

                <Socials />
            </div>
        </>
    );
}
