import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const themeMode = useMemo(() => createTheme(themeSettings[mode]), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        Hello World
      </ThemeProvider>
    </div>
  );
}

export default App;
