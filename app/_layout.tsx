import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff8c00",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingVertical: 10,
        },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
};

export default RootLayout;
