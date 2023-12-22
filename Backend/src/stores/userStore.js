import { defineStore } from 'pinia' 


export const useUserStore = defineStore('user',{
    state : () => ({
            name :'',
            token: null ,
            isLoggedIn : false
        } ),
        actions :{
            login () {
                this.name = 'kacem'
                this.isLoggedIn = true
                this.token = "123"
                
            }
        }
        
    
})