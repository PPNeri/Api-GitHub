import styled from 'styled-components'
import { shade } from 'polished'


interface FormProps {
  hasError:boolean;
}

export const Title = styled.h1`
font-size:48px;
color:#3A3A3A;
`;


export const Form = styled.form<FormProps>`
margin-top:40px;
max-width:700px;

display:flex;

input{
  flex:1;
  height:70px;
  padding:0 24px;
  border:0;
  border-radius:5px 0 0 5px;
}

button{
  width:210px;
  height:70px;
  background:#04d361;
  border:0;
  border-radius:0 5px 5px 0;
  color:#FFF;
  font-weight:bold;

  &:hover {
    background:  ${shade(0.2, '#04d361')}

  }
}`;

export const Error = styled.span`
display:block;
color:#c53030;
margin-top:8px;

`;

export const Repositories = styled.div`
margin-top:80px;
max-width:700px;
a{
  margin-bottom:25px;
  background:#fff;
  border-radius:5px;
  width:100%;
  padding:24px;
  text-decoration:none;
  display:block;

  display:flex;
  align-items:center;
  transition:transform 0.2s;

  &:hover{

    transform:translateX(10px);

}

  img{
    width:64;
    height:64px;
    border-radius:50%
  }

  div{
    flex:1;
    margin-left:0 16px;
  }

  strong{
     font-size:20px;
     color:#3D3D4D;

  }
  p{
    font-size:18px;
    color:#A8A8B3;

  }

  svg{
    margin-left:auto;

  }


}

`;

