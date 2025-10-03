import { Stack, Tabs } from "expo-router";
import { Loading } from "@/components/Loading";
import { colors } from "@/theme/colors";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from "@expo-google-fonts/inter"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    // <Tabs
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor: colors.green[500]
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />
    //     }}
    //   />
    // </Tabs>
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white
        }
      }}
    />
  )

}