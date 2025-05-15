import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
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
    selector: 'imes-usuario-siu-tmodificarattr',
    templateUrl: './siu_tmodificarattr.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSIUuTMODIFICARATTRComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisAttrUsuario: FieldOVLenseSearch;
    public ptupuBebeGestante: FieldDefinedSelection;
    public ptupuevcCompanyia: FieldOVPreload;
    public ptupuevcEPS: FieldOVPreload;
    public ptupuevcParentesco: FieldOVPreload;
    public ptupucodigoBancoRep: Field;
    public ptupuFechaAntiguedad: Field;
    public ptupePolizaInternacional: FieldDefinedSelection;

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
        this.idXML = 'Clas_1432633737216826Ser_12UIServ_1';
        this.className = ModelConstants.Usuario.name;
        this.iuName = ModelConstants.Usuario.siuutmodificarattr;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODIFICARATTR';
        this.title = this.langMng.translateText('cls_Usuario_svc_TMODIFICARATTR',
            'Modificar atributos de usuario');

        // Create inbound argument components
        this.puthisAttrUsuario = new FieldOVLenseSearch(this.langMng);
        this.ptupuBebeGestante = new FieldDefinedSelection(this.langMng);
        this.ptupuevcCompanyia = new FieldOVPreload(this.langMng);
        this.ptupuevcEPS = new FieldOVPreload(this.langMng);
        this.ptupuevcParentesco = new FieldOVPreload(this.langMng);
        this.ptupucodigoBancoRep = new Field(this.langMng);
        this.ptupuFechaAntiguedad = new Field(this.langMng);
        this.ptupePolizaInternacional = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisAttrUsuario.nameInRequest = 'p_thisattrusuario';
        this.puthisAttrUsuario.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_p_thisAttrUsuario',
            'Usuario');
        this.puthisAttrUsuario.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisAttrUsuario.mandatory = true;
        this.puthisAttrUsuario.dataType = ModelConstants.Usuario.name;
        this.puthisAttrUsuario.maxLength = 80;
        this.puthisAttrUsuario.assignCSS();
        this.fields.push(this.puthisAttrUsuario);

        this.ptupuBebeGestante.nameInRequest = 'pt_p_bebegestante';
        this.ptupuBebeGestante.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_p_BebeGestante',
            'Bebé gestante');
        this.ptupuBebeGestante.mandatory = true;
        this.ptupuBebeGestante.dataType = Field.dtBool;
        this.ptupuBebeGestante.options = DefinedSelections.DS_SINO;
        this.ptupuBebeGestante.assignCSS();
        this.fields.push(this.ptupuBebeGestante);

        this.ptupuevcCompanyia.nameInRequest = 'pt_p_evccompanyia';
        this.ptupuevcCompanyia.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_p_evcCompanyia',
            'Compañía anterior');
        this.ptupuevcCompanyia.mandatory = false;
        this.ptupuevcCompanyia.dataType = ModelConstants.Companyia.name;
        this.ptupuevcCompanyia.maxLength = 150;
        this.ptupuevcCompanyia.assignCSS();
        this.fields.push(this.ptupuevcCompanyia);

        this.ptupuevcEPS.nameInRequest = 'pt_p_evceps';
        this.ptupuevcEPS.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_p_evcEPS',
            'EPS');
        this.ptupuevcEPS.mandatory = true;
        this.ptupuevcEPS.dataType = ModelConstants.Eps.name;
        this.ptupuevcEPS.maxLength = 150;
        this.ptupuevcEPS.assignCSS();
        this.fields.push(this.ptupuevcEPS);

        this.ptupuevcParentesco.nameInRequest = 'pt_p_evcparentesco';
        this.ptupuevcParentesco.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_p_evcParentesco',
            'Parentesco');
        this.ptupuevcParentesco.mandatory = true;
        this.ptupuevcParentesco.dataType = ModelConstants.Parentesco.name;
        this.ptupuevcParentesco.maxLength = 100;
        this.ptupuevcParentesco.assignCSS();
        this.fields.push(this.ptupuevcParentesco);

        this.ptupucodigoBancoRep.nameInRequest = 'pt_p_codigobancorep';
        this.ptupucodigoBancoRep.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_p_codigoBancoRep',
            'Cod. Banco República');
        this.ptupucodigoBancoRep.mandatory = false;
        this.ptupucodigoBancoRep.dataType = Field.dtString;
        this.ptupucodigoBancoRep.maxLength = 30;
        this.ptupucodigoBancoRep.assignCSS();
        this.fields.push(this.ptupucodigoBancoRep);

        this.ptupuFechaAntiguedad.nameInRequest = 'pt_p_fechaantiguedad';
        this.ptupuFechaAntiguedad.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_p_FechaAntiguedad',
            'Fecha antigüedad beneficiario');
        this.ptupuFechaAntiguedad.mandatory = false;
        this.ptupuFechaAntiguedad.dataType = Field.dtDate;
        this.ptupuFechaAntiguedad.assignCSS();
        this.fields.push(this.ptupuFechaAntiguedad);

        this.ptupePolizaInternacional.nameInRequest = 'pt_pepolizainternacional';
        this.ptupePolizaInternacional.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR_inArg_pt_pePolizaInternacional',
            'Respaldo global');
        this.ptupePolizaInternacional.mandatory = true;
        this.ptupePolizaInternacional.dataType = Field.dtBool;
        this.ptupePolizaInternacional.options = DefinedSelections.DS_SINO;
        this.ptupePolizaInternacional.value = false;
        this.ptupePolizaInternacional.assignCSS();
        this.fields.push(this.ptupePolizaInternacional);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_BebeGestante
            const defValptupuBebeGestante = new Promise<void>((resolveDefValue) => {
                this.ptupuBebeGestante.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuBebeGestante);

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
            ['Usuario'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisAttrUsuario.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisattrusuario('SetValue', true);
            this.puthisAttrUsuario.enabled = false;
            this.executeDependecyRulesputhisattrusuario('SetEnabled', true);
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
            if (lastRole === 'Companyia') {
                this.ptupuevcCompanyia.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevccompanyia('SetValue', true);
                this.ptupuevcCompanyia.enabled = false;
                this.executeDependecyRulesptupuevccompanyia('SetEnabled', true);
            }
            if (lastRole === 'Eps') {
                this.ptupuevcEPS.setValue(lastRoleOid);
                this.ptupuevcEPS.enabled = false;
            }
            if (lastRole === 'Parentesco') {
                this.ptupuevcParentesco.setValue(lastRoleOid);
                this.ptupuevcParentesco.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcCompanyia
        const navFiltersptupuevcCompanyia: string[] = [];
        navFiltersptupuevcCompanyia.push('Usuario_TMODIFICARATTR_pt_p_evcCompanyia_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Companyia', 'IC_Companyia', navFiltersptupuevcCompanyia, this.getNavigationFilterVariables(), 'OC_Companyia').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcCompanyia.loadPreload(response.results);
                } else {
                    this.ptupuevcCompanyia.loadPreload([]);
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
     * Search the preload values of field pt_p_evcEPS
     */
    private loadPreloadptupuevceps(): void {

        if (this.puthisAttrUsuario.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TMODIFICARATTR_pt_p_evcEPS_NavFilter0');
            this.util.searchPreload('Eps', 'IC_EPS', navFilters, this.getNavigationFilterVariables(), 'OC_EPS').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuevcEPS.loadPreload(response.results);
                    } else {
                        this.ptupuevcEPS.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuevcEPS.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuevcEPS.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_evcParentesco
     */
    private loadPreloadptupuevcparentesco(): void {

        if (this.puthisAttrUsuario.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TMODIFICARATTR_pt_p_evcParentesco_NavFilter0');
            navFilters.push('Usuario_TMODIFICARATTR_pt_p_evcParentesco_NavFilter1');
            this.util.searchPreload('Parentesco', 'IC_Parentesco', navFilters, this.getNavigationFilterVariables(),
                'OC_Parentesco').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuevcParentesco.loadPreload(response.results);
                    } else {
                        this.ptupuevcParentesco.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuevcParentesco.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuevcParentesco.cleanPreload();
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisAttrUsuario'.toLowerCase()) {
            this.puthisAttrUsuario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisattrusuario('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisAttrUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisattrusuario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisattrusuario();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptupuevceps();
            this.loadPreloadptupuevcparentesco();
        }
        if ('SetValue' === event && this.puthisAttrUsuario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisAttrUsuario();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisAttrUsuario();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puthisAttrUsuario();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4puthisAttrUsuario();
        }
        // Rule 5
        if ('SetValue' === event) {
            this.executeDependecyRules5puthisAttrUsuario();
        }
        // Rule 6
        if ('SetValue' === event) {
            this.executeDependecyRules6puthisAttrUsuario();
        }
        // Rule 7
        if ('SetValue' === event) {
            this.executeDependecyRules7puthisAttrUsuario();
        }
        // Rule 8
        if ('SetValue' === event) {
            this.executeDependecyRules8puthisAttrUsuario();
        }
        // Rule 9
        if ('SetValue' === event) {
            this.executeDependecyRules9puthisAttrUsuario();
        }
        // Rule 10
        if ('SetValue' === event) {
            this.executeDependecyRules10puthisAttrUsuario();
        }
        // Rule 11
        if ('SetValue' === event) {
            this.executeDependecyRules11puthisAttrUsuario();
        }
        // Rule 12
        if ('SetValue' === event) {
            this.executeDependecyRules12puthisAttrUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisAttrUsuario argument
     */
    private setSuppInfoputhisattrusuario(): void {

        const displaySetIC = 'TipoIdentificacion.NombreCorto,NumIdentificacion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisAttrUsuario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisAttrUsuario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisAttrUsuario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Usuario.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisAttrUsuario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisAttrUsuario argument
     */
    private executeDependecyRules1puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'bebegestante,companyia.Codigo,eps.Codigo,parentesco.Codigo,codigobancorep,fechaantiguedadbeneficiario' +
                ',polizainternacional');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisAttrUsuario argument
     */
    private executeDependecyRules1puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario)) {
            // p_thisAttrUsuario.SetVisible( false )
            this.puthisAttrUsuario.visible = false;
            // pt_p_BebeGestante.SetValue( v.bebegestante )
            this.ptupuBebeGestante.setValue(this.util.getBool(varputhisattrusuario.get('bebegestante')));
            // pt_p_evcCompanyia.SetValue( v.companyia )
            this.ptupuevcCompanyia.setValue(this.util.oidBuilder.buildOidCompanyia(
                this.util.getInt(varputhisattrusuario.get('companyia.Codigo'))));
            this.executeDependecyRulesptupuevccompanyia('SetValue', true);
            // pt_p_evcEPS.SetValue( v.Eps )
            this.ptupuevcEPS.setValue(this.util.oidBuilder.buildOidEps(
                this.util.getInt(varputhisattrusuario.get('eps.Codigo'))));
            // pt_p_evcParentesco.SetValue( v.parentesco )
            this.ptupuevcParentesco.setValue(this.util.oidBuilder.buildOidParentesco(
                this.util.getInt(varputhisattrusuario.get('parentesco.Codigo'))));
            // pt_p_codigoBancoRep.SetValue( v.codigobancorep )
            this.ptupucodigoBancoRep.setValue(varputhisattrusuario.get('codigobancorep'));
            // pt_p_FechaAntiguedad.SetValue( v.fechaantiguedadbeneficiario )
            this.ptupuFechaAntiguedad.setValue(this.util.getDate(varputhisattrusuario.get('fechaantiguedadbeneficiario')));
            // pt_pePolizaInternacional.SetValue( v.polizainternacional )
            this.ptupePolizaInternacional.setValue(this.util.getBool(varputhisattrusuario.get('polizainternacional')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisAttrUsuario argument
     */
    private executeDependecyRules2puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'usuariopersona.tieneepssanitas');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisAttrUsuario argument
     */
    private executeDependecyRules2puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        let rtnFunction0: any;
        // v <> NULL AND v.usuariopersona.tieneepssanitas = true
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('usuariopersona.tieneepssanitas')), true)) {
            this.usrFunc.fu_getEPSSanitas().then((res0) => {
                rtnFunction0 = res0;
                // pt_p_evcEPS.SetValue( fu_getEPSSanitas() )
                this.ptupuevcEPS.setValue(rtnFunction0);
                // pt_p_evcEPS.SetActive( false )
                this.ptupuevcEPS.enabled = false;

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_thisAttrUsuario argument
     */
    private executeDependecyRules3puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'drveseltitular');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_thisAttrUsuario argument
     */
    private executeDependecyRules3puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        let rtnFunction0: any;
        // v <> NULL AND v.drveseltitular = true
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('drveseltitular')), true)) {
            this.usrFunc.fu_getParentescoTitular().then((res0) => {
                rtnFunction0 = res0;
                // pt_p_evcParentesco.SetValue( fu_getParentescoTitular() )
                this.ptupuevcParentesco.setValue(rtnFunction0);
                // pt_p_evcParentesco.SetActive( false )
                this.ptupuevcParentesco.enabled = false;

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for p_thisAttrUsuario argument
     */
    private executeDependecyRules4puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'solicitud.tramite');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for p_thisAttrUsuario argument
     */
    private executeDependecyRules4puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.solicitud.tramite = 1
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getInt(varputhisattrusuario.get('solicitud.tramite')), 1)) {
            // pt_p_codigoBancoRep.SetValue( NULL )
            this.ptupucodigoBancoRep.setValue(null);
            // pt_p_codigoBancoRep.SetVisible( FALSE )
            this.ptupucodigoBancoRep.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 5 for p_thisAttrUsuario argument
     */
    private executeDependecyRules5puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'solicitud.ae_solicitudes.plant.esbancorep');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules5puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 5 for p_thisAttrUsuario argument
     */
    private executeDependecyRules5puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.solicitud.Ae_solicitudes.plant.esbancorep = false
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('solicitud.ae_solicitudes.plant.esbancorep')), false)) {
            // pt_p_codigoBancoRep.SetValue( NULL )
            this.ptupucodigoBancoRep.setValue(null);
            // pt_p_codigoBancoRep.SetVisible( FALSE )
            this.ptupucodigoBancoRep.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 6 for p_thisAttrUsuario argument
     */
    private executeDependecyRules6puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'solicitud.tramite,solicitud.ae_solicitudes.plant.esbancorep');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules6puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 6 for p_thisAttrUsuario argument
     */
    private executeDependecyRules6puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.solicitud.tramite <> 1 AND v.solicitud.Ae_solicitudes.plant.esbancorep = true
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            !this.util.valueEquals(this.util.getInt(varputhisattrusuario.get('solicitud.tramite')), 1) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('solicitud.ae_solicitudes.plant.esbancorep')), true)) {
            // pt_p_codigoBancoRep.SetVisible( TRUE )
            this.ptupucodigoBancoRep.visible = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 7 for p_thisAttrUsuario argument
     */
    private executeDependecyRules7puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'usuarioreplicado');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules7puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 7 for p_thisAttrUsuario argument
     */
    private executeDependecyRules7puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.usuarioreplicado = true
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('usuarioreplicado')), true)) {
            // pt_p_codigoBancoRep.SetActive( FALSE )
            this.ptupucodigoBancoRep.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 8 for p_thisAttrUsuario argument
     */
    private executeDependecyRules8puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'usuarioreplicado');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules8puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 8 for p_thisAttrUsuario argument
     */
    private executeDependecyRules8puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.usuarioreplicado = false
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('usuarioreplicado')), false)) {
            // pt_p_codigoBancoRep.SetActive( TRUE )
            this.ptupucodigoBancoRep.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 9 for p_thisAttrUsuario argument
     */
    private executeDependecyRules9puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'solicitud.ae_solicitudes.plant.esvoluntario');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules9puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 9 for p_thisAttrUsuario argument
     */
    private executeDependecyRules9puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.solicitud.Ae_solicitudes.plant.esvoluntario = true
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('solicitud.ae_solicitudes.plant.esvoluntario')), true)) {
            // pt_p_evcCompanyia.SetValue( NULL )
            this.ptupuevcCompanyia.setValue(null);
            this.executeDependecyRulesptupuevccompanyia('SetValue', true);
            // pt_p_evcCompanyia.SetVisible( FALSE )
            this.ptupuevcCompanyia.visible = false;
            // pt_p_FechaAntiguedad.SetValue( NULL )
            this.ptupuFechaAntiguedad.setValue(null);
            // pt_p_FechaAntiguedad.SetVisible( FALSE )
            this.ptupuFechaAntiguedad.visible = false;
            // pt_p_BebeGestante.SetValue( FALSE )
            this.ptupuBebeGestante.setValue(false);
            // pt_p_BebeGestante.SetVisible( FALSE )
            this.ptupuBebeGestante.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 10 for p_thisAttrUsuario argument
     */
    private executeDependecyRules10puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'solicitud.drvaplicapolizainternacional');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules10puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 10 for p_thisAttrUsuario argument
     */
    private executeDependecyRules10puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.solicitud.drvaplicapolizainternacional = false
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('solicitud.drvaplicapolizainternacional')), false)) {
            // pt_pePolizaInternacional.SetVisible( FALSE )
            this.ptupePolizaInternacional.visible = false;
            // pt_pePolizaInternacional.SetValue( FALSE )
            this.ptupePolizaInternacional.setValue(false);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 11 for p_thisAttrUsuario argument
     */
    private executeDependecyRules11puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'tipoidentificacion.menorsinidentificar');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules11puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 11 for p_thisAttrUsuario argument
     */
    private executeDependecyRules11puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.tipoidentificacion.menorsinidentificar = true
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('tipoidentificacion.menorsinidentificar')), true)) {
            // pt_p_BebeGestante.SetValue( TRUE )
            this.ptupuBebeGestante.setValue(true);
            // pt_p_BebeGestante.SetActive( FALSE )
            this.ptupuBebeGestante.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 12 for p_thisAttrUsuario argument
     */
    private executeDependecyRules12puthisAttrUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAttrUsuario,
                'tipoidentificacion.menorsinidentificar');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules12puthisAttrUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 12 for p_thisAttrUsuario argument
     */
    private executeDependecyRules12puthisAttrUsuarioActions(): void {
        const varputhisattrusuario = this.getFirstInstanceFromCache(this.puthisAttrUsuario);
        // v <> NULL AND v.tipoidentificacion.menorsinidentificar = false
        if (varputhisattrusuario && !this.util.isNull(varputhisattrusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisattrusuario.get('tipoidentificacion.menorsinidentificar')), false)) {
            // pt_p_BebeGestante.SetActive( TRUE )
            this.ptupuBebeGestante.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisAttrUsuario lense search argument
     */
    public onputhisattrusuarioChange(): void {

        const searchText = this.puthisAttrUsuario.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisAttrUsuario.lastText) {
                this.puthisAttrUsuario.removeCSSClass('noResultsLenseSearch');
                this.puthisAttrUsuario.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Usuario.name, 'IC_Usuario', searchText, [], null).then(
                        (response: any) => {
                            this.puthisAttrUsuario.removeCSSClass('noResultsLenseSearch');
                            this.puthisAttrUsuario.searchResults = response.results;
                            if (this.puthisAttrUsuario.searchResults &&
                                this.puthisAttrUsuario.searchResults.length === 0) {
                                this.puthisAttrUsuario.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisAttrUsuario.searchResults &&
                                this.puthisAttrUsuario.searchResults.length === 1) {
                                this.processputhisattrusuarioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisAttrUsuario.removeCSSClass('noResultsLenseSearch');
                            this.puthisAttrUsuario.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisAttrUsuario.removeCSSClass('noResultsLenseSearch');
            this.puthisAttrUsuario.searchResults = [];
            this.cleanputhisattrusuario();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisAttrUsuario lense search argument
     */
    public processputhisattrusuarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisAttrUsuario.searchResults.length > index) {
            selectedInstance = this.puthisAttrUsuario.searchResults[index];
        }
        // Clean the result list
        this.puthisAttrUsuario.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisAttrUsuario.allowMultiSelect) {
                this.puthisAttrUsuario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisAttrUsuario.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisattrusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisAttrUsuario lense search argument
     */
    public cleanputhisattrusuario(): void {
        this.clearValidationMessages();
        this.puthisAttrUsuario.clean();
        this.executeDependecyRulesputhisattrusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcCompanyia argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevccompanyia(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuevcCompanyia.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuevcCompanyia();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuevcCompanyia();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_evcCompanyia argument
     */
    private executeDependecyRules1ptupuevcCompanyia(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcCompanyia,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuevcCompanyiaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_evcCompanyia argument
     */
    private executeDependecyRules1ptupuevcCompanyiaActions(): void {
        const varptupuevccompanyia = this.getFirstInstanceFromCache(this.ptupuevcCompanyia);
        // v <> NULL
        if (varptupuevccompanyia && !this.util.isNull(varptupuevccompanyia)) {
            // pt_p_FechaAntiguedad.SetActive( TRUE )
            this.ptupuFechaAntiguedad.enabled = true;
            // pt_p_FechaAntiguedad.SetMandatory( TRUE )
            this.ptupuFechaAntiguedad.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_evcCompanyia argument
     */
    private executeDependecyRules2ptupuevcCompanyia(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcCompanyia,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuevcCompanyiaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_evcCompanyia argument
     */
    private executeDependecyRules2ptupuevcCompanyiaActions(): void {
        const varptupuevccompanyia = this.getFirstInstanceFromCache(this.ptupuevcCompanyia);
        // v = NULL
        if (varptupuevccompanyia && this.util.isNull(varptupuevccompanyia)) {
            // pt_p_FechaAntiguedad.SetActive( FALSE )
            this.ptupuFechaAntiguedad.enabled = false;
            // pt_p_FechaAntiguedad.SetMandatory( FALSE )
            this.ptupuFechaAntiguedad.mandatory = false;
            // pt_p_FechaAntiguedad.SetValue( NULL )
            this.ptupuFechaAntiguedad.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_evcCompanyia argument
     */
    public onptupuevccompanyiaChange(): void {
        this.executeDependecyRulesptupuevccompanyia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisAttrUsuario'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisAttrUsuario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Usuario_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
