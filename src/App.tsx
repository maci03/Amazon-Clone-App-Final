import React, { useContext } from "react";
import { styled, ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import OrderScreen from "./screens/OrderScreen";
import CheckOutScreen from "./screens/CheckOutScreen";
import PaymentScreen from "./screens/PaymentScreen";
import Loading from "./components/Loading";
import { auth } from "./config/firebase";
import { lightTheme, darkTheme } from "../src/themes/Themes";
import GlobalStyles from "../src/themes/GlobalStyles";
import { ThemeContext } from "./context/darkModeContext";
import UserAccaunt from "./accaunt/userAccaunt";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [user, loading] = useAuthState(auth);
  const { theme } = useContext(ThemeContext);
  console.log(user, loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {" "}
      <GlobalStyles body={""} fontColor={""} />
      <StyledApp>
        <AppWrapper>
          {user ? (
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<SignUpScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/order" element={<OrderScreen />} />
              <Route path="/checkout" element={<CheckOutScreen />} />
              <Route path="/search" />
{/* route to user page */}
              <Route path="/account" element={<UserAccaunt />} />
            </Routes>
          ) : (
            <LoginScreen />
          )}
        </AppWrapper>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
`;
