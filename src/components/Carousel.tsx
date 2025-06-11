import { useState, useEffect } from 'react';
import classes from './Carousel.module.css';
import clsx from 'clsx';

const images = [
    'photos/000002.JPG',
    'photos/000007.JPG',
    'photos/000008.JPG',
    'photos/000009.JPG',
    'photos/000010.JPG',
    'photos/000011.JPG',
    'photos/000012.JPG',
    'photos/000013.JPG',
    'photos/000014.JPG',
    'photos/000015.JPG',
    'photos/000016.JPG',
    'photos/000017.JPG',
    'photos/000018.JPG',
    'photos/000019.JPG',
    'photos/000020.JPG',
    'photos/000021.JPG',
];

interface ICarouselProps {
    interval?: number; // Optional prop to set the interval for automatic switching
}

const Carousel = (props: ICarouselProps) => {
    const { interval = 6000 } = props;

    const [loadingInterval, setLoadingInterval] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(() =>
        Math.floor(Math.random() * images.length)
    );

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    // Automatically switch backgrounds every few seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setLoadingInterval(0); // Reset loading interval when switching images
        }, interval);

        const loadingTimer = setInterval(() => {
            setLoadingInterval((prev) => {
                if (prev >= 100) return 100;
                return prev + 100 / (interval / 50); // update every 50ms
            });
        }, 50);

        return () => {
            clearInterval(timer);
            clearInterval(loadingTimer);
        };
    }, [interval, images.length]);

    // Reset loading bar when image changes manually
    useEffect(() => {
        setLoadingInterval(0);
    }, [currentIndex]);

    return (
        <div className={classes.carousel}>
            {images.map((img, idx) => (
                <img
                    key={img}
                    className={clsx(classes.background, {
                        [classes.active]: idx === currentIndex,
                    })}
                    src={img}
                    alt=""
                />
            ))}

            <button
                onClick={goToPrevious}
                className={clsx(classes.arrow, classes.arrowLeft)}
                aria-label="Previous"
            >
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className={clsx(classes.arrow, classes.arrowRight)}
                aria-label="Next"
            >
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <progress
                className={classes.loadingBar}
                value={loadingInterval}
                max={100}
            />
        </div>
    );
};

export default Carousel;
