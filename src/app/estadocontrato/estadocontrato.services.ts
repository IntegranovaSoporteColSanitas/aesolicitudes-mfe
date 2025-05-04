import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'EstadoContrato'
 */
export class EstadoContratoServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'EstadoContrato');
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
