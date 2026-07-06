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
    selector: 'imes-obsestado-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObsEstadoSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisObsEstado: FieldOVLense;
    public puObservacions: Field;

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
        this.idXML = 'Clas_1434446856192292Ser_3UIServ_2';
        this.className = ModelConstants.Obsestado.name;
        this.iuName = ModelConstants.Obsestado.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_ObsEstado_svc_modificar',
            'Modificar observaciones');

        // Create inbound argument components
        this.puthisObsEstado = new FieldOVLense(this.langMng);
        this.puObservacions = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisObsEstado.nameInRequest = 'p_thisobsestado';
        this.puthisObsEstado.alias = this.langMng.translateText(
            'cls_ObsEstado_svc_modificar_inArg_p_thisObsEstado',
            'Observaciones');
        this.puthisObsEstado.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisObsEstado.mandatory = true;
        this.puthisObsEstado.dataType = ModelConstants.Obsestado.name;
        this.puthisObsEstado.allowMultiSelect = true;
        this.puthisObsEstado.oidFields = Array(2);
        this.puthisObsEstado.oidFieldsTypes = [Field.dtAuto, Field.dtAuto];
        this.puthisObsEstado.assignCSS();
        this.fields.push(this.puthisObsEstado);

        this.puObservacions.nameInRequest = 'p_observacions';
        this.puObservacions.alias = this.langMng.translateText(
            'cls_ObsEstado_svc_modificar_inArg_p_Observacions',
            'Observaciones');
        this.puObservacions.mandatory = false;
        this.puObservacions.dataType = Field.dtString;
        this.puObservacions.maxLength = 999;
        this.puObservacions.assignCSS();
        this.fields.push(this.puObservacions);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ObsEstado'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisObsEstado.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisObsEstado();
            this.executeDependecyRulesputhisobsestado('SetValue', true);
            this.puthisObsEstado.enabled = false;
            this.executeDependecyRulesputhisobsestado('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisObsEstado'.toLowerCase()) {
            this.puthisObsEstado.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisObsEstado();
            this.executeDependecyRulesputhisobsestado('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisObsEstado argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisobsestado(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisobsestado();
        }
        if ('SetValue' === event && this.puthisObsEstado.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisObsEstado();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisObsEstado argument
     */
    private setSuppInfoputhisobsestado(): void {

        const displaySetIC = 'DocumentoG.Identificador';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisObsEstado.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Obsestado.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisObsEstado();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisObsEstado.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Obsestado.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisObsEstado();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisObsEstado argument
     */
    private executeDependecyRules1puthisObsEstado(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisObsEstado,
                'DocumentoG.Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisObsEstadoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisObsEstado argument
     */
    private executeDependecyRules1puthisObsEstadoActions(): void {
        const varputhisobsestado = this.getFirstInstanceFromCache(this.puthisObsEstado);
        // v <> NULL
        if (varputhisobsestado && !this.util.isNull(varputhisobsestado)) {
            // p_thisObsEstado.SetVisible( FALSE )
            this.puthisObsEstado.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisObsEstado lense argument
    */
    private setOidFieldsValueputhisObsEstado(): void {
        if (this.puthisObsEstado.getSelectedInstances().length > 0) {
            if (this.puthisObsEstado.getSelectedInstances().length > 1) {
                this.puthisObsEstado.oidFields = [null];
                this.puthisObsEstado.editorsEnabled = false;
                this.puthisObsEstado.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisObsEstado.getSelectedInstances().length.toString());
            } else {
                this.puthisObsEstado.editorsEnabled = true;
                this.puthisObsEstado.oidFields[0] = this.puthisObsEstado.getSelectedInstances()[0].oid.identificador;
                this.puthisObsEstado.oidFields[1] = this.puthisObsEstado.getSelectedInstances()[0].oid.id;
                this.puthisObsEstado.supplementaryInfo = this.puthisObsEstado.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisObsEstado.oidFields = Array(2);
            this.puthisObsEstado.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisObsEstado lense argument
     */
    public onputhisobsestadoChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisObsEstado.oidFields) {
            if (this.util.isNull(field)) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisObsEstado.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            identificador: this.puthisObsEstado.oidFields[0]
            , id: this.puthisObsEstado.oidFields[1]
            };
            this.puthisObsEstado.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Obsestado.name, oid,
                'DocumentoG.Identificador');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisObsEstado.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Obsestado.name, value.oid)) {
                        this.puthisObsEstado.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisObsEstado.alias));
                        this.puthisObsEstado.cleanSelectedInstances();
                        this.puthisObsEstado.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisobsestado('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisObsEstado argument value
     */
    public cleanputhisobsestado(): void {
        this.clearValidationMessages();
        this.puthisObsEstado.clean();
        this.puthisObsEstado.oidFields = Array(2);
        this.executeDependecyRulesputhisobsestado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisObsEstado'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisObsEstado.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ObsEstado_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
