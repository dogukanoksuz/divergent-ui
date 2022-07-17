import * as React from 'react';
import dark from '../../Assets/logo_dark.svg';
import light from '../../Assets/logo_light.svg';

export interface ILogoProps {
    mode: string
}

export default function Logo(props: ILogoProps) {
    return (
        <img className="h-14 w-auto logo" src={props.mode == 'dark' ? dark : light} alt="Doğukan Öksüz" />
    );
}
