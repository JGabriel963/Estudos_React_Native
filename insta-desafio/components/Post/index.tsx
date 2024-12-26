import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PostProps = {
    nome: string;
    descricao: string;
    imgperfil: string;
    imgPublicacao: string;
    likeada: boolean;
    likers: number;
}

export default function Post({ data }: { data: PostProps }) {

    const getIconLike = (like: boolean) => {
        return like
            ? require('../../src/img/likeada.png')
            : require('../../src/img/like.png')
    }

    const showLikers = (likers: number) => {
        if (likers === 0) {
            return;
        }

        return (
            <Text style={styles.likes}>
                {likers} {likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    return (
        <View>
            <View style={styles.viewProfile}>
                <Image
                    source={{ uri: data.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.username}>{data.nome}</Text>
            </View>

            <Image
                resizeMode="cover"
                source={{ uri: data.imgPublicacao }}
                style={styles.fotoPublicacao}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={getIconLike(data.likeada)}
                        style={styles.iconLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../src/img/comment.png')}
                        style={styles.iconLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../src/img/send.png')}
                        style={styles.iconLike}
                    />
                </TouchableOpacity>
            </View>

            {showLikers(data.likers)}


            <Text style={styles.nameFooter}>
                {data.nome}
            </Text>

            <Text style={styles.descFooter}>
                {data.descricao}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        gap: 5,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    username: {
        fontSize: 22,
        color: '#000',
    },
    fotoPublicacao: {
        height: 400,
        alignItems: 'center',
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
        gap: 5,
    },
    iconLike: {
        width: 25,
        height: 25,
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
    nameFooter: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    descFooter: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15,
    }
})