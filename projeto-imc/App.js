import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import { useState } from 'react'

export default function App() {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [result, setResult] = useState("")

    function handleIMC() {

        if(weight === "" || height === "") {
            return Alert.alert("Todos os campos devem ser preenchidos!")
        }
       
        const peso = parseFloat(weight.replace(",", "."))
        const altura = parseFloat(height.replace(",", ".")) ** 2
        const imc = (peso / altura).toFixed(2)
        let classification = ""


        if (Number(imc) < 18) {
          classification = "Abaixo do peso"
        } else if (Number(imc) < 25) {
          classification = "Peso ideal"
        } else if (Number(imc) < 30) {
          classification = "Acima do Peso"
        } else if (Number(imc) < 35) {
          classification = "Obesidade grau I"
        } else if (Number(imc) < 40) {
          classification = "Obesidade gray II"
        } else {
          classification = "Obesidade grau III"
        }

        
        
        setResult(`IMC - ${imc} | ${classification}`)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Calcular IMC - IFPI
            </Text>
            <View style={styles.form}>
                <Text style={styles.inputText}>Peso:</Text>
                <TextInput 
                    value={weight}
                    onChangeText={(e) => setWeight(e)}
                    style={styles.input} 
                    keyboardType='number-pad' 
                    placeholder='Digite seu peso' 
                />
                <Text style={styles.inputText}>Altura:</Text>
                <TextInput 
                    value={height}
                    onChangeText={(e) => setHeight(e)}
                    style={styles.input} 
                    keyboardType='number-pad' 
                    placeholder='Digite sua altura' 
                />
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleIMC}>
                    <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, textAlign: "center"}}>
                        Calcular
                    </Text>
                </TouchableOpacity>
                <Text style={styles.result}>
                    {!result ? "Resultado": result}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 38,
        paddingStart: 14,
        paddingEnd: 14,
        backgroundColor: "#E0F7FA"
    },
    cover: {
        position: "absolute",
        height: "100%"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffe8b3",
        backgroundColor: "#D50000",
        padding: 12,
        borderBottomRightRadius: 32,
        borderRadius: 8,
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "95%"
    },
    inputText: {
        width: "100%",
        fontWeight: "bold",
        marginBottom: 3,
        color: "#244242",
        fontSize: 20
    },
    input: {
        padding: 12,
        width: "100%",
        borderWidth: 2,
        borderColor: "#244242",
        borderRadius: 8,
        color: "#244242",
        marginBottom: 12
    },
    button: {
        backgroundColor: "#244242",
        fontWeight: "bold",
        width: "100%",
        padding: 12,
        borderRadius: 9
    },
    result: {
      width: "70%",
      marginTop: 14,
      backgroundColor: "#6aa9e9",
      padding: 12,
      borderRadius: 8,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: "center"
    }
})