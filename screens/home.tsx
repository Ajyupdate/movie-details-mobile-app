import {View, Text, Button, StyleSheet, FlatList} from 'react-native'
import {NativeStackNavigationProp } from '@react-navigation/native-stack'
import SearchInput from '../components/search'
import Movie from '../components/Movie'
import { useEffect, useState } from 'react'

export interface IMovieSearchProps {
    Poster: string;
    Title:  string;
    Type:   string;
    Year:   string;
    imdbID: string;
}

export default function HomeScreen({navigation}:any){
    const [movieData, setMovieData] = useState()
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=batman&apikey=4a3b711b`);
        const json = await response.json();
        setMovieData(json.Search)
       
      };
  
      fetchData();
    }, []);
    
    
    return(
        <View style={styles.container}>
            <SearchInput/>
            {/* <Text>Home Screen</Text>

            <Button 
            title='Go to search page'
            onPress={() =>navigation.navigate('Search', {number: 34}) }
            /> */}
            <FlatList
            
            data={movieData}
            
            renderItem={({item}) => (
                <Movie movieData = {item}/>
                
            )}
            />
                
                
            
        </View>
    )

    
}
const styles = StyleSheet.create({
        container:{
            backgroundColor: 'rgb(30, 41, 70);'
        }
})