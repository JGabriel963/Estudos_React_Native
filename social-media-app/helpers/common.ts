import { Dimensions } from "react-native";

interface PercentageFunction {
    (percentage: number): number;
}

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const hp: PercentageFunction = percentage => {
    return (percentage * deviceHeight) / 100;
}


export const wp: PercentageFunction = percentage => {
    return (percentage * deviceWidth) / 100;
}