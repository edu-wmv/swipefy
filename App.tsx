import React from 'react';
import Homepage from './Homepage';
import { LoginScreen, SwipePage } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from './context/store';
import { getUserLoggedIn } from './utils/hooks';

const Stack = createNativeStackNavigator<AppStackParamList>();

const appStackNavigatorProps: Omit<StackNavigatorOptions<AppStackParamList>, 'children'> = {
	screenOptions: {
		headerShown: false
	}
};

const appStackRoutes: AppStackRoutesType = [
	{
		name: 'Homepage',
		component: Homepage,
	},
	{
		name: 'Login',
		component: LoginScreen,
		options: {
			presentation: 'modal',
			animation: 'slide_from_right'
		}
	},
	{
		name: 'Swipe',
		component: SwipePage
	},
];

export default function App() {
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const user = useAuthStore.getState().user;
	const setUser = useAuthStore.getState().setUser;

	React.useEffect(() => {
		async function asyncSubscribe() {
			console.log('fetching user');
			const isUserLoggedIn = await getUserLoggedIn();
			setUser(isUserLoggedIn);
			setIsLoading(false);
			console.log('user fetched');
		};

		asyncSubscribe();
	}, []);

	if (isLoading) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator {...appStackNavigatorProps} initialRouteName={user?.isUserLoggedIn === true ? 'Swipe' : 'Login'}>
				{appStackRoutes.map((stackRoute) => (
					<Stack.Screen key={stackRoute.name} {...stackRoute} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
