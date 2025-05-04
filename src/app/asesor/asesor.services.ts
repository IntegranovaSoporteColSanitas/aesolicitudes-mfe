import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Asesor'
 */
export class AsesorServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Asesor');
    }

    /**
     * Call to the filter 'F_Directores' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vUsuarioVar Variable vUsuario
     * @param vPrimerNombreVar Variable vPrimerNombre
     * @param vSegundoNombreVar Variable vSegundoNombre
     * @param vPrimerApellidoVar Variable vPrimerApellido
     * @param vSegundoApellidoVar Variable vSegundoApellido
     */
    public queryByFilterFuDirectores(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vUsuarioVar: string | null, vPrimerNombreVar: string | null, vSegundoNombreVar: string | null,
        vPrimerApellidoVar: string | null, vSegundoApellidoVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Directores');
        this.util.addFilterVariable(filter, 'vusuario', vUsuarioVar);
        this.util.addFilterVariable(filter, 'vprimernombre', vPrimerNombreVar);
        this.util.addFilterVariable(filter, 'vsegundonombre', vSegundoNombreVar);
        this.util.addFilterVariable(filter, 'vprimerapellido', vPrimerApellidoVar);
        this.util.addFilterVariable(filter, 'vsegundoapellido', vSegundoApellidoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
