import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
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
    selector: 'imes-gs-siu-tgseleccontratoasoctit',
    templateUrl: './siu_tgseleccontratoasoctit.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGSELECCONTRATOASOCTITComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuSolicitud: FieldOVLenseSearch;
    public ptContratoXClass: Field;
    public ptNumContrato: Field;
    public ptCodLegalProducto: Field;
    public ptCodLegalPlan: Field;
    public ptNumFamilia: Field;

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
        this.idXML = 'IGl_1433934757888116UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgseleccontratoasoctit;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGSELECCONTRATOASOCTIT';
        this.title = this.langMng.translateText('gs_TGSELECCONTRATOASOCTIT',
            'Contratos asociados');

        // Create inbound argument components
        this.ptupuSolicitud = new FieldOVLenseSearch(this.langMng);
        this.ptContratoXClass = new Field(this.langMng);
        this.ptNumContrato = new Field(this.langMng);
        this.ptCodLegalProducto = new Field(this.langMng);
        this.ptCodLegalPlan = new Field(this.langMng);
        this.ptNumFamilia = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuSolicitud.nameInRequest = 'pt_p_solicitud';
        this.ptupuSolicitud.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT_inArg_pt_p_Solicitud',
            'Solicitud');
        this.ptupuSolicitud.mandatory = true;
        this.ptupuSolicitud.dataType = ModelConstants.Solicitud.name;
        this.ptupuSolicitud.maxLength = 50;
        this.ptupuSolicitud.assignCSS();
        this.fields.push(this.ptupuSolicitud);

        this.ptContratoXClass.nameInRequest = 'ptcontratoxclass';
        this.ptContratoXClass.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT_inArg_ptContratoXClass',
            'Contrato');
        this.ptContratoXClass.mandatory = false;
        this.ptContratoXClass.dataType = Field.dtString;
        this.ptContratoXClass.maxLength = 1;
        this.ptContratoXClass.assignCSS();
        this.fields.push(this.ptContratoXClass);

        this.ptNumContrato.nameInRequest = 'ptnumcontrato';
        this.ptNumContrato.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT_inArg_ptNumContrato',
            'ptNumContrato');
        this.ptNumContrato.mandatory = false;
        this.ptNumContrato.dataType = Field.dtString;
        this.ptNumContrato.maxLength = 50;
        this.ptNumContrato.assignCSS();
        this.fields.push(this.ptNumContrato);

        this.ptCodLegalProducto.nameInRequest = 'ptcodlegalproducto';
        this.ptCodLegalProducto.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT_inArg_ptCodLegalProducto',
            'ptCodLegalProducto');
        this.ptCodLegalProducto.mandatory = false;
        this.ptCodLegalProducto.dataType = Field.dtString;
        this.ptCodLegalProducto.maxLength = 50;
        this.ptCodLegalProducto.assignCSS();
        this.fields.push(this.ptCodLegalProducto);

        this.ptCodLegalPlan.nameInRequest = 'ptcodlegalplan';
        this.ptCodLegalPlan.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT_inArg_ptCodLegalPlan',
            'ptCodLegalPlan');
        this.ptCodLegalPlan.mandatory = false;
        this.ptCodLegalPlan.dataType = Field.dtString;
        this.ptCodLegalPlan.maxLength = 50;
        this.ptCodLegalPlan.assignCSS();
        this.fields.push(this.ptCodLegalPlan);

        this.ptNumFamilia.nameInRequest = 'ptnumfamilia';
        this.ptNumFamilia.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT_inArg_ptNumFamilia',
            'Nº Familia');
        this.ptNumFamilia.mandatory = false;
        this.ptNumFamilia.dataType = Field.dtString;
        this.ptNumFamilia.maxLength = 10;
        this.ptNumFamilia.assignCSS();
        this.fields.push(this.ptNumFamilia);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuSolicitud'.toLowerCase()) {
            this.ptupuSolicitud.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupusolicitud('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_Solicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupusolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupusolicitud();
        }
        if ('SetValue' === event && this.ptupuSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_Solicitud argument
     */
    private setSuppInfoptupusolicitud(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuSolicitud.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuSolicitud.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_Solicitud argument
     */
    private executeDependecyRules1ptupuSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuSolicitud,
                'Ae_solicitudes.id_solicitud');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_Solicitud argument
     */
    private executeDependecyRules1ptupuSolicitudActions(): void {
        const varptupusolicitud = this.getFirstInstanceFromCache(this.ptupuSolicitud);
        // v <> NULL
        if (varptupusolicitud && !this.util.isNull(varptupusolicitud)) {
            // pt_p_Solicitud.SetVisible( false )
            this.ptupuSolicitud.visible = false;
            // ptCodLegalPlan.SetVisible( false )
            this.ptCodLegalPlan.visible = false;
            // ptCodLegalProducto.SetVisible( false )
            this.ptCodLegalProducto.visible = false;
            // ptNumContrato.SetVisible( false )
            this.ptNumContrato.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_Solicitud lense search argument
     */
    public onptupusolicitudChange(): void {

        const searchText = this.ptupuSolicitud.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuSolicitud.lastText) {
                this.ptupuSolicitud.removeCSSClass('noResultsLenseSearch');
                this.ptupuSolicitud.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Solicitud.name, 'IC_Solicitud', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuSolicitud.removeCSSClass('noResultsLenseSearch');
                            this.ptupuSolicitud.searchResults = response.results;
                            if (this.ptupuSolicitud.searchResults &&
                                this.ptupuSolicitud.searchResults.length === 0) {
                                this.ptupuSolicitud.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuSolicitud.searchResults &&
                                this.ptupuSolicitud.searchResults.length === 1) {
                                this.processptupusolicitudSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuSolicitud.removeCSSClass('noResultsLenseSearch');
                            this.ptupuSolicitud.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuSolicitud.removeCSSClass('noResultsLenseSearch');
            this.ptupuSolicitud.searchResults = [];
            this.cleanptupusolicitud();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_Solicitud lense search argument
     */
    public processptupusolicitudSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuSolicitud.searchResults.length > index) {
            selectedInstance = this.ptupuSolicitud.searchResults[index];
        }
        // Clean the result list
        this.ptupuSolicitud.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuSolicitud.allowMultiSelect) {
                this.ptupuSolicitud.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuSolicitud.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupusolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_Solicitud lense search argument
     */
    public cleanptupusolicitud(): void {
        this.clearValidationMessages();
        this.ptupuSolicitud.clean();
        this.executeDependecyRulesptupusolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '1') {
            isVisible = this.ptupuSolicitud.visible ||
                this.ptNumContrato.visible ||
                this.ptCodLegalProducto.visible ||
                this.ptCodLegalPlan.visible ||
                this.ptNumFamilia.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '1') {
            alias = this.langMng.translateText('1',
                'Ocultar');
        }
        return alias;
    }
}
