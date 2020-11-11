import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                    <App/>
                </PersistGate>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)