import { reactive } from "vue";

export const store= reactive(
    
    {   

        // OPZIONI NAV HEADER
        
        NavOptions:[
            {
                name:'Home',
                id:1
            },
            {
                name:'About Us',
                id:11
            },
            {
                name:'Portfolio',
                id:12
            },
            {
                name:'Our Process',
                id:13
            },
            {
                name:'Pricing',
                id:14
            },
            {
                name:'Blog',
                id:15
            },
            {
                name:'Contact',
                id:16
            },
        ]
        
    }
);