import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageWidth = Math.min(screenWidth * 0.95, 400); // 95% da tela ou 400px
const imageHeight = imageWidth / (933 / 621); // mantém proporção da imagem original

export default function HomeScreen({ nome, email, onLogout, onAcessarTreino }) {
  return (
    <View style={styles.fullscreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          {/* Saudação */}
          <View style={styles.card}>
            <Text style={styles.welcome}>
              Seja bem-vinda, <Text style={styles.bold}>{nome}</Text> 💪
            </Text>
            <Text style={styles.email}>Seu e-mail: {email}</Text>
          </View>

          {/* Acesse seu treino */}
          <Text style={styles.subTitle}>A sua evolução está aqui 👇</Text>
          <TouchableOpacity onPress={onAcessarTreino} style={styles.imageCard}>
            <Image
              source={require('../assets/images/accesag.PNG')}
              style={[styles.mainImage, { width: imageWidth, height: imageHeight }]}
            />
          </TouchableOpacity>

          {/* Kit Corpinho de Verão */}
          <Text style={styles.kitTitle}>Kit Corpinho de Verão</Text>

          {/* Botão 1: Drink Anti Pochete */}
          <TouchableOpacity
            style={styles.kitCard}
            onPress={() =>
              Linking.openURL(
                'https://resisted-cricket-621.notion.site/DRINK-ANTI-POCHETE-Receita-Caseira-Para-Emagrecimento-Acelerado-209f4b16b97e8009a173cff6e426f58a?pvs=74'
              )
            }
          >
            <Image
              source={require('../assets/images/drink.jpg')}
              style={styles.kitIcon}
            />
            <View>
              <Text style={styles.kitLabel}>DRINK</Text>
              <Text style={styles.kitText}>Anti Pochete</Text>
            </View>
          </TouchableOpacity>

          {/* Botão 2: Desafio Bumbum Max */}
          <TouchableOpacity
            style={styles.kitCard}
            onPress={() =>
              Linking.openURL(
                'https://resisted-cricket-621.notion.site/TREINO-BUMBUM-MAX-Edi-o-Academia-209f4b16b97e80c19517d1a855eb8797?pvs=74'
              )
            }
          >
            <Image
              source={require('../assets/images/desafio.jpg')}
              style={styles.kitIcon}
            />
            <View>
              <Text style={styles.kitLabel}>DESAFIO</Text>
              <Text style={styles.kitText}>Bumbum Max</Text>
            </View>
          </TouchableOpacity>

          {/* Botão 3: 100 Receitas Cetogênicas */}
          <TouchableOpacity
            style={styles.kitCard}
            onPress={() =>
              Linking.openURL(
                'https://mixed-dart-8b8.notion.site/Receitas-Cetog-nicas-Continue-comendo-doce-e-DERRETA-a-barriguinha-15e7e407b3b38076abfaeaa4eedb40bb'
              )
            }
          >
            <Image
              source={require('../assets/images/receitas.png')}
              style={styles.kitIcon}
            />
            <View>
              <Text style={styles.kitLabel}>100 RECEITAS</Text>
              <Text style={styles.kitText}>Cetogênicas</Text>
            </View>
          </TouchableOpacity>

          {/* Botão Telegram */}
          <TouchableOpacity
            style={styles.telegramButton}
            onPress={() => Linking.openURL('https://t.me/+vlIfg-3DcjQ4MGNh')}
          >
            <Text style={styles.telegramText}>ACESSO AO CANAL EXCLUSIVO 💪🏽</Text>
          </TouchableOpacity>

          {/* Botão Baixar App */}
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() =>
              Linking.openURL(
                'https://mixed-dart-8b8.notion.site/Treino-Carol-19d7e407b3b38006a0f9d4dbf0e3322a'
              )
            }
          >
            <Text style={styles.downloadText}>📱 Baixe o app aqui</Text>
          </TouchableOpacity>

          {/* Botão logout */}
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: '#111',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  box: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcome: {
    color: '#ccc',
    fontSize: 14,
  },
  email: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  mainImage: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  kitTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  kitCard: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    gap: 10,
  },
  kitIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  kitLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  kitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  telegramButton: {
    backgroundColor: '#e8048c',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  telegramText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#f55',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
