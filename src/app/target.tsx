import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Expo Router</Text>

      <Button
        title="voltar"
        onPress={() => router.back()}
      />
    </View>
  )
}