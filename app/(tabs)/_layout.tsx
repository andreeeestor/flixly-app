import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import TabIcon from "../components/TabIcon";

export default function _Layout() {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
      },
      tabBarStyle: {
        backgroundColor: "#0f0D23",
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        height: 52,
        position: "absolute",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#0f0d23"
      }
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Início" icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Pesquisar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Pesquisar" icon={icons.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Salvos",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Salvos" icon={icons.save} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Perfil" icon={icons.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
