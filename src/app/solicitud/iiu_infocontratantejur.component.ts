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

export class SolicitudIIUuInfoContratanteJURComponent extends AbstractIIU {

    /** Display Set elements */
    public dseContratanteRazonSocial: Field;

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
        this.idXML = 'Clas_1431957012480960UIInst_5';
        this.className = ModelConstants.Solicitud.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoContratanteJUR',
            'Persona jurídica');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseContratanteRazonSocial = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseContratanteRazonSocial.nameInRequest = 'contratante.razonsocial';
        this.dseContratanteRazonSocial.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratJUR_item_Clas_1431957012480960CjtoVis_7ICtjoVis_1',
            'Razón Social');
        this.dseContratanteRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_7ICtjoVis_1', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor']);
        this.dseContratanteRazonSocial.enabled = false;
        this.dseContratanteRazonSocial.mandatory = false;
        this.dseContratanteRazonSocial.dataType = Field.dtString;
        this.dseContratanteRazonSocial.maxLength = 254;
        this.dseContratanteRazonSocial.assignCSS();
        this.fields.push(this.dseContratanteRazonSocial);

    }
}
