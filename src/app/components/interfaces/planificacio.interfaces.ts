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
    acumulado: number;
    fech_ult_expte: string
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
    ene_21: number;
    feb_21: number;
    mar_21: number;
    abr_21: number;
    may_21: number;
    jun_21: number;
    jul_21: number;
    ago_21: number;
    sep_21: number;
    oct_21: number;
    nov_21: number;
    dic_21: number;
    ene_22: number;
    feb_22: number;
    mar_22: number;
    abr_22: number;
    may_22: number;
    jun_22: number;
    jul_22: number;
    ago_22: number;
    sep_22: number;
    oct_22: number;
    nov_22: number;
    dic_22: number;
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
    total_ac: number;

};
export interface Prestacion_tipo{
    id: number;
    cod_mun: string;
    municipio: string;
    consultas_ac: number;
    inmunizaciones_ac: number;
    ig_lb_pr_ac: number;
    internacion_ac:number;
    partos_ac: number;
    talleres_ac: number;
    anato_ac: number;
    varias_ac: number;
    consultas_2022: number;
    inmunizaciones_2022: number;
    ig_lb_pr_2022: number;
    internacion_2022: number;
    partos_2022: number;
    talleres_2022: number;
    anato_2022: number;
    varias_2022: number;
  };
 

