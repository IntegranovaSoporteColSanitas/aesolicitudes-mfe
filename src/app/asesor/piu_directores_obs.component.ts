import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { AsesorFilterFuDirectores} from './filters/asesorfilterfudirectores';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-asesor-piu-directores-obs',
    templateUrl: './piu_directores_obs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsesorPIUuDirectoresuObsComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsdrvnombrecompleto = 'Nombre completo';
    private readonly dsemail = 'Email';
    private readonly dssucursalddescripcion = 'Sucursal';
    private readonly dstipoidentificaciondnombrecorto = 'Tipo Doc.';
    private readonly dsnumidentificacion = 'Nº Doc.';

    /** Filters */
    public f0: AsesorFilterFuDirectores;

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
        this.idXML = 'Clas_1431886233600794UIPobCl_8';
        this.className = ModelConstants.Asesor.name;
        this.iuName = ModelConstants.Asesor.piuudirectoresuobs;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin',
            'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Asesor_piu_PIU_Directores_Obs',
            'Directores');
        this.f0 = new AsesorFilterFuDirectores(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/AsesorApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_8ICtjoVis_2';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Directores_Obs_item_Clas_1431886233600794CjtoVis_8ICtjoVis_2',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name,
            ModelConstants.Asesor.name, ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_8ICtjoVis_4';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Directores_Obs_item_Clas_1431886233600794CjtoVis_8ICtjoVis_4',
            this.dsemail);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name,
            ModelConstants.Asesor.name, ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_8ICtjoVis_12';
        dsItem.name = 'sucursal.descripcion';
        dsItem.field = 'sucursal-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Directores_Obs_item_Clas_1431886233600794CjtoVis_8ICtjoVis_12',
            this.dssucursalddescripcion);
        dsItem.agents = [ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_8ICtjoVis_13';
        dsItem.name = 'tipoidentificacion.nombrecorto';
        dsItem.field = 'tipoidentificacion-nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Directores_Obs_item_Clas_1431886233600794CjtoVis_8ICtjoVis_13',
            this.dstipoidentificaciondnombrecorto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_8ICtjoVis_14';
        dsItem.name = 'numidentificacion';
        dsItem.field = 'numidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 60;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Directores_Obs_item_Clas_1431886233600794CjtoVis_8ICtjoVis_14',
            this.dsnumidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
