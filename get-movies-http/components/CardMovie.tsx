import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Movies } from "../types";
import { Details } from "./Details";
import { useState } from "react";

export function CardMovie({ nome, sinopse, foto, id }: Movies) {
    const [openModal, setOpenModal] = useState(false)

    const setVisibleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <View>
           <View style={styles.card}>
            <Text style={styles.title}>
                {nome}
            </Text>

            <Image
                source={{ uri: foto }}
                style={styles.capa}
            />

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={setVisibleModal}>
                    <Text style={styles.btnText}>
                        LER MAIS
                    </Text>
                </TouchableOpacity>
            </View>
           </View>

           <Modal transparent={true} animationType="slide" visible={openModal}>
                <Details title={nome} sinopse={sinopse} close={setVisibleModal} />
           </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e2e8f0',
        margin: 15,
        elevation: 2
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    title: {
        padding: 15,
        fontSize: 18
    },
    btnArea: {
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9
    },
    btn: {
        width: 100,
        backgroundColor: "#09A6FF",
        opacity: 1,
        padding: 8
    },
    btnText: {
        color: "#fff",
        textAlign: 'center'
    }
})