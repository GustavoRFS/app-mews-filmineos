import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MovieSwippableItem from '../components/MovieSwippableItem';

const movies = [
  {
    backdrop_path: '/hziiv14OpD73u9gAak4XDDfBKa2.jpg',
    id: 671,
    overview:
      'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.',
    poster_path: '/qnw9610ojLT0jU3lMSZOAFttt1e.jpg',
    release_date: '2001-11-16',
    title: 'Harry Potter e a Pedra Filosofal',
    average_rating: 10,
  },
  {
    backdrop_path: '/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg',
    id: 674,
    overview:
      'Em seu 4º ano na Escola de Magia e Bruxaria de Hogwarts, Harry Potter é misteriosamente selecionado para participar do Torneio Tribruxo, uma competição internacional em que precisará enfrentar alunos mais velhos e experientes de Hogwarts e também de outras escolas de magia. Além disso a aparição da marca negra de Voldemort ao término da Copa do Mundo de Quadribol põe a comunidade de bruxos em pânico, já que sinaliza que o temido bruxo está prestes a retornar.',
    poster_path: '/5oWB3hjzyECRBAjgWkmZinxl9qA.jpg',
    release_date: '2005-11-16',
    title: 'Harry Potter e o Cálice de Fogo',
    average_rating: 9.7,
  },
  {
    backdrop_path: '/kT8bDEAgEYBKhRJtqM97qTw6uRW.jpg',
    id: 767,
    overview:
      'No sexto ano de Harry em Hogwarts, Lord Voldemort e seus Comensais da Morte estão criando o terror nos mundos bruxo e trouxa. Dumbledore convence seu velho amigo Horácio Slughorn para retornar a Hogwarts como professor de poções após Harry encontrar um estranho livro escolar. Draco Malfoy se esforça para realizar uma ação destinada por Voldemort, enquanto Dumbledore e Harry secretamente trabalham juntos a fim de descobrir o método para destruir o Lorde das Trevas uma vez por todas.',
    poster_path: '/hTQQ5l9mxA3Rob8PTyvrNNGuj6y.jpg',
    release_date: '2009-07-07',
    title: 'Harry Potter e o Enigma do Príncipe',
    average_rating: 8.4,
  },
  {
    backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
    id: 603,
    overview:
      'Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.',
    poster_path: '/etJHvVsM9aefWWrW23r5BXgVK1F.jpg',
    release_date: '1999-03-30',
    title: 'Matrix',
    average_rating: 8,
  },
  {
    backdrop_path: '/sDxCd4nt3eR4qOCW1GoD0RabQtq.jpg',
    id: 604,
    overview:
      'Após derrotar as máquinas em seu combate inicial, Neo ainda vive na Nabucodonosor ao lado de Morpheus, Trinity e Link, o novo tripulante da nave. As máquinas estão realizando uma grande ofensiva contra Zion, onde 250 mil delas escavam rumo à cidade e podem alcançá-la em poucos dias. A Nabucodonosor é convocada para retornar a Zion e participar da reunião que definirá o contra-ataque para salvar a humanidade da extinção. Entretanto, um recado enviado pelo Oráculo faz com que Neo retorne à Matrix.',
    poster_path: '/pTGg4gT6yBAxm6bskTkOjdRsbit.jpg',
    release_date: '2003-05-15',
    title: 'Matrix Reloaded',
    average_rating: 6.6,
  },
  {
    backdrop_path: null,
    id: 109004,
    overview: '',
    poster_path: null,
    release_date: '2010-11-23',
    title: "The Seeker's Guide to Harry Potter",
    average_rating: null,
  },
];

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1e1e1e'}}>
      <ScrollView>
        {movies.map((movie) => (
          <MovieSwippableItem movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
