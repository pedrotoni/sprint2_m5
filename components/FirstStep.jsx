function FirstStep({ formData, setFormData }) {

    return(
        <div>
            <label htmlFor="name">Nome</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Digite aqui seu nome" 
            required
            value={formData.name} 
            onChange = {(event) => {setFormData({...formData, name: event.target.value})}}></input>

            <label htmlFor="surname">Sobrenome</label>
            <input 
            type="text"
            id="surname" 
            name="surname" 
            placeholder="Digite aqui seu sobrenome" 
            required
            value={formData.surname} 
            onChange = {(event) => {setFormData({...formData, surname: event.target.value})}}></input>

            <label htmlFor="email">E-mail</label>
            <input
            type="email" 
            id="email" 
            name="email" 
            placeholder="Digite aqui seu e-mail" 
            required
            value={formData.email} 
            onChange = {(event) => {setFormData({...formData, email: event.target.value.trim()})}}></input>

            <label htmlFor="telephone">Telefone</label>
            <input
            type="tel" 
            id="telephone" 
            name="telephone" 
            placeholder="Digite aqui seu número de telefone" 
            required
            value={formData.telephone} 
            onChange = {(event) => {setFormData({...formData, telephone: event.target.value})}}></input>
        </div>
    )
}

export default FirstStep;