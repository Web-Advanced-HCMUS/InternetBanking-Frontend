import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { StyledEngineProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ProSidebarProvider>
            <App />
          </ProSidebarProvider>
        </BrowserRouter>
      </PersistGate>
    </StyledEngineProvider>
  </Provider>,
  // </React.StrictMode>
);
