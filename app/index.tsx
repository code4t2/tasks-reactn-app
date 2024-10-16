import {Button, StyleSheet, Text, TextInput, View} from "react-native";

function Index() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='input your goal here'/>
                <Button title='Add Goal'/>
            </View>
            <View>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#808080',
        width: '70%',
        marginRight: 8,
        padding: 8,
    }
})

export default Index;
