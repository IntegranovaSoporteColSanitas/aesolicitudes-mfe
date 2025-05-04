import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TipoIVA'
 */
export class TipoIVAServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoIVA');
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
}
