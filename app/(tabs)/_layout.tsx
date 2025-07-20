import { Tabs } from "expo-router";

export default function _Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false, tabBarIcon: ({ focused }) => (
            <></>
        ) }}

      />
      <Tabs.Screen
        name="search"
        options={{ title: "Pesquisar", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Salvos", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Perfil", headerShown: false }}
      />
    </Tabs>
  );
}
