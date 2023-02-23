'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ucl-atlas documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-427569cc0691358b313a0e00469651a7a7a79adb21b0d6407b39751f4aaf4e483845a05d07161b72e97dd71addb46f2a848e46d1bf5237418a22eb01a7d2457f"' : 'data-target="#xs-components-links-module-AppModule-427569cc0691358b313a0e00469651a7a7a79adb21b0d6407b39751f4aaf4e483845a05d07161b72e97dd71addb46f2a848e46d1bf5237418a22eb01a7d2457f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-427569cc0691358b313a0e00469651a7a7a79adb21b0d6407b39751f4aaf4e483845a05d07161b72e97dd71addb46f2a848e46d1bf5237418a22eb01a7d2457f"' :
                                            'id="xs-components-links-module-AppModule-427569cc0691358b313a0e00469651a7a7a79adb21b0d6407b39751f4aaf4e483845a05d07161b72e97dd71addb46f2a848e46d1bf5237418a22eb01a7d2457f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BsImportModule.html" data-type="entity-link" >BsImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-455b4cd8c964916dc669b60881a94be21991974a4655e239156c06b06ca22088ea8536c28a1c04b1cca10ff0800bf10cc4c9e5bdcb93d9f9f8f821c0631d2e8f"' : 'data-target="#xs-injectables-links-module-CoreModule-455b4cd8c964916dc669b60881a94be21991974a4655e239156c06b06ca22088ea8536c28a1c04b1cca10ff0800bf10cc4c9e5bdcb93d9f9f8f821c0631d2e8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-455b4cd8c964916dc669b60881a94be21991974a4655e239156c06b06ca22088ea8536c28a1c04b1cca10ff0800bf10cc4c9e5bdcb93d9f9f8f821c0631d2e8f"' :
                                        'id="xs-injectables-links-module-CoreModule-455b4cd8c964916dc669b60881a94be21991974a4655e239156c06b06ca22088ea8536c28a1c04b1cca10ff0800bf10cc4c9e5bdcb93d9f9f8f821c0631d2e8f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BusEventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusEventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgImportModule.html" data-type="entity-link" >NgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SplashModule.html" data-type="entity-link" >SplashModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SplashModule-a0f1fb256d08384484cdb1677deeb3fce518714c5de46ec5b1c61c58e4ba8ac84469b72d72d62faea1b2e92893444b8377dc7608f585602ddf808abdade16619"' : 'data-target="#xs-components-links-module-SplashModule-a0f1fb256d08384484cdb1677deeb3fce518714c5de46ec5b1c61c58e4ba8ac84469b72d72d62faea1b2e92893444b8377dc7608f585602ddf808abdade16619"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SplashModule-a0f1fb256d08384484cdb1677deeb3fce518714c5de46ec5b1c61c58e4ba8ac84469b72d72d62faea1b2e92893444b8377dc7608f585602ddf808abdade16619"' :
                                            'id="xs-components-links-module-SplashModule-a0f1fb256d08384484cdb1677deeb3fce518714c5de46ec5b1c61c58e4ba8ac84469b72d72d62faea1b2e92893444b8377dc7608f585602ddf808abdade16619"' }>
                                            <li class="link">
                                                <a href="components/SplashScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashScreenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashRoutingModule.html" data-type="entity-link" >SplashRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewModule.html" data-type="entity-link" >ViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewModule-d93fbc36b42fac0f3953128b403c618ae0409133f05e923578c29faf53c0162c933fc402e66fdf912c9de8806f16c99e32bd6ebfddcc37f9370b9a8f0c1baef4"' : 'data-target="#xs-components-links-module-ViewModule-d93fbc36b42fac0f3953128b403c618ae0409133f05e923578c29faf53c0162c933fc402e66fdf912c9de8806f16c99e32bd6ebfddcc37f9370b9a8f0c1baef4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewModule-d93fbc36b42fac0f3953128b403c618ae0409133f05e923578c29faf53c0162c933fc402e66fdf912c9de8806f16c99e32bd6ebfddcc37f9370b9a8f0c1baef4"' :
                                            'id="xs-components-links-module-ViewModule-d93fbc36b42fac0f3953128b403c618ae0409133f05e923578c29faf53c0162c933fc402e66fdf912c9de8806f16c99e32bd6ebfddcc37f9370b9a8f0c1baef4"' }>
                                            <li class="link">
                                                <a href="components/ViewHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewRoutingModule.html" data-type="entity-link" >ViewRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BusEventService.html" data-type="entity-link" >BusEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogService.html" data-type="entity-link" >LogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FMessage.html" data-type="entity-link" >FMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FUser.html" data-type="entity-link" >FUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TAppDispatcher.html" data-type="entity-link" >TAppDispatcher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TEventManager.html" data-type="entity-link" >TEventManager</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TReactiveService.html" data-type="entity-link" >TReactiveService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});