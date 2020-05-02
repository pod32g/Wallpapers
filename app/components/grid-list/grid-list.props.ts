import { Sankaku } from "../../services/api";
import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PrimaryNavigatorParams } from "app/navigation";

export interface GridListProps {
    data: Sankaku[]
    showFooter: boolean
    footerLoading?: boolean
    footerButtonTitle?: string
    onFooterPressed?: () => void
    navigation: StackNavigationProp<PrimaryNavigatorParams>
}