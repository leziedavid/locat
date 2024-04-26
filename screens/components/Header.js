import { Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'; 
import { StyleSheet, Text, View } from 'react-native'
import { blue, orange,green,autre,red,noire } from '../../constants/color'
/**
 * Renders a header component with a title and optional back action.
 *
 * @param {object} backAction - The back action to be performed when the back button is pressed.
 * @param {string} title - The title to be displayed in the header.
 * @return {JSX.Element} The rendered header component.
 */
export const Header = ({backAction,titlecolors,firsttilte,backActionColor,TopColor,Toptitle,title, backgroundColor}) => {
    const navigation = useNavigation();
    
    return(
        <>
            {/* <Appbar.Header style={{backgroundColor: backgroundColor ? backgroundColor : 'white',marginBottom:20 }}  >
                {backAction && <Appbar.BackAction onPress={() => {navigation.goBack()}} />}
                <Appbar.Content  title={title} />
            </Appbar.Header> */}
            
            
            <Appbar.Header style={{ backgroundColor: backgroundColor ? backgroundColor : 'white', marginBottom: 20 }}>
            {/* Vue en haut */}
            <View style={{ flexDirection: 'row', paddingHorizontal: 1 }}>
            

                <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 10,marginBottom: 10 }}>
                    {backAction && <Appbar.BackAction   color={backActionColor} onPress={() => { navigation.goBack() }} />}
                    {firsttilte &&  <Text style={{ fontSize: 15,color:titlecolors, marginLeft: backAction ? 1: 0 }}>Paiment</Text>}
                </View>

                {/* Vue en bas */}
                <View style={{ alignItems: 'center', marginBottom: 1,justifyContent: 'center'}}>
                   {Toptitle && <Text style={{ fontWeight: 'bold', fontSize: 15,marginRight:10,color:TopColor }}>{ Toptitle}</Text>}
                    <Text style={{ fontSize: 15,marginRight:10,color:titlecolors, }}>{title}</Text>
                </View>
            </View>
        </Appbar.Header>

        </>
    )
}