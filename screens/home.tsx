import {View, Text, Button, StyleSheet, FlatList} from 'react-native'
import {NativeStackNavigationProp } from '@react-navigation/native-stack'
import SearchInput from '../components/search'
import Movie from '../components/Movie'
import { useEffect, useState } from 'react'
import { globalStyles } from '../styles/global'

export interface IMovieSearchProps {
    Poster: string;
    Title:  string;
    Type:   string;
    Year:   string;
    imdbID: string;
    Plot?: string;
    Director?: string;
    Writer?: string;
    Released: string;
    BoxOffice: string;
    Genre: string;
    Awards: string;
    Actors: string

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
        <View style={globalStyles.container}>
            <SearchInput navigation={navigation}/>
            {/* <Text>Home Screen</Text>

            <Button 
            title='Go to search page'
            onPress={() =>navigation.navigate('Search', {number: 34}) }
            /> */}
            <FlatList
            
            data={movieData}
            
            renderItem={({item}) => (
                <Movie movieData = {item}  navigation = {navigation}/>
                
            )}
            />
                
                
            
        </View>
    )

    
}
