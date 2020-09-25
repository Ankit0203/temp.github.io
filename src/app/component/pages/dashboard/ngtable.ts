export class Table {
    public AgentName: string|null=null;
    public Email: string|null=null;
    public UserType: string|null=null;
    public AccountCode : number;
    public TrainerName : string|null=null;
    public RegisteredVia : string|null=null;
    public Status : string|null=null;
    public LmsStatus : string|null=null;
    public LmsRole : string|null=null;

  }


  export class MySubscription {
    public Dates : string;
    public PlanName : string|null=null;
    public Amount : number;
    public CurrentPeriodStart : string;
    public CurrentPeriodEnd : string;
    public Status : string;
    public Description : string
  }


  export class Manager{
    public CompanyName : string;
    public ManagerName : string;
    public PackageName : string;
    public AgentLimit : number;
    public RemainAgentLimit : number;
    public UserManagement : number;
    public ProductManagement : number;
    public ProductSalesVideos : number;
    public LearningManagement : number;
    public PaymentStatus : number
  }

  export class UserMaster {
    public AgentName : string;
    public Email : string;
    public UserType : string;
    public AccountCode : number;
    public TrainerName : string;
    public RegisteredVia : string;
    public Status : string;
    public LmsStatus : string;
    public LmsRole : string;
  }