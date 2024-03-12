import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RadioButton({option,selectedOption,onSelect}) {
    return(
        <TouchableOpacity onPress={()=>onSelect(option)} style={styles.container}>
            <Text style={styles.optionName}>{option}</Text>
            {selectedOption === option ? <View style={styles.selectedButton}></View> :<View style={styles.button}></View>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20,
        borderWidth:1,
        borderColor:"rgb(199, 199, 204)",
        borderRadius:24,
        padding:10,
    },
    optionName:{
        fontSize:14
    },
    button:{
        width:24,
        height:24,
        borderRadius:24,
        borderWidth:1,
        borderColor:"rgb(199, 199, 204)"
    },
    selectedButton:{
        width:24,
        height:24,
        borderRadius:24,
        backgroundColor:"#4966F7",
        borderWidth:5,
        borderColor:"rgb(199, 199, 204)"
    }
})