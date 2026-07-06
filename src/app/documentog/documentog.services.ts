import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'DocumentoG' »
 */
export class DocumentoGServices extends AbstractServices {

    private previsualizarATOSrvName = 'previsualizarATO';
    private tAPROBARSrvName = 'TAPROBAR';
    private tDEVOLVERSrvName = 'TDEVOLVER';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'DocumentoG');
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
     * @param oidPersona Oid of related 'Persona' instance using the role 'Persona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPersona(
        oidPersona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPersona, 'Persona');
    }

    /**
     * @param oidObsEstado Oid of related 'ObsEstado' instance using the role 'ObsEstado'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedObsEstado(
        oidObsEstado: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidObsEstado, 'ObsEstado');
    }

    /**
     * Call to the service 'previsualizarATO' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoGInArg Mandatory argument 'p_thisDocumentoG'. Oid of 'DocumentoG' class
     */
    public previsualizarATO(
        puthisDocumentoGInArg: any):
        Promise<{
            oatoken: string,
            oaurldescarga: string,
            oanumsolicitud: string
        }> {
        const request: {
            p_thisdocumentog_oid: any
        } = {
            p_thisdocumentog_oid: puthisDocumentoGInArg
        };
        return new Promise<{
            oatoken: string,
            oaurldescarga: string,
            oanumsolicitud: string
        }> ((resolve, reject) => {
            this.callService(this.previsualizarATOSrvName, request).then((response: any) => {
                resolve({
                    oatoken: response.oatoken,
                    oaurldescarga: response.oaurldescarga,
                    oanumsolicitud: response.oanumsolicitud
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TAPROBAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoGInArg Mandatory argument 'p_thisDocumentoG'. Oid of 'DocumentoG' class
     * @param ptupuatrObservacionsInArg Optional argument 'pt_p_atrObservacions'
     */
    public tAPROBAR(
        puthisDocumentoGInArg: any, ptupuatrObservacionsInArg: string | null): Promise<void> {
        const request: {
            p_thisdocumentog_oid: any, pt_p_atrobservacions: string | null
        } = {
            p_thisdocumentog_oid: puthisDocumentoGInArg, pt_p_atrobservacions: ptupuatrObservacionsInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tAPROBARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDEVOLVER' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoGInArg Mandatory argument 'p_thisDocumentoG'. Oid of 'DocumentoG' class
     * @param ptupuatrObservacionsInArg Optional argument 'pt_p_atrObservacions'
     */
    public tDEVOLVER(
        puthisDocumentoGInArg: any, ptupuatrObservacionsInArg: string | null):
        Promise<{
            oaplantilla: any
        }> {
        const request: {
            p_thisdocumentog_oid: any, pt_p_atrobservacions: string | null
        } = {
            p_thisdocumentog_oid: puthisDocumentoGInArg, pt_p_atrobservacions: ptupuatrObservacionsInArg
        };
        return new Promise<{
            oaplantilla: any
        }> ((resolve, reject) => {
            this.callService(this.tDEVOLVERSrvName, request).then((response: any) => {
                resolve({
                    oaplantilla: response.oaplantilla
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
