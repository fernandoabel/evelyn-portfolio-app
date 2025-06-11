import { useMemo } from 'react';
import type { RouteObject } from 'react-router';
import Layout from '../components/Layout';
import type { NavItem } from '../models/NavItem';
import About from '../pages/About';
import Home from '../pages/Home';

export default function useRoutes() {
    const routes: RouteObject[] = [
        {
            path: '/',
            handle: { label: 'Home' },
            Component: Layout,
            children: [
                { index: true, Component: Home, handle: { label: 'Home' } },
                { path: 'about', Component: About, handle: { label: 'About' } },
            ],
        },
    ];

    const navItems: NavItem[] = routes.map((route) => {
        return {
            path: route.path ?? '/',
            label: route.handle?.label ?? 'Home',
            children: (route.children ?? [])
                .filter((child) => !child.index)
                .map((child) => ({
                    path: `/${child.path ?? ''}`,
                    label: child.path
                        ? child.path.charAt(0).toUpperCase() +
                          child.path.slice(1)
                        : 'Home',
                })),
        };
    });

    return useMemo(
        () => ({
            routes,
            navItems,
        }),
        []
    );
}
