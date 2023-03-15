import Input from "./components/Input";
import Todo from "./components/Todo";
import { TodoProvider } from "./components/utils/TodoContext";

function App() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="mt-20">
        <h1 className="text-6xl font-extrabold text-gray-400 text-center">
          Todo
        </h1>
        <TodoProvider>
          <Input />
          <Todo />
        </TodoProvider>
      </div>
    </section>
  );
}

export default App;
