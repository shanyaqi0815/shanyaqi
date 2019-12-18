import https from '../https' 
import { Indicator } from 'mint-ui';
export default {
    AJAX:function(url,params,name,This){

        return https.fetchPost(url,params)
        .then((data) => {
            This.$store.commit("submit",{[name]:{data}});
            // console.log(data) 
            // console.log(This.$store.state)
            Indicator.close();
            // this.base.token = data.data.token　　　　
            // console.log("this.base.tokenthis.base.token",this.base.token)
            // this.indexPost2(this.rres)
            
        })
        .catch(err=>{
                 console.log(err)
                Indicator.close();
        })
    }
}