import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from './app.cachedependencyrules';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { Util } from './app.utils';
import { UserFunctions } from './userFunctions';
import { StandardFunctions } from './standardFunctions';

/**
 * Conditional navigation manager
 * Handles all conditional navigation defined in the model
 */
@Injectable({providedIn: 'root'})
export class ConditionalNavigationMng {

    /** Cache for queries */
    private queriesCache: CacheDependencyRules;

    constructor(private readonly appGlobalInfo: AppGlobalInfo, private readonly util: Util, private readonly stdFun: StandardFunctions,
                private readonly usrFunc: UserFunctions) {
        this.queriesCache = new CacheDependencyRules(this.appGlobalInfo, this.util);
     }

    /**
     * Process the conditional navigation
     * @param className Class name
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    public processConditionalNavigation(className: string, serviceName: string, request: any, response: any, previousContext: any,
                                        comeBackContext: any): boolean {

        this.appGlobalInfo.appExchangeInfo.clearConditionalNavigation();

        switch (className) {
            case 'Ae_solicitudes':
                return this.processCondNavaeusolicitudes(serviceName, request, response, previousContext, comeBackContext);
            case 'Solicitud':
                return this.processCondNavsolicitud(serviceName, request, response, previousContext, comeBackContext);
            case 'ProteccionDatos':
                return this.processCondNavprotecciondatos(serviceName, request, response, previousContext, comeBackContext);
            case 'Usuario':
                return this.processCondNavusuario(serviceName, request, response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Ae_solicitudes
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavaeusolicitudes(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'TNUEVAAFILIACION') {
            return this.condNavAeusolicitudesTNUEVAAFILIACION(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Solicitud
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavsolicitud(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'dummy_Redirigir') {
            return this.condNavSolicituddummyuRedirigir(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TMOSTRARDOCUMENTOS') {
            return this.condNavSolicitudTMOSTRARDOCUMENTOS(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class ProteccionDatos
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavprotecciondatos(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'TCREARPROTECCIONDATOSNA') {
            return this.condNavProteccionDatosTCREARPROTECCIONDATOSNA(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Usuario
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavusuario(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'showCuesMedico') {
            return this.condNavUsuarioshowCuesMedico(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }


    /**
     * Manages the conditional navigation of service TNUEVAAFILIACION of class Ae_solicitudes
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavAeusolicitudesTNUEVAAFILIACION(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
            'Gestor', 'MesaDeApoyo'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                ModelConstants.Solicitud.mdiuunuevaafiliacion, previousContext, comeBackContext);
            exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
            exchInfo.selectedOids = [
                this.util.oidBuilder.buildOidSolicitud(response.pt_ps_solicitud.id_solicitud)];
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service dummy_Redirigir of class Solicitud
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicituddummyuRedirigir(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.p_thissolicitud_oid) {
            this.queriesCache.addQueryInstance(ModelConstants.Solicitud.name, request.p_thissolicitud_oid,
                'Tramite,tipoContrato');
        }
        this.queriesCache.searchAll().then(() => {
        let varputhissolicitud!: InstanceCache;
        if (request.p_thissolicitud_oid) {
            varputhissolicitud = this.queriesCache.getInstance(ModelConstants.Solicitud.name, request.p_thissolicitud_oid);
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // p_thisSolicitud.Tramite = 1
            if (this.util.valueEquals(this.util.getInt(varputhissolicitud.get('Tramite')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuunuevaafiliacion, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitud_oid];
                this.util.navigateTo(exchInfo);
            }
            // p_thisSolicitud.Tramite = 2 AND p_thisSolicitud.tipoContrato = 1
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varputhissolicitud.get('Tramite')), 2) &&
                this.util.valueEquals(this.util.getInt(varputhissolicitud.get('tipoContrato')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuuinclusionfamiliar, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitud_oid];
                this.util.navigateTo(exchInfo);
            }
            // p_thisSolicitud.Tramite = 2 AND p_thisSolicitud.tipoContrato = 3
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varputhissolicitud.get('Tramite')), 2) &&
                this.util.valueEquals(this.util.getInt(varputhissolicitud.get('tipoContrato')), 3) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuuinclusioncolectivo, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitud_oid];
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service TMOSTRARDOCUMENTOS of class Solicitud
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicitudTMOSTRARDOCUMENTOS(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Afiliaciones'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Documentog.name,
                ModelConstants.Documentog.piuudocumentog, previousContext, comeBackContext);
            exchInfo.navigationalFilterIdentity = ['Clas_1431957012480960FiltNav_21'];
            exchInfo.navigationalFilterVariables = [];
            exchInfo.navigationalFilterVariables.push({ name: 'p_thissolicitud', value: request.p_thissolicitud_oid });
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service TCREARPROTECCIONDATOSNA of class ProteccionDatos
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavProteccionDatosTCREARPROTECCIONDATOSNA(
        request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Aeusolicitudes.name,
                ModelConstants.Aeusolicitudes.siuutnuevaafiliacion, previousContext, comeBackContext);
            // pt_ProteccionDatos
            exchInfo.customData.pt_protecciondatos = this.util.oidBuilder.buildOidProteccionDatos(response.ps_thispd.identificador);
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service showCuesMedico of class Usuario
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavUsuarioshowCuesMedico(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['SuperAdmin'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Cuestionariop.name,
                ModelConstants.Cuestionariop.iiuucuestionario, previousContext, comeBackContext);
            exchInfo.selectedOidsClassName = ModelConstants.Cuestionariop.name;
            exchInfo.selectedOids = [
                this.util.oidBuilder.buildOidCuestionarioP(response.ps_cuesmedico.numero)];
            this.util.navigateTo(exchInfo);
        }
        return true;
    }
}
