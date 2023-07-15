export interface Rendicion {

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
    anio_2023: number;
    acumulado: number;
    fech_ult_expte: string;
    ult_bm_rendido: string
};
export interface Transferencias {
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
    anio_2023: number;
    total_acum: number;

}

export interface Prestacion {
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
    anio_2023: number;
    total_ac: number;
};

export interface Prestacion2022 {
    id: number;
    cod_mun: string;
    municipio: string;
    ninos_05: number;
    ninos_69: number;
    adolescentes: number;
    adultos: number;
    emb: number;
};
export interface municipio {
    id: number;
    cod_mun: string;
    nombre: string;
};
export interface usodefondos {
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
};

export interface Inscriptos {
    id: number;
    cod_mun: string;
    municipio: string;
    mes_1: number;
    mes_2: number;
    mes_3: number;
    mes_4: number;
    mes_5: number;
    mes_6: number;
    mes_7: number;
    mes_8: number;
    mes_9: number;
    mes_10: number;
    mes_11: number;
    mes_12: number;
    padron_1: string;
    padron_2: string;
    padron_3: string;
    padron_4: string;
    padron_5: string;
    padron_6: string;
    padron_7: string;
    padron_8: string;
    padron_9: string;
    padron_10: string;
    padron_11: string;
    padron_12: string;
};
export interface Inscriptos_gp {
    id: number;
    cod_mun: string;
    municipio: string;
    ninos_05: number;
    ninos_69: number;
    adolescentes: number;
    mujeres: number;
    hombres: number;
    total: number;
    ninos_05_ceb: number;
    ninos_69_ceb: number;
    adolescentes_ceb: number;
    mujeres_ceb: number;
    hombres_ceb: number;
    total_ceb: number;

};

export interface Prestacion_monto{
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
    anio_2023: number;
    total_ac: number;

};
export interface Prestacion_tipo{
    id: number;
    cod_mun: string;
    municipio: string;
    consultas: number;
    inmunizaciones: number;
    ig_lb_pr: number;
    internacion:number;
    partos: number;
    talleres: number;
    anato: number;
    varias: number;
    total: number;
    
  };
export interface Trazadoras{
    id: number;
    cod_mun: string;
    municipio: string;
    trazadora: number;
    casos_positivos: number;
    meta_casos: number;
    meta_pct: number;
    tasa_cobertura: string;
    tcm: string;
    cumple_tcm: string;
    periodo: string;
};

export interface Trz_evol{
    id: number;
    cod_mun: string;
    municipio: string;
    trazadora: number;
    casos_1c2022: number;
    tca_1c2022: string;
    casos_2c2022: number;
    tca_2c2022: string;
    casos_3c2022: number;
    tca_3c2022: string;
    casos_1c2023: number;
    tca_1c2023: string;
    casos_2c2023: number;
    tca_2c2023: string;
    casos_3c2023: number;
    tca_3c2023: string;
}
 

