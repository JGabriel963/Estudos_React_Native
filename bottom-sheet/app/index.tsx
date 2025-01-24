import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetFlashList, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Usuario = {
  id: number;
  nome: string;
  email: string;
  idade: number;
  cidade: string;
  ativo: boolean;
  bio: string;
}

export default function Home() {
  const bottomSheefRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['30%', '80%'], [])

  const usuarios: Usuario[] = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@example.com",
      idade: 28,
      cidade: "São Paulo",
      ativo: true,
      bio: "Engenheiro de software apaixonado por tecnologia e esportes."
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      email: "maria.oliveira@example.com",
      idade: 34,
      cidade: "Rio de Janeiro",
      ativo: false,
      bio: "Designer gráfica que adora criar e explorar novas ideias."
    },
    {
      id: 3,
      nome: "Carlos Pereira",
      email: "carlos.pereira@example.com",
      idade: 22,
      cidade: "Belo Horizonte",
      ativo: true,
      bio: "Estudante de marketing e amante de música e filmes."
    },
    {
      id: 4,
      nome: "Ana Costa",
      email: "ana.costa@example.com",
      idade: 29,
      cidade: "Porto Alegre",
      ativo: true,
      bio: "Nutricionista focada em promover saúde e bem-estar."
    },
    {
      id: 5,
      nome: "Fernanda Lima",
      email: "fernanda.lima@example.com",
      idade: 25,
      cidade: "Salvador",
      ativo: false,
      bio: "Fotógrafa profissional com paixão por viagens e natureza."
    }
  ];


  const handleCloseAction = () => bottomSheefRef.current?.close();

  const handleOpenPress = () => bottomSheefRef.current?.expand();


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>

        <TouchableOpacity onPress={handleOpenPress}>
          <MaterialIcons name="settings" size={32} color="#fff" />
        </TouchableOpacity>

        <BottomSheet
          ref={bottomSheefRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: '#ffff' }}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={styles.sheetView}>
            <Text>
              Conteúdo do Bottom Sheet
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={handleCloseAction}>
              <MaterialIcons name="close" size={24} />
            </TouchableOpacity>
          </BottomSheetView>

          <BottomSheetFlashList
          data={usuarios}
          renderItem={renderItem}
          estimatedItemSize={43.3}
        />
        </BottomSheet>

      </View>
    </GestureHandlerRootView>
  )
}

const renderItem = ({ item }: { item: Usuario }) => {
  return (
    <TouchableOpacity key={item.id} style={styles.itemContainer}>
      <Text> {item.nome} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center'
  },
  sheetView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8
  },
  itemContainer: {
    width: '100%',
    height: 32,
    marginHorizontal: 16,
    backgroundColor: '#'
  }
})