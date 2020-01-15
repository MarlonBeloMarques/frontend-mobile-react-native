import React from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
    return (
        <KeyboardAvoidingView enabled={Platform.IOS === 'ios'} behavior="padding" style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Seu e-mail" 
                    placeholderTextColor="#999" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}>
                </TextInput>
                
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Tecnologias de interesse" 
                    placeholderTextColor="#999" 
                    autoCapitalize="words"
                    autoCorrect={false}>
                </TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch', /**Ocupa a largura inteira possivel */
        paddingHorizontal: 30,
        marginTop30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: ' center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});