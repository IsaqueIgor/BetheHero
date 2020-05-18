import React from 'react';
import {FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation , useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import Logo from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    
    function navigateBack() {
        navigation.goBack()
    }

    const messageToSend = `Hello ${incident.name}, I would like to help "${incident.title}" by donating R$ ${
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL' }
        ).format(incident.value)
      }` 

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [ incident.email ],
            body: messageToSend
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${messageToSend}`)
    }

    return(
        <View style={styles.Detailcontainer}>
                <View style={styles.headerContainer}>
                <Image source={Logo} />
                
                <TouchableOpacity style={ styles.headerButton } onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#E82041' />
                    <Text style={ styles.headerButtonText }>Back</Text>
                </TouchableOpacity>
             </View>

                <View style={ styles.incident }>
                    <Text style={ styles.incidentOng }>
                        { incident.name } from { incident.city }/{ incident.uf }
                    </Text>

                    <Text style={ styles.incidentDescription }>
                        { incident.description }
                    </Text>

                    <Text style={ styles.incidentValue }>
                        {
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL' }
                            ).format(incident.value)
                        }
                    </Text>
                </View>

                <View style={ styles.contact }>
                    <Text style={ styles.heroTitle }>Save the Day!</Text>
                    <Text style={ styles.heroTitle }>Be the hero for them!</Text>

                    <Text style={ styles.heroDescription }> Get in touch:</Text>
                    <View style={ styles.contactButtons }>
                        <TouchableOpacity onPress={ sendWhatsapp } style={ styles.buttonWhatsapp }>
                            <FontAwesome name="whatsapp" size={ 30 } color="#E9FAEF"/>
                            <Text style={[ styles.buttonText, styles.buttonTextWhatsapp ]}>Whatsapp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ sendEmail } style={ styles.buttonEmail }>
                            <FontAwesome name="envelope-o" size={ 30 } color="#FBE8EC"/>
                            <Text style={[ styles.buttonText, styles.buttonTextEmail ]}>E-mail</Text>
                         </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}