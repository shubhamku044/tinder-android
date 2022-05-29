import { useNavigation } from '@react-navigation/core'
import { View, Text, Pressable } from 'react-native'
import tw from 'twrnc'

const ChatScreen = () => {
	const navigation = useNavigation()

	return (
		<View style={tw`flex items-center mt-12`}>
			<Text>This is our Chat Screen!!!</Text>

			<Pressable style={tw`mt-2`} onPress={() => navigation.navigate('Home')}>
				<Text style={tw`px-4 py-2 bg-blue-400 text-white`}>Home Screen</Text>
			</Pressable>
		</View>
	)
}

export default ChatScreen
