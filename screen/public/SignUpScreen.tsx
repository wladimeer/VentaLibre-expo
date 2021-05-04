import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { TouchableHighlight, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as React from 'react';

function SignUpScreen() {
  const [loadedFonts] = useFonts({
    Quicksand: require('../../assets/font/Quicksand-Regular.ttf'),
    GreatVibes: require('../../assets/font/GreatVibes-Regular.ttf')
  });

  if (!loadedFonts) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000000" />

      <Text style={styles.title}>VentaLibre</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Rut</Text>
        <TextInput style={styles.input} selectionColor={'#2980B9'}></TextInput>
      </View>

      <View style={styles.separator} />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} selectionColor={'#2980B9'}></TextInput>
      </View>

      <View style={styles.separator} />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Celular</Text>
        <TextInput style={styles.input} selectionColor={'#2980B9'}></TextInput>
      </View>

      <View style={styles.separator} />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} selectionColor={'#2980B9'}></TextInput>
      </View>

      <View style={styles.separator} />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Tipo</Text>
        <TextInput style={styles.input} selectionColor={'#2980B9'}></TextInput>
      </View>

      <View style={styles.separator} />

      <LinearGradient
        style={{ borderRadius: 2, width: '90%' }}
        colors={['#373B44', '#2980B9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 5 }}
      >
        <TouchableHighlight style={styles.button}>
          <Text style={styles.text}>Continuar</Text>
        </TouchableHighlight>
      </LinearGradient>

      <View>
        <Text style={styles.navigate}>¿Tienes una cuenta? Iniciar Sesión</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#231E1E',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'GreatVibes',
    color: '#FFFFFF',
    marginBottom: 30,
    fontSize: 35
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%'
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Quicksand',
    color: '#FFFFFF'
  },
  input: {
    height: 40,
    fontSize: 15,
    borderWidth: 2,
    paddingVertical: 10,
    borderColor: '#2980B9',
    paddingHorizontal: 5,
    color: '#FFFFFF',
    borderRadius: 2
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    padding: 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Quicksand',
    fontSize: 18
  },
  navigate: {
    color: '#CCD1D1',
    fontFamily: 'Quicksand',
    textAlign: 'center',
    marginTop: 20
  },
  separator: {
    height: 40
  }
});

export default SignUpScreen;
