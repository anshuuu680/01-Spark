import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import {store} from './App/store'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer position='top-right' autoClose={1000} hideProgressBar={true} closeOnClick
        rtl={false}  />
        <Provider store={store}>
      <App />
        </Provider>
    </QueryClientProvider>
  </AppProvider>
);

