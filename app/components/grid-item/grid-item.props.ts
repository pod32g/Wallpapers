export interface GridItemProps {
    title: string,
    image: string,
    data?: any,
    downloads?: boolean
    home?: boolean
    onPress?: (data: any) => void
    onReDownload?: (data: any) => void
    onDelete?: (data: any) => void
}