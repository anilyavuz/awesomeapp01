import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light'
    return(
    <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.whiteText} >
            Hello
        </Text>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    darkText:{
        color:'#000000'
    },
    whiteText:{
        color:'#FFFFFF'
    }
})


export default AppPro