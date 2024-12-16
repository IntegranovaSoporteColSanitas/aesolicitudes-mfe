import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_GrupoAsociado_Busqueda of class GrupoAsociado
 */
export class GrupoAsociadoFilterFuGrupoAsociadouBusqueda extends AbstractFilter {

    /** Filter variables */
    public vuCodigoLegal: Field;
    public vuDescripcion: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param usrFunc User functions
     */
    constructor(public override appGlobalInfo: AppGlobalInfo,
                public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_GrupoAsociado_filter_F_GrupoAsociado_Busqueda',
            'Criterios varios');
        this.filterName = 'F_GrupoAsociado_Busqueda';

        this.vuCodigoLegal = new Field(this.langMng);
        this.vuDescripcion = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vuCodigoLegal.nameInRequest = 'v_codigolegal';
        this.vuCodigoLegal.alias = this.langMng.translateText(
            'cls_GrupoAsociado_filter_F_GrupoAsociado_Busqueda_fvar_v_CodigoLegal',
            'Código legal');
        this.vuCodigoLegal.visible = true;
        this.vuCodigoLegal.enabled = true;
        this.vuCodigoLegal.mandatory = false;
        this.vuCodigoLegal.dataType = Field.dtString;
        this.vuCodigoLegal.maxLength = 20;
        this.vuCodigoLegal.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuCodigoLegal);

        this.vuDescripcion.nameInRequest = 'v_descripcion';
        this.vuDescripcion.alias = this.langMng.translateText(
            'cls_GrupoAsociado_filter_F_GrupoAsociado_Busqueda_fvar_v_Descripcion',
            'Descripción');
        this.vuDescripcion.visible = true;
        this.vuDescripcion.enabled = true;
        this.vuDescripcion.mandatory = false;
        this.vuDescripcion.dataType = Field.dtString;
        this.vuDescripcion.maxLength = 50;
        this.vuDescripcion.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuDescripcion);
    }
}
