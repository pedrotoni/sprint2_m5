function SecondStep({ formData, setFormData }) {
    return(
        <div>
            <label htmlFor="cep">CEP</label>
            <input
            type="text"
            id="cep"
            name="cep" 
            placeholder="Digite aqui seu CEP" 
            required
            value={formData.cep} 
            onChange = {(event) => {setFormData({...formData, cep: event.target.value})}}></input>

            <label htmlFor="address1">Endereço 1</label>
            <input
            type="text"
            id="address1"
            name="address1"
            placeholder="Digite aqui seu primeiro endereço"
            required
            value={formData.address1}
            onChange = {(event) => {setFormData({...formData, address1: event.target.value})}}></input>

            <label htmlFor="address2">Endereço 2</label>
            <input
            type="text"
            id="address2"
            name="address2"
            placeholder="Digite aqui seu segundo endereço"
            required
            value={formData.address2}
            onChange = {(event) => {setFormData({...formData, address2: event.target.value})}}></input>
        </div>
    )
}

export default SecondStep;