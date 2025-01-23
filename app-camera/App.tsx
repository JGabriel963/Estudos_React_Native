import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useMicrophonePermission } from 'react-native-vision-camera'
import { Video, ResizeMode } from 'expo-av'
import * as MediaLibrary from 'expo-media-library'

const { width: widthScreen, height: heightScreen } = Dimensions.get('screen')

export default function App() {
  const device = useCameraDevice("back");
  const { hasPermission, requestPermission } = useCameraPermission()
  const { hasPermission: hasMicPermission, requestPermission: requestMicPermission } = useMicrophonePermission();
  const [permission, setPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const cameraRef = useRef<Camera>(null)

  useEffect(() => {
    (async () => {
      // Pedir permissão para usar a Câmera e o Microfone
      const status = await requestPermission();
      const stausMic = await requestMicPermission();

      if (status && stausMic) {
          setPermission(true);
      }

      const { status: statusMediaLibrary } = await MediaLibrary.requestPermissionsAsync()

      if (statusMediaLibrary !== "granted") {
        console.log("MEDIA LIBRARY NÃO AUTRORIZADA!");
        setPermission(false)
        return;
      }


    })()
  }, [])

  const startRecording = () => {
    // Se não possuir nenhum dispositio, encerrar função
    if(!cameraRef.current || !device) return;

    // Gravando... 🎥
    setIsRecording(true);
    cameraRef.current.startRecording({
      onRecordingFinished: (video) => {
        console.log(video);
        setIsRecording(false);
        setVideoUrl(video.path);
        setModalVisible(true)
      },
      onRecordingError: (error) => {
        console.log(error)
      }
    })

  }

  const stopRecording = async () => {
    if(cameraRef.current) {
      await cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  const handleSaveVideo = async () => {
    if(videoUrl) {
      try { 
        await MediaLibrary.createAssetAsync(videoUrl);
        console.log("SALVO COM SUCESSO!")
        setVideoUrl(null)
        setModalVisible(false)
      } catch (error) {
        console.log("ERRO AO SALVAR", error)
      }
    }
  }

  const handlePhoto = async () => {
    // Se não possuir nenhum dispositio, encerrar função
    if(!cameraRef.current || !device) return;

    const photo = await cameraRef.current?.takePhoto({
      flash: 'on'
    })

    console.log(`file://${photo.path}`)
    setImageUrl(`file://${photo.path}`)
    setModalVisible(true);
  }

  const handleSaveImage = async () => {
    if (imageUrl) {
      try {
        await MediaLibrary.createAssetAsync(imageUrl);
        console.log("IMAGEM SALVA COM SUCESSO!");
        setImageUrl(null);
        setModalVisible(false)
      } catch (error) {
        console.log("ERRRO COM SUCESSO!", error)
      }
    }
  }



  if(!permission) return <View></View>

  if(!device || device === null) return <View></View>


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Camera
        style={StyleSheet.absoluteFill}
        ref={cameraRef}
        device={device}
        isActive={true}
        video={true}
        photo={true}
        audio={true}
        outputOrientation='device'
        resizeMode='cover'
      />

      <TouchableOpacity 
        onPressIn={startRecording}
        onPressOut={stopRecording}
        style={{
          width: 70,
          height: 70,
          borderRadius: 99,
          borderWidth: 8,
          borderColor: 'red',
          position: 'absolute',
          bottom: 70,
          alignSelf: 'center'
        }}
      />

      <TouchableOpacity 
        onPress={handlePhoto}

        style={{
          width: 70,
          height: 70,
          borderRadius: 99,
          position: 'absolute',
          right: -30,
          alignSelf: 'center'
        }}
      >
        <Text>
          🎥
        </Text>
      </TouchableOpacity>

      {videoUrl && (
        <Modal animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={handleCloseModal}

        >
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: videoUrl }}
              volume={1.0}
              rate={1.0}
              isMuted={false}
              shouldPlay
              isLooping
              resizeMode={ResizeMode.COVER}
              style={{ width: widthScreen, height: heightScreen}}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
                <Text style={{color: '#000' }}>Fechar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSaveVideo}>
                <Text style={{color: '#000' }}>Salvar video</Text>
              </TouchableOpacity>
            </View>


          </View>
        </Modal>
      )}

      {imageUrl && (
        <Modal animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={handleCloseModal}

        >
          <View style={styles.videoContainer}>

            <Image
              source={{ uri: imageUrl }}
              style={{ width: widthScreen, height: heightScreen }}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
                <Text style={{color: '#000' }}>Fechar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSaveImage}>
                <Text style={{color: '#000' }}>Salvar imagem</Text>
              </TouchableOpacity>
            </View>


          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    position: 'absolute',
    zIndex: 99,
    flexDirection: 'row',
    gap: 14
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 24,
    top: 24,
    left: 24,
    borderRadius: 4
  }
});
