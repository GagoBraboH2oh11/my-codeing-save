export async function getStaticsProps(){
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await data.json()
 
  return{
    props:{todos},
  }
}

function Todos({todos}) {
  return (
    <> 
    <h1>Lista de tarefas</h1>
    <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
          ))}
    </ul>
  </>
  )
  
}

export default Todos;
