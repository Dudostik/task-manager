import React from 'react';

type TagList = 'h1' | 'h2' | 'h3' | 'p';
interface TextImp {
    tag?: TagList;
    children?: React.ReactNode;
    className?: string;
}

const Text: React.FC<TextImp> = (props: TextImp) => {
    const { tag = 'p', children, className = '' }: TextImp = props;
    const baseStyle = 'text-gray-800';
    let style = '';

    switch (tag) {
        case 'h1':
            style = 'text-4xl font-bold';
            break;
        case 'h2':
            style = 'text-3xl font-semibold';
            break;
        case 'h3':
            style = 'text-2xl font-medium';
            break;
        case 'p':
        default:
            style = 'text-base';
            break;
    }

    return React.createElement(
        tag,
        { className: `${baseStyle} ${style} ${className}` },
        children
    );
};

export default Text;