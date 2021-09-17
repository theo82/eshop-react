import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

/**
 *  domain: dev-ytjg1xp2.us.auth0.com
 *  client_id: HcX3tkWvfWeWL8iYAkvqCvJrI7WZYdyB
 * */

ReactDOM.render(
  <Auth0Provider
    domain='dev-ytjg1xp2.us.auth0.com'
    clientId='HcX3tkWvfWeWL8iYAkvqCvJrI7WZYdyB'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
