import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function Listing() {
  const birds = [
    { id: 1, title: "Macaw Parrot", img: require("../../assets/images/bird1.jpg") },
    { id: 2, title: "Green Feathers", img: require("../../assets/images/bird2.jpg") },
    { id: 3, title: "Sky King", img: require("../../assets/images/bird3.jpg") },
    { id: 4, title: "Tropical Glow", img: require("../../assets/images/bird4.jpg") },
    { id: 5, title: "Perch Pose", img: require("../../assets/images/bird5.jpg") },
    { id: 6, title: "Twins Together", img: require("../../assets/images/bird6.jpg") },
    { id: 7, title: "Jungle Beauty", img: require("../../assets/images/bird7.jpg") },
    { id: 8, title: "Royal Wings", img: require("../../assets/images/bird8.jpg") },
    { id: 9, title: "Feathered Flame", img: require("../../assets/images/bird9.jpg") },
    { id: 10, title: "Jungle Bird", img: require("../../assets/images/bird10.jpg") },
  ];

  const [liked, setLiked] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openModal = (img) => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🦜 Bird Paradise</Text>

      {/* Horizontal Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {birds.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => openModal(item.img)}
            style={({ pressed }) => [
              styles.card,
              pressed && { transform: [{ scale: 0.97 }] },
            ]}
          >
            <Image source={item.img} style={styles.image} />
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => toggleLike(item.id)}
            >
              <AntDesign
                name={liked.includes(item.id) ? "heart" : "hearto"}
                size={24}
                color={liked.includes(item.id) ? "red" : "#fff"}
              />
            </TouchableOpacity>
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>{item.title}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Grid View */}
      <Text style={styles.subheading}>🌟 Trending Now</Text>
      <View style={styles.grid}>
        {birds.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => openModal(item.img)}
            style={({ pressed }) => [
              styles.gridItem,
              pressed && { opacity: 0.9 },
            ]}
          >
            <Image source={item.img} style={styles.gridImage} />
            <TouchableOpacity
              style={styles.gridHeart}
              onPress={() => toggleLike(item.id)}
            >
              <AntDesign
                name={liked.includes(item.id) ? "heart" : "hearto"}
                size={20}
                color={liked.includes(item.id) ? "red" : "#fff"}
              />
            </TouchableOpacity>
          </Pressable>
        ))}
      </View>

      {/* Modal Fullscreen View */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <Image source={selectedImage} style={styles.fullImage} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#0f0f0f",
    flex: 1,
  },
  heading: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subheading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  card: {
    width: width * 0.7,
    height: 260,
    marginLeft: 20,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#222",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 8,
    alignItems: "center",
  },
  overlayText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 6,
    borderRadius: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  gridItem: {
    width: "48%",
    height: 160,
    marginBottom: 15,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#333",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gridHeart: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 5,
    borderRadius: 20,
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.95)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 20,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  closeText: {
    color: "#fff",
    fontSize: 30,
  },
});
