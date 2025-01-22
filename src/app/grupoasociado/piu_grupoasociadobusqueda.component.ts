import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { GrupoAsociadoFilterFuGrupoAsociadouBusqueda} from './filters/grupoasociadofilterfugrupoasociadoubusqueda';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-grupoasociado-piu-grupoasociadobusqueda',
    templateUrl: './piu_grupoasociadobusqueda.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigolegal = 'Código legal';
    private readonly dsdescripcion = 'Descripción';

    /** Filters */
    public f0: GrupoAsociadoFilterFuGrupoAsociadouBusqueda;

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
        this.idXML = 'Clas_1431875354624341UIPobCl_2';
        this.className = ModelConstants.Grupoasociado.name;
        this.iuName = ModelConstants.Grupoasociado.piuugrupoasociadobusqueda;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'Asesor']));
        this.title = this.langMng.translateText('cls_GrupoAsociado_piu_PIU_GrupoAsociadoBusqueda',
            'Grupos Asociados');
        this.f0 = new GrupoAsociadoFilterFuGrupoAsociadouBusqueda(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/GrupoAsociadoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_3ICtjoVis_1';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIUBusqueda_item_Clas_1431875354624341CjtoVis_3ICtjoVis_1',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_3ICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIUBusqueda_item_Clas_1431875354624341CjtoVis_3ICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
