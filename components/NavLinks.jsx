import Link from 'next/link';
import React from 'react';

const links = [
    { href: '/chat', label: 'chat' },
    { href: '/tours', label: 'tours' },
    { href: '/tours/new-tour', label: 'new tour' },
    { href: '/profile', label: 'profile' },
];

const NavLinks = () => {
    return (
        <div className="menu text-base-content">
            {links.map((link) => {
                return (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                );
            })}
        </div>
    );
};

export default NavLinks;
