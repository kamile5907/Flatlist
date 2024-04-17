import { View, Text, FlatList } from "react-native";
import { styles } from "./src/Styles/style";

export default function App() {
  const Caminhonetes = [
    {
      id: "1",
      backgroundColor: "blue",
      marca: "Volkswagen",
      nome: "Amarok",
      ano: "2010",
    },
    {
      id: "2",
      backgroundColor: "deepskyblue",
      marca: "Ford",
      nome: "Ranger",
      ano: "1982",
    },
    {
      id: "3",
      backgroundColor: "midnightblue",
      marca: "Toyota",
      nome: "Hilux",
      ano: "1968",
    },
    {
      id: "4",
      backgroundColor: "green",
      marca: "Ram",
      nome: "Dodge Ram",
      ano: "1980",
    },
    {
      id: "5",
      backgroundColor: "greenyellow",
      marca: "Chevrolet",
      nome: "Silverado",
      ano: "2001",
    },
    {
      id: "6",
      backgroundColor: "yellow",
      marca: "Fiat",
      nome: "Strada",
      ano: "1998",
    },
    {
      id: "7",
      backgroundColor: "orange",
      marca: "Volkswagen",
      nome: "Saveiro",
      ano: "2009",
    },
    {
      id: "8",
      backgroundColor: "red",
      marca: "Fiat",
      nome: "toro",
      ano: "2016",
    },
    {
      id: "9",
      backgroundColor: "mediumvioletred",
      marca: "Ford",
      nome: "Maverick",
      ano: "1973",
    },
    {
      id: "10",
      backgroundColor: "purple",
      marca: "Chevrolet",
      nome: "S10",
      ano: "2015",
    },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  const renderItem = ({ item }) => (
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.txt}>{item.marca}</Text>
      <Text style={styles.txt}>{item.nome}</Text>
      <Text style={styles.txt}>{item.ano}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={Caminhonetes} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderItem} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
