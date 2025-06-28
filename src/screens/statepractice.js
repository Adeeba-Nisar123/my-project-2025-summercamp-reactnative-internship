import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

export default function StatePractice() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Password: {password}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#bbb"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#bbb"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" color="#FF6B6B" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0F2027", // Deep gradient-style background
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#444",
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    width: "85%",
    backgroundColor: "#1C1C2A", // Stylish dark input background
    color: "#fff", // White text inside inputs
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    marginTop: 20,
    width: "85%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
