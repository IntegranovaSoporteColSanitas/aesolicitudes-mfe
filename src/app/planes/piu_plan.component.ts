import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { PlanesFilterFuPlanVarios} from './filters/planesfilterfuplanvarios';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_Plan of Planes »
 */
@Component({
    selector: 'imes-planes-piu-plan',
    templateUrl: './piu_plan.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanesPIUuPlanComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplan = 'Plan';
    private readonly dsnombre = 'Nombre';
    private readonly dsesbancorep = 'Es banco república';
    private readonly dsaceptapreexistencias = 'Acepta preexistencias';
    private readonly dsesvoluntario = 'Es Voluntario';
    private readonly dsiniciocontdiauno = 'Inicio de contratación día uno';

    /** Filters */
    public f0: PlanesFilterFuPlanVarios;

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
        this.idXML = 'Clas_1431695392768502UIPobCl_1';
        this.className = ModelConstants.Planes.name;
        this.classAlias = this.langMng.translateText('cls_Planes',
            'Plan');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = ModelConstants.Planes.piuuplan;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo', 'Funcionario']));
        this.title = this.langMng.translateText('cls_Planes_piu_PIU_Plan',
            'Planes');
        this.f0 = new PlanesFilterFuPlanVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/PlanesApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_2';
        dsItem.name = 'plan';
        dsItem.field = 'plan';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_2',
            this.dsplan);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name,
            ModelConstants.Asesor.name, ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_3',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_4';
        dsItem.name = 'esbancorep';
        dsItem.field = 'esbancorep';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_4',
            this.dsesbancorep);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_5';
        dsItem.name = 'aceptapreexistencias';
        dsItem.field = 'aceptapreexistencias';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_5',
            this.dsaceptapreexistencias);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_6';
        dsItem.name = 'esvoluntario';
        dsItem.field = 'esvoluntario';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_6',
            this.dsesvoluntario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_7';
        dsItem.name = 'iniciocontdiauno';
        dsItem.field = 'iniciocontdiauno';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_7',
            this.dsiniciocontdiauno);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
