import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, Switch, Image } from 'react-native';

export default function HomeScreen() {
  const [isEnabled,  setIsEnabled] = useState(true);
  const [text, setText] = useState("Press the switch!");

  const toggleSwitch = () => {
    if(isEnabled){
      setText("Goodbye Techcrush");
    } else {
      setText("Welcome Techcrush");
    }

    setIsEnabled(previousState => !previousState);
  }
  return (
    <ScrollView>
    <View style={StyleSheet.container}>
      <Text style={{fontWeight: 'bold', margin: 20}}>{text}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
    <View>
      <Text>Welcome To TechCrush</Text>
      <Image
      source={require("@/assets/images/flower.png")}
      style={{width: 100, height: 100, alignSelf: "center"}}
      />
    </View>

    <button>Click Me</button>
    </ScrollView>
  );
}
