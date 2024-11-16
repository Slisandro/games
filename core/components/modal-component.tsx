import React from 'react';

interface Props {
    children: React.ReactNode
}

function ModalComponent({ children }: Props) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            {children}
        </div>
    )
};

export default ModalComponent