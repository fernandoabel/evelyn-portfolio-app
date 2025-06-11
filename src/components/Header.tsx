import { Link } from 'react-router';
import classes from './Header.module.css';
import Socials from './Socials';

export default function Header() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                width: '100%',
                position: 'relative',
                padding: '0',
            }}
        >
            <div
                style={{ gridColumn: '1 / -1', textAlign: 'center' }}
                // className={classes.header}
            >
                <h1>
                    <Link to={'/about'}>Evelyn Souza</Link>
                </h1>
            </div>
            <div
                style={{
                    gridColumn: 4,
                    // justifySelf: 'end',
                    top: 0,
                    right: 0,
                }}
            >
                <Socials />
            </div>
        </div>
    );
}
