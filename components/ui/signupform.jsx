// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const SignupForm = () => {
//   const navigation = useNavigation();
//   const [showAdditionalFields, setShowAdditionalFields] =
//     useState(false);
//   const [fields, setFields] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     dateOfBirth: '',
//     placeOfBirth: '',
//     sex: '',
//     phoneNumber: '',
//   });

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const value = await AsyncStorage.getItem('DATA_ID');
//         if (value) {
//           const parsedData = JSON.parse(value);
//           setFields((prev) => ({
//             ...prev,
//             firstName: parsedData.fName || '',
//             middleName: parsedData.mName || '',
//             lastName: parsedData.lName || '',
//             dateOfBirth: parsedData.DOB || '',
//             placeOfBirth: parsedData.POB || '',
//             sex: parsedData.sex || '',
//           }));
//         }
//       } catch (e) {
//         console.error('Failed to fetch data:', e);
//       }
//     };
//     getData();
//   }, []);

//   const handleInputChange = (field, value) => {
//     setFields((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     Alert.alert(
//       'Signup Successful',
//       `Submitted Data: ${JSON.stringify(fields)}`
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.cardWrapper}>
//         <View style={styles.card}>
//           <Text style={styles.title}>Create your account</Text>
//           <Text style={styles.description}>
//             Sign up with your details
//           </Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             keyboardType="email-address"
//             onChangeText={(text) => handleInputChange('email', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             onChangeText={(text) =>
//               handleInputChange('password', text)
//             }
//           />
//           <TouchableOpacity
//             style={{
//               ...styles.buttonOutline,
//               backgroundColor: '#e6e6e6',
//             }}
//             onPress={() =>
//               setShowAdditionalFields(!showAdditionalFields)
//             }
//           >
//             <Text>
//               {showAdditionalFields
//                 ? 'Hide Additional Fields'
//                 : 'Show Additional Fields'}
//             </Text>
//           </TouchableOpacity>
//           {showAdditionalFields && (
//             <>
//               {[
//                 'firstName',
//                 'middleName',
//                 'lastName',
//                 'dateOfBirth',
//                 'placeOfBirth',
//                 'sex',
//                 'phoneNumber',
//               ].map((field) => (
//                 <TextInput
//                   key={field}
//                   style={styles.input}
//                   placeholder={field
//                     .replace(/([A-Z])/g, ' $1')
//                     .trim()}
//                   onChangeText={(text) =>
//                     handleInputChange(field, text)
//                   }
//                 />
//               ))}
//             </>
//           )}
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleSubmit}
//           >
//             <Text style={styles.buttonText}>Signup</Text>
//           </TouchableOpacity>
//           <Text style={styles.orText}>Or continue with</Text>
//           <TouchableOpacity
//             style={styles.buttonOutline}
//             onPress={() => navigation.navigate('qr-scanner')}
//           >
//             <Image
//               style={styles.icon}
//               source={{
//                 uri: 'https://img.icons8.com/ios-filled/50/identification-documents.png',
//               }}
//             />
//             <Text>Signup with ID</Text>
//           </TouchableOpacity>
//           <Text style={{ textAlign: 'center' }}>
//             Already have an account?{' '}
//             <Text
//               style={styles.link}
//               onPress={() => navigation.navigate('login')}
//             >
//               Login
//             </Text>
//           </Text>
//         </View>
//       </View>
//       <Text style={styles.footer}>
//         SwiftDocs © 2025. All Rights Reserved.® | Empowering Your
//         Documentation Needs | Built for Efficiency and Simplicity.
//       </Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   cardWrapper: { width: '100%', maxWidth: 400, alignItems: 'center' },
//   card: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
//   description: {
//     fontSize: 14,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#18181b',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   buttonOutline: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   icon: { width: 20, height: 20, marginRight: 5 },
//   orText: {
//     textAlign: 'center',
//     marginVertical: 10,
//     fontSize: 12,
//     color: '#666',
//   },
//   link: { color: '#18181b', textDecorationLine: 'underline' },
//   footer: {
//     marginTop: 20,
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

// export default SignupForm;
