import {View, FlatList, Text} from 'react-native'

import { useEffect, useState } from 'react'
import Movie from '../components/Movie';
import SearchInput from '../components/search';
import { globalStyles } from '../styles/global';



export default function SearchScreen({route, navigation}: any){
    const {searchedMovie} = route.params
    const capitalizedTitle = searchedMovie.split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    const [searchedMovieData, setSearchedMovieData] = useState()
    const [title, setTitle] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchedMovie}&apikey=4a3b711b`);
        const json = await response.json();
        setSearchedMovieData(json.Search)
        setTitle(json.Search.Title)
        if(searchedMovie){
          navigation.setOptions({ title: `${capitalizedTitle}` })
        }
         
      };

    
      fetchData();
    }, [searchedMovie]);

   

    
    return(
      <View style={globalStyles.container}>
            <SearchInput navigation={navigation}/>
            
            <FlatList
            
            data={searchedMovieData}
            
            renderItem={({item}) => (
                <Movie movieData = {item} navigation={navigation}/>
                
            )}
            />
                
                
            
        </View>
    )
}

// export function HeaderTitle(title){
//   return(
//     <View>
//       <Text>hi</Text>
//     </View>
//   )
// }