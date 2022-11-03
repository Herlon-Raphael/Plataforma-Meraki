import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardFooter,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Registro() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [complement, setComplement] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register } = useAuth();
  const { registerDb } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    if (password !== confPassword) {
      setError("As senhas não são iguais");
    } else {
      await register(email, password)
        .then((res) => {
          const usuario = res.user;
          const uid = usuario.uid;
          registerDb(
            firstName,
            lastName,
            uid,
            email,
            cpf,
            homeNumber,
            street,
            complement,
            cep,
            telephone
          );
        })
        .then((res) => {
          console.log("Registrado na DataBase");
          navigate("/");
        })
        .catch((err) => {
          setError(err.toString());
        });
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center center">
      <MDBCard style={{ maxWidth: "400px", minWidth: "400px" }}>
        <MDBCardTitle className="mt-3 text-center">
          <strong
            style={{
              fontWeight: "400",
              color: "#000",
              marginBottom: "5px",
            }}
          >
            Registro
          </strong>
        </MDBCardTitle>
        {error && (
          <MDBTypography
            style={{ maxWidth: "300", minWidth: "300" }}
            className="ms-4 me-4"
            note
            noteColor="danger"
          >
            {error}
          </MDBTypography>
        )}
        <MDBCardBody>
          <form onSubmit={handleSubmit}>
            <MDBInput
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              label="Insira seu nome"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              label="Insira seu Sobrenome"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
              type="number"
              label="Insira seu CPF"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              label="Insira seu e-mail"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
              type="number"
              maxLength={8}
              label="CEP"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              type="text"
              label="Rua"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={homeNumber}
              onChange={(e) => {
                setHomeNumber(e.target.value);
              }}
              type="text"
              label="Número"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={complement}
              onChange={(e) => {
                setComplement(e.target.value);
              }}
              type="text"
              label="Complemento"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              type="tel"
              label="Telefone"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              label="Insira sua senha"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={confPassword}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
              type="password"
              label="Confirme sua senha"
              size="lg"
              required
              className="mt-3"
            />
            <div className="d-flex justify-content-end align-items-center mt-2">
              <MDBBtn
                type="submit"
                outline
                rounded
                style={{ fontWeight: "600" }}
              >
                Registrar
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex justify-content-center align-items-center">
            <span className="me-1">Opa! Já possui conta?</span>
            <Link to={"/login"}>Fazer login</Link>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
}
