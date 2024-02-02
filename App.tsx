import React from 'react'
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
// import { FlexScreen } from './src/screens/FlexScreen';
import { TaskScreen } from './src/screens/TaskScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';

const App = () => {
  return (  
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <CounterScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionsScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TaskScreen/>
    </SafeAreaView>
  )
}

export default App;