import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List/List";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import RouterForm from "./components/RouterForm/RouterForm";
import RouterList from "./components/RouterList/RouterList";
import axios, { AxiosResponse } from "axios";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [list, setList] = useState<any[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getData").then((response: AxiosResponse<any>) => {
      setList(response.data);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="Content">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/routerList" element={<RouterList />} />
            <Route path="/getData" element={<Form />} />
            <Route
              path="/routerData" 
              element={<RouterForm clients={list.map((val) => ({ value: val.user, label: val.user }))} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
