import './Inputs.css'

export default function InputSignUp() {
  return (
      
    <div>

      <form>

        <input
          className="signup-name"
          required
          type={"text"}
          placeholder="Nome Completo"
        />
        
        <input
          className="signup-email"
          required
          type={"email"}
          placeholder="E-mail"
        />

        <input
          className="signup-password"
          type={"password"}
          placeholder="Senha"
          required
        />

        <button 
        className="signup-submit"
        placeholder="Senha"
        type={"submit"}> Cadastre-se! </button>
        
      </form>

    </div>

  );
}
