import { Container, Form, UserCredentials, InputCredentials, ForgotPassword, LoginButton, NotAccount, SpanContext, MailIcon, LockIcon } from "./style"
import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../services/fireBaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =  useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  } 

  return (
    <Container>
      <Form>
        <UserCredentials>
          <MailIcon></MailIcon>
          <InputCredentials type="email" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)}>
          </InputCredentials>
        </UserCredentials>
        <UserCredentials>
          <LockIcon></LockIcon>
          <InputCredentials type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}>
          </InputCredentials>
        </UserCredentials>
        <ForgotPassword>Esqueci Minha Senha</ForgotPassword>
        <LoginButton type="submit" onClick={handleSignIn}>ENTRAR</LoginButton>
        <NotAccount>Não tem uma conta? <SpanContext><Link to="/register">Registre-se</Link></SpanContext></NotAccount>
      </Form>
    </Container>
  )
} 