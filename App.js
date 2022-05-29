import StackNavigator from './StackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import tw from 'twrnc'
import { AuthProvider } from './hooks/useAuth'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StackNavigator />
			</AuthProvider>
		</NavigationContainer>
	)
}
