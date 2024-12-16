import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-solicitud-siu-tmodencabezadoincl',
    templateUrl: './siu_tmodencabezadoincl.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTMODENCABEZADOINCLComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptuptFecha: Field;
    public ptGrupoAsociado: FieldOVLenseSearch;
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
        this.idXML = 'Clas_1431957012480960Ser_136UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutmodencabezadoincl;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODENCABEZADOINCL';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TMODENCABEZADOINCL',
            'Modificar encabezado');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng);
        this.ptuptFecha = new Field(this.langMng);
        this.ptGrupoAsociado = new FieldOVLenseSearch(this.langMng);
        this.ptSoloDiaUno = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisSolicitud.nameInRequest = 'p_thissolicitud';
        this.puthisSolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADOINCL_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptuptFecha.nameInRequest = 'pt_ptfecha';
        this.ptuptFecha.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADOINCL_inArg_pt_ptFecha',
            'Fecha inicio contratación');
        this.ptuptFecha.mandatory = false;
        this.ptuptFecha.dataType = Field.dtDate;
        this.ptuptFecha.assignCSS();
        this.fields.push(this.ptuptFecha);

        this.ptGrupoAsociado.nameInRequest = 'ptgrupoasociado';
        this.ptGrupoAsociado.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADOINCL_inArg_ptGrupoAsociado',
            'Grupo asociado');
        this.ptGrupoAsociado.mandatory = false;
        this.ptGrupoAsociado.dataType = ModelConstants.Grupoasociado.name;
        this.ptGrupoAsociado.maxLength = 200;
        this.ptGrupoAsociado.assignCSS();
        this.fields.push(this.ptGrupoAsociado);

        this.ptSoloDiaUno.nameInRequest = 'ptsolodiauno';
        this.ptSoloDiaUno.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADOINCL_inArg_ptSoloDiaUno',
            'Solo dia uno');
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
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Solicitud'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisSolicitud.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhissolicitud('SetValue', true);
            this.puthisSolicitud.enabled = false;
            this.executeDependecyRulesputhissolicitud('SetEnabled', true);
        }
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
            if (lastRole === 'GrupoAsociado') {
                this.ptGrupoAsociado.setValue(lastRoleOid);
                this.executeDependecyRulesptgrupoasociado('SetValue', true);
                this.ptGrupoAsociado.enabled = false;
                this.executeDependecyRulesptgrupoasociado('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisSolicitud'.toLowerCase()) {
            this.puthisSolicitud.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhissolicitud('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptGrupoAsociado'.toLowerCase()) {
            this.ptGrupoAsociado.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptgrupoasociado('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhissolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhissolicitud();
        }
        if ('SetValue' === event && this.puthisSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisSolicitud();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisSolicitud();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puthisSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisSolicitud argument
     */
    private setSuppInfoputhissolicitud(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisSolicitud.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisSolicitud.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisSolicitud argument
     */
    private executeDependecyRules1puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'finiciocontrato,grupoasociado.Codigo,ae_solicitudes.plant.iniciocontdiauno,numcontratoinclusion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisSolicitud argument
     */
    private executeDependecyRules1puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        let rtnFunction0: any;
        // v <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud)) {
            this.usrFunc.fuExisteContratoExentoFIngreso(varputhissolicitud.get('numcontratoinclusion')).then((res0) => {
                rtnFunction0 = res0;
                // pt_ptFecha.SetValue( v.finiciocontrato )
                this.ptuptFecha.setValue(this.util.getDate(varputhissolicitud.get('finiciocontrato')));
                // ptGrupoAsociado.SetValue( v.grupoasociado )
                this.ptGrupoAsociado.setValue(this.util.oidBuilder.buildOidGrupoAsociado(
                    this.util.getInt(varputhissolicitud.get('grupoasociado.Codigo'))));
                this.executeDependecyRulesptgrupoasociado('SetValue', true);
                // ptSoloDiaUno.SetValue( v.Ae_solicitudes.plant.iniciocontdiauno = true AND fuExisteContratoExentoFIngreso(v.numcontra
                // oinclusion) = false )
                this.ptSoloDiaUno.setValue(this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.iniciocontdiauno')),
                    true) && this.util.valueEquals(this.util.getBool(rtnFunction0), false));

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisSolicitud argument
     */
    private executeDependecyRules2puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'drvpuedemodificargrupo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisSolicitud argument
     */
    private executeDependecyRules2puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.drvpuedemodificargrupo = FALSE
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('drvpuedemodificargrupo')), false)) {
            // ptGrupoAsociado.SetActive( FALSE )
            this.ptGrupoAsociado.enabled = false;
            this.executeDependecyRulesptgrupoasociado('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_thisSolicitud argument
     */
    private executeDependecyRules3puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'ae_solicitudes.plant.esvoluntario,ae_solicitudes.plant.iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_thisSolicitud argument
     */
    private executeDependecyRules3puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.Ae_solicitudes.plant.esvoluntario = true AND v.Ae_solicitudes.plant.iniciocontdiauno = false
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.esvoluntario')), true) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.iniciocontdiauno')), false)) {
            // pt_ptFecha.SetValue( NULL )
            this.ptuptFecha.setValue(null);
            // pt_ptFecha.SetActive( false )
            this.ptuptFecha.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisSolicitud lense search argument
     */
    public onputhissolicitudChange(): void {

        const searchText = this.puthisSolicitud.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisSolicitud.lastText) {
                this.puthisSolicitud.removeCSSClass('noResultsLenseSearch');
                this.puthisSolicitud.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Solicitud.name, 'IC_Solicitud', searchText, [], null).then(
                        (response: any) => {
                            this.puthisSolicitud.removeCSSClass('noResultsLenseSearch');
                            this.puthisSolicitud.searchResults = response.results;
                            if (this.puthisSolicitud.searchResults &&
                                this.puthisSolicitud.searchResults.length === 0) {
                                this.puthisSolicitud.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisSolicitud.searchResults &&
                                this.puthisSolicitud.searchResults.length === 1) {
                                this.processputhissolicitudSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisSolicitud.removeCSSClass('noResultsLenseSearch');
                            this.puthisSolicitud.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisSolicitud.removeCSSClass('noResultsLenseSearch');
            this.puthisSolicitud.searchResults = [];
            this.cleanputhissolicitud();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisSolicitud lense search argument
     */
    public processputhissolicitudSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisSolicitud.searchResults.length > index) {
            selectedInstance = this.puthisSolicitud.searchResults[index];
        }
        // Clean the result list
        this.puthisSolicitud.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisSolicitud.allowMultiSelect) {
                this.puthisSolicitud.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisSolicitud.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhissolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisSolicitud lense search argument
     */
    public cleanputhissolicitud(): void {
        this.clearValidationMessages();
        this.puthisSolicitud.clean();
        this.executeDependecyRulesputhissolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptGrupoAsociado argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptgrupoasociado(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptgrupoasociado();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptGrupoAsociado argument
     */
    private setSuppInfoptgrupoasociado(): void {

        const displaySetIC = 'CodigoLegal,Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptGrupoAsociado.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasociado.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptGrupoAsociado.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptGrupoAsociado.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasociado.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptGrupoAsociado.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the ptGrupoAsociado lense search argument
     */
    public onptgrupoasociadoChange(): void {

        const searchText = this.ptGrupoAsociado.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptGrupoAsociado.lastText) {
                this.ptGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                this.ptGrupoAsociado.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasociado.name, 'IC_GrupoAsociado', searchText, [], null).then(
                        (response: any) => {
                            this.ptGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                            this.ptGrupoAsociado.searchResults = response.results;
                            if (this.ptGrupoAsociado.searchResults &&
                                this.ptGrupoAsociado.searchResults.length === 0) {
                                this.ptGrupoAsociado.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptGrupoAsociado.searchResults &&
                                this.ptGrupoAsociado.searchResults.length === 1) {
                                this.processptgrupoasociadoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                            this.ptGrupoAsociado.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptGrupoAsociado.removeCSSClass('noResultsLenseSearch');
            this.ptGrupoAsociado.searchResults = [];
            this.cleanptgrupoasociado();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptGrupoAsociado lense search argument
     */
    public processptgrupoasociadoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptGrupoAsociado.searchResults.length > index) {
            selectedInstance = this.ptGrupoAsociado.searchResults[index];
        }
        // Clean the result list
        this.ptGrupoAsociado.searchResults = [];
        if (selectedInstance) {
            if (!this.ptGrupoAsociado.allowMultiSelect) {
                this.ptGrupoAsociado.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptGrupoAsociado.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptGrupoAsociado lense search argument
     */
    public cleanptgrupoasociado(): void {
        this.clearValidationMessages();
        this.ptGrupoAsociado.clean();
        this.executeDependecyRulesptgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptGrupoAsociado'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptGrupoAsociado.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsociado';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
