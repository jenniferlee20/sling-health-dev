import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Symptoms</Text>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:1, alignSelf: 'flex-start', justifyContent: "center"}}>
              <Text style={styles.symptom}>Blood Pressure</Text>
          </View>
          <View style={{flex:2}}>
              <Text style={styles.symptom}>Headache</Text>
          </View>
          <View style={{flex:3}}>
              <Text style={styles.symptom}>Nausea</Text>
          </View>
      </View>

      <Text style={styles.title}>Medications</Text>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:1, alignSelf: 'flex-start', justifyContent: "center"}}>
              <Text style={styles.symptom}>Zoloft</Text>
          </View>
          <View style={{flex:2}}>
              <Text style={styles.symptom}>Clariftin</Text>
          </View>
      </View>

      <Text style={styles.title}>Wellness</Text>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:1, alignSelf: 'flex-start', }}>
              <Text style={styles.symptom}>Sleep</Text>
          </View>
          <View style={{flex:2}}>
              <Text style={styles.symptom}>Weight</Text>
          </View>
          <View style={{flex:2}}>
              <Text style={styles.symptom}>Water Intake</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  symptom: {
    backgroundColor:'#f0f8ff',
    color: '#000000',
    height:40,
    width:70,
    padding:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    maxWidth:400,
    flexWrap:'wrap',
    marginTop:20
  },
});
