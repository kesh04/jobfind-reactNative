import {useState} from 'react'
import { View, Text ,TextInput,TouchableOpacity ,Image, FlatList, } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { SIZES, icons } from '../../../constants'
  const  jobtypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({searchTerm, setSearchTerm, handleClick }) => {

const router = useRouter();
const [activeJObType ,setActiveJobType ] = useState("full-time")
  return (
    <View>
      <View style={styles.container}>
           <Text style={styles.userName} >Hello  Keshana </Text>
             <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
               <TextInput 
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={(text)=>setSearchTerm(text)}
                placeholder='what are you looking for'
               
               />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
           source={icons.search}
           resizeMode='contain'
           style={styles.searchBtnImage}
          
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>

         <FlatList  
         data={jobtypes}
         renderItem={({item})=>(
            <TouchableOpacity
             style={styles.tab(activeJObType, item)}
             onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`)
             }}
            >
              <Text style={styles.tabText(activeJObType, item)}>{item}</Text>
            </TouchableOpacity>
         )}

         keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
         />
      </View>
    </View>
  )
}

export default Welcome