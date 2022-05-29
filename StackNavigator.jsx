import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import tw from 'twrnc'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
	const user = true

	return (
		<Stack.Navigator>
			{user ? (
				<>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Chat" component={ChatScreen} />
				</>
			) : (
				<Stack.Screen name="Login" component={LoginScreen} />
			)}
		</Stack.Navigator>
	)
}

export default StackNavigator
