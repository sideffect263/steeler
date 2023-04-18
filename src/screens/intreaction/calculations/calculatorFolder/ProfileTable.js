import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Modal,
} 
from "react-native";



const ProfileTable = ({data}) => {
    
  return (
    <View style={styles.main}>
      <View style={styles.header}>
      <View style={styles.prInfo}>
            <Text style={styles.prNameText}>מידעון</Text>
            
            </View>
       
            <View style={styles.prSize}>
            <Text style={styles.prNameText}>גודל הפרופיל</Text>
            </View>
            <View style={styles.prName}>
            <Text style={styles.prNameText}>סוג הפרופיל</Text>
            </View>
            </View>

        <View style={styles.grid}>
            <View style={styles.prInfoP}>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
            <Pressable>
                    <Text style={styles.prNameText}>מידע</Text>
                </Pressable>
          
            </View>
            <View style={styles.prSizeP}>
            <Pressable >
                    <Text style={styles.prNameText}>20X20</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>25X25</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>גודל פרופיל</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>גודל פרופיל</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>גודל פרופיל</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>גודל פרופיל</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>גודל פרופיל</Text>
                </Pressable>       
            <Pressable>
                    <Text style={styles.prNameText}>גודל פרופיל</Text>
                </Pressable>       
                     </View>
            <View style={styles.prNameP}>
                <Pressable>
                    <Text style={styles.prNameText}>RHS s</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>RHS r</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>HEA</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>HEB</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>HEM</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>UB-IPL</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>IPN</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.prNameText}>IPE</Text>
                </Pressable>
            </View>
             
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
    },
    header: {
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
        borderColor: 'blue',
        borderWidth: 1,
        flexDirection: 'row',
    },
    prName: {
        flex: 1,
        borderColor: 'green',
        borderWidth: 1,
    },
    prSize: {
        flex: 1,
        borderColor: 'green',
        borderWidth: 1,
    },
    prInfo: {
        flex: 1,
        borderColor: 'green',
        borderWidth: 1,
    },
    grid: {
        flex: 8,
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
    },
    prInfoP: {
        flex: 1,
        borderWidth:1,
    },
    prSizeP: {
        flex: 1,
        borderWidth:1,

    },
    prNameP: {
        borderWidth:1,
        flex: 1,
    },
    prNameText: {
        fontSize: 20,
        textAlign: 'center',
        borderWidth:1,
    },

    
    
})
export default ProfileTable