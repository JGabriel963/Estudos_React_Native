import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const bottomSheefRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['30%', '80%'], [])


  const handleCloseAction = () => bottomSheefRef.current?.close();

  const handleOpenPress = () => bottomSheefRef.current?.expand();


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>

        <TouchableOpacity onPress={handleOpenPress}>
          <MaterialIcons name="settings" size={32} />
        </TouchableOpacity>

        <BottomSheet
          ref={bottomSheefRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: '#fff033' }}
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
        </BottomSheet>

      </View>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sheetView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8
  }
})