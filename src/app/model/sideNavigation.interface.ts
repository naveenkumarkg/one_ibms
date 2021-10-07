export interface NavigationModel {
    navigation: NavigationListModel[];
}

export interface NavigationListModel {
    link: string;
    route:string;
    show:string;
    subitems:SubNavigation[]
  
}

export interface SubNavigation {
    link: string;
    route:string;
  
}
