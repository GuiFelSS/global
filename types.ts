type Vehicle = {
    capacidadeDaBateria: string | number | readonly string[] | undefined;
    id?: number | any;
    placa: string;
    possuiPlaca: boolean;
    marca: string;
    tipoMotor: string;
    transmissao: string;
    cor: string;
    quilometragem: string;
    desconheceQuilometragem: boolean;
    manutencaoRecente: string;
    semManutencaoRecente: boolean;
    observacoes: string;
    concordaTermos: boolean;
  };