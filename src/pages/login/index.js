import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen() {
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Inputs */}
      <View style={styles.middleContainer}>
        <Text style={styles.subtitle}>Digite suas informações</Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={user_email}
            onChangeText={setUserEmail}
          />
          <Image
            source={require('../../assets/icons/UI/email.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={user_password}
            onChangeText={setUserPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require('../../assets/icons/UI/show.png')
                  : require('../../assets/icons/UI/hide.png')
              }
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Checkbox + Esqueceu senha */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <Icon
              name={rememberMe ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={18}
              color="#1B360F"
            />
            <Text style={styles.checkboxText}> Lembrar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão e Registro */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Logar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não possui login?{' '}
          <Text style={styles.registerLink}>Registre-se</Text>
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logoImage: {
    width: 160,
    height: 100,
  },
  middleContainer: {
    paddingHorizontal: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 25,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  iconImage: {
    width: 22,
    height: 22,
    marginLeft: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: '#555',
    fontSize: 12,
    marginLeft: 6,
  },
  forgotText: {
    color: '#1B360F',
    fontSize: 12,
  },
  bottomContainer: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#335D22',
    borderRadius: 6,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  registerLink: {
    color: '#1B360F',
    fontWeight: 'bold',
  },
});
