import { useEffect, useState} from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { Animated } from "react-native-reanimated";

export const CachedImage = (props) => { 
    const [CachedSource, setCachedSource] = useState(null);
    const {uri } = props;

    useEffect (() => {
        const getCachedImage = async () => {
            try {
                const cachedImage = null;
  //              const cachedImage = await AsyncStorage.getItem(uri);
                if (cachedImage) {
                    setCachedSource({uri: cachedImage});
                } else {
                    const response = await fetch(uri);
                    const imageBlob = await response.blob();
                    const base64Data = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(imageBlob);
                        reader.onloadend = () => {
                            resolve(reader.result);
                        };
                    });
                    // await AsyncStorage.setItem(uri, base64Data);
                    setCachedSource({uri: base64Data});
                }
            } catch (error) {
                console.error("Error caching image:", error);
                setCachedSource({uri});
            }
        };
        getCachedImage();
    }, []);

    return <Animated.Image source={CachedSource} {...props} />
};
