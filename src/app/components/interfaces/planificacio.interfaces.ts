export interface Rendicion{
   
    id: number;
    cod_mun: string;
    municipio: string;
    anio_2008: number; 
    anio_2009: number; 
    anio_2010: number; 
    anio_2011: number; 
    anio_2012: number; 
    anio_2013: number; 
    anio_2014: number; 
    anio_2015: number; 
    anio_2016: number; 
    anio_2017: number; 
    anio_2018: number; 
    anio_2019: number; 
    anio_2020: number; 
    anio_2021: number; 
    anio_2022: number; 
    acumulado: number;
    fech_ult_expte: string
};
export interface Transferencias{
    id: number;
    cod_mun: string;
    municipio: string;
    anio_2007: number;
    anio_2008: number; 
    anio_2009: number; 
    anio_2010: number; 
    anio_2011: number; 
    anio_2012: number; 
    anio_2013: number; 
    anio_2014: number; 
    anio_2015: number; 
    anio_2016: number; 
    anio_2017: number; 
    anio_2018: number; 
    anio_2019: number; 
    anio_2020: number; 
    anio_2021: number; 
    anio_2022: number; 
   
}

export interface Prestacion{
    id: number;
    cod_mun: string;
    municipio: string;
    anio_2013: number;
    anio_2014: number;
    anio_2015: number;
    anio_2016: number;
    anio_2017: number;
    anio_2018: number;
    anio_2019: number;
    anio_2020: number;
    anio_2021: number;
    anio_2022: number;
    total_ac: number;
};

export interface Prestacion2022{
    id: number;
    cod_mun: string;
    municipio: string;
    ninos_05: number;
    ninos_69: number;
    adolescentes: number;
    adultos: number;
    emb:number;
};
export interface municipio{
    id: number;
    cod_mun: string;
    nombre: string;
};
export interface usodefondos{
    id: number;
    cod_mun: string;
    municipio: string;
    item_6: number;
    item_7: number;
    item_8: number;
    item_11: number;
    item_12: number;
    item_13: number;
    item_21: number;
    item_22: number;
    item_23: number;
    item_31: number;
    item_32: number;
    item_41: number;
    item_42: number;
    item_43: number;
    item_51: number;
    item_52: number;
    item_53: number;
    total: number;
}
   