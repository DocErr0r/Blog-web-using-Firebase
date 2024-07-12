import React, { useState } from 'react';
import myContext from './myContext';

function MyState({ children }) {
    const [mode, setMode] = useState('light');

    // toggle theame
    const toggleTheme = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    };

    return <myContext.Provider value={{ mode, toggleTheme }}>{children}</myContext.Provider>;
}

export default MyState;
