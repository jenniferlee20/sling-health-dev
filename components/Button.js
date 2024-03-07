import { StyleSheet, View, Pressable, Text } from 'react-native';

// export default function Button({ label }) {
//   return (
//     <View style={styles.buttonContainer}>
//       <Pressable style={styles.symptom} onPress={() => alert('You pressed a button.')}>
//         <Text style={styles.buttonLabel}>{label}</Text>
//       </Pressable>
//     </View>
//   );
// }

export default function Button({ label }) {
    const handlePress = async () => {
      try {
        // Replace 'http://localhost:5000/print-message' with your Flask server's URL
        const response = await fetch('http://localhost:5000/print-message', {
          method: 'GET', // or 'POST'
        });
        const data = await response.text(); // or response.json() if your server sends JSON
        console.log(data); // Logs the response from the server
        alert('Message sent to server.');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message to server.');
      }
    };
  
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.symptom} onPress={handlePress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#f0f8ff',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
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
