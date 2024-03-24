export const menu =[
    {
        id:1,
        title:"main",
        listItems:[
            {
                id:1,
                title:"Homepage",
                url:"/",
                icon:"home.svg",
            },
            {
                id:2,
                title:"Profile",
                url:"/users/1",
                icon:"user.svg",
            },
        ]
    },
    {
        id:2,
        title:"lists",
        listItems:[
            {
                id:1,
                title:"Users",
                url:"/users",
                icon:"user.svg",
            },
            {
                id:2,
                title:"Products",
                url:"/users/1",
                icon:"product.svg",
            },
        ]
    },
    {
        id:3,
        title:"family",
        listItems:[
            {
                id:1,
                title:"Qian Jinsha",
                url:"/users",
                icon:"user.svg",
            },
            {
                id:2,
                title:"Qian Maofei",
                url:"/users/1",
                icon:"product.svg",
            },
            {
                id:2,
                title:"Li Jing",
                url:"/users/1",
                icon:"product.svg",
            },
        ]
    },
    {
        id:4,
        title:"analytics",
        listItems:[
            {
                id:1,
                title:"Charts",
                url:"/",
                icon:"chart.svg",
            },
            {
                id:2,
                title:"Logs",
                url:"/",
                icon:"log.svg",
            },
        ]
    },
]

export const topDealUsers =[
    {
        id:1,
        img:"user.svg",
        username:"Elva McDonald",
        email:"elva@gmail.com",
        amount:"3.668",
    },
    {
        id:2,
        img:"user.svg",
        username:"Linnie Nelson",
        email:"linnie@gmail.com",
        amount:"3.256",
    },
    {
        id:3,
        img:"user.svg",
        username:"Brent Reeves",
        email:"brent@gmail.com",
        amount:"2.998",
    },
]

export const chartBoxUser={
    color: "#8884d8",
    icon: "/userIcon.svg", 
    title: "Total Users", 
    number: "11.238",
    datakey: "users",
    percentage: 45,
    chartData:[
        { name: "Sun", users: 400 }, 
        { name: "Mon", users: 600 }, 
        { name: "Tue", users: 500 }, 
        { name: "Wed", users: 700 }, 
        { name: "Thu", users: 400 }, 
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}

export const chartBoxProduct={
    color: "green",
    icon: "/productIcon.svg", 
    title: "Total Products", 
    number: "238",
    datakey: "users",
    percentage: 21,
    chartData:[
        { name: "Sun", users: 400 }, 
        { name: "Mon", users: 600 }, 
        { name: "Tue", users: 500 }, 
        { name: "Wed", users: 700 }, 
        { name: "Thu", users: 400 }, 
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}

export const chartBoxRevenue={
    color: "yellow",
    icon: "/userIcon.svg", 
    title: "Total Revenue", 
    number: "56.432",
    datakey: "users",
    percentage: -12,
    chartData:[
        { name: "Sun", users: 400 }, 
        { name: "Mon", users: 600 }, 
        { name: "Tue", users: 500 }, 
        { name: "Wed", users: 700 }, 
        { name: "Thu", users: 400 }, 
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}

export const chartBoxConversion={
    color: "lightblue",
    icon: "/userIcon.svg", 
    title: "Total Ratio", 
    number: "2.6",
    datakey: "users",
    percentage: 12,
    chartData:[
        { name: "Sun", users: 400 }, 
        { name: "Mon", users: 600 }, 
        { name: "Tue", users: 500 }, 
        { name: "Wed", users: 700 }, 
        { name: "Thu", users: 400 }, 
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}

export const barChartBoxVisit = {
    title:"Total Visit",
    color:"#FF8042",
    datakey:"visit",
    chartData:[
    {
      name: 'Sun',
      visit: 4000,
    },
    {
      name: 'Mon',
      visit: 3000,
    },
    {
      name: 'Page C',
      visit: 2000,
    },
    {
      name: 'Page D',
      visit: 2780,
    },
    {
      name: 'Page E',
      visit: 1890,
    },
    {
      name: 'Page F',
      visit: 2390,
    },
    {
      name: 'Page G',
      visit: 3490,
    },
]};

export const barChartBoxRevenue = {
    title:"Profit Earned",
    color:"#8884d8",
    datakey:"profit",
    chartData:[
    {
      name: 'Sun',
      profit: 4000,
    },
    {
      name: 'Mon',
      profit: 3000,
    },
    {
      name: 'Page C',
      profit: 2000,
    },
    {
      name: 'Page D',
      profit: 2780,
    },
    {
      name: 'Page E',
      profit: 1890,
    },
    {
      name: 'Page F',
      profit: 2390,
    },
    {
      name: 'Page G',
      profit: 3490,
    },
]};