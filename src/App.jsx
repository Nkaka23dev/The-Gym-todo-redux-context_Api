import { Provider } from "react-redux";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { store } from "./components/utils/store";

function App() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="mt-20">
        <h1 className="text-6xl font-extrabold text-gray-400 text-center">
          Todo
        </h1>
        <Provider store={store}>
          <Input />
          <Todo />
        </Provider>
      </div>
    </section>
  );
}

export default App;
