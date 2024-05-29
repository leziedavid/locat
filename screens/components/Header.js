import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Appbar } from "react-native-paper";
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
            
            
            <Appbar.Header style={{ backgroundColor: backgroundColor ? backgroundColor : 'white', marginBottom: 40, top:2 }}>
            {/* Vue en haut */}
            <View style={{ flexDirection: 'row', paddingHorizontal: 1 }}>
            

                <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 10,marginBottom: 10,}}>
                    {backAction && <Appbar.BackAction   color={backActionColor} onPress={() => { navigation.goBack() }} />}
                    {firsttilte &&  <Text style={{ fontSize: 15,color:titlecolors, marginLeft: backAction ? 1: 0 }}>Paiment</Text>}
                </View>

            
                {
                    Toptitle && <View style={{ alignItems: 'center',justifyContent: 'center',top:30 , marginBottom: 1,marginLeft:65}}>
                        <Text style={{marginLeft:-5,textAlign:"center", fontWeight: 'bold', fontSize: 15,marginRight:10,color:TopColor }}>{ Toptitle}</Text> 
                        <Text style={{marginLeft:-20,textAlign:"center",fontSize: 15,color:titlecolors,justifyContent: 'center',}}>{title}</Text>
                    </View>
                }

                {
                    ! Toptitle && <View style={{ alignItems: 'center',justifyContent: 'center',top:40 }}>
                        <Text style={{marginLeft:-1,textAlign:"center",fontSize: 15,color:titlecolors,}}>{title}</Text>
                    </View>
                }

            </View>
        </Appbar.Header>

        </>
    )
}