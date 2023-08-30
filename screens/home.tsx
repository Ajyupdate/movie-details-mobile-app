import {View, Text, Button, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
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
    isLoading: false

}

export default function HomeScreen({navigation}:any){
    const [movieData, setMovieData] = useState()
    const [isLoading, setIsLoading] = useState(true) 
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=batman&apikey=4a3b711b`);
        const json = await response.json();
        setMovieData(json.Search)
        setIsLoading(false)
      };
  
      fetchData();
    }, []);
    
    
    return(
        <View style={globalStyles.container}>
            <SearchInput navigation={navigation}/>
            {isLoading ? (
                <ActivityIndicator size='large' color='red'/>
            ): 
            <FlatList
            
            data={movieData}
            

            renderItem={({item}) => (
                <Movie movieData = {item}  navigation = {navigation}/>
                
            )}
            />
        }  
                
            
        </View>
    )

    
}
