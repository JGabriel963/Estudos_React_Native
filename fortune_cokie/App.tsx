import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./public/biscoito.png'));
  const [sentence, setSentence] = useState('');

  const fortuneCookies = [
    "O segredo para o sucesso é acreditar em si mesmo.",
    "A paciência é a chave para grandes conquistas.",
    "Grandes jornadas começam com pequenos passos.",
    "Hoje é o dia perfeito para ser feliz.",
    "A gratidão transforma pequenos gestos em grandes alegrias.",
    "Confie no tempo: ele revela tudo o que deve ser.",
    "Cada desafio é uma oportunidade disfarçada.",
    "A felicidade está nas coisas simples da vida.",
    "O universo conspira a favor dos corajosos.",
    "Sorrisos são contagiosos. Espalhe-os.",
    "O melhor está por vir, prepare-se!",
    "Você é mais forte do que imagina.",
    "Um novo começo está a apenas uma decisão de distância.",
    "Acredite: tudo tem o seu tempo certo.",
    "O amor é a força mais poderosa do universo.",
    "A sorte favorece os ousados.",
    "A simplicidade é o maior dos luxos.",
    "Faça hoje algo que o futuro você agradecerá.",
    "A vida é curta para guardar rancores.",
    "Acredite em milagres, mas trabalhe por eles.",
    "Seja a mudança que você deseja no mundo.",
    "O otimismo é a base da coragem.",
    "Não deixe para amanhã o sorriso que pode dar hoje.",
    "A vida recompensa quem não desiste.",
    "A cada amanhecer, uma nova chance de recomeçar.",
    "A gentileza é uma linguagem universal.",
    "O sucesso é a soma de pequenos esforços diários.",
    "Quem semeia amor, colhe felicidade.",
    "O presente é o maior presente da vida.",
    "Uma atitude positiva abre portas para grandes realizações.",
    "Os sonhos não têm prazo de validade.",
    "Acredite em si mesmo e tudo será possível.",
    "A felicidade não está no fim da jornada, mas no caminho.",
    "Sua energia atrai sua realidade.",
    "Faça o bem, sem esperar nada em troca.",
    "Os melhores momentos são aqueles que nos tiram o fôlego.",
    "A vida é feita de escolhas. Escolha ser feliz.",
    "A coragem é o primeiro passo para o sucesso.",
    "Você é a luz que ilumina seu próprio caminho.",
    "Boas energias atraem boas companhias.",
    "O que você planta hoje, colhe amanhã.",
    "Seja como o rio: contorne os obstáculos e siga em frente.",
    "Nada é impossível para quem acredita.",
    "A vida recompensa a persistência.",
    "Você é o artista da sua própria vida.",
    "Cada dia é uma nova página da sua história.",
    "Acredite: algo maravilhoso está prestes a acontecer.",
    "Seja grato, e a vida será generosa com você.",
    "O importante não é chegar rápido, mas sim aproveitar a jornada.",
    "O amor e a gentileza são sempre a resposta."
  ];
  

  function breakCookie() {
    let randomNumber = Math.floor(Math.random() * fortuneCookies.length);
    setSentence('"' + fortuneCookies[randomNumber] + '"');
    setImg(require('./public/biscoitoAberto.png'));
  }


  return (
    <View style={styles.container}>
        <Image
          source={img}
          style={styles.image}
        />
        <Text style={styles.textSentence}>
          {sentence}
        </Text>

        <TouchableOpacity onPress={breakCookie} style={styles.btn}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {
          setSentence('');
          setImg(require('./public/biscoito.png'));
        }} style={[styles.btn, {marginTop: 15, borderColor:'#121212'}]}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnText, { color: '#121212' }]}>Resetar</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 230,
    height: 230,
  },
  textSentence: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 30,
    color: '#dd7b22',
  },
  btn: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
