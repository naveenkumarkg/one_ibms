

    export interface Subitem{
        link: string;
        route: string;
    }

    export interface Navigation{
        link: string;
        route: string;
        show: boolean;
        subitems?: Subitem[];
    }

    export interface ISidenavigation {
        [key: string]: Navigation[];
    }



