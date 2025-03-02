import { Image, View } from "react-native";
import { styles } from "./styles";

import logoIMG from "../../assets/Logo.png";
export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logoIMG} />
      </View>
    </View>
  );
}
