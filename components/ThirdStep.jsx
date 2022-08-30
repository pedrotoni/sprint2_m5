function ThirdStep({ formData, setFormData }) {
    return(
        <div>
            <label htmlFor="dateofbirth">Data de Nascimento</label>
            <input
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            placeholder="Digite aqui sua data de nascimento"
            required
            value={formData.dateOfBirth}
            onChange = {(event) => {setFormData({...formData, dateOfBirth: event.target.value})}}></input>

            <label htmlFor="cpf">CPF</label>
            <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite aqui seu CPF"
            required
            value={formData.cpf}
            onChange = {(event) => {setFormData({...formData, cpf: event.target.value})}}></input>

            <label htmlFor="monthlyincome">Renda Mensal</label>
            <input
            type="number"
            id="monthlyincome"
            name="monthlyincome"
            placeholder="Digite aqui sua renda mensal"
            required
            value={formData.monthlyIncome}
            onChange = {(event) => {setFormData({...formData, monthlyIncome: event.target.value})}}></input>
        </div>
    )
}

export default ThirdStep;