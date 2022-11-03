import React, { useState } from 'react'
import {MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography} from 'mdb-react-ui-kit'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {login} = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError()
        await login(email, password).then((res) => {
            navigate(`/`)
        }).catch((err) => {
            if (err.toString() === "FirebaseError: Firebase: Error (auth/user-not-found)."){
                setError('Usuário não encontrado')
            } else if (err.toString() === 'FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                setError('Sua conta foi temporariamente desabilitada por muitas tentativas de login. Para restaurar sua conta, redefina sua senha ou aguarde e tente novamente mais tarde.')
            } else if (err.toString() === 'FirebaseError: Firebase: Error (auth/wrong-password).'){
                setError('Email ou senha incorretos.')
            }
        })
    }

  return (
    <MDBContainer className='d-flex flex-column justify-content-center align-items-center center '>
        <MDBCard className='inside' style={{minWidth: "400px", maxWidth: "400px"}}>
            <MDBCardTitle className='mt-3 text-center'>
                <strong style={{
                    fontWeight: "400",
                    color: "#000",
                    marginBottom: "5px"
                }}>
                    Login
                </strong>
            </MDBCardTitle>
            {
                error && <MDBTypography style={{maxWidth: "300", minWidth: "300"}} className='ms-4 me-4' note noteColor='danger'>
                    {error}
                </MDBTypography>
            }
            <MDBCardBody>
                <form onSubmit={handleSubmit}>
                    <MDBInput value={email} 
                    onChange={(e) => {setEmail(e.target.value)}}
                    type="email"
                    label="Insira seu e-mail"
                    size='lg'
                    required
                    className='mt=4'
                    />
                    <MDBInput value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password"
                    label="Insira sua senha"
                    size='lg'
                    required
                    className='mt-2'
                    />
                    <div className='d-flex justify-content-end align-items-center mt-4'>
                        <Link className='me-2' to = {'/forgot-password'}>
                            Esqueceu sua senha?
                        </Link>
                        <MDBBtn type='submit' outline rounded style={{fontWeight: "600"}}>
                            Login
                        </MDBBtn>
                    </div>                    
                </form>
            </MDBCardBody>
            <MDBCardFooter>
                <div className='d-flex justify-content-center align-items-center'>
                    <span className='me-1'>
                        Novo por aqui?
                    </span>
                    <Link to={'/register'}>
                        Registre-se
                    </Link> 

                </div>
            </MDBCardFooter>
        </MDBCard>
        <span className='mt-4' style={{color: '#999'}}>Copyright <Link to={'/about'}><u>Meraki &#174;</u></Link> 2022</span>
    </MDBContainer>
  )
}
