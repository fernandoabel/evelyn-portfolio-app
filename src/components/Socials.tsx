import React from 'react';
import classes from './Socials.module.css';

type SocialLink = {
    name: string;
    url: string;
    icon?: React.ReactNode;
};

const socials: SocialLink[] = [
    {
        name: 'Instagram',
        url: 'https://instagram.com/',
        icon: (
            <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.02 4.92 4.92 0 0 1 1.02 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.02 1.77 4.92 4.92 0 0 1-1.77 1.02c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.02 4.92 4.92 0 0 1-1.02-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.634 2.2 15.25 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.02-1.77 4.92 4.92 0 0 1 1.77-1.02c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.86.31 4.05.54a7.07 7.07 0 0 0-2.56 1.07A7.07 7.07 0 0 0 .54 4.05c-.23.81-.412 1.72-.47 3C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.19.47 3a7.07 7.07 0 0 0 1.07 2.56 7.07 7.07 0 0 0 2.56 1.07c.81.23 1.72.412 3 .47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.19-.24 3-.47a7.07 7.07 0 0 0 2.56-1.07 7.07 7.07 0 0 0 1.07-2.56c.23-.81.412-1.72.47-3C23.988 15.668 24 15.264 24 12c0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.19-.47-3a7.07 7.07 0 0 0-1.07-2.56A7.07 7.07 0 0 0 19.95.54c-.81-.23-1.72-.412-3-.47C15.668.012 15.264 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
        ),
    },
    {
        name: 'E-mail',
        url: 'mailto:your@email.com',
        icon: (
            <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M12 13.065L2.4 6.6V18h19.2V6.6l-9.6 6.465zm9.6-10.065H2.4C1.074 3 0 4.074 0 5.4v13.2C0 19.926 1.074 21 2.4 21h19.2c1.326 0 2.4-1.074 2.4-2.4V5.4C24 4.074 22.926 3 21.6 3zm-1.2 2.4L12 11.535 3.6 5.4h16.8z" />
            </svg>
        ),
    },
];

const Socials: React.FC = () => (
    <div className={classes.socialsContainer}>
        {socials.map(({ name, url, icon }) => (
            <a
                key={name}
                href={url}
                target={url.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                    url.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                }
                aria-label={name}
                className={classes.socialLink}
            >
                {icon}
                <span style={{ marginLeft: 8 }}>{name}</span>
            </a>
        ))}
    </div>
);

export default Socials;
