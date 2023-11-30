const GetData = async()=>{
  const data= await fetch('https://jsonplaceholder.typicode.com/todos')
  return data.json()
  
}

async function Todos() {
  const data = await GetData()
  return (
    <>
    <h1>Lista de Afazeres</h1>
    <ul>
      {data.map((todo)=>(
        <li key={todo.id}>{todo.id}-{todo.title}</li>
      ))}
    </ul>
    </>
  );

  
}

export default Todos;