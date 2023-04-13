import {View, Text, FlatList, StyleSheet} from 'react-native'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from 'react'
import Movie from '../components/Movie';
import SearchInput from '../components/search';


const queryClient = new QueryClient()
export default function SearchScreen({route, navigation}: any){
    const {searchedMovie} = route.params
    const [searchedMovieData, setSearchedMovieData] = useState()
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchedMovie}&apikey=4a3b711b`);
        const json = await response.json();
        setSearchedMovieData(json.Search)
      
      };
    
      fetchData();
    }, []);

    return(
      <View style={styles.container}>
            <SearchInput navigation={navigation}/>
            
            <FlatList
            
            data={searchedMovieData}
            
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