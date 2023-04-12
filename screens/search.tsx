import {View, Text} from 'react-native'
export default function SearchScreen({route}:any){

    const {number} = route.params
    console.log(number)
    return(
        <View>
            <Text>Search Screen</Text>
        </View>
    )
}