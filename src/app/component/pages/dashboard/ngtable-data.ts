import { Table, MySubscription, Manager } from './ngtable';

export const tableList: Table[] = [
    {
        AgentName : 'Sam',
        Email: 'sam',
        UserType: 's@gmail.com',
        AccountCode : 1234,
        TrainerName : 'Ankit',
        RegisteredVia : 'admin',
        Status : 'online',
        LmsStatus : 'Activate',
        LmsRole : 'Deactivate'
    },
    {
        AgentName : 'Ak',
        Email: 'AkM',
        UserType: 'Ak@gmail.com',
        AccountCode : 1256734,
        TrainerName : 'AnkitKr',
        RegisteredVia : 'user',
        Status : 'offline',
        LmsStatus : 'Deactivate',
        LmsRole : 'Activate'
    },
    {
        AgentName : 'Sameer',
        Email: 'sameer',
        UserType: 'sameer@gmail.com',
        AccountCode : 23531234,
        TrainerName : 'All',
        RegisteredVia : 'server',
        Status : 'offline',
        LmsStatus : 'Activate',
        LmsRole : 'Deactivate'
    },
    {
        AgentName : 'PankajSam',
        Email: 'Psam',
        UserType: 'Ps@gmail.com',
        AccountCode : 12256034,
        TrainerName : '',
        RegisteredVia : 'admin',
        Status : 'online',
        LmsStatus : 'Activate',
        LmsRole : 'Deactivate'
    },
    {
        AgentName : 'Matt',
        Email: 'matt@gmail.com',
        UserType: 'All',
        AccountCode : 1221456234,
        TrainerName : 'Smith',
        RegisteredVia : 'user',
        Status : 'offline',
        LmsStatus : 'Deactivate',
        LmsRole : 'Activate'
    },
];

export const subscription : MySubscription[]=[
    {
        Dates : '12/12/2012',
        PlanName : 'Mazuma',
        Amount : 20,
        CurrentPeriodStart : '20/11/2001',
        CurrentPeriodEnd : '12/12/2020',
        Status : 'Online',
        Description : 'My Name Is Ankit' 
    },
    {
        Dates : '10/12/2012',
        PlanName : 'Mazuma - Premium',
        Amount : 20,
        CurrentPeriodStart : '10/11/2001',
        CurrentPeriodEnd : '12/11/2020',
        Status : 'Online',
        Description : 'My Name Is Harsh' 
    },
    {
        Dates : '12/12/2012',
        PlanName : 'Mazuma - Basic',
        Amount : 20,
        CurrentPeriodStart : '20/11/2201',
        CurrentPeriodEnd : '12/12/2010',
        Status : 'Online',
        Description : 'My Name Is John' 
    }
];


export const manager : Manager[] =[
   {
       CompanyName : 'Mazuma',
       ManagerName : 'Matt',
       PackageName : 'Lite',
       AgentLimit : 1,
       RemainAgentLimit : 2,
       UserManagement : 3,
       ProductManagement : 10,
       ProductSalesVideos : 12,
       LearningManagement : 14,
       PaymentStatus : 0
   },
   {
    CompanyName : 'Mazuma',
    ManagerName : 'Matt',
    PackageName : 'Lite',
    AgentLimit : 1,
    RemainAgentLimit : 2,
    UserManagement : 3,
    ProductManagement : 10,
    ProductSalesVideos : 12,
    LearningManagement : 14,
    PaymentStatus : 0
} 
];


