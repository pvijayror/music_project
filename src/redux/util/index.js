
const baseAction = (action, payload = {}) => ({
    type: action,
    payload 
})

const fetchData = (actionType, method, query=null) => (
    dispatch,
    getState,
    services
    ) => {
    const { Api } = services;
    try{
        let response =  Api[method](actionType, query); 
        response.then(res => {
            if(res.status === 200) {
                const payload = res.data.results;
                dispatch(baseAction(actionType, payload))
            } else {
                dispatch(baseAction(actionType, [])) 
            }                     
        })    
    }catch(err) {
        console.log("Api Error:::");
    } 
}

export default fetchData