function Sidebar({ handleForm, handleList }) {

  return (
    <div className="all">
      <div className="sidebar">
        <h3>Sprint 2</h3>
        <ul>
          <li onClick={handleForm}>Cadastrar</li>
          <li onClick={handleList}>Clientes</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
