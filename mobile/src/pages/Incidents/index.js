import React, {useState , useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import Logo from '../../assets/logo.png';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default function Incidents() {
    const [ incidents, setIncidents ] = useState([]);
    const [ totalIncidents, setTotalIncidents ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)

    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents(){
        if (loading) {
            return
        }

        if (totalIncidents > 0 && incidents.length === totalIncidents) {
            return
        }
      
        setLoading(true)
      
        const response = await api.get('/incidents', {
            params: {
              page: currentPage
            }
        })

        setIncidents([ ...incidents, ...response.data ])
        setTotalIncidents(response.headers['X-Total-Count'])

        setCurrentPage(currentPage + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.incidentContainer}>
            <View style={styles.headerContainer}>
                <Image source={Logo} />
                <Text style={styles.headerText}>
                    <Text style={styles.headerTextBold}>{totalIncidents} Incidents</Text> Total
                </Text>
            </View>

            <Text style={styles.mainTitle}>Welcome!</Text>
            <Text style={styles.mainDescription}>Choose any Incidents and Save the day!</Text>

            <FlatList style={styles.incidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={ loadIncidents }
                onEndReachedThreshold={ 0.2 }
                renderItem={() =>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProp}> 
                        { incident.name } from { incident.city }/{ incident.uf }
                        </Text>

                        <Text style={ styles.incidentValue}>{ incident.description }</Text>

                        <Text style={styles.incidentProp}>Description:</Text>                    
                        <Text style={styles.incidentDescription}>Donate and help us!</Text>

                        <Text style={styles.incidentProp}>Value</Text>     
                        <Text style={ styles.incidentValue}>
                        {
                            Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(incident.value)
                        }
                        </Text>
                        
                        <TouchableOpacity style={styles.incidentButton} onPress={navigateToDetail(incident)}>
                            <Text style={styles.incidentButtonText}>See more</Text>
                            <Feather name='arrow-right' size={16} color='#E02041' />
                        </TouchableOpacity>
                        
                    </View>
                )}
            />
        </View>
    );
}