import { Appbar } from "react-native-paper";

/**
 * Renders a header component with a title and optional back action.
 *
 * @param {object} backAction - The back action to be performed when the back button is pressed.
 * @param {string} title - The title to be displayed in the header.
 * @return {JSX.Element} The rendered header component.
 */
export const Header = ({backAction, title}) => {
    return(
        <>
            <Appbar.Header>
                {backAction && <Appbar.BackAction onPress={() => {}} />}
                <Appbar.Content title={title} />
            </Appbar.Header>
        </>
    )
}