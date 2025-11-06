// App.js
import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './Titulo';
import Saudacao from './Saudacao';
import FotoPerfil from './FotoPerfil';
import CartaoUsuario from './CartaoUsuario';

export default function App() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Titulo />
      <Saudacao nome="Rafael" />
      <Saudacao nome="Aluno Tech" />
      <FotoPerfil url="https://alunotech.com.br/" />
      <CartaoUsuario
        nome="Emanuelly"
        descricao="Desenvolvedora em Formação"
        imagem="https://joaoespacheco.vercel.app/"
      />
    </ScrollView>
  );
}