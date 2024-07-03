// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, ScrollView, Text, Button, View } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={stylesHomeScreen.container}>
      <Text style={stylesHomeScreen.title}>Welcome to Tales for Kids</Text>
      <View style={stylesHomeScreen.buttonContainer}>
        <Button title="Read Tale 1" onPress={() => navigation.navigate('Tale1')} />
        <Button title="Read Tale 2" onPress={() => navigation.navigate('Tale2')} />
        <Button title="Read Tale 3" onPress={() => navigation.navigate('Tale3')} />
      </View>
    </SafeAreaView>
  );
}

const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

function Tale1() {
  return (
    <SafeAreaView style={stylesTale.container}>
      <ScrollView>
        <Text style={stylesTale.title}>The Little Red Riding Hood</Text>
        <Text style={stylesTale.text}>
          Once upon a time, there was a little girl who lived in a village near the forest. Whenever she went out...
        </Text>
        {/* Add more tale content here */}
      </ScrollView>
    </SafeAreaView>
  );
}

function Tale2() {
  return (
    <SafeAreaView style={stylesTale.container}>
      <ScrollView>
        <Text style={stylesTale.title}>The Three Little Pigs</Text>
        <Text style={stylesTale.text}>
          Once upon a time, there were three little pigs who decided to build their own houses. The first little pig...
        </Text>
        {/* Add more tale content here */}
      </ScrollView>
    </SafeAreaView>
  );
}

function Tale3() {
  return (
    <SafeAreaView style={stylesTale.container}>
      <ScrollView>
        <Text style={stylesTale.title}>The Ugly Duckling</Text>
        <Text style={stylesTale.text}>
          Once upon a time, there was a beautiful duck who sat on several eggs. After many days, the eggs hatched and...
        </Text>
        {/* Add more tale content here */}
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesTale = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
        <Stack.Screen name="Tale1" component={Tale1} options={{ title: 'Tale 1' }} />
        <Stack.Screen name="Tale2" component={Tale2} options={{ title: 'Tale 2' }} />
        <Stack.Screen name="Tale3" component={Tale3} options={{ title: 'Tale 3' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}