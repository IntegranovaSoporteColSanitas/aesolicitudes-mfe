import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Ae_solicitudes'
 */
export class AeusolicitudesServices extends AbstractServices {

    private tNUEVAAFILIACIONSrvName = 'TNUEVAAFILIACION';
    private tINCLUSIONSCSrvName = 'TINCLUSIONSC';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Ae_solicitudes');
    }

    /**
     * @param oidProductoT Oid of related 'Productos' instance using the role 'ProductoT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProductoT(
        oidProductoT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProductoT, 'ProductoT');
    }

    /**
     * @param oidPlanT Oid of related 'Planes' instance using the role 'PlanT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlanT(
        oidPlanT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlanT, 'PlanT');
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
     * Call to the service 'TNUEVAAFILIACION' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrProductoInArg Mandatory argument 'pt_p_agrProducto'. Oid of 'Productos' class
     * @param ptupuagrPlanInArg Mandatory argument 'pt_p_agrPlan'. Oid of 'Planes' class
     * @param ptuProteccionDatosInArg Mandatory argument 'pt_ProteccionDatos'. Oid of 'ProteccionDatos' class
     * @param ptupuagrGrupoAsociadoInArg Optional argument 'pt_p_agrGrupoAsociado'. Oid of 'GrupoAsociado' class
     * @param ptupuatrFInicioContratoInArg Optional argument 'pt_p_atrFInicioContrato'
     * @param ptupuatrEsTrasladoInArg Mandatory argument 'pt_p_atrEsTraslado'
     * @param pDirectorInArg Mandatory argument 'pDirector'. Oid of 'Asesor' class
     * @param ptProrrateoInArg Optional argument 'ptProrrateo'. Oid of 'Prorrateo' class
     * @param ptTipoFacturaInArg Mandatory argument 'ptTipoFactura'. Oid of 'TipoFactura' class
     * @param ptMarcaCarnetInArg Mandatory argument 'ptMarcaCarnet'
     * @param ptAvisoMarcaCarnetInArg Mandatory argument 'ptAvisoMarcaCarnet'
     * @param ptSoloDiaUnoInArg Mandatory argument 'ptSoloDiaUno'
     */
    public tNUEVAAFILIACION(
        ptupuagrProductoInArg: any, ptupuagrPlanInArg: any, ptuProteccionDatosInArg: any, ptupuagrGrupoAsociadoInArg: any,
        ptupuatrFInicioContratoInArg: Date | null, ptupuatrEsTrasladoInArg: boolean, pDirectorInArg: any, ptProrrateoInArg: any,
        ptTipoFacturaInArg: any, ptMarcaCarnetInArg: boolean, ptAvisoMarcaCarnetInArg: string, ptSoloDiaUnoInArg: boolean):
        Promise<{
            pt_ps_solicitud: any
        }> {
        const request: {
            pt_p_agrproducto_json: any, pt_p_agrplan_json: any, pt_protecciondatos_oid: any, pt_p_agrgrupoasociado_oid: any,
            pt_p_atrfiniciocontrato: string | null, pt_p_atrestraslado: boolean, pdirector_oid: any, ptprorrateo_json: any,
            pttipofactura_json: any, ptmarcacarnet: boolean, ptavisomarcacarnet: string, ptsolodiauno: boolean
        } = {
            pt_p_agrproducto_json: ptupuagrProductoInArg ? JSON.stringify(ptupuagrProductoInArg) : '',
            pt_p_agrplan_json: ptupuagrPlanInArg ? JSON.stringify(ptupuagrPlanInArg) : '',
            pt_protecciondatos_oid: ptuProteccionDatosInArg, pt_p_agrgrupoasociado_oid: ptupuagrGrupoAsociadoInArg,
            pt_p_atrfiniciocontrato: ptupuatrFInicioContratoInArg ? JsonUtility.date2Json(ptupuatrFInicioContratoInArg) : '',
            pt_p_atrestraslado: ptupuatrEsTrasladoInArg, pdirector_oid: pDirectorInArg,
            ptprorrateo_json: ptProrrateoInArg ? JSON.stringify(ptProrrateoInArg) : '',
            pttipofactura_json: ptTipoFacturaInArg ? JSON.stringify(ptTipoFacturaInArg) : '', ptmarcacarnet: ptMarcaCarnetInArg,
            ptavisomarcacarnet: ptAvisoMarcaCarnetInArg, ptsolodiauno: ptSoloDiaUnoInArg
        };
        return new Promise<{
            pt_ps_solicitud: any
        }> ((resolve, reject) => {
            this.callService(this.tNUEVAAFILIACIONSrvName, request).then((response: any) => {
                resolve({
                    pt_ps_solicitud: response.pt_ps_solicitud
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TINCLUSIONSC' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrProductoInArg Mandatory argument 'pt_p_agrProducto'. Oid of 'Productos' class
     * @param ptupuagrPlanInArg Mandatory argument 'pt_p_agrPlan'. Oid of 'Planes' class
     * @param ptuProteccionDatosInArg Mandatory argument 'pt_ProteccionDatos'. Oid of 'ProteccionDatos' class
     * @param ptupuatrFInicioContratoInArg Optional argument 'pt_p_atrFInicioContrato'
     * @param ptupuatrNumContratoInclusionInArg Mandatory argument 'pt_p_atrNumContratoInclusion'
     * @param ptupuatrNumFamiliaInArg Optional argument 'pt_p_atrNumFamilia'
     * @param pDirectorInArg Mandatory argument 'pDirector'. Oid of 'Asesor' class
     * @param ptMarcaCarnetInArg Mandatory argument 'ptMarcaCarnet'
     * @param ptAvisoMarcaCarnetInArg Mandatory argument 'ptAvisoMarcaCarnet'
     * @param ptSoloDiaUnoInArg Mandatory argument 'ptSoloDiaUno'
     */
    public tINCLUSIONSC(
        ptupuagrProductoInArg: any, ptupuagrPlanInArg: any, ptuProteccionDatosInArg: any, ptupuatrFInicioContratoInArg: Date | null,
        ptupuatrNumContratoInclusionInArg: string, ptupuatrNumFamiliaInArg: string | null, pDirectorInArg: any,
        ptMarcaCarnetInArg: boolean, ptAvisoMarcaCarnetInArg: string, ptSoloDiaUnoInArg: boolean):
        Promise<{
            pt_ps_solicitud: any
        }> {
        const request: {
            pt_p_agrproducto_json: any, pt_p_agrplan_json: any, pt_protecciondatos_oid: any, pt_p_atrfiniciocontrato: string | null,
            pt_p_atrnumcontratoinclusion: string, pt_p_atrnumfamilia: string | null, pdirector_oid: any, ptmarcacarnet: boolean,
            ptavisomarcacarnet: string, ptsolodiauno: boolean
        } = {
            pt_p_agrproducto_json: ptupuagrProductoInArg ? JSON.stringify(ptupuagrProductoInArg) : '',
            pt_p_agrplan_json: ptupuagrPlanInArg ? JSON.stringify(ptupuagrPlanInArg) : '',
            pt_protecciondatos_oid: ptuProteccionDatosInArg,
            pt_p_atrfiniciocontrato: ptupuatrFInicioContratoInArg ? JsonUtility.date2Json(ptupuatrFInicioContratoInArg) : '',
            pt_p_atrnumcontratoinclusion: ptupuatrNumContratoInclusionInArg, pt_p_atrnumfamilia: ptupuatrNumFamiliaInArg,
            pdirector_oid: pDirectorInArg, ptmarcacarnet: ptMarcaCarnetInArg, ptavisomarcacarnet: ptAvisoMarcaCarnetInArg,
            ptsolodiauno: ptSoloDiaUnoInArg
        };
        return new Promise<{
            pt_ps_solicitud: any
        }> ((resolve, reject) => {
            this.callService(this.tINCLUSIONSCSrvName, request).then((response: any) => {
                resolve({
                    pt_ps_solicitud: response.pt_ps_solicitud
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
