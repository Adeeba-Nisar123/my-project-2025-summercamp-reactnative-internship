import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

export default function StatePractice() {
  // business logic
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <Text>{password}</Text>

      <TextInput
        style={styles.input}
        placeholder="enter email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="enter password"
        onChangeText={setPassword}
      />

      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "80%", // Make inputs not too wide
  }
});
