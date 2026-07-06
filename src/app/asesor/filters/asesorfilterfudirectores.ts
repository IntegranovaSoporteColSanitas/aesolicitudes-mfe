import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';

/**
 * « Manages the filter F_Directores of class Asesor »
 */
export class AsesorFilterFuDirectores extends AbstractFilter {

    /** Filter variables */
    public vUsuario: Field;
    public vPrimerNombre: Field;
    public vSegundoNombre: Field;
    public vPrimerApellido: Field;
    public vSegundoApellido: Field;

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
        this.title = this.langMng.translateText('cls_Asesor_filter_F_Directores',
            'Criterios de Búsqueda');
        this.filterName = 'F_Directores';

        this.vUsuario = new Field(this.langMng);
        this.vPrimerNombre = new Field(this.langMng);
        this.vSegundoNombre = new Field(this.langMng);
        this.vPrimerApellido = new Field(this.langMng);
        this.vSegundoApellido = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vUsuario.nameInRequest = 'vusuario';
        this.vUsuario.alias = this.langMng.translateText(
            'cls_Asesor_filter_F_Directores_fvar_vUsuario',
            'Usuario');
        this.vUsuario.visible = true;
        this.vUsuario.enabled = true;
        this.vUsuario.mandatory = false;
        this.vUsuario.dataType = Field.dtString;
        this.vUsuario.maxLength = 20;
        this.vUsuario.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vUsuario);

        this.vPrimerNombre.nameInRequest = 'vprimernombre';
        this.vPrimerNombre.alias = this.langMng.translateText(
            'cls_Asesor_filter_F_Directores_fvar_vPrimerNombre',
            'Primer Nombre');
        this.vPrimerNombre.visible = true;
        this.vPrimerNombre.enabled = true;
        this.vPrimerNombre.mandatory = false;
        this.vPrimerNombre.dataType = Field.dtString;
        this.vPrimerNombre.maxLength = 20;
        this.vPrimerNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vPrimerNombre);

        this.vSegundoNombre.nameInRequest = 'vsegundonombre';
        this.vSegundoNombre.alias = this.langMng.translateText(
            'cls_Asesor_filter_F_Directores_fvar_vSegundoNombre',
            'Segundo Nombre');
        this.vSegundoNombre.visible = true;
        this.vSegundoNombre.enabled = true;
        this.vSegundoNombre.mandatory = false;
        this.vSegundoNombre.dataType = Field.dtString;
        this.vSegundoNombre.maxLength = 20;
        this.vSegundoNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vSegundoNombre);

        this.vPrimerApellido.nameInRequest = 'vprimerapellido';
        this.vPrimerApellido.alias = this.langMng.translateText(
            'cls_Asesor_filter_F_Directores_fvar_vPrimerApellido',
            'Primer Apellido');
        this.vPrimerApellido.visible = true;
        this.vPrimerApellido.enabled = true;
        this.vPrimerApellido.mandatory = false;
        this.vPrimerApellido.dataType = Field.dtString;
        this.vPrimerApellido.maxLength = 20;
        this.vPrimerApellido.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vPrimerApellido);

        this.vSegundoApellido.nameInRequest = 'vsegundoapellido';
        this.vSegundoApellido.alias = this.langMng.translateText(
            'cls_Asesor_filter_F_Directores_fvar_vSegundoApellido',
            'Segundo Apellido');
        this.vSegundoApellido.visible = true;
        this.vSegundoApellido.enabled = true;
        this.vSegundoApellido.mandatory = false;
        this.vSegundoApellido.dataType = Field.dtString;
        this.vSegundoApellido.maxLength = 20;
        this.vSegundoApellido.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vSegundoApellido);
    }
}
