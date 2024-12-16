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

export class SolicitudIIUuSolicitudVaciaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNumFamilia: Field;

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
        this.idXML = 'Clas_1431957012480960UIInst_14';
        this.className = ModelConstants.Solicitud.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_SolicitudVacia',
            'IIU_SolicitudVacia');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseNumFamilia = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseNumFamilia.nameInRequest = 'numfamilia';
        this.dseNumFamilia.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_Vacia_item_Clas_1431957012480960CjtoVis_15ICtjoVis_2',
            'Nº Familia');
        this.dseNumFamilia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_15ICtjoVis_2', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseNumFamilia.enabled = false;
        this.dseNumFamilia.mandatory = false;
        this.dseNumFamilia.dataType = Field.dtString;
        this.dseNumFamilia.maxLength = 5;
        this.dseNumFamilia.assignCSS();
        this.fields.push(this.dseNumFamilia);

    }
}
