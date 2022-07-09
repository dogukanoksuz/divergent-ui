import * as React from 'react';

export interface ILogoProps {
    mode: string
}

export default function Logo(props: ILogoProps) {
    return (
        <img className="h-14 w-auto logo" src={`/src/Assets/logo_${props.mode}.svg`} alt="Doğukan Öksüz" />
    );
}
