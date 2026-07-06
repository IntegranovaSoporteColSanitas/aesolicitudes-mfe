import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Service and queries of class 'Usuario' »
 */
export class UsuarioServices extends AbstractServices {

    private showCuesMedicoSrvName = 'showCuesMedico';
    private tMODIFICARATTRSrvName = 'TMODIFICARATTR';
    private tMODUSUARIOSrvName = 'TMODUSUARIO';
    private tCREAROMODANEXOMATSrvName = 'TCREAROMODANEXOMAT';
    private tCREAROMODANEXONEOSrvName = 'TCREAROMODANEXONEO';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Usuario');
    }

    /**
     * @param oidSolicitud Oid of related 'Solicitud' instance using the role 'Solicitud'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSolicitud(
        oidSolicitud: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSolicitud, 'Solicitud');
    }

    /**
     * @param oidUsuarioPersona Oid of related 'Persona' instance using the role 'UsuarioPersona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuarioPersona(
        oidUsuarioPersona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuarioPersona, 'UsuarioPersona');
    }

    /**
     * @param oidCuestionarioP Oid of related 'CuestionarioP' instance using the role 'CuestionarioP'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCuestionarioP(
        oidCuestionarioP: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCuestionarioP, 'CuestionarioP');
    }

    /**
     * Call to the service 'showCuesMedico' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioInArg Mandatory argument 'p_thisUsuario'. Oid of 'Usuario' class
     */
    public showCuesMedico(
        puthisUsuarioInArg: any):
        Promise<{
            ps_cuesmedico: any
        }> {
        const request: {
            p_thisusuario_oid: any
        } = {
            p_thisusuario_oid: puthisUsuarioInArg
        };
        return new Promise<{
            ps_cuesmedico: any
        }> ((resolve, reject) => {
            this.callService(this.showCuesMedicoSrvName, request).then((response: any) => {
                resolve({
                    ps_cuesmedico: response.ps_cuesmedico
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARATTR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAttrUsuarioInArg Mandatory argument 'p_thisAttrUsuario'. Oid of 'Usuario' class
     * @param ptupuBebeGestanteInArg Mandatory argument 'pt_p_BebeGestante'
     * @param ptupuevcCompanyiaInArg Optional argument 'pt_p_evcCompanyia'. Oid of 'Companyia' class
     * @param ptupuevcEPSInArg Mandatory argument 'pt_p_evcEPS'. Oid of 'Eps' class
     * @param ptupuevcParentescoInArg Mandatory argument 'pt_p_evcParentesco'. Oid of 'Parentesco' class
     * @param ptupucodigoBancoRepInArg Optional argument 'pt_p_codigoBancoRep'
     * @param ptupuFechaAntiguedadInArg Optional argument 'pt_p_FechaAntiguedad'
     * @param ptupePolizaInternacionalInArg Mandatory argument 'pt_pePolizaInternacional'
     */
    public tMODIFICARATTR(
        puthisAttrUsuarioInArg: any, ptupuBebeGestanteInArg: boolean, ptupuevcCompanyiaInArg: any, ptupuevcEPSInArg: any,
        ptupuevcParentescoInArg: any, ptupucodigoBancoRepInArg: string | null, ptupuFechaAntiguedadInArg: Date | null,
        ptupePolizaInternacionalInArg: boolean): Promise<void> {
        const request: {
            p_thisattrusuario_oid: any, pt_p_bebegestante: boolean, pt_p_evccompanyia_json: any, pt_p_evceps_json: any,
            pt_p_evcparentesco_json: any, pt_p_codigobancorep: string | null, pt_p_fechaantiguedad: string | null,
            pt_pepolizainternacional: boolean
        } = {
            p_thisattrusuario_oid: puthisAttrUsuarioInArg, pt_p_bebegestante: ptupuBebeGestanteInArg,
            pt_p_evccompanyia_json: ptupuevcCompanyiaInArg ? JSON.stringify(ptupuevcCompanyiaInArg) : '',
            pt_p_evceps_json: ptupuevcEPSInArg ? JSON.stringify(ptupuevcEPSInArg) : '',
            pt_p_evcparentesco_json: ptupuevcParentescoInArg ? JSON.stringify(ptupuevcParentescoInArg) : '',
            pt_p_codigobancorep: ptupucodigoBancoRepInArg,
            pt_p_fechaantiguedad: ptupuFechaAntiguedadInArg ? JsonUtility.date2Json(ptupuFechaAntiguedadInArg) : '',
            pt_pepolizainternacional: ptupePolizaInternacionalInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARATTRSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODUSUARIO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioInArg Mandatory argument 'p_thisUsuario'. Oid of 'Usuario' class
     * @param ptupuPrimerNombreInArg Optional argument 'pt_p_PrimerNombre'
     * @param ptupuSegundoNombreInArg Optional argument 'pt_p_SegundoNombre'
     * @param ptupuPrimerApellidoInArg Optional argument 'pt_p_PrimerApellido'
     * @param ptupuSegundoApellidoInArg Optional argument 'pt_p_SegundoApellido'
     * @param ptupuFechaNacimientoInArg Mandatory argument 'pt_p_FechaNacimiento'
     * @param ptupuGeneroInArg Mandatory argument 'pt_p_Genero'
     * @param ptupuIndicadorExtranjeroInArg Mandatory argument 'pt_p_IndicadorExtranjero'
     * @param ptupuTelefonoFijoInArg Optional argument 'pt_p_TelefonoFijo'
     * @param ptupuTelefonoCelularInArg Optional argument 'pt_p_TelefonoCelular'
     * @param ptupuCorreoElectronicoInArg Optional argument 'pt_p_CorreoElectronico'
     * @param ptupuevcDepartamentoNacInArg Optional argument 'pt_p_evcDepartamentoNac'. Oid of 'Departamento' class
     * @param ptupuevcMunicipioNacInArg Optional argument 'pt_p_evcMunicipioNac'. Oid of 'Municipio' class
     * @param ptupuevcEstadoCivilInArg Mandatory argument 'pt_p_evcEstadoCivil'. Oid of 'EstadoCivil' class
     * @param ptupuDireccionCompletaInArg Mandatory argument 'pt_p_DireccionCompleta'
     * @param ptupuRuralInArg Mandatory argument 'pt_p_Rural'
     * @param ptupuevcDepartamentoInArg Mandatory argument 'pt_p_evcDepartamento'. Oid of 'Departamento' class
     * @param ptupuevcMunicipioInArg Mandatory argument 'pt_p_evcMunicipio'. Oid of 'Municipio' class
     * @param ptuDireccionInArg Optional argument 'pt_Direccion'. Oid of 'Direccion' class
     * @param ptuReplicarDireccionInArg Mandatory argument 'pt_ReplicarDireccion'
     * @param ptupuNumIdentificacionInArg Mandatory argument 'pt_p_NumIdentificacion'
     * @param ptupuevcTipoIdentificacionInArg Mandatory argument 'pt_p_evcTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuagrPaisInArg Optional argument 'pt_p_agrPais'. Oid of 'Pais' class
     * @param ptuDireccionUsuarioInArg Optional argument 'pt_DireccionUsuario'. Oid of 'Direccion' class
     */
    public tMODUSUARIO(
        puthisUsuarioInArg: any, ptupuPrimerNombreInArg: string | null, ptupuSegundoNombreInArg: string | null,
        ptupuPrimerApellidoInArg: string | null, ptupuSegundoApellidoInArg: string | null, ptupuFechaNacimientoInArg: Date,
        ptupuGeneroInArg: string, ptupuIndicadorExtranjeroInArg: boolean, ptupuTelefonoFijoInArg: string | null,
        ptupuTelefonoCelularInArg: string | null, ptupuCorreoElectronicoInArg: string | null, ptupuevcDepartamentoNacInArg: any,
        ptupuevcMunicipioNacInArg: any, ptupuevcEstadoCivilInArg: any, ptupuDireccionCompletaInArg: string, ptupuRuralInArg: boolean,
        ptupuevcDepartamentoInArg: any, ptupuevcMunicipioInArg: any, ptuDireccionInArg: any, ptuReplicarDireccionInArg: boolean,
        ptupuNumIdentificacionInArg: string, ptupuevcTipoIdentificacionInArg: any, ptupuagrPaisInArg: any,
        ptuDireccionUsuarioInArg: any): Promise<void> {
        const request: {
            p_thisusuario_oid: any, pt_p_primernombre: string | null, pt_p_segundonombre: string | null,
            pt_p_primerapellido: string | null, pt_p_segundoapellido: string | null, pt_p_fechanacimiento: string,
            pt_p_genero: string, pt_p_indicadorextranjero: boolean, pt_p_telefonofijo: string | null,
            pt_p_telefonocelular: string | null, pt_p_correoelectronico: string | null, pt_p_evcdepartamentonac_json: any,
            pt_p_evcmunicipionac_json: any, pt_p_evcestadocivil_json: any, pt_p_direccioncompleta: string, pt_p_rural: boolean,
            pt_p_evcdepartamento_json: any, pt_p_evcmunicipio_json: any, pt_direccion_json: any, pt_replicardireccion: boolean,
            pt_p_numidentificacion: string, pt_p_evctipoidentificacion_json: any, pt_p_agrpais_json: any, pt_direccionusuario_json: any
        } = {
            p_thisusuario_oid: puthisUsuarioInArg, pt_p_primernombre: ptupuPrimerNombreInArg,
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
            pt_direccion_json: ptuDireccionInArg ? JSON.stringify(ptuDireccionInArg) : '',
            pt_replicardireccion: ptuReplicarDireccionInArg, pt_p_numidentificacion: ptupuNumIdentificacionInArg,
            pt_p_evctipoidentificacion_json: ptupuevcTipoIdentificacionInArg ? JSON.stringify(ptupuevcTipoIdentificacionInArg) : '',
            pt_p_agrpais_json: ptupuagrPaisInArg ? JSON.stringify(ptupuagrPaisInArg) : '',
            pt_direccionusuario_json: ptuDireccionUsuarioInArg ? JSON.stringify(ptuDireccionUsuarioInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODUSUARIOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAROMODANEXOMAT' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioInArg Mandatory argument 'p_thisUsuario'. Oid of 'Usuario' class
     * @param ptupuatrFechaUltReglaInArg Mandatory argument 'pt_p_atrFechaUltRegla'
     * @param ptupuatrNumCuotasInArg Mandatory argument 'pt_p_atrNumCuotas'
     * @param ptuInstitucionMatInArg Mandatory argument 'pt_InstitucionMat'. Oid of 'InstitucionMatNeo' class
     */
    public tCREAROMODANEXOMAT(
        puthisUsuarioInArg: any, ptupuatrFechaUltReglaInArg: Date, ptupuatrNumCuotasInArg: number,
        ptuInstitucionMatInArg: any): Promise<void> {
        const request: {
            p_thisusuario_oid: any, pt_p_atrfechaultregla: string, pt_p_atrnumcuotas: number, pt_institucionmat_json: any
        } = {
            p_thisusuario_oid: puthisUsuarioInArg,
            pt_p_atrfechaultregla: ptupuatrFechaUltReglaInArg ? JsonUtility.date2Json(ptupuatrFechaUltReglaInArg) : '',
            pt_p_atrnumcuotas: ptupuatrNumCuotasInArg,
            pt_institucionmat_json: ptuInstitucionMatInArg ? JSON.stringify(ptuInstitucionMatInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREAROMODANEXOMATSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAROMODANEXONEO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioInArg Mandatory argument 'p_thisUsuario'. Oid of 'Usuario' class
     * @param ptupuatrFechaUltReglaInArg Mandatory argument 'pt_p_atrFechaUltRegla'
     * @param ptupuatrNumHijosInArg Mandatory argument 'pt_p_atrNumHijos'
     * @param ptupuatrNumCuotasInArg Mandatory argument 'pt_p_atrNumCuotas'
     * @param ptuInstitucionNeoInArg Mandatory argument 'pt_InstitucionNeo'. Oid of 'InstitucionMatNeo' class
     */
    public tCREAROMODANEXONEO(
        puthisUsuarioInArg: any, ptupuatrFechaUltReglaInArg: Date, ptupuatrNumHijosInArg: number, ptupuatrNumCuotasInArg: number,
        ptuInstitucionNeoInArg: any): Promise<void> {
        const request: {
            p_thisusuario_oid: any, pt_p_atrfechaultregla: string, pt_p_atrnumhijos: number, pt_p_atrnumcuotas: number,
            pt_institucionneo_json: any
        } = {
            p_thisusuario_oid: puthisUsuarioInArg,
            pt_p_atrfechaultregla: ptupuatrFechaUltReglaInArg ? JsonUtility.date2Json(ptupuatrFechaUltReglaInArg) : '',
            pt_p_atrnumhijos: ptupuatrNumHijosInArg, pt_p_atrnumcuotas: ptupuatrNumCuotasInArg,
            pt_institucionneo_json: ptuInstitucionNeoInArg ? JSON.stringify(ptuInstitucionNeoInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREAROMODANEXONEOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
