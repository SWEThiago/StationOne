import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome é Obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mal é obrigatorio"),
  password: yup.string().required("Senha é obrigatoria").min(6, "A senha deve ter no mínimo 6 digitos"),
})