import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-tipodireccion-piu-tipodireccion',
    templateUrl: './piu_tipodireccion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoDireccionPIUuTipoDireccionComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsesresidencia = 'Es residencia';
    private readonly dsescorrespondencia = 'Es correspondencia';

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
        this.idXML = 'Clas_1431940628480765UIPobCl_1';
        this.className = ModelConstants.Tipodireccion.name;
        this.iuName = ModelConstants.Tipodireccion.piuutipodireccion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Asesor']));
        this.title = this.langMng.translateText('cls_TipoDireccion_piu_PIU_TipoDireccion',
            'Tipos de dirección');
        this.queryURL = '/api/TipoDireccionApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431940628480765CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoDireccion_ds__Auto__item_Clas_1431940628480765CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431940628480765CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoDireccion_ds__Auto__item_Clas_1431940628480765CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431940628480765CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'esresidencia';
        dsItem.field = 'esresidencia';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoDireccion_ds__Auto__item_Clas_1431940628480765CjtoVis_AutoICtjoVis_3',
            this.dsesresidencia);
        dsItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431940628480765CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'escorrespondencia';
        dsItem.field = 'escorrespondencia';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoDireccion_ds__Auto__item_Clas_1431940628480765CjtoVis_AutoICtjoVis_4',
            this.dsescorrespondencia);
        dsItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
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
