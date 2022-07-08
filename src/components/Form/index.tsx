import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/register";
import Input from "../Input";
import Button from "../Button";
import { gql } from "graphql-request";
import { useMutation } from "@apollo/client";


const CREAT_SUBSCRIBER_MUTATION = gql`
mutation CreatSubscriber ($name: string!, $email: string!, $password: string!){
  creatSubscriber(data:{name: $name, email: $email, password: $password}){
    id
  }
}
`


export default function Form () {
  const [showErrors, setShowErrors] = React.useState(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
      validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },

  });
  const [creatSubscriber] = useMutation(CREAT_SUBSCRIBER_MUTATION)

  const onSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    setShowErrors(true);
    handleSubmit(e);
    creatSubscriber({
      variables:{
        name,
        email,
        password
      }
    })
  }

 

  return (
  <form onSubmit={onSubmit}>
    <div className="flex flex-col">
    <Input name="name" label="Nome" value={values.name} onChange={handleChange} error={showErrors ? errors.name : ""} type={""} />
    <Input name="email" label="E-mail" value={values.email} onChange={handleChange} error={showErrors ? errors.email : ""} type={""} />
    <Input type="password" name="password" label="Password" value={values.password} onChange={handleChange}error={showErrors ? errors.password : ""} />
    </div>
    <Button type="submit">Signup</Button>
  </form>
  );
}