import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_UsuarioReg of UsuarioReg »
 */
export class UsuarioRegPIUuUsuarioRegComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnumusuario = 'Nº';
    private readonly dstipoynumdoc = 'Tipo y Nº Doc';
    private readonly dsprimernombre = 'Primer nombre';
    private readonly dssegundonombre = 'Segundo nombre';
    private readonly dsprimerapellido = 'Primer apellido';
    private readonly dssegundoapellido = 'Segundo apellido';
    private readonly dsparentescoddescripcion = 'Parentesco con el titular';
    private readonly dsestadobeneficiarioddescripcion = 'Estado';
    private readonly dsfechanacimiento = 'Fecha nacimiento';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1433848250368895UIPobCl_1';
        this.className = ModelConstants.Usuarioreg.name;
        this.iuName = 'PIU_UsuarioReg';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_UsuarioReg_piu_PIU_UsuarioReg',
            'Usuarios registrados');
        this.queryURL = '/api/UsuarioRegApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_9';
        dsItem.name = 'numusuario';
        dsItem.field = 'numusuario';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_9',
            this.dsnumusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_2';
        dsItem.name = 'tipoynumdoc';
        dsItem.field = 'tipoynumdoc';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 80;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_2',
            this.dstipoynumdoc);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_3';
        dsItem.name = 'primernombre';
        dsItem.field = 'primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_3',
            this.dsprimernombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_4';
        dsItem.name = 'segundonombre';
        dsItem.field = 'segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_4',
            this.dssegundonombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_5';
        dsItem.name = 'primerapellido';
        dsItem.field = 'primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_5',
            this.dsprimerapellido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_6';
        dsItem.name = 'segundoapellido';
        dsItem.field = 'segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_6',
            this.dssegundoapellido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_10';
        dsItem.name = 'parentesco.descripcion';
        dsItem.field = 'parentesco-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_10',
            this.dsparentescoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_8';
        dsItem.name = 'estadobeneficiario.descripcion';
        dsItem.field = 'estadobeneficiario-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_8',
            this.dsestadobeneficiarioddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1433848250368895CjtoVis_1ICtjoVis_11';
        dsItem.name = 'fechanacimiento';
        dsItem.field = 'fechanacimiento';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioReg_ds_DS_UsuarioReg_PIU_item_Clas_1433848250368895CjtoVis_1ICtjoVis_11',
            this.dsfechanacimiento);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
