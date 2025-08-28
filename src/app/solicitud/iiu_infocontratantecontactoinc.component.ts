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

/**
 * « Implements IIU IIU_InfoContratanteContactoINC of Solicitud »
 */
export class SolicitudIIUuInfoContratanteContactoINCComponent extends AbstractIIU {

    /** Display Set elements */
    public dseDireccionDireccionCompleta: Field;
    public dseDireccionDepartamentoDescripcion: Field;
    public dseDireccionMunicipioDescripcion: Field;
    public dseContratanteTelefonoFijo: Field;
    public dseContratanteTelefonoCelular: Field;
    public dseContratanteCorreoElectronico: Field;

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
        this.idXML = 'Clas_1431957012480960UIInst_11';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Gestor', 'MesaDeApoyo', 'Afiliaciones']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoContratanteContactoINC',
            'Datos de contacto');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseDireccionDireccionCompleta = new Field(this.langMng);
        this.dseDireccionDepartamentoDescripcion = new Field(this.langMng);
        this.dseDireccionMunicipioDescripcion = new Field(this.langMng);
        this.dseContratanteTelefonoFijo = new Field(this.langMng);
        this.dseContratanteTelefonoCelular = new Field(this.langMng);
        this.dseContratanteCorreoElectronico = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseDireccionDireccionCompleta.nameInRequest = 'direccion.direccioncompleta';
        this.dseDireccionDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContraConta_item_Clas_1431957012480960CjtoVis_8ICtjoVis_1',
            'Dirección completa');
        this.dseDireccionDireccionCompleta.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_8ICtjoVis_1', ['Admin', 'SuperAdmin', 'Asesor', 'Gestor', 'MesaDeApoyo']);
        this.dseDireccionDireccionCompleta.enabled = false;
        this.dseDireccionDireccionCompleta.mandatory = false;
        this.dseDireccionDireccionCompleta.dataType = Field.dtString;
        this.dseDireccionDireccionCompleta.maxLength = 250;
        this.dseDireccionDireccionCompleta.assignCSS();
        this.fields.push(this.dseDireccionDireccionCompleta);

        this.dseDireccionDepartamentoDescripcion.nameInRequest = 'direccion.departamento.descripcion';
        this.dseDireccionDepartamentoDescripcion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContraConta_item_Clas_1431957012480960CjtoVis_8ICtjoVis_2',
            'Departamento');
        this.dseDireccionDepartamentoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_8ICtjoVis_2', ['Admin', 'SuperAdmin', 'Asesor', 'Gestor', 'MesaDeApoyo']);
        this.dseDireccionDepartamentoDescripcion.enabled = false;
        this.dseDireccionDepartamentoDescripcion.mandatory = false;
        this.dseDireccionDepartamentoDescripcion.dataType = Field.dtString;
        this.dseDireccionDepartamentoDescripcion.maxLength = 150;
        this.dseDireccionDepartamentoDescripcion.assignCSS();
        this.fields.push(this.dseDireccionDepartamentoDescripcion);

        this.dseDireccionMunicipioDescripcion.nameInRequest = 'direccion.municipio.descripcion';
        this.dseDireccionMunicipioDescripcion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContraConta_item_Clas_1431957012480960CjtoVis_8ICtjoVis_3',
            'Municipio');
        this.dseDireccionMunicipioDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_8ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'Gestor', 'MesaDeApoyo']);
        this.dseDireccionMunicipioDescripcion.enabled = false;
        this.dseDireccionMunicipioDescripcion.mandatory = false;
        this.dseDireccionMunicipioDescripcion.dataType = Field.dtString;
        this.dseDireccionMunicipioDescripcion.maxLength = 150;
        this.dseDireccionMunicipioDescripcion.assignCSS();
        this.fields.push(this.dseDireccionMunicipioDescripcion);

        this.dseContratanteTelefonoFijo.nameInRequest = 'contratante.telefonofijo';
        this.dseContratanteTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContraConta_item_Clas_1431957012480960CjtoVis_8ICtjoVis_4',
            'Teléfono fijo');
        this.dseContratanteTelefonoFijo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_8ICtjoVis_4', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteTelefonoFijo.enabled = false;
        this.dseContratanteTelefonoFijo.mandatory = false;
        this.dseContratanteTelefonoFijo.dataType = Field.dtString;
        this.dseContratanteTelefonoFijo.maxLength = 15;
        this.dseContratanteTelefonoFijo.assignCSS();
        this.fields.push(this.dseContratanteTelefonoFijo);

        this.dseContratanteTelefonoCelular.nameInRequest = 'contratante.telefonocelular';
        this.dseContratanteTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContraConta_item_Clas_1431957012480960CjtoVis_8ICtjoVis_5',
            'Teléfono celular');
        this.dseContratanteTelefonoCelular.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_8ICtjoVis_5', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteTelefonoCelular.enabled = false;
        this.dseContratanteTelefonoCelular.mandatory = false;
        this.dseContratanteTelefonoCelular.dataType = Field.dtString;
        this.dseContratanteTelefonoCelular.maxLength = 15;
        this.dseContratanteTelefonoCelular.assignCSS();
        this.fields.push(this.dseContratanteTelefonoCelular);

        this.dseContratanteCorreoElectronico.nameInRequest = 'contratante.correoelectronico';
        this.dseContratanteCorreoElectronico.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContraConta_item_Clas_1431957012480960CjtoVis_8ICtjoVis_6',
            'Correo electrónico');
        this.dseContratanteCorreoElectronico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_8ICtjoVis_6', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteCorreoElectronico.enabled = false;
        this.dseContratanteCorreoElectronico.mandatory = false;
        this.dseContratanteCorreoElectronico.dataType = Field.dtString;
        this.dseContratanteCorreoElectronico.maxLength = 100;
        this.dseContratanteCorreoElectronico.assignCSS();
        this.fields.push(this.dseContratanteCorreoElectronico);

    }
}
