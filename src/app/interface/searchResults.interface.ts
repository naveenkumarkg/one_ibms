export interface ISearchResults extends IObjectKeys{
    projectId: number;
    dealId: number;
    projectName: string;
    companyName: string;
    rclStatus: string;
    effectdate: string;
    endDate: string;
    ticker: string;
    key?: string;
}

interface IObjectKeys {
    [key: string]: string | number | undefined;
  }

