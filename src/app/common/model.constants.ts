/**
 * Model constans names
 */
export class ModelConstants {
    public static readonly Funcionario = {name : 'Funcionario'};
    public static readonly Admin = {name : 'Admin'};
    public static readonly Superadmin = {name : 'SuperAdmin'};
    public static readonly Asesor = {name : 'Asesor', piuudirectoresuobs: 'piu_directores_obs'};
    public static readonly Areamedica = {name : 'AreaMedica'};
    public static readonly Afiliaciones = {name : 'Afiliaciones'};
    public static readonly Respregional = {name : 'RespRegional'};
    public static readonly Gestor = {name : 'Gestor'};
    public static readonly Mesadeapoyo = {name : 'MesaDeApoyo'};
    public static readonly Paramconfig = {name : 'ParamConfig'};
    public static readonly Logparam = {name : 'LogParam'};
    public static readonly Frecuenciaact = {name : 'FrecuenciaAct'};
    public static readonly Cuestionariomed = {name : 'CuestionarioMed'};
    public static readonly Seccion = {name : 'Seccion'};
    public static readonly Pregunta = {name : 'Pregunta', piuupregunta: 'piu_pregunta'};
    public static readonly Valor = {name : 'Valor'};
    public static readonly Productos = {name : 'Productos', piuuproducto: 'piu_producto'};
    public static readonly Planes = {name : 'Planes', piuuplan: 'piu_plan'};
    public static readonly Parentesco = {name : 'Parentesco'};
    public static readonly Periodicidad = {name : 'Periodicidad'};
    public static readonly Rol = {name : 'Rol'};
    public static readonly Dominio = {name : 'Dominio'};
    public static readonly Plantillaemail = {name : 'PlantillaEmail'};
    public static readonly Estadocontrato = {name : 'EstadoContrato'};
    public static readonly Estadobeneficiario = {name : 'EstadoBeneficiario'};
    public static readonly Estadobeneficiarioae = {name : 'EstadoBeneficiarioAE'};
    public static readonly Tarifa = {name : 'Tarifa'};
    public static readonly Regional = {name : 'Regional'};
    public static readonly Sucursal = {name : 'Sucursal'};
    public static readonly Grupoasociado = {name : 'GrupoAsociado', siuumodificar: 'siu_modificar',
        piuugrupoasociado: 'piu_grupoasociado', piuugrupoasociadobusqueda: 'piu_grupoasociadobusqueda'};
    public static readonly Estadocivil = {name : 'EstadoCivil'};
    public static readonly Departamento = {name : 'Departamento'};
    public static readonly Tipoiva = {name : 'TipoIVA'};
    public static readonly Persona = {name : 'Persona', siuutaddusuarioasol: 'siu_taddusuarioasol', siuuteliminar: 'siu_teliminar',
        piuupersona: 'piu_persona'};
    public static readonly Companyia = {name : 'Companyia'};
    public static readonly Municipio = {name : 'Municipio'};
    public static readonly Tipodireccion = {name : 'TipoDireccion', piuutipodireccion: 'piu_tipodireccion'};
    public static readonly Estadopersona = {name : 'EstadoPersona', piuuestadopersona: 'piu_estadopersona'};
    public static readonly Formapago = {name : 'FormaPago'};
    public static readonly Tipoidentificacion = {name : 'TipoIdentificacion'};
    public static readonly Eps = {name : 'Eps'};
    public static readonly Entidadfinancierac = {name : 'EntidadFinancieraC'};
    public static readonly Tipoentidadc = {name : 'TipoEntidadC'};
    public static readonly Tipoinstitucionc = {name : 'TipoInstitucionC'};
    public static readonly Aeusolicitudes = {name : 'Ae_solicitudes', siuutnuevaafiliacion: 'siu_tnuevaafiliacion',
        siuutinclusionsc: 'siu_tinclusionsc'};
    public static readonly Solicitud = {name : 'Solicitud', siuuanotarobservaciones: 'siu_anotarobservaciones',
        siuudummyuredirigir: 'siu_dummy_redirigir', siuudummyugenerarsolicitud: 'siu_dummy_generarsolicitud',
        siuuenviarsmsinfopago: 'siu_enviarsmsinfopago', siuumodmarcacarnet: 'siu_modmarcacarnet',
        siuutmodificarinfopago: 'siu_tmodificarinfopago', siuutcrearomodfirma: 'siu_tcrearomodfirma',
        siuutindicarcontratante2: 'siu_tindicarcontratante2', siuutindicartitular2: 'siu_tindicartitular2',
        siuutchgtitbenefcont: 'siu_tchgtitbenefcont', siuutmarcarcompletada: 'siu_tmarcarcompletada',
        siuutmodencabezado: 'siu_tmodencabezado', siuutmoddirscontratante: 'siu_tmoddirscontratante',
        siuutmoddirstitular: 'siu_tmoddirstitular', siuutmodencabezadoincl: 'siu_tmodencabezadoincl',
        siuutcrearomodfirmacontinc: 'siu_tcrearomodfirmacontinc', siuutsubirdocumentoato: 'siu_tsubirdocumentoato',
        piuuradicadosuobs: 'piu_radicados_obs', piuuconsultarradicado: 'piu_consultarradicado',
        mdiuunuevaafiliacion: 'mdiu_nuevaafiliacion', imdiuuinfocontratantepr: 'imdiu_infocontratantepr',
        imdiuuinfocontratanteincl: 'imdiu_infocontratanteincl', mdiuuusuariosincl: 'mdiu_usuariosincl',
        imdiuuinfocontratanteinccolect: 'imdiu_infocontratanteinccolect', imdiuuinfocontratanteprcol: 'imdiu_infocontratanteprcol',
        mdiuuinclusioncolectivo: 'mdiu_inclusioncolectivo', mdiuuinclusionfamiliar: 'mdiu_inclusionfamiliar'};
    public static readonly Personac = {name : 'PersonaC'};
    public static readonly Direccionc = {name : 'DireccionC'};
    public static readonly Telefonoc = {name : 'TelefonoC'};
    public static readonly Protecciondatosc = {name : 'ProteccionDatosC'};
    public static readonly Direccion = {name : 'Direccion'};
    public static readonly Pais = {name : 'Pais', piuupais: 'piu_pais'};
    public static readonly Protecciondatos = {name : 'ProteccionDatos', siuutcrearprotecciondatosna: 'siu_tcrearprotecciondatosna',
        siuutcrearprotecciondatosinc: 'siu_tcrearprotecciondatosinc', piuuprotecciondatosunull: 'piu_protecciondatos_null'};
    public static readonly Usuario = {name : 'Usuario', siuushowcuesmedico: 'siu_showcuesmedico',
        siuutmodificarattr: 'siu_tmodificarattr', siuutmodusuario: 'siu_tmodusuario',
        siuutcrearomodanexomat: 'siu_tcrearomodanexomat', siuutcrearomodanexoneo: 'siu_tcrearomodanexoneo',
        piuuusuariounull: 'piu_usuario_null'};
    public static readonly Cuestionariop = {name : 'CuestionarioP', siuutcerrar: 'siu_tcerrar', iiuucuestionario: 'iiu_cuestionario',
        piuucuestionariopunull: 'piu_cuestionariop_null'};
    public static readonly Seccionp = {name : 'SeccionP'};
    public static readonly Preguntap = {name : 'PreguntaP'};
    public static readonly Contratante = {name : 'Contratante'};
    public static readonly Anexomat = {name : 'AnexoMat'};
    public static readonly Anexoneo = {name : 'AnexoNeo'};
    public static readonly Firma = {name : 'Firma'};
    public static readonly Contratoc = {name : 'ContratoC'};
    public static readonly Observacionesc = {name : 'ObservacionesC'};
    public static readonly Beneficiarioc = {name : 'BeneficiarioC'};
    public static readonly Anexoc = {name : 'AnexoC'};
    public static readonly Pregcuesmedc = {name : 'PregCuesMedC'};
    public static readonly Dirsucursalc = {name : 'DirSucursalC'};
    public static readonly Familiac = {name : 'FamiliaC'};
    public static readonly Usuarioreg = {name : 'UsuarioReg'};
    public static readonly Titular = {name : 'Titular'};
    public static readonly Preexistenciac = {name : 'PreexistenciaC'};
    public static readonly Preexistencia = {name : 'Preexistencia'};
    public static readonly Documentog = {name : 'DocumentoG', siuuprevisualizarato: 'siu_previsualizarato',
        siuutaprobar: 'siu_taprobar', siuutdevolver: 'siu_tdevolver', piuudocumentog: 'piu_documentog',
        mdiuudocumentog: 'mdiu_documentog'};
    public static readonly Obsestado = {name : 'ObsEstado', siuumodificar: 'siu_modificar', piuuobsestadounull: 'piu_obsestado_null'};
    public static readonly Errorws = {name : 'ErrorWS'};
    public static readonly Parentescodom = {name : 'ParentescoDom'};
    public static readonly Marcamedicac = {name : 'MarcaMedicaC'};
    public static readonly Tiposucursalc = {name : 'TipoSucursalC'};
    public static readonly Conceptoc = {name : 'ConceptoC'};
    public static readonly Detalletarifa = {name : 'DetalleTarifa'};
    public static readonly Agentexproducto = {name : 'AgentexProducto'};
    public static readonly Institucionmatneo = {name : 'InstitucionMatNeo'};
    public static readonly Logestado = {name : 'LogEstado'};
    public static readonly Motdevareamedica = {name : 'MotDevAreaMedica'};
    public static readonly Contsindocsol = {name : 'ContSinDocSol'};
    public static readonly Logcontsindocsol = {name : 'LogContSinDocSol'};
    public static readonly Logasignaciones = {name : 'LogAsignaciones'};
    public static readonly Reportesprocalm = {name : 'ReportesProcAlm'};
    public static readonly Prorrateo = {name : 'Prorrateo'};
    public static readonly Tipofactura = {name : 'TipoFactura'};
    public static readonly Paramreporte = {name : 'ParamReporte'};
    public static readonly Tiponovedad = {name : 'TipoNovedad'};
    public static readonly Novedad = {name : 'Novedad'};
    public static readonly Causal = {name : 'Causal'};
    public static readonly Solicitudnovedad = {name : 'SolicitudNovedad'};
    public static readonly Familianovedad = {name : 'FamiliaNovedad'};
    public static readonly Usuarionovedad = {name : 'UsuarioNovedad'};
    public static readonly Causaexclusion = {name : 'CausaExclusion'};
    public static readonly Novedadct = {name : 'NovedadCT'};
    public static readonly Documentonovedad = {name : 'DocumentoNovedad'};
    public static readonly Novedadmd = {name : 'NovedadMD'};
    public static readonly Logestadosn = {name : 'LogEstadoSN'};
    public static readonly Motivoexcepcionsolnov = {name : 'MotivoExcepcionSolNov'};
    public static readonly Priorizacionsolicitudes = {name : 'PriorizacionSolicitudes'};
    public static readonly Logpriorizacionsol = {name : 'LogPriorizacionSol'};
    public static readonly Grupoasignacion = {name : 'GrupoAsignacion'};
    public static readonly Loggrupoasignacion = {name : 'LogGrupoAsignacion'};
    public static readonly Loggruposusuarios = {name : 'LogGruposUsuarios'};
    public static readonly Grupoasignacionnovedad = {name : 'GrupoAsignacionNovedad'};
    public static readonly Logfuncionario = {name : 'LogFuncionario'};
    public static readonly Logusrsolnov = {name : 'LogUsrSolNov'};
    public static readonly Contratocombo = {name : 'ContratoCombo'};
    public static readonly Logcontratocombo = {name : 'LogContratoCombo'};
    public static readonly Configuracionans = {name : 'ConfiguracionANS'};
    public static readonly Logconfiguracionans = {name : 'LogConfiguracionANS'};
    public static readonly Configuracionfestivos = {name : 'ConfiguracionFestivos'};
    public static readonly Logestadodocnov = {name : 'LogEstadoDocNov'};
    public static readonly Plantillareporte = {name : 'PlantillaReporte'};
    public static readonly Reportesdominio = {name : 'ReportesDominio'};
    public static readonly Loginformacionasesor = {name : 'LogInformacionAsesor'};
    public static readonly Loghistoricoplanes = {name : 'LogHistoricoPlanes'};
    public static readonly Logllamadasae = {name : 'LogLlamadasAE'};
    public static readonly Logllamadasbh = {name : 'LogLlamadasBH'};
    public static readonly Fechainieps = {name : 'FechaIniEPS'};
    public static readonly Logincompatibilidades = {name : 'LogIncompatibilidades'};
    public static readonly Logdatosdominio = {name : 'LogDatosDominio'};
    public static readonly Contratosexentosfingreso = {name : 'ContratosExentosFIngreso'};
    public static readonly Logcontratosexentosfingreso = {name : 'LogContratosExentosFIngreso'};
    public static readonly Textoaviso = {name : 'TextoAviso'};
    public static readonly Usuariosistemaexterno = {name : 'UsuarioSistemaExterno'};
    public static readonly Globalservices = {name : 'GlobalServices', siuuogsincgruposasociados: 'siu_ogsincgruposasociados',
        siuutgseleccontratoasoc: 'siu_tgseleccontratoasoc', siuutgseleccontratoasoctit: 'siu_tgseleccontratoasoctit',
        siuuogenerarsolicitud2: 'siu_ogenerarsolicitud2', siuuogenerarsolicitud2uout: 'siu_ogenerarsolicitud2_out'};
}
