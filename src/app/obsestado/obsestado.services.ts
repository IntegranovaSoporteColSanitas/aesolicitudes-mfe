import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ObsEstado'
 */
export class ObsEstadoServices extends AbstractServices {

    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ObsEstado');
    }

    /**
     * @param oidDocumentoG Oid of related 'DocumentoG' instance using the role 'DocumentoG'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentoG(
        oidDocumentoG: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentoG, 'DocumentoG');
    }

    /**
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisObsEstadoInArg Mandatory argument 'p_thisObsEstado'. Oid of 'ObsEstado' class
     * @param puObservacionsInArg Optional argument 'p_Observacions'
     */
    public modificar(
        puthisObsEstadoInArg: any, puObservacionsInArg: string | null): Promise<void> {
        const request: {
            p_thisobsestado_oid: any, p_observacions: string | null
        } = {
            p_thisobsestado_oid: puthisObsEstadoInArg, p_observacions: puObservacionsInArg
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
