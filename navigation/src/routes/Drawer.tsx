import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoute from "./StackRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Drawer = createDrawerNavigator()

export default function DrawerRoute() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="HomeStack"
                component={StackRoute}
                options={{
                    title: "Início"
                }}
            />

            <Drawer.Screen
                name="About"
                component={About}
                options={{
                    title: "Sobre"
                }}
            />

            <Drawer.Screen
                name="Contact"
                component={Contact}
                options={{
                    title: "Contato"
                }}
            />
        </Drawer.Navigator>
    )
}