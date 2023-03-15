import { useContext } from "react";
import { TodoContext } from "../components/utils/TodoContext";

const useGlobalContext = () => useContext(TodoContext)
export default useGlobalContext