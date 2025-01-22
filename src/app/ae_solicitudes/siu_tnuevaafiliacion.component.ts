import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection, FieldOVLense, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-ae-solicitudes-siu-tnuevaafiliacion',
    templateUrl: './siu_tnuevaafiliacion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AeusolicitudesSIUuTNUEVAAFILIACIONComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrProducto: FieldOVPreload;
    public ptupuagrPlan: FieldOVPreload;
    public ptuProteccionDatos: FieldOVLense;
    public ptupuagrGrupoAsociado: FieldOVLenseSearch;
    public ptupuatrFInicioContrato: Field;
    public ptupuatrEsTraslado: FieldDefinedSelection;
    public pDirector: FieldOVLenseSearch;
    public ptProrrateo: FieldOVPreload;
    public ptTipoFactura: FieldOVPreload;
    public ptMarcaCarnet: FieldDefinedSelection;
    public ptAvisoMarcaCarnet: Field;
    public ptSoloDiaUno: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     * @param usrFunc User functions
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1431956094976663Ser_9UIServ_1';
        this.className = ModelConstants.Aeusolicitudes.name;
        this.iuName = ModelConstants.Aeusolicitudes.siuutnuevaafiliacion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor']));
        this.serviceName = 'TNUEVAAFILIACION';
        this.title = this.langMng.translateText('cls_Ae_solicitudes_svc_TNUEVAAFILIACION',
            'Nueva afiliación');

        // Create inbound argument components
        this.ptupuagrProducto = new FieldOVPreload(this.langMng);
        this.ptupuagrPlan = new FieldOVPreload(this.langMng);
        this.ptuProteccionDatos = new FieldOVLense(this.langMng);
        this.ptupuagrGrupoAsociado = new FieldOVLenseSearch(this.langMng);
        this.ptupuatrFInicioContrato = new Field(this.langMng);
        this.ptupuatrEsTraslado = new FieldDefinedSelection(this.langMng);
        this.pDirector = new FieldOVLenseSearch(this.langMng);
        this.ptProrrateo = new FieldOVPreload(this.langMng);
        this.ptTipoFactura = new FieldOVPreload(this.langMng);
        this.ptMarcaCarnet = new FieldDefinedSelection(this.langMng);
        this.ptAvisoMarcaCarnet = new Field(this.langMng);
        this.ptSoloDiaUno = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrProducto.nameInRequest = 'pt_p_agrproducto';
        this.ptupuagrProducto.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pt_p_agrProducto',
            'Producto');
        this.ptupuagrProducto.mandatory = true;
        this.ptupuagrProducto.dataType = ModelConstants.Productos.name;
        this.ptupuagrProducto.maxLength = 100;
        this.ptupuagrProducto.assignCSS();
        this.fields.push(this.ptupuagrProducto);

        this.ptupuagrPlan.nameInRequest = 'pt_p_agrplan';
        this.ptupuagrPlan.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pt_p_agrPlan',
            'Plan');
        this.ptupuagrPlan.mandatory = true;
        this.ptupuagrPlan.dataType = ModelConstants.Planes.name;
        this.ptupuagrPlan.maxLength = 150;
        this.ptupuagrPlan.assignCSS();
        this.fields.push(this.ptupuagrPlan);

        this.ptuProteccionDatos.nameInRequest = 'pt_protecciondatos';
        this.ptuProteccionDatos.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pt_ProteccionDatos',
            'Protección Datos');
        this.ptuProteccionDatos.mandatory = true;
        this.ptuProteccionDatos.dataType = ModelConstants.Protecciondatos.name;
        this.ptuProteccionDatos.oidFields = Array(1);
        this.ptuProteccionDatos.oidFieldsTypes = ['autonumerico'];
        this.ptuProteccionDatos.assignCSS();
        this.fields.push(this.ptuProteccionDatos);

        this.ptupuagrGrupoAsociado.nameInRequest = 'pt_p_agrgrupoasociado';
        this.ptupuagrGrupoAsociado.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pt_p_agrGrupoAsociado',
            'Grupo asociado');
        this.ptupuagrGrupoAsociado.mandatory = false;
        this.ptupuagrGrupoAsociado.dataType = ModelConstants.Grupoasociado.name;
        this.ptupuagrGrupoAsociado.maxLength = 200;
        this.ptupuagrGrupoAsociado.assignCSS();
        this.fields.push(this.ptupuagrGrupoAsociado);

        this.ptupuatrFInicioContrato.nameInRequest = 'pt_p_atrfiniciocontrato';
        this.ptupuatrFInicioContrato.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pt_p_atrFInicioContrato',
            'Fecha inicio contratación');
        this.ptupuatrFInicioContrato.mandatory = false;
        this.ptupuatrFInicioContrato.dataType = Field.dtDate;
        this.ptupuatrFInicioContrato.assignCSS();
        this.fields.push(this.ptupuatrFInicioContrato);

        this.ptupuatrEsTraslado.nameInRequest = 'pt_p_atrestraslado';
        this.ptupuatrEsTraslado.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pt_p_atrEsTraslado',
            'Es traslado');
        this.ptupuatrEsTraslado.mandatory = true;
        this.ptupuatrEsTraslado.dataType = Field.dtBool;
        this.ptupuatrEsTraslado.options = DefinedSelections.DS_SINO;
        this.ptupuatrEsTraslado.assignCSS();
        this.fields.push(this.ptupuatrEsTraslado);

        this.pDirector.nameInRequest = 'pdirector';
        this.pDirector.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_pDirector',
            'Director');
        this.pDirector.mandatory = true;
        this.pDirector.dataType = ModelConstants.Asesor.name;
        this.pDirector.maxLength = 150;
        this.pDirector.assignCSS();
        this.fields.push(this.pDirector);

        this.ptProrrateo.nameInRequest = 'ptprorrateo';
        this.ptProrrateo.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_ptProrrateo',
            'Porcentaje de prorrateo');
        this.ptProrrateo.mandatory = false;
        this.ptProrrateo.dataType = ModelConstants.Prorrateo.name;
        this.ptProrrateo.maxLength = 6;
        this.ptProrrateo.assignCSS();
        this.fields.push(this.ptProrrateo);

        this.ptTipoFactura.nameInRequest = 'pttipofactura';
        this.ptTipoFactura.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_ptTipoFactura',
            'Tipo Factura');
        this.ptTipoFactura.mandatory = true;
        this.ptTipoFactura.dataType = ModelConstants.Tipofactura.name;
        this.ptTipoFactura.maxLength = 50;
        this.ptTipoFactura.assignCSS();
        this.fields.push(this.ptTipoFactura);

        this.ptMarcaCarnet.nameInRequest = 'ptmarcacarnet';
        this.ptMarcaCarnet.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_ptMarcaCarnet',
            'Envío carnet físico');
        this.ptMarcaCarnet.mandatory = true;
        this.ptMarcaCarnet.dataType = Field.dtBool;
        this.ptMarcaCarnet.options = DefinedSelections.DS_SINO;
        this.ptMarcaCarnet.assignCSS();
        this.fields.push(this.ptMarcaCarnet);

        this.ptAvisoMarcaCarnet.nameInRequest = 'ptavisomarcacarnet';
        this.ptAvisoMarcaCarnet.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_ptAvisoMarcaCarnet',
            'ptAvisoMarcaCarnet');
        this.ptAvisoMarcaCarnet.mandatory = true;
        this.ptAvisoMarcaCarnet.dataType = Field.dtText;
        this.ptAvisoMarcaCarnet.assignCSS();
        this.ptAvisoMarcaCarnet.addCSSClass('cssAliasNoShow');
        this.fields.push(this.ptAvisoMarcaCarnet);

        this.ptSoloDiaUno.nameInRequest = 'ptsolodiauno';
        this.ptSoloDiaUno.alias = this.langMng.translateText(
            'cls_Ae_solicitudes_svc_TNUEVAAFILIACION_inArg_ptSoloDiaUno',
            'ptSoloDiaUno');
        this.ptSoloDiaUno.mandatory = true;
        this.ptSoloDiaUno.dataType = Field.dtBool;
        this.ptSoloDiaUno.assignCSS();
        this.fields.push(this.ptSoloDiaUno);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrEsTraslado
            const defValptupuatrEsTraslado = new Promise<void>((resolveDefValue) => {
                this.ptupuatrEsTraslado.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrEsTraslado);

            // ptMarcaCarnet
            const defValptMarcaCarnet = new Promise<void>((resolveDefValue) => {
                this.ptMarcaCarnet.setValue(false);
                this.executeDependecyRulesptmarcacarnet('SetValue', true);
                resolveDefValue();
            });
            promiseArr.push(defValptMarcaCarnet);

            // ptAvisoMarcaCarnet
            const defValptAvisoMarcaCarnet = new Promise<void>((resolveDefValue) => {
                this.ptAvisoMarcaCarnet.setValue('Recuerda informar al usuario que una vez el contrato o inclusión entren en vigencia, se le enviará a su correo electrónico con el kit de afiliación virtual y podrá consultar el carné en nuestra Oficina Virtual y/o App');
                resolveDefValue();
            });
            promiseArr.push(defValptAvisoMarcaCarnet);

            // ptSoloDiaUno
            const defValptSoloDiaUno = new Promise<void>((resolveDefValue) => {
                this.ptSoloDiaUno.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptSoloDiaUno);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'ProductoT') {
                this.ptupuagrProducto.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrproducto('SetValue', true);
                this.ptupuagrProducto.enabled = false;
                this.executeDependecyRulesptupuagrproducto('SetEnabled', true);
            }
            if (lastRole === 'PlanT') {
                this.ptupuagrPlan.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrplan('SetValue', true);
                this.ptupuagrPlan.enabled = false;
                this.executeDependecyRulesptupuagrplan('SetEnabled', true);
            }
            if (lastRole === 'ProteccionDatos') {
                this.ptuProteccionDatos.setValue(lastRoleOid);
                this.setOidFieldsValueptuProteccionDatos();
                this.executeDependecyRulesptuprotecciondatos('SetValue', true);
                this.ptuProteccionDatos.enabled = false;
                this.executeDependecyRulesptuprotecciondatos('SetEnabled', true);
            }
            if (lastRole === 'GrupoAsociado') {
                this.ptupuagrGrupoAsociado.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrgrupoasociado('SetValue', true);
                this.ptupuagrGrupoAsociado.enabled = false;
                this.executeDependecyRulesptupuagrgrupoasociado('SetEnabled', true);
            }
            if (lastRole === 'TipoFactura') {
                this.ptTipoFactura.setValue(lastRoleOid);
                this.ptTipoFactura.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrProducto
        const navFiltersptupuagrProducto: string[] = [];
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Asesor'])) {
            navFiltersptupuagrProducto.push('Ae_solicitudes_TNUEVAAFILIACION_pt_p_agrProducto_NavFilter0');
        }
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Productos', 'IC_Producto', navFiltersptupuagrProducto, this.getNavigationFilterVariables(), 'OC_Producto').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrProducto.loadPreload(response.results);
                } else {
                    this.ptupuagrProducto.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptTipoFactura
        const navFiltersptTipoFactura: string[] = [];
        navFiltersptTipoFactura.push('Ae_solicitudes_TNUEVAAFILIACION_ptTipoFactura_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoFactura', 'IC_TipoFactura', navFiltersptTipoFactura, this.getNavigationFilterVariables(), '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptTipoFactura.loadPreload(response.results);
                } else {
                    this.ptTipoFactura.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

    /**
     * Search the preload values of field pt_p_agrPlan
     */
    private loadPreloadptupuagrplan(): void {

        if (this.ptupuagrProducto.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Ae_solicitudes_TNUEVAAFILIACION_pt_p_agrPlan_NavFilter0');
            if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Asesor'])) {
                navFilters.push('Ae_solicitudes_TNUEVAAFILIACION_pt_p_agrPlan_NavFilter1');
            }
            this.util.searchPreload('Planes', 'IC_Plan', navFilters, this.getNavigationFilterVariables(), 'OC_Plan').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrPlan.loadPreload(response.results);
                    } else {
                        this.ptupuagrPlan.loadPreload([]);
                    }
                    if (this.ptupuagrPlan.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptupuagrplan('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrPlan.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptupuagrPlan.getSelectedInstances().length > 0) {
                this.ptupuagrPlan.cleanPreload();
                this.executeDependecyRulesptupuagrplan('SetValue', true);
            } else {
                this.ptupuagrPlan.cleanPreload();
            }
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field ptProrrateo
     */
    private loadPreloadptprorrateo(): void {

        if (this.ptupuagrPlan.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Ae_solicitudes_TNUEVAAFILIACION_ptProrrateo_NavFilter0');
            this.util.searchPreload('Prorrateo', 'IC_Prorrateo', navFilters, this.getNavigationFilterVariables(), 'OC_Prorrateo').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptProrrateo.loadPreload(response.results);
                    } else {
                        this.ptProrrateo.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptProrrateo.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptProrrateo.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptuProteccionDatos'.toLowerCase()) {
            this.ptuProteccionDatos.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptuProteccionDatos();
            this.executeDependecyRulesptuprotecciondatos('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrGrupoAsociado'.toLowerCase()) {
            this.ptupuagrGrupoAsociado.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrgrupoasociado('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pDirector'.toLowerCase()) {
            this.pDirector.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespdirector('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrProducto argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrproducto(event: string, internal: boolean): void {

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptupuagrplan();
        }
        if ('SetValue' === event && this.ptupuagrProducto.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrProducto();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrProducto();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrProducto argument
     */
    private executeDependecyRules1ptupuagrProducto(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'Plan');
        this.addQueryInstanceFromField(this.ptupuagrProducto,
                'Producto');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrProductoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrProducto argument
     */
    private executeDependecyRules1ptupuagrProductoActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        const varptupuagrproducto = this.getFirstInstanceFromCache(this.ptupuagrProducto);
        // v <> NULL AND pt_p_agrPlan <> NULL
        if (varptupuagrplan && varptupuagrproducto && !this.util.isNull(varptupuagrproducto) && !this.util.isNull(varptupuagrplan)) {
            // pt_p_agrGrupoAsociado.SetActive( true )
            this.ptupuagrGrupoAsociado.enabled = true;
            this.executeDependecyRulesptupuagrgrupoasociado('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrProducto argument
     */
    private executeDependecyRules2ptupuagrProducto(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrProducto,
                'Producto');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrProductoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrProducto argument
     */
    private executeDependecyRules2ptupuagrProductoActions(): void {
        const varptupuagrproducto = this.getFirstInstanceFromCache(this.ptupuagrProducto);
        // v = NULL
        if (varptupuagrproducto && this.util.isNull(varptupuagrproducto)) {
            // pt_p_agrGrupoAsociado.SetValue( NULL )
            this.ptupuagrGrupoAsociado.setValue(null);
            this.executeDependecyRulesptupuagrgrupoasociado('SetValue', true);
            // pt_p_agrGrupoAsociado.SetActive( false )
            this.ptupuagrGrupoAsociado.enabled = false;
            this.executeDependecyRulesptupuagrgrupoasociado('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrProducto argument
     */
    public onptupuagrproductoChange(): void {
        this.executeDependecyRulesptupuagrproducto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrPlan argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrplan(event: string, internal: boolean): void {

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptprorrateo();
        }
        if ('SetValue' === event && this.ptupuagrPlan.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrPlan();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrPlan();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuagrPlan();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4ptupuagrPlan();
        }
        // Rule 5
        if ('SetValue' === event) {
            this.executeDependecyRules5ptupuagrPlan();
        }
        // Rule 6
        if ('SetValue' === event) {
            this.executeDependecyRules6ptupuagrPlan();
        }
        // Rule 7
        if ('SetValue' === event) {
            this.executeDependecyRules7ptupuagrPlan();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrPlan argument
     */
    private executeDependecyRules1ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'Plan');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrPlan argument
     */
    private executeDependecyRules1ptupuagrPlanActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v = NULL
        if (varptupuagrplan && this.util.isNull(varptupuagrplan)) {
            // pt_p_agrGrupoAsociado.SetValue( NULL )
            this.ptupuagrGrupoAsociado.setValue(null);
            this.executeDependecyRulesptupuagrgrupoasociado('SetValue', true);
            // pt_p_agrGrupoAsociado.SetActive( FALSE )
            this.ptupuagrGrupoAsociado.enabled = false;
            this.executeDependecyRulesptupuagrgrupoasociado('SetActive', true);
            // ptSoloDiaUno.SetValue( FALSE )
            this.ptSoloDiaUno.setValue(false);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrPlan argument
     */
    private executeDependecyRules2ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrPlan argument
     */
    private executeDependecyRules2ptupuagrPlanActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v <> NULL
        if (varptupuagrplan && !this.util.isNull(varptupuagrplan)) {
            // ptSoloDiaUno.SetValue( v.InicioContDiaUno )
            this.ptSoloDiaUno.setValue(this.util.getBool(varptupuagrplan.get('iniciocontdiauno')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_agrPlan argument
     */
    private executeDependecyRules3ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrProducto,
                'Producto');
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'Plan');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_agrPlan argument
     */
    private executeDependecyRules3ptupuagrPlanActions(): void {
        const varptupuagrproducto = this.getFirstInstanceFromCache(this.ptupuagrProducto);
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v <> NULL AND pt_p_agrProducto <> NULL
        if (varptupuagrproducto && varptupuagrplan && !this.util.isNull(varptupuagrplan) && !this.util.isNull(varptupuagrproducto)) {
            // pt_p_agrGrupoAsociado.SetActive( true )
            this.ptupuagrGrupoAsociado.enabled = true;
            this.executeDependecyRulesptupuagrgrupoasociado('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for pt_p_agrPlan argument
     */
    private executeDependecyRules4ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'esvoluntario');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for pt_p_agrPlan argument
     */
    private executeDependecyRules4ptupuagrPlanActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v <> NULL AND v.esvoluntario = TRUE
        if (varptupuagrplan && !this.util.isNull(varptupuagrplan) &&
            this.util.valueEquals(this.util.getBool(varptupuagrplan.get('esvoluntario')), true)) {
            // pt_p_atrEsTraslado.SetValue( FALSE )
            this.ptupuatrEsTraslado.setValue(false);
            // pt_p_atrEsTraslado.SetActive( FALSE )
            this.ptupuatrEsTraslado.enabled = false;
            // ptProrrateo.SetValue( NULL )
            this.ptProrrateo.setValue(null);
            // ptProrrateo.SetActive( FALSE )
            this.ptProrrateo.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 5 for pt_p_agrPlan argument
     */
    private executeDependecyRules5ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'esvoluntario');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules5ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 5 for pt_p_agrPlan argument
     */
    private executeDependecyRules5ptupuagrPlanActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v <> NULL AND v.esvoluntario = FALSE
        if (varptupuagrplan && !this.util.isNull(varptupuagrplan) &&
            this.util.valueEquals(this.util.getBool(varptupuagrplan.get('esvoluntario')), false)) {
            // pt_p_atrEsTraslado.SetActive( TRUE )
            this.ptupuatrEsTraslado.enabled = true;
            // ptProrrateo.SetActive( TRUE )
            this.ptProrrateo.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 6 for pt_p_agrPlan argument
     */
    private executeDependecyRules6ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'esvoluntario,iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules6ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 6 for pt_p_agrPlan argument
     */
    private executeDependecyRules6ptupuagrPlanActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v <> NULL AND v.esvoluntario = TRUE AND v.InicioContDiaUno = FALSE
        if (varptupuagrplan && !this.util.isNull(varptupuagrplan) &&
            this.util.valueEquals(this.util.getBool(varptupuagrplan.get('esvoluntario')), true) &&
            this.util.valueEquals(this.util.getBool(varptupuagrplan.get('iniciocontdiauno')), false)) {
            // pt_p_atrFInicioContrato.SetValue( NULL )
            this.ptupuatrFInicioContrato.setValue(null);
            this.executeDependecyRulesptupuatrfiniciocontrato('SetValue', true);
            // pt_p_atrFInicioContrato.SetActive( FALSE )
            this.ptupuatrFInicioContrato.enabled = false;
            this.executeDependecyRulesptupuatrfiniciocontrato('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 7 for pt_p_agrPlan argument
     */
    private executeDependecyRules7ptupuagrPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrPlan,
                'esvoluntario,iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules7ptupuagrPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 7 for pt_p_agrPlan argument
     */
    private executeDependecyRules7ptupuagrPlanActions(): void {
        const varptupuagrplan = this.getFirstInstanceFromCache(this.ptupuagrPlan);
        // v <> NULL AND (v.esvoluntario = FALSE OR v.InicioContDiaUno = TRUE)
        if (varptupuagrplan && !this.util.isNull(varptupuagrplan) &&
            (this.util.valueEquals(this.util.getBool(varptupuagrplan.get('esvoluntario')), false) ||
            this.util.valueEquals(this.util.getBool(varptupuagrplan.get('iniciocontdiauno')), true))) {
            // pt_p_atrFInicioContrato.SetActive( TRUE )
            this.ptupuatrFInicioContrato.enabled = true;
            this.executeDependecyRulesptupuatrfiniciocontrato('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrPlan argument
     */
    public onptupuagrplanChange(): void {
        this.executeDependecyRulesptupuagrplan('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_ProteccionDatos argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuprotecciondatos(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuprotecciondatos();
        }
        if ('SetValue' === event && this.ptuProteccionDatos.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuProteccionDatos();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptuProteccionDatos();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptuProteccionDatos();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4ptuProteccionDatos();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_ProteccionDatos argument
     */
    private setSuppInfoptuprotecciondatos(): void {

        const displaySetIC = 'Identificador';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuProteccionDatos.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Protecciondatos.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptuProteccionDatos();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuProteccionDatos.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Protecciondatos.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueptuProteccionDatos();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_ProteccionDatos argument
     */
    private executeDependecyRules1ptuProteccionDatos(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuProteccionDatos,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuProteccionDatosActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_ProteccionDatos argument
     */
    private executeDependecyRules1ptuProteccionDatosActions(): void {
        const varptuprotecciondatos = this.getFirstInstanceFromCache(this.ptuProteccionDatos);
        // v <> NULL
        if (varptuprotecciondatos && !this.util.isNull(varptuprotecciondatos)) {
            // pt_ProteccionDatos.SetVisible( FALSE )
            this.ptuProteccionDatos.visible = false;
            // pt_p_agrGrupoAsociado.SetActive( FALSE )
            this.ptupuagrGrupoAsociado.enabled = false;
            this.executeDependecyRulesptupuagrgrupoasociado('SetActive', true);
            // ptAvisoMarcaCarnet.SetActive( FALSE )
            this.ptAvisoMarcaCarnet.enabled = false;
            // ptAvisoMarcaCarnet.SetVisible( FALSE )
            this.ptAvisoMarcaCarnet.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_ProteccionDatos argument
     */
    private executeDependecyRules2ptuProteccionDatos(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuProteccionDatos,
                'Identificador');
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, this.appGlobalInfo.getLoggedUserInfo().oid,
                'modificadirector');
        }
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptuProteccionDatosActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_ProteccionDatos argument
     */
    private executeDependecyRules2ptuProteccionDatosActions(): void {
        const varptuprotecciondatos = this.getFirstInstanceFromCache(this.ptuProteccionDatos);
        let varAgentAsesor!: InstanceCache;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            varAgentAsesor = this.cacheDependencyRules.getInstance(ModelConstants.Asesor.name,
                this.appGlobalInfo.getLoggedUserInfo().oid);
        }
        // v <> NULL AND AGENT_Asesor <> NULL
        if (varptuprotecciondatos && varAgentAsesor && !this.util.isNull(varptuprotecciondatos) && !this.util.isNull(varAgentAsesor)) {
            // pDirector.SetActive( agent_asesor.modificadirector )
            this.pDirector.enabled = this.util.getBool(varAgentAsesor.get('modificadirector'));
            this.executeDependecyRulespdirector('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_ProteccionDatos argument
     */
    private executeDependecyRules3ptuProteccionDatos(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuProteccionDatos,
                'Identificador');
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, this.appGlobalInfo.getLoggedUserInfo().oid,
                'codjefe');
        }
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3ptuProteccionDatosActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_ProteccionDatos argument
     */
    private executeDependecyRules3ptuProteccionDatosActions(): void {
        const varptuprotecciondatos = this.getFirstInstanceFromCache(this.ptuProteccionDatos);
        let varAgentAsesor!: InstanceCache;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            varAgentAsesor = this.cacheDependencyRules.getInstance(ModelConstants.Asesor.name,
                this.appGlobalInfo.getLoggedUserInfo().oid);
        }
        let rtnFunction0: any;
        // v <> NULL AND AGENT_Asesor <> NULL AND agent_asesor.codjefe <> NULL
        if (varptuprotecciondatos && varAgentAsesor && !this.util.isNull(varptuprotecciondatos) &&
            !this.util.isNull(varAgentAsesor) && !this.util.isNull(varAgentAsesor.get('codjefe'))) {
            this.usrFunc.fu_getAsesor(varAgentAsesor.get('codjefe')).then((res0) => {
                rtnFunction0 = res0;
                // pDirector.SetValue( fu_getAsesor(agent_asesor.codjefe) )
                this.pDirector.setValue(rtnFunction0);
                this.executeDependecyRulespdirector('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for pt_ProteccionDatos argument
     */
    private executeDependecyRules4ptuProteccionDatos(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuProteccionDatos,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4ptuProteccionDatosActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for pt_ProteccionDatos argument
     */
    private executeDependecyRules4ptuProteccionDatosActions(): void {
        const varptuprotecciondatos = this.getFirstInstanceFromCache(this.ptuProteccionDatos);
        // v <> NULL AND AGENT_Asesor = NULL
        if (varptuprotecciondatos && !this.util.isNull(varptuprotecciondatos) &&
            !this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['ASESOR'])) {
            // pDirector.SetActive( TRUE )
            this.pDirector.enabled = true;
            this.executeDependecyRulespdirector('SetActive', true);
            // pDirector.SetValue( NULL )
            this.pDirector.setValue(null);
            this.executeDependecyRulespdirector('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of pt_ProteccionDatos lense argument
    */
    private setOidFieldsValueptuProteccionDatos(): void {
        if (this.ptuProteccionDatos.getSelectedInstances().length > 0) {
            if (this.ptuProteccionDatos.getSelectedInstances().length > 1) {
                this.ptuProteccionDatos.oidFields = [null];
                this.ptuProteccionDatos.editorsEnabled = false;
                this.ptuProteccionDatos.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptuProteccionDatos.getSelectedInstances().length.toString());
            } else {
                this.ptuProteccionDatos.editorsEnabled = true;
                this.ptuProteccionDatos.oidFields[0] = this.ptuProteccionDatos.getSelectedInstances()[0].oid.identificador;
                this.ptuProteccionDatos.supplementaryInfo = this.ptuProteccionDatos.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptuProteccionDatos.oidFields = Array(1);
            this.ptuProteccionDatos.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the pt_ProteccionDatos lense argument
     */
    public onptuprotecciondatosChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptuProteccionDatos.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptuProteccionDatos.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            identificador: this.ptuProteccionDatos.oidFields[0]
            };
            this.ptuProteccionDatos.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Protecciondatos.name, oid,
                'Identificador');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptuProteccionDatos.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Protecciondatos.name, value.oid)) {
                        this.ptuProteccionDatos.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptuProteccionDatos.alias));
                        this.ptuProteccionDatos.cleanSelectedInstances();
                        this.ptuProteccionDatos.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptuprotecciondatos('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean pt_ProteccionDatos argument value
     */
    public cleanptuprotecciondatos(): void {
        this.clearValidationMessages();
        this.ptuProteccionDatos.clean();
        this.ptuProteccionDatos.oidFields = Array(1);
        this.executeDependecyRulesptuprotecciondatos('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrGrupoAsociado argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrgrupoasociado(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrgrupoasociado();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrGrupoAsociado argument
     */
    private setSuppInfoptupuagrgrupoasociado(): void {

        const displaySetIC = 'CodigoLegal,Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrGrupoAsociado.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasociado.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrGrupoAsociado.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrGrupoAsociado.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasociado.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptupuagrGrupoAsociado.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrGrupoAsociado lense search argument
     */
    public onptupuagrgrupoasociadoChange(): void {

        const searchText = this.ptupuagrGrupoAsociado.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrGrupoAsociado.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Ae_solicitudes_TNUEVAAFILIACION_pt_p_agrGrupoAsociado_NavFilter0');
                this.ptupuagrGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrGrupoAsociado.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasociado.name, 'IC_GrupoAsociado', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.ptupuagrGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrGrupoAsociado.searchResults = response.results;
                            if (this.ptupuagrGrupoAsociado.searchResults &&
                                this.ptupuagrGrupoAsociado.searchResults.length === 0) {
                                this.ptupuagrGrupoAsociado.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrGrupoAsociado.searchResults &&
                                this.ptupuagrGrupoAsociado.searchResults.length === 1) {
                                this.processptupuagrgrupoasociadoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrGrupoAsociado.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrGrupoAsociado.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrGrupoAsociado.searchResults = [];
            this.cleanptupuagrgrupoasociado();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrGrupoAsociado lense search argument
     */
    public processptupuagrgrupoasociadoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrGrupoAsociado.searchResults.length > index) {
            selectedInstance = this.ptupuagrGrupoAsociado.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrGrupoAsociado.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrGrupoAsociado.allowMultiSelect) {
                this.ptupuagrGrupoAsociado.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrGrupoAsociado.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrGrupoAsociado lense search argument
     */
    public cleanptupuagrgrupoasociado(): void {
        this.clearValidationMessages();
        this.ptupuagrGrupoAsociado.clean();
        this.executeDependecyRulesptupuagrgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrFInicioContrato argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrfiniciocontrato(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrFInicioContrato();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrFInicioContrato();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuatrFInicioContrato();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrFInicioContrato argument
     */
    private executeDependecyRules1ptupuatrFInicioContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrFInicioContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrFInicioContrato argument
     */
    private executeDependecyRules1ptupuatrFInicioContratoActions(): void {
        // v <> NULL AND v = formatToDate( getYear( systemDate() ),getMonth( systemDate() ), 1)
        if (!this.util.isNull(this.util.getDate(this.ptupuatrFInicioContrato.value)) &&
            this.util.valueEquals(this.util.getDate(this.ptupuatrFInicioContrato.value),
            this.stdFun.formatToDate(this.stdFun.getYear(this.stdFun.systemDate()), this.stdFun.getMonth(this.stdFun.systemDate()),
            this.util.getInt('1')))) {
            // ptProrrateo.SetActive( TRUE )
            this.ptProrrateo.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrFInicioContrato argument
     */
    private executeDependecyRules2ptupuatrFInicioContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrFInicioContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrFInicioContrato argument
     */
    private executeDependecyRules2ptupuatrFInicioContratoActions(): void {
        // v <> NULL AND v <>  formatToDate( getYear( systemDate() ),getMonth( systemDate() ), 1)
        //
        if (!this.util.isNull(this.util.getDate(this.ptupuatrFInicioContrato.value)) &&
            !this.util.valueEquals(this.util.getDate(this.ptupuatrFInicioContrato.value),
            this.stdFun.formatToDate(this.stdFun.getYear(this.stdFun.systemDate()), this.stdFun.getMonth(this.stdFun.systemDate()),
            this.util.getInt('1')))) {
            // ptProrrateo.SetActive( FALSE )
            this.ptProrrateo.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_atrFInicioContrato argument
     */
    private executeDependecyRules3ptupuatrFInicioContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3ptupuatrFInicioContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_atrFInicioContrato argument
     */
    private executeDependecyRules3ptupuatrFInicioContratoActions(): void {
        // v = NULL
        if (this.util.isNull(this.util.getDate(this.ptupuatrFInicioContrato.value))) {
            // ptProrrateo.SetActive( FALSE )
            this.ptProrrateo.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrFInicioContrato argument
     */
    public onptupuatrfiniciocontratoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrfiniciocontrato('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pDirector argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespdirector(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopdirector();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pDirector argument
     */
    private setSuppInfopdirector(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.pDirector.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pDirector.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pDirector.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Asesor.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.pDirector.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pDirector lense search argument
     */
    public onpdirectorChange(): void {

        const searchText = this.pDirector.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pDirector.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Ae_solicitudes_TNUEVAAFILIACION_pDirector_NavFilter0');
                this.pDirector.removeCSSClass('noResultsLenseSearch');
                this.pDirector.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Asesor.name, 'IC_Asesor', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.pDirector.removeCSSClass('noResultsLenseSearch');
                            this.pDirector.searchResults = response.results;
                            if (this.pDirector.searchResults &&
                                this.pDirector.searchResults.length === 0) {
                                this.pDirector.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pDirector.searchResults &&
                                this.pDirector.searchResults.length === 1) {
                                this.processpdirectorSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pDirector.removeCSSClass('noResultsLenseSearch');
                            this.pDirector.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pDirector.removeCSSClass('noResultsLenseSearch');
            this.pDirector.searchResults = [];
            this.cleanpdirector();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pDirector lense search argument
     */
    public processpdirectorSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pDirector.searchResults.length > index) {
            selectedInstance = this.pDirector.searchResults[index];
        }
        // Clean the result list
        this.pDirector.searchResults = [];
        if (selectedInstance) {
            if (!this.pDirector.allowMultiSelect) {
                this.pDirector.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pDirector.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespdirector('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pDirector lense search argument
     */
    public cleanpdirector(): void {
        this.clearValidationMessages();
        this.pDirector.clean();
        this.executeDependecyRulespdirector('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptMarcaCarnet argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptmarcacarnet(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptMarcaCarnet();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptMarcaCarnet argument
     */
    private executeDependecyRules1ptMarcaCarnet(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptMarcaCarnetActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptMarcaCarnet argument
     */
    private executeDependecyRules1ptMarcaCarnetActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.util.getBool(this.ptMarcaCarnet.value))) {
            // ptAvisoMarcaCarnet.SetVisible( v )
            this.ptAvisoMarcaCarnet.visible = this.util.getBool(this.ptMarcaCarnet.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptMarcaCarnet argument
     */
    public onptmarcacarnetChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptmarcacarnet('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptuProteccionDatos'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuProteccionDatos.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ProteccionDatos_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrGrupoAsociado'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrGrupoAsociado.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsociadoBusqueda';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Ae_solicitudes_TNUEVAAFILIACION_pt_p_agrGrupoAsociado_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pDirector'.toLowerCase() === argumentName.toLowerCase()) {
            this.pDirector.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Directores_Obs';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Ae_solicitudes_TNUEVAAFILIACION_pDirector_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
