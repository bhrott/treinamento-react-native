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

export default class MyQuestsPage extends React.Component {
    static navigationOptions = {
        title: 'my quests',
        header: null,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
            <TabBarIcon
                source={require('./img/tab-icon.png')}
                tintColor={tintColor}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>MY QUESTS PAGE</Text>
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