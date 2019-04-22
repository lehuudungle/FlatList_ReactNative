
var horizontalStatus ={
    rainy: {
        ios: 'ios-rainy',
        android: 'md-rainy'
    },
    cloud:{
        ios: 'ios-cloudy',
        android: 'md-rainy'
    },
    thunderstorm: {
        ios: 'ios-thunderstorm',
        android: 'md-thunderstorm'
    },
    sunny: {
        ios: 'ios-sunny',
        android: 'md-sunny'
    }
}

var horizontalFatListData = [
    {
        hour: '1 AM',
        status: horizontalStatus.cloud,
        degrees: 57,
    },
    {
        hour: '5 AM',
        status: horizontalStatus.thunderstorm,
        degrees: 7,
    },
    {
        hour: '11 AM',
        status: horizontalStatus.sunny,
        degrees: 112,
    },
    {
        hour: '2 AM',
        status: horizontalStatus.rainy,
        degrees: 57,
    },

];

export {horizontalStatus};
export {horizontalFatListData};