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
    selector: 'imes-usuario-siu-showcuesmedico',
    templateUrl: './siu_showcuesmedico.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSIUushowCuesMedicoComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisUsuario: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1432633737216826Ser_21UIServ_1';
        this.className = ModelConstants.Usuario.name;
        this.iuName = ModelConstants.Usuario.siuushowcuesmedico;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'showCuesMedico';
        this.title = this.langMng.translateText('cls_Usuario_svc_showCuesMedico',
            'Cuestionario médico');
        this.noShow = true;

        // Create inbound argument components
        this.puthisUsuario = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisUsuario.nameInRequest = 'p_thisusuario';
        this.puthisUsuario.alias = this.langMng.translateText(
            'cls_Usuario_svc_showCuesMedico_inArg_p_thisUsuario',
            'Usuario');
        this.puthisUsuario.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisUsuario.mandatory = true;
        this.puthisUsuario.dataType = ModelConstants.Usuario.name;
        this.puthisUsuario.maxLength = 80;
        this.puthisUsuario.assignCSS();
        this.fields.push(this.puthisUsuario);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Usuario'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisUsuario.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisusuario('SetValue', true);
            this.puthisUsuario.enabled = false;
            this.executeDependecyRulesputhisusuario('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisUsuario'.toLowerCase()) {
            this.puthisUsuario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisusuario('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisusuario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisusuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisUsuario argument
     */
    private setSuppInfoputhisusuario(): void {

        const displaySetIC = 'TipoIdentificacion.NombreCorto,NumIdentificacion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisUsuario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisUsuario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisUsuario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Usuario.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisUsuario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisUsuario lense search argument
     */
    public onputhisusuarioChange(): void {

        const searchText = this.puthisUsuario.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisUsuario.lastText) {
                this.puthisUsuario.removeCSSClass('noResultsLenseSearch');
                this.puthisUsuario.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Usuario.name, 'IC_Usuario', searchText, [], null).then(
                        (response: any) => {
                            this.puthisUsuario.removeCSSClass('noResultsLenseSearch');
                            this.puthisUsuario.searchResults = response.results;
                            if (this.puthisUsuario.searchResults &&
                                this.puthisUsuario.searchResults.length === 0) {
                                this.puthisUsuario.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisUsuario.searchResults &&
                                this.puthisUsuario.searchResults.length === 1) {
                                this.processputhisusuarioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisUsuario.removeCSSClass('noResultsLenseSearch');
                            this.puthisUsuario.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisUsuario.removeCSSClass('noResultsLenseSearch');
            this.puthisUsuario.searchResults = [];
            this.cleanputhisusuario();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisUsuario lense search argument
     */
    public processputhisusuarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisUsuario.searchResults.length > index) {
            selectedInstance = this.puthisUsuario.searchResults[index];
        }
        // Clean the result list
        this.puthisUsuario.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisUsuario.allowMultiSelect) {
                this.puthisUsuario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisUsuario.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisUsuario lense search argument
     */
    public cleanputhisusuario(): void {
        this.clearValidationMessages();
        this.puthisUsuario.clean();
        this.executeDependecyRulesputhisusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisUsuario'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisUsuario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Usuario_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
