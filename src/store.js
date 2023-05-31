import { reactive } from "vue";

export const store= reactive(
    
    {   

        

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
        
        // CAROUSEL OUR PROCESS
        Ourprocess:[
            
            {
                image: '../src/assets/img/process1.png',
                title:'Pre-production',
                text:'Well take your idea and create a technical script which consist of action notes and nimation descriptions',
                id: 1
            },
            {
                image: '../src/assets/img/process2.png',
                title:'Scripting',
                text:'Well take your idea and create a technical script which consist of action notes and nimation descriptions',
                id: 3
            },
        ],
        Ourprocess1:[
            
            {
                image: '../src/assets/img/process2.png',
                title:'Scripting',
                text:'Well take your idea and create a technical script which consist of action notes and nimation descriptions',
                id: 2
            },
            {
                image: '../src/assets/img/process1.png',
                title:'Pre-production',
                text:'Well take your idea and create a technical script which consist of action notes and nimation descriptions',
                id: 4
            },
        ],
        
        // TEAMS WITH MEMBERS
        teams:[
            
            {
                id:1,
                TeamMembers:[
                    {
                        image:'../src/assets/img/team1.png',
                        name:'Robert Coleman',
                        job: 'Owner & creative Director'
                    },
                    {
                        image:'../src/assets/img/team2.png',
                        name:'Don Woods',
                        job: 'Administrator'
                    },
                    {
                        image:'../src/assets/img/team4.png',
                        name:'Tomas Nash',
                        job: '2d animator & Compositor'
                    },
                ],
            },
            
            {
                id:2,
                TeamMembers1:[
                    {
                        image:'../src/assets/img/team4.png',
                        name:'Tomas Nash',
                        job: '2d animator & Compositor'
                    },
                    {
                        image:'../src/assets/img/team1.png',
                        name:'Robert Coleman',
                        job: 'Owner & creative Director'
                    },
                    {
                        image:'../src/assets/img/team2.png',
                        name:'Don Woods',
                        job: 'Administrator'
                    },
                ],
            },
            
            {
                id:3,
                TeamMembers2:[
                    {
                        image:'../src/assets/img/team2.png',
                        name:'Don Woods',
                        job: 'Administrator'
                    },
                    {
                        image:'../src/assets/img/team4.png',
                        name:'Tomas Nash',
                        job: '2d animator & Compositor'
                    },
                    {
                        image:'../src/assets/img/team1.png',
                        name:'Robert Coleman',
                        job: 'Owner & creative Director'
                    },
                ]
            }
            
        ]
        

    }
);