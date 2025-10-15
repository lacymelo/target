import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.regular
  },

  value: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.regular
  }
})