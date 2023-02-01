import { Container, Form, UserCredentials, InputCredentials, LoginButton, MailIcon, LockIcon, HaveAccount, SpanContext } from "./style"
import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../services/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";


export function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut() {
    
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <Container>
      <Form>
        <UserCredentials>
          <MailIcon></MailIcon>
          <InputCredentials type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}>
          </InputCredentials>
        </UserCredentials>
        <UserCredentials>
          <LockIcon></LockIcon>
          <InputCredentials type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}>
          </InputCredentials>
        </UserCredentials>
        <HaveAccount>Ja possui uma conta? <SpanContext><Link to="/">Fazer Login</Link></SpanContext></HaveAccount>
       <Link to='/'><LoginButton type="submit" onClick={handleSignOut}>REGISTRAR</LoginButton></Link>
      </Form>
    </Container>
  )
} 
