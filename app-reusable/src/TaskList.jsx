import Task from './Task'

export default function TaskList(props) {
  return (
    <div>
      <input placeholder="ingrese tarea nueva" />
      <button style={{backgroundColor: "cyan"}}>+</button>
      
      {
        <>
        <Task />
        </>
      }

      <button style={{backgroundColor: "red"}}>Clear</button>
    </div>
  );
}
