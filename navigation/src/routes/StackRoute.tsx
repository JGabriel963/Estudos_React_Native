import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Details from "../pages/Details";

const Stack = createStackNavigator();

export default function StackRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} />
            {/* <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} /> */}
        </Stack.Navigator>
    )
}