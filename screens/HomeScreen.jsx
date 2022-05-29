import { View, Text, Pressable } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
	const navigation = useNavigation()

	return (
		<View style={tw`flex items-center mt-12`}>
			<Text>I am the Home Screen!!!</Text>

			<Pressable style={tw`mt-2`} onPress={() => navigation.navigate('Chat')}>
				<Text style={tw`px-4 py-2 bg-blue-400 text-white`}>Chat Screen</Text>
			</Pressable>
		</View>
	)
}

export default HomeScreen
