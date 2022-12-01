export interface IFiltro {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}