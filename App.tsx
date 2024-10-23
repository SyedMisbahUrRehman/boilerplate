import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 items-center justify-center bg-blue-900">
        <Text className="text-white text-2xl font-bold">
          Hello NativeWind!
        </Text>
      </View>
    </>
  );
}