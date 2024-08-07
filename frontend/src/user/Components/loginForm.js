import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScaleLoader from 'react-spinners/ScaleLoader';
import LoginFormHooks from '../Hooks/loginFormHooks';
import loginAnimated from '../Animations/loginAnimated.json';
import Lottie from 'lottie-react';

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleSubmit
  } = LoginFormHooks();

  return (
    <LoginPage>
      {isLoading && (
        <LoaderContainer>
          <ScaleLoader color="#000099" />
        </LoaderContainer>
      )}
      <LoginContainer>
        <LottieContainer>
          <Lottie animationData={loginAnimated} />
        </LottieContainer>
        <LoginFormContainer>
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <SignInButton type="submit">Sign In</SignInButton>
            <NewCustomer>
              New customer? <Link to="/registerForm" className='link'>Create your account</Link>
            </NewCustomer>
          </form>
        </LoginFormContainer>
      </LoginContainer>
    </LoginPage>
  );
};

export default LoginForm;

const LoginPage = styled.div`
  * {
    -webkit-tap-highlight-color: transparent;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const LoginContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LottieContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 150px;
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 3rem;
    color: #13072E;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }

  button {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    padding: 0.75rem;
    background-color: #000099;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 1rem;

    @media (max-width: 768px) {
      padding: 0.5rem;
      font-size: 0.875rem;
    }
  }

  button:hover {
    background-color: #0a1827;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 0.5rem;
    color: #333333;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  input {
    font-family: 'Poppins', sans-serif;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  input:focus {
    border-color: #ff6600;
  }
`;

const SignInButton = styled.button`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 200px;
  padding: 0.75rem;
  background-color: #000099;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  @media (max-width: 768px) {
    max-width: 150px;
    padding: 0.5rem;
    font-size: 0.875rem;
  }

  &:hover {
    background-color: #000099;
  }
`;

const NewCustomer = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #666666;

  .link {
    color: #000099;
    text-decoration: none;
    transition: color 0.3s;
  }

  .link:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 12px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size:10px;
  }
`;
