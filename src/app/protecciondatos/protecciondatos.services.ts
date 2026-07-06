import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'ProteccionDatos' »
 */
export class ProteccionDatosServices extends AbstractServices {

    private tCREARPROTECCIONDATOSNASrvName = 'TCREARPROTECCIONDATOSNA';
    private tCREARPROTECCIONDATOSINCSrvName = 'TCREARPROTECCIONDATOSINC';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ProteccionDatos');
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
     * Call to the service 'TCREARPROTECCIONDATOSNA' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptTextoInArg Optional argument 'ptTexto'
     */
    public tCREARPROTECCIONDATOSNA(
        ptTextoInArg: string | null):
        Promise<{
            ps_thispd: any
        }> {
        const request: {
            pttexto: string | null
        } = {
            pttexto: ptTextoInArg
        };
        return new Promise<{
            ps_thispd: any
        }> ((resolve, reject) => {
            this.callService(this.tCREARPROTECCIONDATOSNASrvName, request).then((response: any) => {
                resolve({
                    ps_thispd: response.ps_thispd
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREARPROTECCIONDATOSINC' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptTextoInArg Optional argument 'ptTexto'
     */
    public tCREARPROTECCIONDATOSINC(
        ptTextoInArg: string | null):
        Promise<{
            ps_thispd: any
        }> {
        const request: {
            pttexto: string | null
        } = {
            pttexto: ptTextoInArg
        };
        return new Promise<{
            ps_thispd: any
        }> ((resolve, reject) => {
            this.callService(this.tCREARPROTECCIONDATOSINCSrvName, request).then((response: any) => {
                resolve({
                    ps_thispd: response.ps_thispd
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
