import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'CuestionarioP' »
 */
export class CuestionarioPServices extends AbstractServices {

    private tCERRARSrvName = 'TCERRAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'CuestionarioP');
    }

    /**
     * @param oidUsuario Oid of related 'Usuario' instance using the role 'Usuario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuario(
        oidUsuario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuario, 'Usuario');
    }

    /**
     * Call to the service 'TCERRAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisCuestionarioPInArg Mandatory argument 'p_thisCuestionarioP'. Oid of 'CuestionarioP' class
     */
    public tCERRAR(
        puthisCuestionarioPInArg: any): Promise<void> {
        const request: {
            p_thiscuestionariop_oid: any
        } = {
            p_thiscuestionariop_oid: puthisCuestionarioPInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCERRARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
