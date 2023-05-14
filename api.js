import { useEffect,useState } from "react";


function App(){
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            setData(resp.data)
        })
        .catch((err)=>{
          console.log("error"+err)
        })
  },[])

  const prevPage=()=>{
    fetch("https://reqres.in/api/users?page=1")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            setData(resp.data)
        })
        .catch((err)=>{
          console.log("error"+err)
        })
  }
  const nextPage=()=>{
    fetch("https://reqres.in/api/users?page=2")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            setData(resp.data)
        })
        .catch((err)=>{
          console.log("error"+err)
        })
  }
  
  console.log('result', data)
  return(
    <div>
      <h1>Functiona component</h1>
     
        <table className="table table-bordred">
        <thead className="bg-dark text-white">
                <tr>
                   <th>ID</th>
                   <th>Email</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
            {data && data.map((value, key) => (
                <tr>
                    <td>{value.id}</td>
                    <td>{value.email}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>
                      <img src={value.avatar}/>
                    </td>
                   
                </tr>
                  ))}
            </tbody>
        </table>
        <div className="nextPage">
          <button onClick={prevPage}>Previos</button>
             <button onClick={nextPage}>Next</button>
        </div>
    </div>
  )
}
export default App;
