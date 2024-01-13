import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import OrderScreen from './screens/OrderScreen'
import CheckOutScreen from './screens/CheckOutScreen'
import PaymentScreen from './screens/PaymentScreen'
import Loading from './components/Loading'
import { auth } from './config/firebase'
import ProductSearch from "./search/search";
import items from './data/Data';
import DarkModeToggle from  './themes/DarkModeToggle'
import { ThemeProvider } from "./themes/ThemeContext";





function App() {
	const [user, loading, error] = useAuthState(auth)
	console.log(user, loading)

	if (loading) {
		return <Loading />
	}

	return (
    <ThemeProvider>
      <AppWrapper>
        {user ? (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<SignUpScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/checkout" element={<CheckOutScreen />} />
            <Route
              path="/search"
              element={<ProductSearch products={items} />}
            />
          </Routes>
        ) : (
          <LoginScreen />
        )}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App

const AppWrapper = styled.div`
	min-height: 100vh;
	width: 100vw;
	max-width: 100vw;
`
