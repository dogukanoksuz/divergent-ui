import * as React from 'react';

export interface INavItemProps {
    url: string,
    children?: string | undefined
}

export default function NavItem(props: INavItemProps) {
    return (
        <a href={props.url} title={props.children} className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            {props.children}
        </a>
    );
}
