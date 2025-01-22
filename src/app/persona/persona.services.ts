import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Persona'
 */
export class PersonaServices extends AbstractServices {

    private tADDUSUARIOASOLSrvName = 'TADDUSUARIOASOL';
    private tELIMINARSrvName = 'TELIMINAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Persona');
    }

    /**
     * Call to the filter 'F_PersonaVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vuTipoPersonaVar Variable v_TipoPersona
     * @param vouTipoIdentificacionVar Variable vo_TipoIdentificacion
     * @param vuRazonSocialVar Variable v_RazonSocial
     * @param vuPrimerNombreVar Variable v_PrimerNombre
     * @param vuPrimerApellidoVar Variable v_PrimerApellido
     * @param vuSegundoApellidoVar Variable v_SegundoApellido
     */
    public queryByFilterFuPersonaVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vuTipoPersonaVar: string | null, vouTipoIdentificacionVar: any, vuRazonSocialVar: string | null,
        vuPrimerNombreVar: string | null, vuPrimerApellidoVar: string | null,
        vuSegundoApellidoVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_PersonaVarios');
        this.util.addFilterVariable(filter, 'v_tipopersona', vuTipoPersonaVar);
        this.util.addFilterVariable(filter, 'vo_tipoidentificacion', vouTipoIdentificacionVar);
        this.util.addFilterVariable(filter, 'v_razonsocial', vuRazonSocialVar);
        this.util.addFilterVariable(filter, 'v_primernombre', vuPrimerNombreVar);
        this.util.addFilterVariable(filter, 'v_primerapellido', vuPrimerApellidoVar);
        this.util.addFilterVariable(filter, 'v_segundoapellido', vuSegundoApellidoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidEstadoPersona Oid of related 'EstadoPersona' instance using the role 'EstadoPersona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoPersona(
        oidEstadoPersona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoPersona, 'EstadoPersona');
    }

    /**
     * @param oidSolicitudesContratante Oid of related 'Solicitud' instance using the role 'SolicitudesContratante'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSolicitudesContratante(
        oidSolicitudesContratante: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSolicitudesContratante, 'SolicitudesContratante');
    }

    /**
     * @param oidSolicitudesTitular Oid of related 'Solicitud' instance using the role 'SolicitudesTitular'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSolicitudesTitular(
        oidSolicitudesTitular: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSolicitudesTitular, 'SolicitudesTitular');
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
     * @param oidDocumentosG Oid of related 'DocumentoG' instance using the role 'DocumentosG'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentosG(
        oidDocumentosG: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentosG, 'DocumentosG');
    }

    /**
     * Call to the service 'TADDUSUARIOASOL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrTipoIdentificacionInArg Mandatory argument 'pt_p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuagrDepartamentoNacimientoInArg Optional argument 'pt_p_agrDepartamentoNacimiento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioNacimientoInArg Optional argument 'pt_p_agrMunicipioNacimiento'. Oid of 'Municipio' class
     * @param ptupuagrEstadoCivilInArg Mandatory argument 'pt_p_agrEstadoCivil'. Oid of 'EstadoCivil' class
     * @param ptupuatrNumIdentificacionInArg Mandatory argument 'pt_p_atrNumIdentificacion'
     * @param ptupuatrPrimerNombreInArg Mandatory argument 'pt_p_atrPrimerNombre'
     * @param ptupuatrSegundoNombreInArg Optional argument 'pt_p_atrSegundoNombre'
     * @param ptupuatrPrimerApellidoInArg Mandatory argument 'pt_p_atrPrimerApellido'
     * @param ptupuatrSegundoApellidoInArg Optional argument 'pt_p_atrSegundoApellido'
     * @param ptupuatrFechaNacimientoInArg Mandatory argument 'pt_p_atrFechaNacimiento'
     * @param ptupuatrGeneroInArg Mandatory argument 'pt_p_atrGenero'
     * @param ptupuatrIndicadorExtranjeroInArg Mandatory argument 'pt_p_atrIndicadorExtranjero'
     * @param ptupuatrTelefonoFijoInArg Optional argument 'pt_p_atrTelefonoFijo'
     * @param ptupuatrTelefonoCelularInArg Optional argument 'pt_p_atrTelefonoCelular'
     * @param ptupuatrCorreoElectronicoInArg Optional argument 'pt_p_atrCorreoElectronico'
     * @param ptupuagrDepartamentoInArg Mandatory argument 'pt_p_agrDepartamento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioInArg Mandatory argument 'pt_p_agrMunicipio'. Oid of 'Municipio' class
     * @param ptupuatrDireccionCompletaInArg Mandatory argument 'pt_p_atrDireccionCompleta'
     * @param ptupuatrRuralInArg Mandatory argument 'pt_p_atrRural'
     * @param ptupuCodigoInArg Optional argument 'pt_p_Codigo'
     * @param ptupuTieneEPSSanitasInArg Mandatory argument 'pt_p_TieneEPSSanitas'
     * @param ptupuRechazadoAfiliacionInArg Optional argument 'pt_p_RechazadoAfiliacion'
     * @param ptupuagrPaisInArg Optional argument 'pt_p_agrPais'. Oid of 'Pais' class
     * @param ptSolicitudInArg Mandatory argument 'ptSolicitud'. Oid of 'Solicitud' class
     * @param ptDireccionesTitularInArg Optional argument 'ptDireccionesTitular'. Oid of 'Direccion' class
     * @param ptReplicarDireccionInArg Mandatory argument 'ptReplicarDireccion'
     * @param ptDireccionesXClassInArg Optional argument 'ptDireccionesXClass'
     * @param ptEstadoPersonaInArg Optional argument 'ptEstadoPersona'. Oid of 'EstadoPersona' class
     */
    public tADDUSUARIOASOL(
        ptupuagrTipoIdentificacionInArg: any, ptupuagrDepartamentoNacimientoInArg: any, ptupuagrMunicipioNacimientoInArg: any,
        ptupuagrEstadoCivilInArg: any, ptupuatrNumIdentificacionInArg: string, ptupuatrPrimerNombreInArg: string,
        ptupuatrSegundoNombreInArg: string | null, ptupuatrPrimerApellidoInArg: string, ptupuatrSegundoApellidoInArg: string | null,
        ptupuatrFechaNacimientoInArg: Date, ptupuatrGeneroInArg: string, ptupuatrIndicadorExtranjeroInArg: boolean,
        ptupuatrTelefonoFijoInArg: string | null, ptupuatrTelefonoCelularInArg: string | null,
        ptupuatrCorreoElectronicoInArg: string | null, ptupuagrDepartamentoInArg: any, ptupuagrMunicipioInArg: any,
        ptupuatrDireccionCompletaInArg: string, ptupuatrRuralInArg: boolean, ptupuCodigoInArg: number | null,
        ptupuTieneEPSSanitasInArg: boolean, ptupuRechazadoAfiliacionInArg: string | null, ptupuagrPaisInArg: any,
        ptSolicitudInArg: any, ptDireccionesTitularInArg: any, ptReplicarDireccionInArg: boolean,
        ptDireccionesXClassInArg: string | null, ptEstadoPersonaInArg: any): Promise<void> {
        const request: {
            pt_p_agrtipoidentificacion_json: any, pt_p_agrdepartamentonacimiento_json: any, pt_p_agrmunicipionacimiento_json: any,
            pt_p_agrestadocivil_json: any, pt_p_atrnumidentificacion: string, pt_p_atrprimernombre: string,
            pt_p_atrsegundonombre: string | null, pt_p_atrprimerapellido: string, pt_p_atrsegundoapellido: string | null,
            pt_p_atrfechanacimiento: string, pt_p_atrgenero: string, pt_p_atrindicadorextranjero: boolean,
            pt_p_atrtelefonofijo: string | null, pt_p_atrtelefonocelular: string | null, pt_p_atrcorreoelectronico: string | null,
            pt_p_agrdepartamento_json: any, pt_p_agrmunicipio_json: any, pt_p_atrdireccioncompleta: string, pt_p_atrrural: boolean,
            pt_p_codigo: number | null, pt_p_tieneepssanitas: boolean, pt_p_rechazadoafiliacion: string | null, pt_p_agrpais_oid: any,
            ptsolicitud_oid: any, ptdireccionestitular_json: any, ptreplicardireccion: boolean, ptdireccionesxclass: string | null,
            ptestadopersona_oid: any
        } = {
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
            pt_p_codigo: ptupuCodigoInArg, pt_p_tieneepssanitas: ptupuTieneEPSSanitasInArg,
            pt_p_rechazadoafiliacion: ptupuRechazadoAfiliacionInArg, pt_p_agrpais_oid: ptupuagrPaisInArg,
            ptsolicitud_oid: ptSolicitudInArg,
            ptdireccionestitular_json: ptDireccionesTitularInArg ? JSON.stringify(ptDireccionesTitularInArg) : '',
            ptreplicardireccion: ptReplicarDireccionInArg, ptdireccionesxclass: ptDireccionesXClassInArg,
            ptestadopersona_oid: ptEstadoPersonaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDUSUARIOASOLSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TELIMINAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPersonaInArg Mandatory argument 'p_thisPersona'. Oid of 'Persona' class
     * @param ptUsuarioInArg Mandatory argument 'ptUsuario'. Oid of 'Usuario' class
     */
    public tELIMINAR(
        puthisPersonaInArg: any, ptUsuarioInArg: any): Promise<void> {
        const request: {
            p_thispersona_oid: any, ptusuario_oid: any
        } = {
            p_thispersona_oid: puthisPersonaInArg, ptusuario_oid: ptUsuarioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tELIMINARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
