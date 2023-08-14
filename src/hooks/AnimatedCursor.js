import Axios from '../Api/Axios';
import "./Style.css"
import { useEffect, useState } from 'react';
function App() {
  const [data, setdata] = useState([])
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [text, setText] = useState([])
  const [tel, setTel] = useState([])
  console.log(data)
  useEffect(() => {
    const getApi = async () => {
      await Axios.get("/telegram")
        .then(res => setdata(res.data))
        .catch(error => console.error(error))
    }
    getApi()
  }, [])

  const formSubmit = async (e) => {
    e.preventDefault()
    let newuser = {
      name,
      email,
      text,
      tel
    }
    await Axios.post("/telegram", newuser)
      .then(res => console.log(res))
      .catch(error => console.log(error))

    setName("")
    setEmail("")
    setText("")
    setTel("")
  }

  return (
    <div className="App">
      <form action="" onSubmit={formSubmit}>
        <input type="text" value={name} placeholder='name...' onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} placeholder='email...' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={text} placeholder='text...' onChange={(e) => setText(e.target.value)} />
        <input type="number" value={tel} placeholder='tel...' onChange={(e) => setTel(e.target.value)} />
        <button className='btn'>Jo'natish</button>
      </form>
    </div>
  );
}

export default App;
