import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Seccion'
 */
export class SeccionServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Seccion');
    }

    /**
     * @param oidPreguntas Oid of related 'Pregunta' instance using the role 'Preguntas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPreguntas(
        oidPreguntas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPreguntas, 'Preguntas');
    }
}
