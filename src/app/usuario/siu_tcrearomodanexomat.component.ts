import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-usuario-siu-tcrearomodanexomat',
    templateUrl: './siu_tcrearomodanexomat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSIUuTCREAROMODANEXOMATComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisUsuario: FieldOVLenseSearch;
    public ptupuatrFechaUltRegla: Field;
    public ptupuatrNumCuotas: Field;
    public ptuInstitucionMat: FieldOVPreload;

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
        this.idXML = 'Clas_1432633737216826Ser_20UIServ_1';
        this.className = ModelConstants.Usuario.name;
        this.iuName = ModelConstants.Usuario.siuutcrearomodanexomat;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAROMODANEXOMAT';
        this.title = this.langMng.translateText('cls_Usuario_svc_TCREAROMODANEXOMAT',
            'Anexo de maternidad');

        // Create inbound argument components
        this.puthisUsuario = new FieldOVLenseSearch(this.langMng);
        this.ptupuatrFechaUltRegla = new Field(this.langMng);
        this.ptupuatrNumCuotas = new Field(this.langMng);
        this.ptuInstitucionMat = new FieldOVPreload(this.langMng);

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
            'cls_Usuario_svc_TCREAROMODANEXOMAT_inArg_p_thisUsuario',
            'Usuario');
        this.puthisUsuario.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisUsuario.mandatory = true;
        this.puthisUsuario.dataType = ModelConstants.Usuario.name;
        this.puthisUsuario.maxLength = 80;
        this.puthisUsuario.assignCSS();
        this.fields.push(this.puthisUsuario);

        this.ptupuatrFechaUltRegla.nameInRequest = 'pt_p_atrfechaultregla';
        this.ptupuatrFechaUltRegla.alias = this.langMng.translateText(
            'cls_Usuario_svc_TCREAROMODANEXOMAT_inArg_pt_p_atrFechaUltRegla',
            'Fecha última regla');
        this.ptupuatrFechaUltRegla.mandatory = true;
        this.ptupuatrFechaUltRegla.dataType = Field.dtDate;
        this.ptupuatrFechaUltRegla.assignCSS();
        this.fields.push(this.ptupuatrFechaUltRegla);

        this.ptupuatrNumCuotas.nameInRequest = 'pt_p_atrnumcuotas';
        this.ptupuatrNumCuotas.alias = this.langMng.translateText(
            'cls_Usuario_svc_TCREAROMODANEXOMAT_inArg_pt_p_atrNumCuotas',
            'Nº cuotas');
        this.ptupuatrNumCuotas.mandatory = true;
        this.ptupuatrNumCuotas.dataType = Field.dtNat;
        this.ptupuatrNumCuotas.assignCSS();
        this.fields.push(this.ptupuatrNumCuotas);

        this.ptuInstitucionMat.nameInRequest = 'pt_institucionmat';
        this.ptuInstitucionMat.alias = this.langMng.translateText(
            'cls_Usuario_svc_TCREAROMODANEXOMAT_inArg_pt_InstitucionMat',
            'Institución');
        this.ptuInstitucionMat.mandatory = true;
        this.ptuInstitucionMat.dataType = ModelConstants.Institucionmatneo.name;
        this.ptuInstitucionMat.maxLength = 100;
        this.ptuInstitucionMat.assignCSS();
        this.fields.push(this.ptuInstitucionMat);
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
            if (lastRole === 'InstitucionMaternal') {
                this.ptuInstitucionMat.setValue(lastRoleOid);
                this.ptuInstitucionMat.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of field pt_InstitucionMat
     */
    private loadPreloadptuinstitucionmat(): void {

        if (this.puthisUsuario.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TCREAROMODANEXOMAT_pt_InstitucionMat_NavFilter0');
            this.util.searchPreload('InstitucionMatNeo', 'IC_InstitucionMatNeo', navFilters, this.getNavigationFilterVariables(),
                '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptuInstitucionMat.loadPreload(response.results);
                    } else {
                        this.ptuInstitucionMat.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptuInstitucionMat.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptuInstitucionMat.cleanPreload();
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

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptuinstitucionmat();
        }
        if ('SetValue' === event && this.puthisUsuario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisUsuario();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisUsuario();
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
     * Dependency rule 1 for p_thisUsuario argument
     */
    private executeDependecyRules1puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'anexomat.Identificador,anexomat.fechaultregla,anexomat.numcuotas,anexomat.institucionmaternal.Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisUsuario argument
     */
    private executeDependecyRules1puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        // v <> NULL AND v.anexomat <> NULL
        if (varputhisusuario && !this.util.isNull(varputhisusuario) && !this.util.isNull(this.util.oidBuilder.buildOidAnexoMat(
            this.util.getInt(varputhisusuario.get('anexomat.Identificador'))))) {
            // pt_p_atrFechaUltRegla.SetValue( v.anexomat.fechaultregla )
            this.ptupuatrFechaUltRegla.setValue(this.util.getDate(varputhisusuario.get('anexomat.fechaultregla')));
            // pt_p_atrNumCuotas.SetValue( v.anexomat.numcuotas )
            this.ptupuatrNumCuotas.setValue(this.util.getInt(varputhisusuario.get('anexomat.numcuotas')));
            // pt_InstitucionMat.SetValue( v.anexomat.institucionmaternal )
            this.ptuInstitucionMat.setValue(this.util.oidBuilder.buildOidInstitucionMatNeo(
                varputhisusuario.get('anexomat.institucionmaternal.Codigo')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisUsuario argument
     */
    private executeDependecyRules2puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'Solicitud.Ae_solicitudes.id_solicitud');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisUsuario argument
     */
    private executeDependecyRules2puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        // v <> NULL
        if (varputhisusuario && !this.util.isNull(varputhisusuario)) {
            // p_thisUsuario.SetVisible( FALSE )
            this.puthisUsuario.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
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
