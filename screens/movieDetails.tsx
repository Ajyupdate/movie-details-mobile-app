import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import { useEffect, useState } from 'react'
import { IMovieSearchProps } from "./home";
import SearchInput from "../components/search";
import { globalStyles } from "../styles/global";


export default function Details({route,navigation}:any){
   const {movieTitle} = route.params
   const [clickedMovie, setClickedMovie] = useState<IMovieSearchProps>()

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=4a3b711b`);
          const json = await response.json();
          setClickedMovie(json)
          
          
        };
      
        fetchData();

      }, [movieTitle]);
      
    return(
        <ScrollView>
        <View style={styles.detailContent}>
            <SearchInput navigation={navigation}/>
            <Image
                source={{
                    uri: `${clickedMovie?.Poster}`
                }}
                style={{ height: 444}}
                onError={(error) => console.log(error)}
            />

            <View style={styles.detailsView}>
                <Text style={styles.header}>Plots</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Plot === 'N/A' ? 'Plot not availale': clickedMovie?.Plot}</Text>
            </View>

            <View style={styles.detailsView}> 
                <Text style={styles.header}>Director</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Director === 'N/A' ? 'Director not availale': clickedMovie?.Director}</Text>
            </View>

            <View style={styles.detailsView}>
                <Text style={styles.header}>Screenplay writers</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Writer === 'N/A' ? 'Writer not availale': clickedMovie?.Writer}</Text>
            </View>

            <View style={styles.detailsView}>
                <Text style={styles.header}>Released Date</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Released === 'N/A' ? 'Released date not availale': clickedMovie?.Released}</Text>
            </View>
            <View style={styles.detailsView}>
                <Text style={styles.header}>USA Box office</Text>
                <Text style={styles.detailsText}>{clickedMovie?.BoxOffice === 'N/A' ? 'BoxOffice not availale': clickedMovie?.BoxOffice}</Text>
            </View>

            <View style={styles.detailsView}>
                <Text style={styles.header}>Genre</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Genre === 'N/A' ? 'Genre not availale': clickedMovie?.Genre}</Text>
            </View>

            <View style={styles.detailsView}>
                <Text style={styles.header}>Awards</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Awards === 'N/A' ? 'Awards not availale': clickedMovie?.Awards}</Text>
            </View>

            <View style={styles.detailsView}>
                <Text style={styles.header}>Actors</Text>
                <Text style={styles.detailsText}>{clickedMovie?.Actors === 'N/A' ? 'Actors not availale': clickedMovie?.Actors}</Text>
            </View>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailContent:{
        color: 'white',
        backgroundColor: 'rgb(30, 41, 70)',
        flex: 1,   
        margin: 'auto',
    },
    searchedImage:{
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsView:{
        padding: 20,
        color: 'white'

    },
    header:{
        fontSize: 24,
         fontWeight: 'bold',
         color: 'white'
    },
    detailsText:{
        color: '#fff'
    }
})