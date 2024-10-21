import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';
import { AbstractPIU } from 'src/app/common/abstractPIU';

/**
 * Manages the filter F_SolicitudConsultaRadicado of class Solicitud
 */
export class SolicitudFilterFuSolicitudConsultaRadicado extends AbstractFilter {

    /** Filter variables */
    public vfDesde: Field;
    public vfHasta: Field;
    public vouTipoDoc: FieldOVPreload;
    public vuNumDoc: Field;

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
        this.title = this.langMng.translateText('cls_Solicitud_filter_F_SolicitudConsultaRadicado',
            'Criterios de búsqueda');
        this.filterName = 'F_SolicitudConsultaRadicado';

        this.vfDesde = new Field(this.langMng);
        this.vfHasta = new Field(this.langMng);
        this.vouTipoDoc = new FieldOVPreload(this.langMng);
        this.vuNumDoc = new Field(this.langMng);
    }

    public override canBeExecuted(): boolean {
        if (!super.canBeExecuted()) {
            return false;
        }

        // Comprobamos que el periodo entre las fechas indicadas o supera el limite
        let canExe = true;
        const diferencia = this.stdFun.daysDifferenceFromDate(this.vfDesde.value, this.vfHasta.value);
        let periodo = 30;
        if (this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes) {
            periodo = this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes;
        }
        canExe = diferencia <= periodo;

        if (!canExe) {
            this.util.addErrorMessage('Las fechas introducidas superan el periodo máximo de ' + 
                periodo + ' días permitido. Modifique las fechas para ajustarse al periodo indicado');
        }
        return canExe;
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfDesde.nameInRequest = 'vfdesde';
        this.vfDesde.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_vfDesde',
            'Desde');
        this.vfDesde.visible = true;
        this.vfDesde.enabled = true;
        this.vfDesde.mandatory = false;
        this.vfDesde.dataType = Field.dtDate;
        this.vfDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesde);

        this.vfHasta.nameInRequest = 'vfhasta';
        this.vfHasta.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDate;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);

        this.vouTipoDoc.nameInRequest = 'vo_tipodoc';
        this.vouTipoDoc.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_vo_TipoDoc',
            'Tipo doc.');
        this.vouTipoDoc.visible = true;
        this.vouTipoDoc.enabled = true;
        this.vouTipoDoc.mandatory = false;
        this.vouTipoDoc.dataType = ModelConstants.Tipoidentificacion.name;
        this.vouTipoDoc.preloadValues = [];
        this.vouTipoDoc.allowMultiSelect = false;
        this.vouTipoDoc.maxLength = 170;
        this.vouTipoDoc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouTipoDoc);

        this.vuNumDoc.nameInRequest = 'v_numdoc';
        this.vuNumDoc.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_v_NumDoc',
            'Nº documento');
        this.vuNumDoc.visible = true;
        this.vuNumDoc.enabled = true;
        this.vuNumDoc.mandatory = false;
        this.vuNumDoc.dataType = Field.dtString;
        this.vuNumDoc.maxLength = 60;
        this.vuNumDoc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuNumDoc);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): void {
        const promiseArr: Array<Promise<void>> = [];

        // vfDesde
        const defValvfDesde = new Promise<void>((resolveDefValue) => {
            let rtnFuncvfDesde0;
            this.usrFunc.fuGetFechaDesdeVarFiltro().then((res) => {
                rtnFuncvfDesde0 = res;

                this.vfDesde.setValue(this.util.getDate(rtnFuncvfDesde0));
                resolveDefValue();
            });
        });
        promiseArr.push(defValvfDesde);

        // vfHasta
        const defValvfHasta = new Promise<void>((resolveDefValue) => {
            this.vfHasta.setValue(this.stdFun.systemDate());
            resolveDefValue();
        });
        promiseArr.push(defValvfHasta);

        Promise.all(promiseArr).then((results: any[]) => {
            this.util.hideWaitDialog();
            this.initialized = true;
            // Launch query
            if (this.populationContainer instanceof AbstractPIU) {
                const abstractPIU = this.populationContainer as AbstractPIU;
                if (abstractPIU.autoSearch && abstractPIU.activeFilter?.filterName === this.filterName) {
                    this.search();
                }
            } else {
                this.search();
            }
            this.changeDetectorRef.markForCheck();
        });
    }

    public override loadPreload(): void {

        // vouTipoDoc
        this.executeSearchPreload(this.vouTipoDoc, ModelConstants.Tipoidentificacion.name, 'IC_TipoIdentificacion',
            'OC_TipoIdentificacion', []);
    }

}
