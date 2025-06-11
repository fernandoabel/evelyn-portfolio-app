import { useState } from 'react';
import { Link } from 'react-router';
import classes from './Sidebar.module.css';
import useRoutes from '../hooks/useRoutes';
import type { NavItem } from '../models/NavItem';

function TreeNav({ items }: { items: NavItem[] }) {
    const [open, setOpen] = useState<{ [key: string]: boolean }>({});

    const handleToggle = (label: string) => {
        setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item.label}>
                    {item.children ? (
                        <>
                            <span
                                style={{
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                }}
                                onClick={() => handleToggle(item.label)}
                            >
                                {open[item.label] ? '▼' : '▶'} {item.label}
                            </span>
                            {open[item.label] && (
                                <TreeNav items={item.children} />
                            )}
                        </>
                    ) : (
                        <Link to={item.path ?? '#'}>{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default function Sidebar() {
    const { navItems } = useRoutes();

    return (
        <aside className={classes.sidebar}>
            <nav>
                <TreeNav items={navItems} />
            </nav>
        </aside>
    );
}
