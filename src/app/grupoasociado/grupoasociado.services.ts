import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'GrupoAsociado'
 */
export class GrupoAsociadoServices extends AbstractServices {

    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GrupoAsociado');
    }

    /**
     * Call to the filter 'F_GrupoAsociadoVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vouPlanVar Variable vo_Plan
     * @param vuFIniVar Variable v_FIni
     * @param vuFFinVar Variable v_FFin
     */
    public queryByFilterFuGrupoAsociadoVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vouPlanVar: any, vuFIniVar: Date | null, vuFFinVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_GrupoAsociadoVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'vo_plan', vouPlanVar);
        this.util.addFilterVariable(filter, 'v_fini', JsonUtility.date2Json(vuFIniVar));
        this.util.addFilterVariable(filter, 'v_ffin', JsonUtility.date2Json(vuFFinVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_GrupoAsociado_Busqueda' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vuCodigoLegalVar Variable v_CodigoLegal
     * @param vuDescripcionVar Variable v_Descripcion
     */
    public queryByFilterFuGrupoAsociadouBusqueda(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vuCodigoLegalVar: string | null, vuDescripcionVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_GrupoAsociado_Busqueda');
        this.util.addFilterVariable(filter, 'v_codigolegal', vuCodigoLegalVar);
        this.util.addFilterVariable(filter, 'v_descripcion', vuDescripcionVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidSolicitudes Oid of related 'Solicitud' instance using the role 'Solicitudes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSolicitudes(
        oidSolicitudes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSolicitudes, 'Solicitudes');
    }

    /**
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisGrupoAsociadoInArg Mandatory argument 'p_thisGrupoAsociado'. Oid of 'GrupoAsociado' class
     * @param puDisminucionCarenciaInArg Mandatory argument 'p_DisminucionCarencia'
     */
    public modificar(
        puthisGrupoAsociadoInArg: any, puDisminucionCarenciaInArg: number): Promise<void> {
        const request: {
            p_thisgrupoasociado_oid: any, p_disminucioncarencia: number
        } = {
            p_thisgrupoasociado_oid: puthisGrupoAsociadoInArg, p_disminucioncarencia: puDisminucionCarenciaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
