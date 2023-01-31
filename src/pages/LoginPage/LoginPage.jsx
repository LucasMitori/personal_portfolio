import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataSpaceInput, FormStructure, LoginMain, LoginSpace } from "./styles";
import * as yup from "yup";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const LoginPage = () => {
  const { LoginUser } = useContext(GeneralContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula e um número"
      )
      .required("escolha uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <LoginMain>
        <LoginSpace>
          <FormStructure onSubmit={handleSubmit(LoginUser)}>
            <h2>Login</h2>
            <DataSpaceInput>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Senha</label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                placeholder="Sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <button type="submit">Entrar</button>
          </FormStructure>

          {/* <span>Ainda não possui uma conta?</span>

          <RegisterBtn to={`/register`}>Cadastre-se</RegisterBtn> */}
        </LoginSpace>
      </LoginMain>
    </>
  );
};

export default LoginPage;
