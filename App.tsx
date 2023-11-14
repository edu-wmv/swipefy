import React from 'react';
import Homepage from './Homepage';
import { LoginScreen, SwipePage } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<AppStackParamList>();

const appStackNavigatorProps: Omit<StackNavigatorOptions<AppStackParamList>, 'children'> = {
	initialRouteName: 'Homepage',
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
	}
];

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator {...appStackNavigatorProps}>
				{appStackRoutes.map((stackRoute) => (
					<Stack.Screen key={stackRoute.name} {...stackRoute} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
