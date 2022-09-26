// This file is used for Creating a function that handles Create.Read.Update.Delete operation
/*
API Request async function

Try to await fetch data
    Check if response is !ok
        If not throw error
        
Catch err and set error message to variable

Finally return error message variable data


*/
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw Error('Please Reload the App!')

    } catch (err) {
        errMsg = err.message
    } finally {
        return errMsg
    }
}

export default apiRequest