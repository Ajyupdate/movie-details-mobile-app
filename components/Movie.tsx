import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { IMovieSearchProps } from '../screens/home'

type IMovieDataProps = {
    movieData : IMovieSearchProps
    navigation: any
}
export default function Movie({movieData, navigation}: IMovieDataProps){
    
    return(
        <TouchableOpacity onPress={()  => navigation.push('Details', {movieTitle: movieData.Title}, )}>
            <View style={styles.movie}>
                <View style={styles.title}>
                    <Text style={styles.centeredText}> {movieData.Title}</Text>
                </View>
           
            <Image
                    source={{
                    uri: `${movieData.Poster}`,
                    }}
                    style={{width: 300, height: 444}}
                />
                <Text style={styles.type}>Type: {movieData.Type}</Text>
                <View style={styles.button}>
                    <Button color='rgb(118, 29, 29)' title="See Details" onPress={() => console.log('Button pressed!')} />
                </View>
            </View>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    title:{
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // color:'white',
        // fontSize: 20,
        //  fontWeight: 'bold',
        //  paddingVertical: 4,
        //  textAlignVertical: 'center',

         flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
         
    },
    centeredText: {
        textAlign: 'center',
        fontSize: 20,
         fontWeight: 'bold',
         color: 'white',
         paddingVertical: 4,
      },
    movie:{
        flex: 1,
        textAlign: 'right',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: 10
        
    },
    type:{
        paddingVertical: 8,
        color: 'white'
    },
    button:{
        backgroundColor: 'rgb(118, 29, 29)',
        borderRadius: 5,
        padding: 2,
        color: 'rgb(118, 29, 29)',
    }
})




