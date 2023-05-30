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
        ],

        // STATISTICHE SUL TEAM
        QuickFacts:[
            {
                num: 700,
                data: 'Projects done'
            },
            {
                num: 250,
                data: 'Happy clients'
            },
            {
                num: 25,
                data: 'Team Members'
            },
            {
                num: 12,
                data: 'Years on the market'
            },
        ],

        // ESEMPI DI LAVORI FATTI DAL TEAM
        WorksCards:[
            {
                name:'first-work',
                url:'../src/assets/img/work1.png'
            },
            {
                name:'second-work',
                url:'../src/assets/img/work2.png'
            },
            {
                name:'third-work',
                url:'../src/assets/img/work3.png'
            },
            {
                name:'fourth-work',
                url:'../src/assets/img/work4.png'
            }

        ],

        // CLIENTI DEL TEAM
        Clients:[
            
            {
                name:'supreme',
                url:'../src/assets/img/sponsor1.png',
                approval: false
            },
            {
                name:'phoenix',
                url:'../src/assets/img/sponsor2.png',
                approval: true
            },
            {
                name:'cooperation',
                url:'../src/assets/img/sponsor3.png',
                approval: true
            },
            {
                name:'business',
                url:'../src/assets/img/sponsor4.png',
                approval: true
            },
            {
                name:'pillar',
                url:'../src/assets/img/sponsor5.png',
                approval: true
            },
            {
                name:'digital-eagle',
                url:'../src/assets/img/sponsor6.png',
                approval: true
            },
        ],
        
        // OPZIONI DEL FOOTER
        FooterOption:[
            
            {
                name:'About us',
                id:2
            },
            {
                name:'portfolio',
                id:21
            },
            {
                name:'Pricing',
                id:22
            },
            {
                name:'Career',
                id:23
            },
            {
                name:'Contact',
                id:24
            },
        ],

        // CAROUSEL OUR PROCESS
        Ourprocess:[
            
            {
                image: '../src/assets/img/process1.png',
                title:'Pre-production',
                text:'Well take your idea and create a technical script which consist of action notes and nimation descriptions',
                id: 4
            },
            {
                image: '../src/assets/img/process2.png',
                title:'Scripting',
                text:'Well take your idea and create a technical script which consist of action notes and nimation descriptions',
                id: 1
            },
        ]

    }
);