import "./App.css";
import { useState } from "react";
import Sidebar from "../components/SidebarSprint2.jsx";
import Form from "../components/FormSprint2.jsx";
import CustomerList from "../components/CustomerList.jsx";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openList, setOpenList] = useState([]);

  return (
    <div className="main">
      <Sidebar
        handleForm={() => setOpenForm(true)}
        handleList={() => setOpenForm(false)}
      />
      {openForm ? (
        <Form
          handleFormSubmit={(formData) => {
            setOpenList((prev) => [...prev, formData]);
          }}
        />
      ) : (
        <CustomerList openList={openList}/>
      )}
    </div>
  );
}

export default App;
