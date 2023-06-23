import { createContext, useState } from "react";

const tasksContext = createContext();

const TasksWrapper = ({ children }) => {
  const [testState, setTestState] = useState({ name: "Shaun" });
  return (
    <tasksContext.Provider value={{ testState, darkMode: false }}>
      {children}
    </tasksContext.Provider>
  );
};

export { tasksContext, TasksWrapper };
