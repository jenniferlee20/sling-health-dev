import { StyleSheet, Button } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import React, { useEffect, useState } from 'react';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

// const Dashboard = ({ navigation }) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch('http://<your-backend-url>/api/dashboard')
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <View>
//             {data && <Text>{JSON.stringify(data)}</Text>}
//             {/* Render your dashboard components based on data */}
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// };

// // Include this in your NavigationContainer
// export default Dashboard;



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
});
