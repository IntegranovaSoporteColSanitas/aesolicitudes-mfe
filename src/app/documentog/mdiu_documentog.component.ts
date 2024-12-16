import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { DocumentoGIIUuDocumentoGuMaestroComponent } from './iiu_documentog_maestro.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-documentog-mdiu-documentog',
    templateUrl: './mdiu_documentog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoGMDIUuDocumentoGComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: DocumentoGIIUuDocumentoGuMaestroComponent;

    /** Details */

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
    constructor(public override appGlobalInfo: AppGlobalInfo, public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1434446200832109UIMaDet_1';
        this.className = ModelConstants.Documentog.name;
        this.iuName = ModelConstants.Documentog.mdiuudocumentog;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin',
            'Afiliaciones']));
        this.title = this.langMng.translateText('cls_DocumentoG_mdiu_MDIU_DocumentoG',
            'Detalles');
        // Create the details and assign the master detail container
        this.master = new DocumentoGIIUuDocumentoGuMaestroComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public override initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        super.initializeComponents();
    }

}
