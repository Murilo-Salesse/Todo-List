import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#333333",
  },

  wrapper: {
    width: "100%",
    alignItems: "center",
    gap: 1,
    flexDirection: "row",
  },

  text: {
    width: 285,
    textAlign: "left",
    color: "#fff",
    fontSize: 16,
  },
  finished: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  checkboxActive: {
    backgroundColor: "#5E60CE",
  },

  checkmark: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
