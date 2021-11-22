export interface ISearchResults extends IObjectKeys{
    id: number;
    company_name: string;
    cusip6: string;
    cusip_isn: string;
    ticker_symbol: string;
    project_name: string;
    deal_id: number;
    effective_date: string;
    end_date: string;
    on_list_date: string;
    off_list_date: string;
    key?: string;
}

interface IObjectKeys {
    [key: string]: string | number | undefined;
  }

