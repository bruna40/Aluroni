import React from 'react';

export interface IBuscador {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}