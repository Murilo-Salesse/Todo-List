import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#1A1A1A",
  },

  wrapper_input: {
    flexDirection: "row",
    gap: 8,
    marginTop: -30,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 54,
    paddingHorizontal: 20,
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#262626",
    width: 327,
    borderRadius: 5,
  },

  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#4EA8DE",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  separate_content: {
    flexDirection: "column",
    gap: 20,
  },

  wrapper_content: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  header_content: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  title_concluded: {
    fontWeight: "bold",
    fontFamily: "Inter_400Regular",
    color: "#8284FA",
    fontSize: 20,
  },

  title_created: {
    fontWeight: "bold",
    fontFamily: "Inter_400Regular !important",
    color: "#4EA8DE",
    fontSize: 20,
  },

  items: {
    marginTop: 30,
    paddingHorizontal: 15,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  title_item: {
    fontWeight: "bold",
    color: "#808080",
    fontSize: 16,
  },

  subtitle_item: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
  },
});
