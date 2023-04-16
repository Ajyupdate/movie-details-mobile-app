import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const SearchInput = ({navigation}:any) => {
  const [text, onChangeText] = React.useState('');
  
  

  return (
    <SafeAreaView>
      <TextInput

        style={styles.input}
        maxLength={50}
        onChangeText={onChangeText}
        onSubmitEditing={() => navigation.push('Search', {searchedMovie: text})}
        value={text}
        placeholder='enter movie title here'
        placeholderTextColor="#999"
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
        color: '#fff',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginHorizontal:30,
        
        
    },
  });
  
  
  export default SearchInput;