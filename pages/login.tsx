import Button from "../src/components/Button";
import Input from "../src/components/Input";
import user from "../src/data/user.json";
import { LoginContainer } from "../src/styles/pages/login";

export default function Login() {
  return (
    <LoginContainer>
      <img src={user.logo} alt="" />
      <Button className="buy-now">Compre agora</Button>
      <div className="content">
        <form autoComplete="off">
          <Input type="email" placeholder="Seu nome" />
          <Input type="password" placeholder="Sua senha" />
        </form>
        <a href="#">Esqueci minha senha</a>
        <Button>Entrar</Button>

        <span>Seus dados estão protegidos.</span>
      </div>
    </LoginContainer>
  );
}
