import { Text, View } from 'react-native'
import { colors } from './src/colors'
import { fonts } from './src/theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
function App() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ color: colors.primary, fontSize: fonts.xl }}>hellow world</Text>
      <AntDesign name='stepforward' size={25}/>
    </View>
  )
}

export default App

