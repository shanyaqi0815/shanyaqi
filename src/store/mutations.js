var mutations = {
    submit(state, name){
        for(var i in name){
            state[i]=name[i]
        }
    }
}
export default mutations