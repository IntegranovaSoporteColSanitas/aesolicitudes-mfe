import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-documentog-siu-tdevolver',
    templateUrl: './siu_tdevolver.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoGSIUuTDEVOLVERComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDocumentoG: FieldOVLense;
    public ptupuatrObservacions: Field;

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
        this.idXML = 'Clas_1434446200832109Ser_12UIServ_1';
        this.className = ModelConstants.Documentog.name;
        this.iuName = ModelConstants.Documentog.siuutdevolver;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Afiliaciones']));
        this.serviceName = 'TDEVOLVER';
        this.title = this.langMng.translateText('cls_DocumentoG_svc_TDEVOLVER',
            'Devolver documento');

        // Create inbound argument components
        this.puthisDocumentoG = new FieldOVLense(this.langMng);
        this.ptupuatrObservacions = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisDocumentoG.nameInRequest = 'p_thisdocumentog';
        this.puthisDocumentoG.alias = this.langMng.translateText(
            'cls_DocumentoG_svc_TDEVOLVER_inArg_p_thisDocumentoG',
            'Documento gestor');
        this.puthisDocumentoG.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDocumentoG.mandatory = true;
        this.puthisDocumentoG.dataType = ModelConstants.Documentog.name;
        this.puthisDocumentoG.oidFields = Array(1);
        this.puthisDocumentoG.oidFieldsTypes = ['autonumerico'];
        this.puthisDocumentoG.assignCSS();
        this.fields.push(this.puthisDocumentoG);

        this.ptupuatrObservacions.nameInRequest = 'pt_p_atrobservacions';
        this.ptupuatrObservacions.alias = this.langMng.translateText(
            'cls_DocumentoG_svc_TDEVOLVER_inArg_pt_p_atrObservacions',
            'Observaciones');
        this.ptupuatrObservacions.mandatory = false;
        this.ptupuatrObservacions.dataType = Field.dtString;
        this.ptupuatrObservacions.maxLength = 999;
        this.ptupuatrObservacions.assignCSS();
        this.fields.push(this.ptupuatrObservacions);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['DocumentoG'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDocumentoG.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisDocumentoG();
            this.executeDependecyRulesputhisdocumentog('SetValue', true);
            this.puthisDocumentoG.enabled = false;
            this.executeDependecyRulesputhisdocumentog('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDocumentoG'.toLowerCase()) {
            this.puthisDocumentoG.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisDocumentoG();
            this.executeDependecyRulesputhisdocumentog('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDocumentoG argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdocumentog(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdocumentog();
        }
        if ('SetValue' === event && this.puthisDocumentoG.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisDocumentoG();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDocumentoG argument
     */
    private setSuppInfoputhisdocumentog(): void {

        const displaySetIC = 'Identificador';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDocumentoG.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Documentog.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisDocumentoG();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDocumentoG.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Documentog.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisDocumentoG();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisDocumentoG argument
     */
    private executeDependecyRules1puthisDocumentoG(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisDocumentoG,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisDocumentoGActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisDocumentoG argument
     */
    private executeDependecyRules1puthisDocumentoGActions(): void {
        const varputhisdocumentog = this.getFirstInstanceFromCache(this.puthisDocumentoG);
        // v <> NULL
        if (varputhisdocumentog && !this.util.isNull(varputhisdocumentog)) {
            // p_thisDocumentoG.SetVisible( FALSE )
            this.puthisDocumentoG.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisDocumentoG lense argument
    */
    private setOidFieldsValueputhisDocumentoG(): void {
        if (this.puthisDocumentoG.getSelectedInstances().length > 0) {
            if (this.puthisDocumentoG.getSelectedInstances().length > 1) {
                this.puthisDocumentoG.oidFields = [null];
                this.puthisDocumentoG.editorsEnabled = false;
                this.puthisDocumentoG.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisDocumentoG.getSelectedInstances().length.toString());
            } else {
                this.puthisDocumentoG.editorsEnabled = true;
                this.puthisDocumentoG.oidFields[0] = this.puthisDocumentoG.getSelectedInstances()[0].oid.identificador;
                this.puthisDocumentoG.supplementaryInfo = this.puthisDocumentoG.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisDocumentoG.oidFields = Array(1);
            this.puthisDocumentoG.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisDocumentoG lense argument
     */
    public onputhisdocumentogChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisDocumentoG.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisDocumentoG.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            identificador: this.puthisDocumentoG.oidFields[0]
            };
            this.puthisDocumentoG.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Documentog.name, oid,
                'Identificador');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisDocumentoG.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Documentog.name, value.oid)) {
                        this.puthisDocumentoG.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisDocumentoG.alias));
                        this.puthisDocumentoG.cleanSelectedInstances();
                        this.puthisDocumentoG.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisdocumentog('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisDocumentoG argument value
     */
    public cleanputhisdocumentog(): void {
        this.clearValidationMessages();
        this.puthisDocumentoG.clean();
        this.puthisDocumentoG.oidFields = Array(1);
        this.executeDependecyRulesputhisdocumentog('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDocumentoG'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDocumentoG.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_DocumentoG';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
