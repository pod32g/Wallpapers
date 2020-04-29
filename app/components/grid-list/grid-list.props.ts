import { GridItemInterface } from "../grid-item/grid-item.types";

export interface GridListProps {
    data: GridItemInterface[]
    showFooter: boolean
    footerButtonTitle?: string
    onFooterPressed?: () => void
}