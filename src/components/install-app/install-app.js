class InstallApp extends HTMLElement {
  constructor() {
    super();
    this._deferredPrompt;
  }

  static get name() {
    return 'b-install-app';
  }

  connectedCallback() {
    this.hiddenOptions();
    const template = `
      <section>
        <strong>Mantenha se atualizado</strong>
        <p>Nosso app é rápido, pequeno e funciona offline</p>
        <div>
          <button id="cancel-install">Não, obrigado</button>
          <button id="install-app">Aceito</button>
        </div>
      </section>
    `;

    this.innerHTML = template;

    window.addEventListener(
      'beforeinstallprompt',
      this.handlerBeforeInstallPrompt.bind(this)
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      'beforeinstallprompt',
      this.handlerBeforeInstallPrompt.bind(this)
    );

    const installApp = this.querySelector('#install-app');
    installApp.removeEventListener('click', this.handlerInstallApp.bind(this));

    const cancelInstall = this.querySelector('#cancel-install');
    cancelInstall.removeEventListener('click', this.hiddenOptions.bind(this));
  }

  handlerBeforeInstallPrompt(event) {
    this.style.display = 'block';
    event.preventDefault();
    this._deferredPrompt = event;

    const installApp = this.querySelector('#install-app');
    installApp.addEventListener('click', this.handlerInstallApp.bind(this));

    const cancelInstall = this.querySelector('#cancel-install');
    cancelInstall.addEventListener('click', this.hiddenOptions.bind(this));
  }

  async handlerInstallApp() {
    this._deferredPrompt.prompt();
    await this._deferredPrompt.userChoice;
    this.hiddenOptions();
  }

  hiddenOptions() {
    this.style.display = 'none';
  }
}

customElements.define(InstallApp.name, InstallApp);
