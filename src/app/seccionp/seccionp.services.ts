import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'SeccionP'
 */
export class SeccionPServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'SeccionP');
    }

    /**
     * @param oidCuestionario Oid of related 'CuestionarioP' instance using the role 'Cuestionario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCuestionario(
        oidCuestionario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCuestionario, 'Cuestionario');
    }
}
