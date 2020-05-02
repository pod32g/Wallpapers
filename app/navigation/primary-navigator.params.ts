export type PrimaryNavigatorParams = {
    Home: {
        safe: boolean
    };
    Details: {
        url: string,
        width: number,
        height: number
    }
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};