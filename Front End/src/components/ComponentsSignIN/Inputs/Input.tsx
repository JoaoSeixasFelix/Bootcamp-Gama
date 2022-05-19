import './Inputs.css'

export default function InputSignIn() {
  return (
      
    <div>
      <form>

        <input
          className="login-email"
          required
          type={"email"}
          placeholder="E-mail"
        />

        <input
          className="login-password"
          type={"password"}
          placeholder="Senha"
          required
        />

        <button 
        className="login-submit"
        placeholder="Senha"
        type={"submit"}> Entrar </button>
        
      </form>

    </div>

  );
}
