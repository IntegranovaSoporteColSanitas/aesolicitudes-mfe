import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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
 * « Implements PIU PIU_ObsEstado_Null of ObsEstado »
 */
@Component({
    selector: 'imes-obsestado-piu-obsestado-null',
    templateUrl: './piu_obsestado_null.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObsEstadoPIUuObsEstadouNullComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsid = 'Identificador';

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
        this.idXML = 'Clas_1434446856192292UIPobCl_2';
        this.className = ModelConstants.Obsestado.name;
        this.classAlias = this.langMng.translateText('cls_ObsEstado',
            'Observaciones');
        this.iuName = ModelConstants.Obsestado.piuuobsestadounull;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_ObsEstado_piu_PIU_ObsEstado_Null',
            'Observaciones');
        this.queryURL = '/api/ObsEstadoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1434446856192292CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id';
        dsItem.field = 'id';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_ObsEstado_ds_DS_ObsEstado_Null_item_Clas_1434446856192292CjtoVis_2ICtjoVis_1',
            this.dsid);
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
