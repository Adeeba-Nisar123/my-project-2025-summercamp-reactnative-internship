import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 10,
  },

  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },

  statusListing: {},

  statusListingHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerSubIconContainer: {
    flexDirection: "row",
    gap: 10,
  },

  headerSubText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  statusContainer: {
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    height: 150,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    marginRight: 10,
  }
});