import React from 'react';

export default function Error(){
    return (
        <div>
            <p>Error: Page does not exist!</p>
            {
                window.alert("Erro page does not exist")
            }
        </div>
    );
}