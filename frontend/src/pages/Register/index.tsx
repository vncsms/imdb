import React, { useState } from 'react';
import MainPage from '../../styles/page';
import { InputContainer,
         RegisterButton,
         DataContainer,
         RegisterTitle,
         FormContainer } from './styles';
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/user";

const Register: React.FC = () => {
  type PersonScore = {
    name: string;
    email: string;
    password: string;
    repassword: string;
  };
  const { register, handleSubmit  } = useForm<PersonScore>();
  const [errors, setErrors] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });

  const onSubmit = (data: PersonScore) => {
    registerUser(data).then((data: any) => {
      console.log(data);
    }).catch(error => {
      setErrors(error.response.data);
    })
  };

  return (
    <MainPage>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <RegisterTitle>Identificação</RegisterTitle>
        <DataContainer>
          <div>
            <InputContainer>
              Username:
              <input type="text"
                     style={{borderColor: errors.username ? 'red' : 'white',
                             borderWidth: errors.username ? 1 : 0}}
                     ref={register} name="username" />
            </InputContainer>
            <InputContainer>
              Password:
              <input type="text"
                     style={{borderColor: errors.password ? 'red' : 'white',
                     borderWidth: errors.password ? 1 : 0}}
                     ref={register} name="password" />
            </InputContainer>
          </div>
          <div>
            <InputContainer>
              Email:
              <input type="text"
                     style={{borderColor: errors.email ? 'red' : 'white',
                     borderWidth: errors.email ? 1 : 0}}
                     ref={register} name="email" />
            </InputContainer>
            <InputContainer>
              Confirm:
              <input type="text" ref={register} name="repassword" />
            </InputContainer>    
          </div>
        </DataContainer>
        <RegisterButton type="submit" value="Submit" />
      </FormContainer>
    </MainPage>
  );
};
export default Register;