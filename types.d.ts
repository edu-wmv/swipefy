import type {
	DefaultNavigatorOptions,
	ParamListBase,
	StackNavigationState,
	RouteConfig
} from '@react-navigation/core';

import {
	NativeStackNavigationEventMap,
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';

// REACT NAVIGATION TYPES
declare global {
  type AppStackParamList = {
    Homepage: undefined;
    Login: undefined;
    Swipe: undefined;
  };

  type HomepageScreenProps = NativeStackScreenProps<AppStackParamList,'Homepage'>
  type LoginScreenProps = NativeStackScreenProps<AppStackParamList,'Login'>
  type SwipeScreenProps = NativeStackScreenProps<AppStackParamList,'Swipe'>

  type StackRoutesType<ParamList extends ParamListBase> = Array<
    RouteConfig<
      ParamList,
      keyof ParamList,
      StackNavigationState<ParamList>,
      NativeStackNavigationOptions,
      NativeStackNavigationEventMap
    > & RouteConfigComponent<ParamList, keyof ParamList>
  >;

  type AppStackRoutesType = StackRoutesType<AppStackParamList>;

  type StackNavigatorOptions<ParamList extends ParamListBase> =
    DefaultNavigatorOptions<
      ParamList,
      StackNavigationState<ParamList>,
      NativeStackNavigationOptions,
      NativeStackNavigationEventMap
    >;
}

// SPOTIFY FETCH TYPES
declare global {
  type currentUserData = {
    id: string;
    display_name: string;
    email: string;
    images: Array<{
      height: number;
      url: string;
      width: number;
    }>;
  }
  
  type currentUserPlaylists = {
    href: string;
    items: Array<{ 
      collaborative: boolean;
      description: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        height: number;
        url: string;
        width: number;
      }>;
      name: string;
      owner: {
        display_name: string;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      public: boolean;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }>
  }
}

export {};
