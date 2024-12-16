import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Global services
 */
export class GlobalServicesServices extends AbstractServices {

    private tGSELECCONTRATOASOCSrvName = 'TGSELECCONTRATOASOC';
    private tGSELECCONTRATOASOCTITSrvName = 'TGSELECCONTRATOASOCTIT';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GlobalServices');
    }

    /**
     * Call to the service 'TGSELECCONTRATOASOC' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puSolicitudInArg Mandatory argument 'p_Solicitud'. Oid of 'Solicitud' class
     * @param ptNumContratoInArg Mandatory argument 'ptNumContrato'
     * @param ptCodLegalProductoInArg Mandatory argument 'ptCodLegalProducto'
     * @param ptCodLegalPlanInArg Mandatory argument 'ptCodLegalPlan'
     * @param ptNumFamiliaInArg Mandatory argument 'ptNumFamilia'
     */
    public tGSELECCONTRATOASOC(
        puSolicitudInArg: any, ptNumContratoInArg: string, ptCodLegalProductoInArg: string, ptCodLegalPlanInArg: string,
        ptNumFamiliaInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_solicitud_oid: any, ptnumcontrato: string, ptcodlegalproducto: string, ptcodlegalplan: string, ptnumfamilia: string
        } = {
            p_solicitud_oid: puSolicitudInArg, ptnumcontrato: ptNumContratoInArg, ptcodlegalproducto: ptCodLegalProductoInArg,
            ptcodlegalplan: ptCodLegalPlanInArg, ptnumfamilia: ptNumFamiliaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSELECCONTRATOASOCSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSELECCONTRATOASOCTIT' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuSolicitudInArg Mandatory argument 'pt_p_Solicitud'. Oid of 'Solicitud' class
     * @param ptContratoXClassInArg Optional argument 'ptContratoXClass'
     * @param ptNumContratoInArg Optional argument 'ptNumContrato'
     * @param ptCodLegalProductoInArg Optional argument 'ptCodLegalProducto'
     * @param ptCodLegalPlanInArg Optional argument 'ptCodLegalPlan'
     * @param ptNumFamiliaInArg Optional argument 'ptNumFamilia'
     */
    public tGSELECCONTRATOASOCTIT(
        ptupuSolicitudInArg: any, ptContratoXClassInArg: string, ptNumContratoInArg: string, ptCodLegalProductoInArg: string,
        ptCodLegalPlanInArg: string, ptNumFamiliaInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_solicitud_oid: any, ptcontratoxclass: string, ptnumcontrato: string, ptcodlegalproducto: string,
            ptcodlegalplan: string, ptnumfamilia: string
        } = {
            pt_p_solicitud_oid: ptupuSolicitudInArg, ptcontratoxclass: ptContratoXClassInArg, ptnumcontrato: ptNumContratoInArg,
            ptcodlegalproducto: ptCodLegalProductoInArg, ptcodlegalplan: ptCodLegalPlanInArg, ptnumfamilia: ptNumFamiliaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSELECCONTRATOASOCTITSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
