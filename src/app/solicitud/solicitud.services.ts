import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Solicitud'
 */
export class SolicitudServices extends AbstractServices {

    private anotarObservacionesSrvName = 'anotarObservaciones';
    private dummyuRedirigirSrvName = 'dummy_Redirigir';
    private dummyuGenerarSolicitudSrvName = 'dummy_GenerarSolicitud';
    private enviarSMSInfoPagoSrvName = 'enviarSMSInfoPago';
    private modMarcaCarnetSrvName = 'modMarcaCarnet';
    private tMODIFICARINFOPAGOSrvName = 'TMODIFICARINFOPAGO';
    private tCREAROMODFIRMASrvName = 'TCREAROMODFIRMA';
    private tINDICARCONTRATANTE2SrvName = 'TINDICARCONTRATANTE2';
    private tINDICARTITULAR2SrvName = 'TINDICARTITULAR2';
    private tCHGTITBENEFCONTSrvName = 'TCHGTITBENEFCONT';
    private tMARCARCOMPLETADASrvName = 'TMARCARCOMPLETADA';
    private tMODENCABEZADOSrvName = 'TMODENCABEZADO';
    private tMODDIRSCONTRATANTESrvName = 'TMODDIRSCONTRATANTE';
    private tMODDIRSTITULARSrvName = 'TMODDIRSTITULAR';
    private tMODENCABEZADOINCLSrvName = 'TMODENCABEZADOINCL';
    private tCREAROMODFIRMACONTINCSrvName = 'TCREAROMODFIRMACONTINC';
    private tSUBIRDOCUMENTOATOSrvName = 'TSUBIRDOCUMENTOATO';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Solicitud');
    }

    /**
     * Call to the filter 'F_SolicitudConsultaRadicado' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     * @param vouTipoDocVar Variable vo_TipoDoc
     * @param vuNumDocVar Variable v_NumDoc
     */
    public queryByFilterFuSolicitudConsultaRadicado(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfDesdeVar: Date | null, vfHastaVar: Date | null, vouTipoDocVar: any, vuNumDocVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_SolicitudConsultaRadicado');
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.date2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.date2Json(vfHastaVar));
        this.util.addFilterVariable(filter, 'vo_tipodoc', vouTipoDocVar);
        this.util.addFilterVariable(filter, 'v_numdoc', vuNumDocVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidAesolicitudes Oid of related 'Ae_solicitudes' instance using the role 'Ae_solicitudes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAesolicitudes(
        oidAesolicitudes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAesolicitudes, 'Ae_solicitudes');
    }

    /**
     * @param oidContratantePersona Oid of related 'Persona' instance using the role 'ContratantePersona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedContratantePersona(
        oidContratantePersona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidContratantePersona, 'ContratantePersona');
    }

    /**
     * @param oidTitularPersona Oid of related 'Persona' instance using the role 'TitularPersona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTitularPersona(
        oidTitularPersona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTitularPersona, 'TitularPersona');
    }

    /**
     * @param oidGrupoAsociado Oid of related 'GrupoAsociado' instance using the role 'GrupoAsociado'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGrupoAsociado(
        oidGrupoAsociado: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGrupoAsociado, 'GrupoAsociado');
    }

    /**
     * @param oidProteccionDatos Oid of related 'ProteccionDatos' instance using the role 'ProteccionDatos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProteccionDatos(
        oidProteccionDatos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProteccionDatos, 'ProteccionDatos');
    }

    /**
     * @param oidUsuarios Oid of related 'Usuario' instance using the role 'Usuarios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuarios(
        oidUsuarios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuarios, 'Usuarios');
    }

    /**
     * @param oidUsuariosRegistrados Oid of related 'UsuarioReg' instance using the role 'UsuariosRegistrados'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuariosRegistrados(
        oidUsuariosRegistrados: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuariosRegistrados, 'UsuariosRegistrados');
    }

    /**
     * @param oidDocumentosGestor Oid of related 'DocumentoG' instance using the role 'DocumentosGestor'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentosGestor(
        oidDocumentosGestor: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentosGestor, 'DocumentosGestor');
    }

    /**
     * Call to the service 'anotarObservaciones' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param puObservacionesInArg Optional argument 'p_Observaciones'
     */
    public anotarObservaciones(
        puthisSolicitudInArg: any, puObservacionesInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, p_observaciones: string | null
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, p_observaciones: puObservacionesInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.anotarObservacionesSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'dummy_Redirigir' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     */
    public dummyuRedirigir(
        puthisSolicitudInArg: any): Promise<void> {
        const request: {
            p_thissolicitud_oid: any
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.dummyuRedirigirSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'dummy_GenerarSolicitud' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     */
    public dummyuGenerarSolicitud(
        puthisSolicitudInArg: any): Promise<void> {
        const request: {
            p_thissolicitud_oid: any
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.dummyuGenerarSolicitudSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'enviarSMSInfoPago' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     */
    public enviarSMSInfoPago(
        puthisSolicitudInArg: any): Promise<void> {
        const request: {
            p_thissolicitud_oid: any
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.enviarSMSInfoPagoSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modMarcaCarnet' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param peMarcaCarnetInArg Mandatory argument 'peMarcaCarnet'
     */
    public modMarcaCarnet(
        puthisSolicitudInArg: any, peMarcaCarnetInArg: boolean): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pemarcacarnet: boolean
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pemarcacarnet: peMarcaCarnetInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modMarcaCarnetSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARINFOPAGO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuevcPeriodicidadInArg Mandatory argument 'pt_p_evcPeriodicidad'. Oid of 'Periodicidad' class
     * @param ptupuevcFormaPagoInArg Mandatory argument 'pt_p_evcFormaPago'. Oid of 'FormaPago' class
     * @param ptupuvalorCuotaInArg Optional argument 'pt_p_valorCuota'
     * @param ptupuvalorDtoComercialSimInArg Optional argument 'pt_p_valorDtoComercialSim'
     * @param ptupuValorDtoFinancieroInArg Optional argument 'pt_p_ValorDtoFinanciero'
     * @param puValorCuotaInscripcionInArg Optional argument 'p_ValorCuotaInscripcion'
     * @param puSubtotalInArg Optional argument 'p_Subtotal'
     * @param puBaseGrabableInArg Optional argument 'p_BaseGrabable'
     * @param puPorcenIVAInArg Optional argument 'p_PorcenIVA'
     * @param puIVAInArg Optional argument 'p_IVA'
     * @param puTotalInArg Optional argument 'p_Total'
     */
    public tMODIFICARINFOPAGO(
        puthisSolicitudInArg: any, ptupuevcPeriodicidadInArg: any, ptupuevcFormaPagoInArg: any, ptupuvalorCuotaInArg: number | null,
        ptupuvalorDtoComercialSimInArg: number | null, ptupuValorDtoFinancieroInArg: number | null,
        puValorCuotaInscripcionInArg: number | null, puSubtotalInArg: number | null, puBaseGrabableInArg: number | null,
        puPorcenIVAInArg: number | null, puIVAInArg: number | null, puTotalInArg: number | null): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_evcperiodicidad_json: any, pt_p_evcformapago_json: any, pt_p_valorcuota: number | null,
            pt_p_valordtocomercialsim: number | null, pt_p_valordtofinanciero: number | null, p_valorcuotainscripcion: number | null,
            p_subtotal: number | null, p_basegrabable: number | null, p_porceniva: number | null, p_iva: number | null,
            p_total: number | null
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg,
            pt_p_evcperiodicidad_json: ptupuevcPeriodicidadInArg ? JSON.stringify(ptupuevcPeriodicidadInArg) : '',
            pt_p_evcformapago_json: ptupuevcFormaPagoInArg ? JSON.stringify(ptupuevcFormaPagoInArg) : '',
            pt_p_valorcuota: ptupuvalorCuotaInArg, pt_p_valordtocomercialsim: ptupuvalorDtoComercialSimInArg,
            pt_p_valordtofinanciero: ptupuValorDtoFinancieroInArg, p_valorcuotainscripcion: puValorCuotaInscripcionInArg,
            p_subtotal: puSubtotalInArg, p_basegrabable: puBaseGrabableInArg, p_porceniva: puPorcenIVAInArg, p_iva: puIVAInArg,
            p_total: puTotalInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARINFOPAGOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAROMODFIRMA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuatrImagenFirmaInArg Optional argument 'pt_p_atrImagenFirma'
     * @param ptupuatrLatitudInArg Optional argument 'pt_p_atrLatitud'
     * @param ptupuatrLongitudInArg Optional argument 'pt_p_atrLongitud'
     * @param ptuTextoInArg Optional argument 'pt_Texto'
     */
    public tCREAROMODFIRMA(
        puthisSolicitudInArg: any, ptupuatrImagenFirmaInArg: string | null, ptupuatrLatitudInArg: string | null,
        ptupuatrLongitudInArg: string | null, ptuTextoInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_atrimagenfirma: string | null, pt_p_atrlatitud: string | null,
            pt_p_atrlongitud: string | null, pt_texto: string | null
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_p_atrimagenfirma: ptupuatrImagenFirmaInArg,
            pt_p_atrlatitud: ptupuatrLatitudInArg, pt_p_atrlongitud: ptupuatrLongitudInArg, pt_texto: ptuTextoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREAROMODFIRMASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TINDICARCONTRATANTE2' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuPrimerNombreInArg Optional argument 'pt_p_PrimerNombre'
     * @param ptupuSegundoNombreInArg Optional argument 'pt_p_SegundoNombre'
     * @param ptupuPrimerApellidoInArg Optional argument 'pt_p_PrimerApellido'
     * @param ptupuSegundoApellidoInArg Optional argument 'pt_p_SegundoApellido'
     * @param ptupuFechaNacimientoInArg Optional argument 'pt_p_FechaNacimiento'
     * @param ptupuGeneroInArg Optional argument 'pt_p_Genero'
     * @param ptupuIndicadorExtranjeroInArg Mandatory argument 'pt_p_IndicadorExtranjero'
     * @param ptupuTelefonoFijoInArg Optional argument 'pt_p_TelefonoFijo'
     * @param ptupuTelefonoCelularInArg Optional argument 'pt_p_TelefonoCelular'
     * @param ptupuCorreoElectronicoInArg Optional argument 'pt_p_CorreoElectronico'
     * @param ptupuevcDepartamentoNacInArg Optional argument 'pt_p_evcDepartamentoNac'. Oid of 'Departamento' class
     * @param ptupuevcMunicipioNacInArg Optional argument 'pt_p_evcMunicipioNac'. Oid of 'Municipio' class
     * @param ptupuevcEstadoCivilInArg Optional argument 'pt_p_evcEstadoCivil'. Oid of 'EstadoCivil' class
     * @param ptupuDireccionCompletaInArg Optional argument 'pt_p_DireccionCompleta'
     * @param ptupuRuralInArg Mandatory argument 'pt_p_Rural'
     * @param ptupuevcDepartamentoInArg Optional argument 'pt_p_evcDepartamento'. Oid of 'Departamento' class
     * @param ptupuevcMunicipioInArg Optional argument 'pt_p_evcMunicipio'. Oid of 'Municipio' class
     * @param ptupuNumIdentificacionInArg Mandatory argument 'pt_p_NumIdentificacion'
     * @param ptupuevcTipoIdentificacionInArg Mandatory argument 'pt_p_evcTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuatrRazonSocialInArg Optional argument 'pt_p_atrRazonSocial'
     * @param ptupDCDireccionCompletaInArg Mandatory argument 'pt_pDCDireccionCompleta'
     * @param ptupDCDepartamentoInArg Mandatory argument 'pt_pDCDepartamento'. Oid of 'Departamento' class
     * @param ptupDCMunicipioInArg Mandatory argument 'pt_pDCMunicipio'. Oid of 'Municipio' class
     * @param ptupDCRuralInArg Mandatory argument 'pt_pDCRural'
     * @param ptupDCTelefonoFijoInArg Optional argument 'pt_pDCTelefonoFijo'
     * @param ptupDCTelefonoCelularInArg Optional argument 'pt_pDCTelefonoCelular'
     * @param ptupuPaisInArg Optional argument 'pt_p_Pais'. Oid of 'Pais' class
     * @param ptupuCodigoCOREInArg Optional argument 'pt_p_CodigoCORE'
     * @param ptuTieneEPSSanitasInArg Mandatory argument 'pt_TieneEPSSanitas'
     * @param ptuRechazadoAfiliacionInArg Optional argument 'pt_RechazadoAfiliacion'
     * @param pDCPaisInArg Optional argument 'pDCPais'. Oid of 'Pais' class
     * @param puTitularBeneficiosInArg Mandatory argument 'p_TitularBeneficios'
     * @param ptuDiplomaticoInArg Mandatory argument 'pt_Diplomatico'
     * @param ptuDireccionesXClassInArg Optional argument 'pt_DireccionesXClass'
     * @param ptReplicarDireccionInArg Mandatory argument 'ptReplicarDireccion'
     * @param ptEstadoPersonaInArg Optional argument 'ptEstadoPersona'. Oid of 'EstadoPersona' class
     */
    public tINDICARCONTRATANTE2(
        puthisSolicitudInArg: any, ptupuPrimerNombreInArg: string | null, ptupuSegundoNombreInArg: string | null,
        ptupuPrimerApellidoInArg: string | null, ptupuSegundoApellidoInArg: string | null, ptupuFechaNacimientoInArg: Date | null,
        ptupuGeneroInArg: string | null, ptupuIndicadorExtranjeroInArg: boolean, ptupuTelefonoFijoInArg: string | null,
        ptupuTelefonoCelularInArg: string | null, ptupuCorreoElectronicoInArg: string | null, ptupuevcDepartamentoNacInArg: any,
        ptupuevcMunicipioNacInArg: any, ptupuevcEstadoCivilInArg: any, ptupuDireccionCompletaInArg: string | null,
        ptupuRuralInArg: boolean, ptupuevcDepartamentoInArg: any, ptupuevcMunicipioInArg: any, ptupuNumIdentificacionInArg: string,
        ptupuevcTipoIdentificacionInArg: any, ptupuatrRazonSocialInArg: string | null, ptupDCDireccionCompletaInArg: string,
        ptupDCDepartamentoInArg: any, ptupDCMunicipioInArg: any, ptupDCRuralInArg: boolean, ptupDCTelefonoFijoInArg: string | null,
        ptupDCTelefonoCelularInArg: string | null, ptupuPaisInArg: any, ptupuCodigoCOREInArg: number | null,
        ptuTieneEPSSanitasInArg: boolean, ptuRechazadoAfiliacionInArg: string | null, pDCPaisInArg: any,
        puTitularBeneficiosInArg: boolean, ptuDiplomaticoInArg: boolean, ptuDireccionesXClassInArg: string | null,
        ptReplicarDireccionInArg: boolean, ptEstadoPersonaInArg: any): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_primernombre: string | null, pt_p_segundonombre: string | null,
            pt_p_primerapellido: string | null, pt_p_segundoapellido: string | null, pt_p_fechanacimiento: string | null,
            pt_p_genero: string | null, pt_p_indicadorextranjero: boolean, pt_p_telefonofijo: string | null,
            pt_p_telefonocelular: string | null, pt_p_correoelectronico: string | null, pt_p_evcdepartamentonac_json: any,
            pt_p_evcmunicipionac_json: any, pt_p_evcestadocivil_json: any, pt_p_direccioncompleta: string | null, pt_p_rural: boolean,
            pt_p_evcdepartamento_json: any, pt_p_evcmunicipio_json: any, pt_p_numidentificacion: string,
            pt_p_evctipoidentificacion_json: any, pt_p_atrrazonsocial: string | null, pt_pdcdireccioncompleta: string,
            pt_pdcdepartamento_json: any, pt_pdcmunicipio_json: any, pt_pdcrural: boolean, pt_pdctelefonofijo: string | null,
            pt_pdctelefonocelular: string | null, pt_p_pais_oid: any, pt_p_codigocore: number | null, pt_tieneepssanitas: boolean,
            pt_rechazadoafiliacion: string | null, pdcpais_oid: any, p_titularbeneficios: boolean, pt_diplomatico: boolean,
            pt_direccionesxclass: string | null, ptreplicardireccion: boolean, ptestadopersona_oid: any
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_p_primernombre: ptupuPrimerNombreInArg,
            pt_p_segundonombre: ptupuSegundoNombreInArg, pt_p_primerapellido: ptupuPrimerApellidoInArg,
            pt_p_segundoapellido: ptupuSegundoApellidoInArg,
            pt_p_fechanacimiento: ptupuFechaNacimientoInArg ? JsonUtility.date2Json(ptupuFechaNacimientoInArg) : '',
            pt_p_genero: ptupuGeneroInArg, pt_p_indicadorextranjero: ptupuIndicadorExtranjeroInArg,
            pt_p_telefonofijo: ptupuTelefonoFijoInArg, pt_p_telefonocelular: ptupuTelefonoCelularInArg,
            pt_p_correoelectronico: ptupuCorreoElectronicoInArg,
            pt_p_evcdepartamentonac_json: ptupuevcDepartamentoNacInArg ? JSON.stringify(ptupuevcDepartamentoNacInArg) : '',
            pt_p_evcmunicipionac_json: ptupuevcMunicipioNacInArg ? JSON.stringify(ptupuevcMunicipioNacInArg) : '',
            pt_p_evcestadocivil_json: ptupuevcEstadoCivilInArg ? JSON.stringify(ptupuevcEstadoCivilInArg) : '',
            pt_p_direccioncompleta: ptupuDireccionCompletaInArg, pt_p_rural: ptupuRuralInArg,
            pt_p_evcdepartamento_json: ptupuevcDepartamentoInArg ? JSON.stringify(ptupuevcDepartamentoInArg) : '',
            pt_p_evcmunicipio_json: ptupuevcMunicipioInArg ? JSON.stringify(ptupuevcMunicipioInArg) : '',
            pt_p_numidentificacion: ptupuNumIdentificacionInArg,
            pt_p_evctipoidentificacion_json: ptupuevcTipoIdentificacionInArg ? JSON.stringify(ptupuevcTipoIdentificacionInArg) : '',
            pt_p_atrrazonsocial: ptupuatrRazonSocialInArg, pt_pdcdireccioncompleta: ptupDCDireccionCompletaInArg,
            pt_pdcdepartamento_json: ptupDCDepartamentoInArg ? JSON.stringify(ptupDCDepartamentoInArg) : '',
            pt_pdcmunicipio_json: ptupDCMunicipioInArg ? JSON.stringify(ptupDCMunicipioInArg) : '', pt_pdcrural: ptupDCRuralInArg,
            pt_pdctelefonofijo: ptupDCTelefonoFijoInArg, pt_pdctelefonocelular: ptupDCTelefonoCelularInArg,
            pt_p_pais_oid: ptupuPaisInArg, pt_p_codigocore: ptupuCodigoCOREInArg, pt_tieneepssanitas: ptuTieneEPSSanitasInArg,
            pt_rechazadoafiliacion: ptuRechazadoAfiliacionInArg, pdcpais_oid: pDCPaisInArg,
            p_titularbeneficios: puTitularBeneficiosInArg, pt_diplomatico: ptuDiplomaticoInArg,
            pt_direccionesxclass: ptuDireccionesXClassInArg, ptreplicardireccion: ptReplicarDireccionInArg,
            ptestadopersona_oid: ptEstadoPersonaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tINDICARCONTRATANTE2SrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TINDICARTITULAR2' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuagrTipoIdentificacionInArg Mandatory argument 'pt_p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuagrDepartamentoNacimientoInArg Optional argument 'pt_p_agrDepartamentoNacimiento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioNacimientoInArg Optional argument 'pt_p_agrMunicipioNacimiento'. Oid of 'Municipio' class
     * @param ptupuagrEstadoCivilInArg Optional argument 'pt_p_agrEstadoCivil'. Oid of 'EstadoCivil' class
     * @param ptupuatrNumIdentificacionInArg Mandatory argument 'pt_p_atrNumIdentificacion'
     * @param ptupuatrPrimerNombreInArg Optional argument 'pt_p_atrPrimerNombre'
     * @param ptupuatrSegundoNombreInArg Optional argument 'pt_p_atrSegundoNombre'
     * @param ptupuatrPrimerApellidoInArg Optional argument 'pt_p_atrPrimerApellido'
     * @param ptupuatrSegundoApellidoInArg Optional argument 'pt_p_atrSegundoApellido'
     * @param ptupuatrFechaNacimientoInArg Optional argument 'pt_p_atrFechaNacimiento'
     * @param ptupuatrGeneroInArg Optional argument 'pt_p_atrGenero'
     * @param ptupuatrIndicadorExtranjeroInArg Mandatory argument 'pt_p_atrIndicadorExtranjero'
     * @param ptupuatrTelefonoFijoInArg Optional argument 'pt_p_atrTelefonoFijo'
     * @param ptupuatrTelefonoCelularInArg Optional argument 'pt_p_atrTelefonoCelular'
     * @param ptupuatrCorreoElectronicoInArg Optional argument 'pt_p_atrCorreoElectronico'
     * @param ptupuagrDepartamentoInArg Optional argument 'pt_p_agrDepartamento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioInArg Optional argument 'pt_p_agrMunicipio'. Oid of 'Municipio' class
     * @param ptupuatrDireccionCompletaInArg Optional argument 'pt_p_atrDireccionCompleta'
     * @param ptupuatrRuralInArg Mandatory argument 'pt_p_atrRural'
     * @param ptupuagrPaisInArg Optional argument 'pt_p_agrPais'. Oid of 'Pais' class
     * @param ptupuCodigoInArg Optional argument 'pt_p_Codigo'
     * @param ptupuTieneEPSSanitasInArg Mandatory argument 'pt_p_TieneEPSSanitas'
     * @param ptupuRechazadoAfiliacionInArg Optional argument 'pt_p_RechazadoAfiliacion'
     * @param ptupuTitularBeneficiosInArg Mandatory argument 'pt_p_TitularBeneficios'
     * @param ptEstadoPersonaInArg Optional argument 'ptEstadoPersona'. Oid of 'EstadoPersona' class
     * @param ptDCDepartamentoInArg Optional argument 'ptDCDepartamento'. Oid of 'Departamento' class
     * @param ptDCMunicipioInArg Optional argument 'ptDCMunicipio'. Oid of 'Municipio' class
     * @param ptDCDireccionCompletaInArg Optional argument 'ptDCDireccionCompleta'
     * @param ptDCRuralInArg Mandatory argument 'ptDCRural'
     * @param ptDCTelefonoFijoInArg Optional argument 'ptDCTelefonoFijo'
     * @param ptDCTelefonoCelularInArg Optional argument 'ptDCTelefonoCelular'
     * @param ptReplicarDirInArg Mandatory argument 'ptReplicarDir'
     * @param ptRazonSocialInArg Optional argument 'ptRazonSocial'
     */
    public tINDICARTITULAR2(
        puthisSolicitudInArg: any, ptupuagrTipoIdentificacionInArg: any, ptupuagrDepartamentoNacimientoInArg: any,
        ptupuagrMunicipioNacimientoInArg: any, ptupuagrEstadoCivilInArg: any, ptupuatrNumIdentificacionInArg: string,
        ptupuatrPrimerNombreInArg: string | null, ptupuatrSegundoNombreInArg: string | null,
        ptupuatrPrimerApellidoInArg: string | null, ptupuatrSegundoApellidoInArg: string | null,
        ptupuatrFechaNacimientoInArg: Date | null, ptupuatrGeneroInArg: string | null, ptupuatrIndicadorExtranjeroInArg: boolean,
        ptupuatrTelefonoFijoInArg: string | null, ptupuatrTelefonoCelularInArg: string | null,
        ptupuatrCorreoElectronicoInArg: string | null, ptupuagrDepartamentoInArg: any, ptupuagrMunicipioInArg: any,
        ptupuatrDireccionCompletaInArg: string | null, ptupuatrRuralInArg: boolean, ptupuagrPaisInArg: any,
        ptupuCodigoInArg: number | null, ptupuTieneEPSSanitasInArg: boolean, ptupuRechazadoAfiliacionInArg: string | null,
        ptupuTitularBeneficiosInArg: boolean, ptEstadoPersonaInArg: any, ptDCDepartamentoInArg: any, ptDCMunicipioInArg: any,
        ptDCDireccionCompletaInArg: string | null, ptDCRuralInArg: boolean, ptDCTelefonoFijoInArg: string | null,
        ptDCTelefonoCelularInArg: string | null, ptReplicarDirInArg: boolean, ptRazonSocialInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_agrtipoidentificacion_json: any, pt_p_agrdepartamentonacimiento_json: any,
            pt_p_agrmunicipionacimiento_json: any, pt_p_agrestadocivil_json: any, pt_p_atrnumidentificacion: string,
            pt_p_atrprimernombre: string | null, pt_p_atrsegundonombre: string | null, pt_p_atrprimerapellido: string | null,
            pt_p_atrsegundoapellido: string | null, pt_p_atrfechanacimiento: string | null, pt_p_atrgenero: string | null,
            pt_p_atrindicadorextranjero: boolean, pt_p_atrtelefonofijo: string | null, pt_p_atrtelefonocelular: string | null,
            pt_p_atrcorreoelectronico: string | null, pt_p_agrdepartamento_json: any, pt_p_agrmunicipio_json: any,
            pt_p_atrdireccioncompleta: string | null, pt_p_atrrural: boolean, pt_p_agrpais_oid: any, pt_p_codigo: number | null,
            pt_p_tieneepssanitas: boolean, pt_p_rechazadoafiliacion: string | null, pt_p_titularbeneficios: boolean,
            ptestadopersona_oid: any, ptdcdepartamento_json: any, ptdcmunicipio_json: any, ptdcdireccioncompleta: string | null,
            ptdcrural: boolean, ptdctelefonofijo: string | null, ptdctelefonocelular: string | null, ptreplicardir: boolean,
            ptrazonsocial: string | null
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg,
            pt_p_agrtipoidentificacion_json: ptupuagrTipoIdentificacionInArg ? JSON.stringify(ptupuagrTipoIdentificacionInArg) : '',
            pt_p_agrdepartamentonacimiento_json: ptupuagrDepartamentoNacimientoInArg ? JSON.stringify(ptupuagrDepartamentoNacimientoInArg) : '',
            pt_p_agrmunicipionacimiento_json: ptupuagrMunicipioNacimientoInArg ? JSON.stringify(ptupuagrMunicipioNacimientoInArg) : '',
            pt_p_agrestadocivil_json: ptupuagrEstadoCivilInArg ? JSON.stringify(ptupuagrEstadoCivilInArg) : '',
            pt_p_atrnumidentificacion: ptupuatrNumIdentificacionInArg, pt_p_atrprimernombre: ptupuatrPrimerNombreInArg,
            pt_p_atrsegundonombre: ptupuatrSegundoNombreInArg, pt_p_atrprimerapellido: ptupuatrPrimerApellidoInArg,
            pt_p_atrsegundoapellido: ptupuatrSegundoApellidoInArg,
            pt_p_atrfechanacimiento: ptupuatrFechaNacimientoInArg ? JsonUtility.date2Json(ptupuatrFechaNacimientoInArg) : '',
            pt_p_atrgenero: ptupuatrGeneroInArg, pt_p_atrindicadorextranjero: ptupuatrIndicadorExtranjeroInArg,
            pt_p_atrtelefonofijo: ptupuatrTelefonoFijoInArg, pt_p_atrtelefonocelular: ptupuatrTelefonoCelularInArg,
            pt_p_atrcorreoelectronico: ptupuatrCorreoElectronicoInArg,
            pt_p_agrdepartamento_json: ptupuagrDepartamentoInArg ? JSON.stringify(ptupuagrDepartamentoInArg) : '',
            pt_p_agrmunicipio_json: ptupuagrMunicipioInArg ? JSON.stringify(ptupuagrMunicipioInArg) : '',
            pt_p_atrdireccioncompleta: ptupuatrDireccionCompletaInArg, pt_p_atrrural: ptupuatrRuralInArg,
            pt_p_agrpais_oid: ptupuagrPaisInArg, pt_p_codigo: ptupuCodigoInArg, pt_p_tieneepssanitas: ptupuTieneEPSSanitasInArg,
            pt_p_rechazadoafiliacion: ptupuRechazadoAfiliacionInArg, pt_p_titularbeneficios: ptupuTitularBeneficiosInArg,
            ptestadopersona_oid: ptEstadoPersonaInArg,
            ptdcdepartamento_json: ptDCDepartamentoInArg ? JSON.stringify(ptDCDepartamentoInArg) : '',
            ptdcmunicipio_json: ptDCMunicipioInArg ? JSON.stringify(ptDCMunicipioInArg) : '',
            ptdcdireccioncompleta: ptDCDireccionCompletaInArg, ptdcrural: ptDCRuralInArg, ptdctelefonofijo: ptDCTelefonoFijoInArg,
            ptdctelefonocelular: ptDCTelefonoCelularInArg, ptreplicardir: ptReplicarDirInArg, ptrazonsocial: ptRazonSocialInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tINDICARTITULAR2SrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCHGTITBENEFCONT' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptTitularConBeneficiosInArg Mandatory argument 'ptTitularConBeneficios'
     */
    public tCHGTITBENEFCONT(
        puthisSolicitudInArg: any, ptTitularConBeneficiosInArg: boolean): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pttitularconbeneficios: boolean
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pttitularconbeneficios: ptTitularConBeneficiosInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCHGTITBENEFCONTSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMARCARCOMPLETADA' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     */
    public tMARCARCOMPLETADA(
        puthisSolicitudInArg: any):
        Promise<{
            pt_ps_numsolicitud: string
        }> {
        const request: {
            p_thissolicitud_oid: any
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg
        };
        return new Promise<{
            pt_ps_numsolicitud: string
        }> ((resolve, reject) => {
            this.callService(this.tMARCARCOMPLETADASrvName, request).then((response: any) => {
                resolve({
                    pt_ps_numsolicitud: response.pt_ps_numsolicitud
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODENCABEZADO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptuptFechaInArg Optional argument 'pt_ptFecha'
     * @param ptGrupoAsociadoInArg Optional argument 'ptGrupoAsociado'. Oid of 'GrupoAsociado' class
     * @param ptProrrateoInArg Optional argument 'ptProrrateo'. Oid of 'Prorrateo' class
     * @param ptTipoFacturaInArg Mandatory argument 'ptTipoFactura'. Oid of 'TipoFactura' class
     * @param ptSoloDiaUnoInArg Mandatory argument 'ptSoloDiaUno'
     */
    public tMODENCABEZADO(
        puthisSolicitudInArg: any, ptuptFechaInArg: Date | null, ptGrupoAsociadoInArg: any, ptProrrateoInArg: any,
        ptTipoFacturaInArg: any, ptSoloDiaUnoInArg: boolean): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_ptfecha: string | null, ptgrupoasociado_oid: any, ptprorrateo_json: any,
            pttipofactura_json: any, ptsolodiauno: boolean
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_ptfecha: ptuptFechaInArg ? JsonUtility.date2Json(ptuptFechaInArg) : '',
            ptgrupoasociado_oid: ptGrupoAsociadoInArg, ptprorrateo_json: ptProrrateoInArg ? JSON.stringify(ptProrrateoInArg) : '',
            pttipofactura_json: ptTipoFacturaInArg ? JSON.stringify(ptTipoFacturaInArg) : '', ptsolodiauno: ptSoloDiaUnoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODENCABEZADOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODDIRSCONTRATANTE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuTelefonoFijoInArg Optional argument 'pt_p_TelefonoFijo'
     * @param ptupuTelefonoCelularInArg Optional argument 'pt_p_TelefonoCelular'
     * @param ptupuDireccionCompletaInArg Optional argument 'pt_p_DireccionCompleta'
     * @param ptupuRuralInArg Mandatory argument 'pt_p_Rural'
     * @param ptupuevcDepartamentoInArg Optional argument 'pt_p_evcDepartamento'. Oid of 'Departamento' class
     * @param ptupuevcMunicipioInArg Optional argument 'pt_p_evcMunicipio'. Oid of 'Municipio' class
     * @param ptupDCDireccionCompletaInArg Optional argument 'pt_pDCDireccionCompleta'
     * @param ptupDCDepartamentoInArg Optional argument 'pt_pDCDepartamento'. Oid of 'Departamento' class
     * @param ptupDCMunicipioInArg Optional argument 'pt_pDCMunicipio'. Oid of 'Municipio' class
     * @param ptupDCRuralInArg Mandatory argument 'pt_pDCRural'
     * @param ptupDCTelefonoFijoInArg Optional argument 'pt_pDCTelefonoFijo'
     * @param ptupDCTelefonoCelularInArg Optional argument 'pt_pDCTelefonoCelular'
     * @param ptupuPaisInArg Optional argument 'pt_p_Pais'. Oid of 'Pais' class
     * @param pDCPaisInArg Optional argument 'pDCPais'. Oid of 'Pais' class
     * @param ptReplicarDireccionInArg Mandatory argument 'ptReplicarDireccion'
     */
    public tMODDIRSCONTRATANTE(
        puthisSolicitudInArg: any, ptupuTelefonoFijoInArg: string | null, ptupuTelefonoCelularInArg: string | null,
        ptupuDireccionCompletaInArg: string | null, ptupuRuralInArg: boolean, ptupuevcDepartamentoInArg: any,
        ptupuevcMunicipioInArg: any, ptupDCDireccionCompletaInArg: string | null, ptupDCDepartamentoInArg: any,
        ptupDCMunicipioInArg: any, ptupDCRuralInArg: boolean, ptupDCTelefonoFijoInArg: string | null,
        ptupDCTelefonoCelularInArg: string | null, ptupuPaisInArg: any, pDCPaisInArg: any,
        ptReplicarDireccionInArg: boolean): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_telefonofijo: string | null, pt_p_telefonocelular: string | null,
            pt_p_direccioncompleta: string | null, pt_p_rural: boolean, pt_p_evcdepartamento_json: any, pt_p_evcmunicipio_json: any,
            pt_pdcdireccioncompleta: string | null, pt_pdcdepartamento_json: any, pt_pdcmunicipio_json: any, pt_pdcrural: boolean,
            pt_pdctelefonofijo: string | null, pt_pdctelefonocelular: string | null, pt_p_pais_oid: any, pdcpais_oid: any,
            ptreplicardireccion: boolean
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_p_telefonofijo: ptupuTelefonoFijoInArg,
            pt_p_telefonocelular: ptupuTelefonoCelularInArg, pt_p_direccioncompleta: ptupuDireccionCompletaInArg,
            pt_p_rural: ptupuRuralInArg,
            pt_p_evcdepartamento_json: ptupuevcDepartamentoInArg ? JSON.stringify(ptupuevcDepartamentoInArg) : '',
            pt_p_evcmunicipio_json: ptupuevcMunicipioInArg ? JSON.stringify(ptupuevcMunicipioInArg) : '',
            pt_pdcdireccioncompleta: ptupDCDireccionCompletaInArg,
            pt_pdcdepartamento_json: ptupDCDepartamentoInArg ? JSON.stringify(ptupDCDepartamentoInArg) : '',
            pt_pdcmunicipio_json: ptupDCMunicipioInArg ? JSON.stringify(ptupDCMunicipioInArg) : '', pt_pdcrural: ptupDCRuralInArg,
            pt_pdctelefonofijo: ptupDCTelefonoFijoInArg, pt_pdctelefonocelular: ptupDCTelefonoCelularInArg,
            pt_p_pais_oid: ptupuPaisInArg, pdcpais_oid: pDCPaisInArg, ptreplicardireccion: ptReplicarDireccionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODDIRSCONTRATANTESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODDIRSTITULAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuatrTelefonoFijoInArg Optional argument 'pt_p_atrTelefonoFijo'
     * @param ptupuatrTelefonoCelularInArg Optional argument 'pt_p_atrTelefonoCelular'
     * @param ptupuagrDepartamentoInArg Optional argument 'pt_p_agrDepartamento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioInArg Optional argument 'pt_p_agrMunicipio'. Oid of 'Municipio' class
     * @param ptupuatrDireccionCompletaInArg Optional argument 'pt_p_atrDireccionCompleta'
     * @param ptupuatrRuralInArg Mandatory argument 'pt_p_atrRural'
     * @param ptupuagrPaisInArg Optional argument 'pt_p_agrPais'. Oid of 'Pais' class
     * @param ptDCDepartamentoInArg Optional argument 'ptDCDepartamento'. Oid of 'Departamento' class
     * @param ptDCMunicipioInArg Optional argument 'ptDCMunicipio'. Oid of 'Municipio' class
     * @param ptDCDireccionCompletaInArg Optional argument 'ptDCDireccionCompleta'
     * @param ptDCRuralInArg Mandatory argument 'ptDCRural'
     * @param ptDCTelefonoFijoInArg Optional argument 'ptDCTelefonoFijo'
     * @param ptDCTelefonoCelularInArg Optional argument 'ptDCTelefonoCelular'
     * @param ptReplicarDirInArg Mandatory argument 'ptReplicarDir'
     */
    public tMODDIRSTITULAR(
        puthisSolicitudInArg: any, ptupuatrTelefonoFijoInArg: string | null, ptupuatrTelefonoCelularInArg: string | null,
        ptupuagrDepartamentoInArg: any, ptupuagrMunicipioInArg: any, ptupuatrDireccionCompletaInArg: string | null,
        ptupuatrRuralInArg: boolean, ptupuagrPaisInArg: any, ptDCDepartamentoInArg: any, ptDCMunicipioInArg: any,
        ptDCDireccionCompletaInArg: string | null, ptDCRuralInArg: boolean, ptDCTelefonoFijoInArg: string | null,
        ptDCTelefonoCelularInArg: string | null, ptReplicarDirInArg: boolean): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_atrtelefonofijo: string | null, pt_p_atrtelefonocelular: string | null,
            pt_p_agrdepartamento_json: any, pt_p_agrmunicipio_json: any, pt_p_atrdireccioncompleta: string | null,
            pt_p_atrrural: boolean, pt_p_agrpais_oid: any, ptdcdepartamento_json: any, ptdcmunicipio_json: any,
            ptdcdireccioncompleta: string | null, ptdcrural: boolean, ptdctelefonofijo: string | null,
            ptdctelefonocelular: string | null, ptreplicardir: boolean
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_p_atrtelefonofijo: ptupuatrTelefonoFijoInArg,
            pt_p_atrtelefonocelular: ptupuatrTelefonoCelularInArg,
            pt_p_agrdepartamento_json: ptupuagrDepartamentoInArg ? JSON.stringify(ptupuagrDepartamentoInArg) : '',
            pt_p_agrmunicipio_json: ptupuagrMunicipioInArg ? JSON.stringify(ptupuagrMunicipioInArg) : '',
            pt_p_atrdireccioncompleta: ptupuatrDireccionCompletaInArg, pt_p_atrrural: ptupuatrRuralInArg,
            pt_p_agrpais_oid: ptupuagrPaisInArg,
            ptdcdepartamento_json: ptDCDepartamentoInArg ? JSON.stringify(ptDCDepartamentoInArg) : '',
            ptdcmunicipio_json: ptDCMunicipioInArg ? JSON.stringify(ptDCMunicipioInArg) : '',
            ptdcdireccioncompleta: ptDCDireccionCompletaInArg, ptdcrural: ptDCRuralInArg, ptdctelefonofijo: ptDCTelefonoFijoInArg,
            ptdctelefonocelular: ptDCTelefonoCelularInArg, ptreplicardir: ptReplicarDirInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODDIRSTITULARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODENCABEZADOINCL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptuptFechaInArg Optional argument 'pt_ptFecha'
     * @param ptGrupoAsociadoInArg Optional argument 'ptGrupoAsociado'. Oid of 'GrupoAsociado' class
     * @param ptSoloDiaUnoInArg Mandatory argument 'ptSoloDiaUno'
     */
    public tMODENCABEZADOINCL(
        puthisSolicitudInArg: any, ptuptFechaInArg: Date | null, ptGrupoAsociadoInArg: any,
        ptSoloDiaUnoInArg: boolean): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_ptfecha: string | null, ptgrupoasociado_oid: any, ptsolodiauno: boolean
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_ptfecha: ptuptFechaInArg ? JsonUtility.date2Json(ptuptFechaInArg) : '',
            ptgrupoasociado_oid: ptGrupoAsociadoInArg, ptsolodiauno: ptSoloDiaUnoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODENCABEZADOINCLSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAROMODFIRMACONTINC' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuatrImagenFirmaInArg Optional argument 'pt_p_atrImagenFirma'
     * @param ptupuatrLatitudInArg Optional argument 'pt_p_atrLatitud'
     * @param ptupuatrLongitudInArg Optional argument 'pt_p_atrLongitud'
     * @param ptuTextoInArg Optional argument 'pt_Texto'
     */
    public tCREAROMODFIRMACONTINC(
        puthisSolicitudInArg: any, ptupuatrImagenFirmaInArg: string | null, ptupuatrLatitudInArg: string | null,
        ptupuatrLongitudInArg: string | null, ptuTextoInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_atrimagenfirma: string | null, pt_p_atrlatitud: string | null,
            pt_p_atrlongitud: string | null, pt_texto: string | null
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_p_atrimagenfirma: ptupuatrImagenFirmaInArg,
            pt_p_atrlatitud: ptupuatrLatitudInArg, pt_p_atrlongitud: ptupuatrLongitudInArg, pt_texto: ptuTextoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREAROMODFIRMACONTINCSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TSUBIRDOCUMENTOATO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudInArg Mandatory argument 'p_thisSolicitud'. Oid of 'Solicitud' class
     * @param ptupuatrDescripcionInArg Optional argument 'pt_p_atrDescripcion'
     * @param ptupuatrTipoInArg Optional argument 'pt_p_atrTipo'
     * @param ptupuExtensionInArg Optional argument 'pt_p_Extension'
     * @param ptPersonaInArg Mandatory argument 'ptPersona'. Oid of 'Persona' class
     * @param ptIdDocGestorInArg Mandatory argument 'ptIdDocGestor'
     * @param ptNombreInArg Mandatory argument 'ptNombre'
     * @param pfFicheroInArg Optional argument 'pfFichero'
     * @param ptNumSolicitudInArg Optional argument 'ptNumSolicitud'
     * @param ptNumIdentUsuarioInArg Optional argument 'ptNumIdentUsuario'
     */
    public tSUBIRDOCUMENTOATO(
        puthisSolicitudInArg: any, ptupuatrDescripcionInArg: string | null, ptupuatrTipoInArg: number | null,
        ptupuExtensionInArg: string | null, ptPersonaInArg: any, ptIdDocGestorInArg: string, ptNombreInArg: string,
        pfFicheroInArg: string | null, ptNumSolicitudInArg: number | null, ptNumIdentUsuarioInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitud_oid: any, pt_p_atrdescripcion: string | null, pt_p_atrtipo: number | null, pt_p_extension: string | null,
            ptpersona_json: any, ptiddocgestor: string, ptnombre: string, pffichero: string | null, ptnumsolicitud: number | null,
            ptnumidentusuario: string | null
        } = {
            p_thissolicitud_oid: puthisSolicitudInArg, pt_p_atrdescripcion: ptupuatrDescripcionInArg, pt_p_atrtipo: ptupuatrTipoInArg,
            pt_p_extension: ptupuExtensionInArg, ptpersona_json: ptPersonaInArg ? JSON.stringify(ptPersonaInArg) : '',
            ptiddocgestor: ptIdDocGestorInArg, ptnombre: ptNombreInArg, pffichero: pfFicheroInArg,
            ptnumsolicitud: ptNumSolicitudInArg, ptnumidentusuario: ptNumIdentUsuarioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tSUBIRDOCUMENTOATOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
