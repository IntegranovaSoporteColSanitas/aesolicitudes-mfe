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
    selector: 'imes-persona-siu-teliminar',
    templateUrl: './siu_teliminar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaSIUuTELIMINARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPersona: FieldOVLenseSearch;
    public ptUsuario: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1431886233600805Ser_53UIServ_1';
        this.className = ModelConstants.Persona.name;
        this.iuName = ModelConstants.Persona.siuuteliminar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TELIMINAR';
        this.title = this.langMng.translateText('cls_Persona_svc_TELIMINAR',
            '¿Está seguro de que desea eliminar al usuario?');

        // Create inbound argument components
        this.puthisPersona = new FieldOVLenseSearch(this.langMng);
        this.ptUsuario = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPersona.nameInRequest = 'p_thispersona';
        this.puthisPersona.alias = this.langMng.translateText(
            'cls_Persona_svc_TELIMINAR_inArg_p_thisPersona',
            'Persona');
        this.puthisPersona.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPersona.mandatory = true;
        this.puthisPersona.dataType = ModelConstants.Persona.name;
        this.puthisPersona.maxLength = 80;
        this.puthisPersona.assignCSS();
        this.fields.push(this.puthisPersona);

        this.ptUsuario.nameInRequest = 'ptusuario';
        this.ptUsuario.alias = this.langMng.translateText(
            'cls_Persona_svc_TELIMINAR_inArg_ptUsuario',
            'Usuario');
        this.ptUsuario.mandatory = true;
        this.ptUsuario.dataType = ModelConstants.Usuario.name;
        this.ptUsuario.maxLength = 80;
        this.ptUsuario.assignCSS();
        this.fields.push(this.ptUsuario);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Persona'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPersona.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhispersona('SetValue', true);
            this.puthisPersona.enabled = false;
            this.executeDependecyRulesputhispersona('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPersona'.toLowerCase()) {
            this.puthisPersona.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhispersona('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptUsuario'.toLowerCase()) {
            this.ptUsuario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptusuario('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPersona argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhispersona(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhispersona();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPersona argument
     */
    private setSuppInfoputhispersona(): void {

        const displaySetIC = 'TipoIdentificacion.NombreCorto,NumIdentificacion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPersona.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Persona.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisPersona.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPersona.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Persona.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisPersona.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisPersona lense search argument
     */
    public onputhispersonaChange(): void {

        const searchText = this.puthisPersona.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisPersona.lastText) {
                this.puthisPersona.removeCSSClass('noResultsLenseSearch');
                this.puthisPersona.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Persona.name, 'IC_Persona', searchText, [], null).then(
                        (response: any) => {
                            this.puthisPersona.removeCSSClass('noResultsLenseSearch');
                            this.puthisPersona.searchResults = response.results;
                            if (this.puthisPersona.searchResults &&
                                this.puthisPersona.searchResults.length === 0) {
                                this.puthisPersona.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisPersona.searchResults &&
                                this.puthisPersona.searchResults.length === 1) {
                                this.processputhispersonaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisPersona.removeCSSClass('noResultsLenseSearch');
                            this.puthisPersona.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisPersona.removeCSSClass('noResultsLenseSearch');
            this.puthisPersona.searchResults = [];
            this.cleanputhispersona();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisPersona lense search argument
     */
    public processputhispersonaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisPersona.searchResults.length > index) {
            selectedInstance = this.puthisPersona.searchResults[index];
        }
        // Clean the result list
        this.puthisPersona.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisPersona.allowMultiSelect) {
                this.puthisPersona.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisPersona.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhispersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisPersona lense search argument
     */
    public cleanputhispersona(): void {
        this.clearValidationMessages();
        this.puthisPersona.clean();
        this.executeDependecyRulesputhispersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptusuario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptusuario();
        }
        if ('SetValue' === event && this.ptUsuario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptUsuario argument
     */
    private setSuppInfoptusuario(): void {

        const displaySetIC = 'TipoIdentificacion.NombreCorto,NumIdentificacion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptUsuario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptUsuario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptUsuario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Usuario.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptUsuario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for ptUsuario argument
     */
    private executeDependecyRules1ptUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptUsuario,
                'usuariopersona.Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptUsuario argument
     */
    private executeDependecyRules1ptUsuarioActions(): void {
        const varptusuario = this.getFirstInstanceFromCache(this.ptUsuario);
        // v <> NULL
        if (varptusuario && !this.util.isNull(varptusuario)) {
            // p_thisPersona.SetValue( v.usuariopersona )
            this.puthisPersona.setValue(this.util.oidBuilder.buildOidPersona(
                this.util.getInt(varptusuario.get('usuariopersona.Identificador'))));
            this.executeDependecyRulesputhispersona('SetValue', true);
            // p_thisPersona.SetVisible( FALSE )
            this.puthisPersona.visible = false;
            // ptUsuario.SetVisible( FALSE )
            this.ptUsuario.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptUsuario lense search argument
     */
    public onptusuarioChange(): void {

        const searchText = this.ptUsuario.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptUsuario.lastText) {
                this.ptUsuario.removeCSSClass('noResultsLenseSearch');
                this.ptUsuario.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Usuario.name, 'IC_Usuario', searchText, [], null).then(
                        (response: any) => {
                            this.ptUsuario.removeCSSClass('noResultsLenseSearch');
                            this.ptUsuario.searchResults = response.results;
                            if (this.ptUsuario.searchResults &&
                                this.ptUsuario.searchResults.length === 0) {
                                this.ptUsuario.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptUsuario.searchResults &&
                                this.ptUsuario.searchResults.length === 1) {
                                this.processptusuarioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptUsuario.removeCSSClass('noResultsLenseSearch');
                            this.ptUsuario.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptUsuario.removeCSSClass('noResultsLenseSearch');
            this.ptUsuario.searchResults = [];
            this.cleanptusuario();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptUsuario lense search argument
     */
    public processptusuarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptUsuario.searchResults.length > index) {
            selectedInstance = this.ptUsuario.searchResults[index];
        }
        // Clean the result list
        this.ptUsuario.searchResults = [];
        if (selectedInstance) {
            if (!this.ptUsuario.allowMultiSelect) {
                this.ptUsuario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptUsuario.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptUsuario lense search argument
     */
    public cleanptusuario(): void {
        this.clearValidationMessages();
        this.ptUsuario.clean();
        this.executeDependecyRulesptusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPersona'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPersona.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Persona';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptUsuario'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptUsuario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Usuario_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
