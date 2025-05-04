import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Planes'
 */
export class PlanesServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Planes');
    }

    /**
     * Call to the filter 'F_PlanVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vuNombreVar Variable v_Nombre
     * @param vuEsBancoRepVar Variable v_EsBancoRep
     * @param vEsVoluntarioVar Variable vEsVoluntario
     */
    public queryByFilterFuPlanVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vuNombreVar: string | null, vuEsBancoRepVar: boolean | null,
        vEsVoluntarioVar: boolean | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_PlanVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'v_nombre', vuNombreVar);
        this.util.addFilterVariable(filter, 'v_esbancorep', vuEsBancoRepVar);
        this.util.addFilterVariable(filter, 'vesvoluntario', vEsVoluntarioVar);
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
     * @param oidGruposAsociados Oid of related 'GrupoAsociado' instance using the role 'GruposAsociados'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGruposAsociados(
        oidGruposAsociados: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGruposAsociados, 'GruposAsociados');
    }

    /**
     * @param oidAESOLICITUDES Oid of related 'Ae_solicitudes' instance using the role 'AE_SOLICITUDES'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAESOLICITUDES(
        oidAESOLICITUDES: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAESOLICITUDES, 'AE_SOLICITUDES');
    }
}
