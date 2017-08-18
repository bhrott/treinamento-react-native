import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import { 
    Text,
    TabBarIcon
} from 'boo-ui/components'

export default class SettingsPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SETTINGS PAGE</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})