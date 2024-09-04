// App.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Testimonio from './Testimonio.js'; // Asegúrate de que la ruta sea correcta


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={require('./imagenes/FreeCodeCamp_logo.png')} // Reemplaza con la ruta correcta de tu imagen
        />
      </View>


      <Text style={styles.title}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
      </Text>


      
      <ScrollView style={styles.scrollContainer}>
        <Testimonio
          nombre="Shawn Wang"
          ubicacion="Singapur"
          posicion="Ingeniero de Software"
          empresa="Amazon"
          cita="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
          imagen={require('./imagenes/imagenRandom1.png')}
        />


        <Testimonio
          nombre="Sarah Chima"
          ubicacion="Nigeria"
          posicion="Ingeniera de Software"
          empresa="ChatDesk"
          cita="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro."
          imagen={require('./imagenes/imagenRandom2.png')}
        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
  },
  headerContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: "#03031B",
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});




