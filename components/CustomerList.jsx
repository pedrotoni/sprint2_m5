function CustomerList({ openList }) {

    return(
        <>
        <h1>Clientes Cadastrados</h1>
        <div className="map">
          {openList.map((item, index) => {
            return (
              <div key={index} className="item">
                <p>{`${item.name} ${item.surname}`}</p>
                <span>
                  <p>{`E-mail: ${item.email}`}</p>
                  <p>{`Tel: ${item.telephone}`}</p>
                  <p>{`CEP: ${item.cep}`}</p>
                  <p>{`Endereço 1: ${item.address1}`}</p>
                  <p>{`Endereço 2: ${item.address2}`}</p>
                  <p>{`Data de Nascimento: ${item.dateOfBirth}`}</p>
                  <p>{`CPF: ${item.cpf}`}</p>
                  <p>{`Renda Mensal: R$${item.monthlyIncome}`}</p>
                </span>
              </div>
            );
          })}
        </div>
        </>
    )
}

export default CustomerList;