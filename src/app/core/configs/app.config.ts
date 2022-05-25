export const AppConfig =
{
    auth:
    {
        token: ':nggt-auth',
        idleTimeoutInMinutes: 10
    },
    currencyFormat: 'INR',
    dateFormat: 'dd-MMM-yyyy',
    timeFormat: 'hh:mm a',
    enableConsoleLog: {
        error: true,
        message: false
    },
    apiCaching: {
        enable: true,
        age: 3000
    },
};