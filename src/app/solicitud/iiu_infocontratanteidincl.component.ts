import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class SolicitudIIUuInfoContratanteIDINCLComponent extends AbstractIIU {

    /** Display Set elements */
    public dseContratantedrvIdentificacion: Field;

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
        this.idXML = 'Clas_1431957012480960UIInst_10';
        this.className = ModelConstants.Solicitud.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Afiliaciones']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoContratanteIDINCL',
            'Identificación');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseContratantedrvIdentificacion = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseContratantedrvIdentificacion.nameInRequest = 'contratante.drvidentificacion';
        this.dseContratantedrvIdentificacion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudInfoContratanteID_item_Clas_1431957012480960CjtoVis_6ICtjoVis_21',
            'Tipo y Nº documento');
        this.dseContratantedrvIdentificacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_6ICtjoVis_21', ['SuperAdmin', 'Afiliaciones']);
        this.dseContratantedrvIdentificacion.enabled = false;
        this.dseContratantedrvIdentificacion.mandatory = false;
        this.dseContratantedrvIdentificacion.dataType = Field.dtString;
        this.dseContratantedrvIdentificacion.maxLength = 100;
        this.dseContratantedrvIdentificacion.assignCSS();
        this.fields.push(this.dseContratantedrvIdentificacion);

    }
}
