import React from "react";
import Input from "../Input/Input";
import Submit from "../Submit/Submit";



const App = () => {

  const [nome, setNome] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [senha, setSenha] = React.useState("")
  const [cep, setCep] = React.useState("")
  const [rua, setRua] = React.useState("")
  const [numero, setNumero] = React.useState("")
  const [bairro, setBairro] = React.useState("")
  const [cidade, setCidade] = React.useState("")
  const [estado, setEstado] = React.useState("")

  const formFetch = () => {
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
  }

  const dataForm = {
    nome: nome,
    email: email,
    senha: senha,
    cep: cep,
    rua: rua,
    numero: numero,
    bairro: bairro,
    cidade: cidade,
    estado: estado
  }
  
  return (
    <form onSubmit={formFetch}>
      <Input label="nome"
        id="nome"
        value={nome}
        setValue={setNome}
      />
      <p>{nome}</p>
      
      <Input label="email"
        id="email"
        value={email}
        setValue={setEmail}
      />
      <p>{email}</p>

      <Input label="senha"
        id="senha"
        value={senha}
        setValue={setSenha}
      />
      <p>{senha}</p>
      
      <Input label="cep"
        id="cep"
        value={cep}
        setValue={setCep}
      />
      <p>{cep}</p>
      
      <Input label="rua"
        id="rua"
        value={rua}
        setValue={setRua}
      />
      <p>{rua}</p>
      
      <Input label="numero"
        id="numero"
        value={numero}
        setValue={setNumero}
      />
      <p>{numero}</p>

      <Input label="bairro"
        id="bairro"
        value={bairro}
        setValue={setBairro}
      />
      <p>{bairro}</p>
      
      <Input label="cidade"
        id="cidade"
        value={cidade}
        setValue={setCidade}
      />
      <p>{cidade}</p>

      <Input label="estado"
        id="estado"
        value={estado}
        setValue={setEstado}
      />
      <p>{estado}</p>
      
      <Submit />
    </form>
  )
}

export default App;