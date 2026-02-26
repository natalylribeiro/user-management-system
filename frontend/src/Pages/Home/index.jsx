import { useEffect, useState, useRef } from 'react'
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('')

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function createUsers() {

  if (
    !inputName.current.value ||
    !inputAge.current.value ||
    !inputEmail.current.value
  ) {
    setMessage("Preencha todos os campos")
    return
  }
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
    setMessage("✅ Usuário cadastrado com sucesso!")
    setTimeout(() => {
    setMessage('')
  }, 3000)

   getUsers()
  }
  async function deleteUsers(id) {
    try{
    await api.delete(`/usuarios/${id}`)
    setMessage("🗑️ Usuário deletado com sucesso!")

    setTimeout(() => {
      setMessage('')
    }, 3000)
    getUsers()
  
  }catch (error) {
    console.error("Erro ao deletar:", error)
    setMessage("Erro ao deletar usuário")
  }
  }
  useEffect(() => {
   getUsers() 
},[])

  return (
      
    <div className="container">
      <form className="form">
        <h1>Cadastro de Usuários</h1>
        {message && <p className="message">{message}</p>}
        <input type="text" placeholder="Nome"  name="nome" ref={inputName}/>
        <input type="number" placeholder="Idade" name="idade" ref={inputAge}/>
        <input type="email" placeholder="Email" name="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>
      {users.map((user) => (
      <div key={user.id} className="card">
        <div>
          <p>Nome:  <span>{user.name} </span></p>
          <p>Idade: <span>{user.age} </span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button onClick={() => deleteUsers(user.id)}>
          <img src={Trash} />
        </button>
      </div>

      ))}

    </div>
  );
}

export default Home;
