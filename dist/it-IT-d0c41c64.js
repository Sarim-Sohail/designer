const e = {
  add: "Aggiungere",
  addAction: "Aggiungi azione",
  addCodeAction: "Aggiungi un'azione del codice",
  arguments: "Argomento",
  code: "Codice",
  common: "Comune",
  custom: "Personalizzato",
  delete: "Eliminare",
  duplicate: "Duplicato",
  edit: "Modificare",
  name: "Nome",
  parameters: "Parametro",
  type: "Tipo"
}, o = {
  accept: {
    hint: "Tipi di file che possono essere accettati. Vedi attributo HTML standard: accept",
    name: "Accettare"
  },
  action: {
    hint: "Caricamento URL",
    name: "Azione"
  },
  allowEmptyFormatting: {
    hint: "Per impostazione predefinita, il componente PatternFormat non applica la formattazione quando il valore è vuoto (null, undefined o ‘)",
    name: "Consenti formattazione vuota "
  },
  allowLeadingZeros: {
    hint: "Ciò consente di abilitare o disabilitare gli zeri iniziali nel campo di input. Per impostazione predefinita, sulla sfocatura di un input, gli zeri iniziali vengono rimossi",
    name: "Consenti zeri iniziali"
  },
  allowNegative: {
    hint: "Se impostato su false, i numeri negativi non saranno consentiti",
    name: "Consenti negativo"
  },
  allowedDecimalSeparators: {
    hint: `Caratteri che quando vengono premuti generano un separatore decimale. Quando manca, separatore decimale e'."sono utilizzati`,
    name: "Separatori decimali consentiti"
  },
  autoUpload: {
    hint: "Carica automaticamente i file dopo averli selezionati",
    name: "Caricamento automatico"
  },
  block: {
    hint: "Bloccare un'intera riga",
    name: "Blocco"
  },
  bodyFill: {
    hint: "Area del contenuto piena di contenitori",
    name: "Riempimento del corpo"
  },
  cleanable: {
    hint: "Indica se l'opzione può essere svuotata",
    name: "Pulibile"
  },
  code: {
    hint: "Modifica codice",
    name: "Codice"
  },
  creatable: {
    hint: "Le impostazioni possono creare nuove opzioni",
    name: "Creatable"
  },
  data: {
    hint: "Dati selezionabili",
    name: "Dati"
  },
  decimalScale: {
    hint: "Se definito, limita il numero di cifre dopo il punto decimale",
    name: "Scala decimale"
  },
  decimalSeparator: {
    hint: "Definisce il carattere decimale",
    name: "Separatore decimale"
  },
  disableMultipart: {
    hint: "Se' true', disabilitare l'utilizzo di un modulo multipart per il caricamento del file e invece lo streaming del file. Alcune API (ad esempio Amazon S3) potrebbero aspettarsi che il file venga trasmesso in streaming anziché inviato tramite un modulo",
    name: "Disabilita multipart"
  },
  disabled: {
    hint: "Indica se il componente è disabilitato o meno",
    name: "Disabilita"
  },
  draggable: {
    hint: "Abilitato drag and drop per caricare",
    name: "Trascinabile"
  },
  errorConfig: {
    show: "Mostrare"
  },
  eventKey: {
    hint: "La chiave evento corrispondente a questo elemento",
    name: "Chiave evento"
  },
  fixedDecimalScale: {
    hint: "Se impostato su true, aggiunge gli 0 finali dopo decimalSeparator per corrispondere a decimalScale specificato",
    name: "Scala decimale fissa"
  },
  flexDirection: {
    hint: "Direzione della flessione dei bambini del contenitore",
    name: "Direzione"
  },
  format: {
    hint: "Formattare il modello utilizzando il carattere # (o un carattere Pattern). # è il carattere segnaposto per i numeri. Esempio: '### ###'",
    name: "Formato"
  },
  groupBy: {
    hint: "Imposta criteri di raggruppamento 'chiave ' in'dati'",
    name: "Gruppo per"
  },
  htmlAttributes: {
    hint: "Attributi HTML nel formato React (camelCase) ",
    name: "Attributi HTML"
  },
  justifyContent: {
    name: "Allineamento"
  },
  label: {
    hint: "Impostazione etichetta",
    name: "Etichetta"
  },
  mask: {
    hint: "Utilizzato come carattere maschera per le posizioni numeriche, fino a quando non viene fornito alcun carattere numerico per quella posizione",
    name: "Maschera"
  },
  method: {
    hint: "Il metodo HTTP della richiesta di upload",
    name: "Metodo"
  },
  name: {
    hint: "Carica il nome del parametro del file corrispondente",
    name: "Nome"
  },
  objectFit: {
    name: "Adattare"
  },
  objectPosition: {
    name: "Posizione"
  },
  passwordMask: {
    hint: "Usa maschera password",
    name: "Maschera password"
  },
  patternChar: {
    hint: "Questo aiuta a definire il carattere del modello di formato",
    name: "Modello char"
  },
  placeholder: {
    hint: "Impostazione segnaposto",
    name: "Segnaposto"
  },
  placement: {
    hint: "Il posizionamento del componente",
    name: "Posizionamento"
  },
  prefix: {
    hint: "Aggiunge il carattere prefix prima del valore di input",
    name: "Prefisso"
  },
  size: {
    hint: "Il componente può avere dimensioni diverse",
    name: "Dimensione"
  },
  suffix: {
    hint: "Aggiunge il suffisso dopo il valore di input",
    name: "Suffisso "
  },
  textAlign: {
    name: "Allineamento"
  },
  thousandsGroupStyle: {
    hint: "Mille stile (mille): 123,456,789, stile indiano (lakh): 12,34,56,789, stile cinese (wan): 1,2345,6789",
    name: "Stile gruppo migliaia"
  },
  tooltipProps: {
    hint: "Usa tooltip per questo elemento",
    tooltip: "Tooltip"
  },
  withCredentials: {
    hint: "Indica se trasportare i cookie durante il caricamento delle richieste",
    name: "Con credenziali"
  }
}, i = {
  editCodeAction: "Modifica l'azione del codice",
  editProperty: "Modifica proprietà",
  function: "Valore calcolabile",
  localization: "Localizzazione fluente",
  simpleValue: "Valore semplice",
  simpleValueHint: "Modifica la proprietà nel pannello di destra",
  use: "Utilizzare"
}, a = {
  actionNameExists: "L'azione con questo nome esiste già",
  nameIsRequired: "Il nome dell'azione è richiesto",
  parameterNameExists: "Il parametro con questo nome esiste già",
  parameterNameIsNotValid: "Il nome del parametro non è valido",
  parameterNameIsRequired: "Il nome del parametro è richiesto"
}, t = {
  codeActionHeader: "Editor di azioni codice",
  codePlaceholder: "// inserisci il tuo codice qui",
  compilationResult: "Risultato compilazione:",
  compile: "Compilare",
  ok: "OK"
}, n = {
  apply: "Applicare",
  cancel: "Annullare",
  clone: "Clone",
  close: "Vicino",
  edit: "Modificare",
  name: "Nome",
  remove: "Rimuovere",
  save: "Salvare",
  test: "Test"
}, l = {
  add: "Aggiungi nuovo elemento",
  after: "Dopo",
  before: "Prima",
  inside: "Dentro"
}, r = {
  categories: {
    fields: "Campo",
    static: "Statico",
    structure: "Struttura",
    templates: "Modelli"
  }
}, s = {
  clickToAdd: "Fare clic per aggiungere il controllo"
}, c = "Modifica JSON", m = {
  data: "Dati",
  errors: "Errore"
}, d = {
  addNewForm: "Aggiungi nuovo modulo",
  noFormsInFormStorage: "Salvare il modulo in modo che venga visualizzato nell'elenco dei moduli."
}, p = {
  clear: "Chiaro",
  currentFormName: "Il nome del modulo corrente",
  download: "Scaricare",
  enterFormName: "Inserisci il nome del modulo",
  exportForms: "Esporta moduli",
  exportFormsError: "Esportazione dei moduli non riuscita! Vedere i log nella console del browser",
  exportFormsSuccess: "Moduli esportati",
  formNamePlaceholder: "La mia bella forma",
  formSaveError: "Salvataggio del modulo non riuscito! Vedere i log nella console del browser",
  formSaved: "Il modulo viene salvato",
  importForms: "Importa moduli",
  importFormsError: "Importazione dei moduli non riuscita! Vedere i log nella console del browser",
  importFormsSuccess: "Moduli importati",
  menu: "Menu",
  print: "Stampa",
  save: "Salvare",
  saveAs: "Salva con nome...",
  settings: "Impostazioni",
  translation: "Traduzione",
  undo: "Annullare",
  upload: "Caricare",
  validateForm: "Convalida modulo"
}, u = {
  formSettings: {
    actions: "Azione",
    error: "Impostazioni di errore",
    language: "Impostazioni della lingua",
    tooltip: "Tooltip"
  },
  sectionName: {
    components: "Componente",
    forms: "Forma",
    settings: "Impostazioni",
    tree: "Albero"
  }
}, g = {
  messageIsNull: "Il messaggio di localizzazione è nullo",
  messageNotFound: "Localizzazione messaggio non trovato"
}, h = {
  cancel: "Annullare",
  ok: "OK"
}, z = {
  applyKey: "Applicare le modifiche chiave",
  codeButton: {
    editCalculable: "Modifica calcolabile",
    editLocalizable: "Modifica localizzazione fluente",
    hintCalculable: "Rendi calcolabile questa proprietà",
    hintCalculableAndLocalizable: "Rendi questa proprietà calcolabile o localizza con Fluent",
    hintLocalizable: "Localizza questa proprietà con Fluent",
    neitherCalculableNorLocalizable: "Né calcolabile né localizzabile"
  },
  keyMustBeUnique: "La chiave deve essere unica",
  keyMustNotBeEmpty: "La chiave non deve essere vuota",
  sectionName: {
    actions: "Azione",
    expression: "Espressione",
    linkedProperty: "Proprietà collegata",
    main: "Principale",
    rules: "Regola",
    style: "Stile",
    withTarget: "Con Target",
    withoutTarget: "Senza bersaglio"
  },
  selectElementForEdit: "Selezionare l'elemento nel modulo per modificare le proprietà",
  setInputHint: "Premere Invio per aggiungere un valore",
  subSection: {
    additionalProperties: "Proprietà aggiuntive"
  }
}, f = {
  modes: {
    builder: "Anteprima",
    desktop: "Desktop",
    mobile: "Mobile",
    tablet: "Tablet",
    viewer: "Modificare"
  },
  toggleTheme: "Toggle theme"
}, v = {
  search: "Ricerca..."
}, b = {
  any: "Qualsiasi",
  component: "Componente",
  componentHint: "Stili che si applicano al componente",
  desktop: "Desktop",
  forDevice: "Per dispositivo:",
  mobile: "Mobile",
  other: "Altri",
  tablet: "Tablet",
  wrapper: "Involucro",
  wrapperHint: "Stili che si applicano al componente wrapper"
}, A = {
  autorun: "Autorun",
  compilationOk: "Risultato della compilazione: OK",
  hasNotReturnedValue: "Non ha restituito valore",
  run: "Eseguire",
  testFormData: "Dati del modulo di prova"
}, C = {
  cloneComponent: "Componente clone",
  elements: "Elemento",
  notFound: "Non trovato",
  removeComponent: "Rimuovi componente",
  reset: "Reset"
}, S = {
  collapse: "Comprimi tutto",
  expand: "Espandi tutto"
}, M = {
  addRule: "Aggiungi regola",
  chooseValidation: "Scegli il tuo tipo",
  editCustomValidationCode: "Modifica del codice di convalida personalizzato per il componente",
  formErrors: "Errori di modulo",
  rule: {
    code: "Codice",
    custom: "Personalizzato",
    datetime: "Data e ora",
    email: "Email",
    endsWith: "Termina con",
    falsy: "Falso",
    finite: "Finito",
    includes: "Includere",
    integer: "Intero",
    ip: "IP",
    length: "Lunghezza",
    lessThan: "Meno",
    max: "Max",
    min: "Min",
    moreThan: "Oltre",
    multipleOf: "Multiplo di",
    nonEmpty: "Non vuoto",
    regex: "Regex",
    required: "Necessario",
    startsWith: "Inizia con",
    truthy: "Truthy",
    url: "URL",
    uuid: "Uuid"
  },
  showFormErrors: "Mostra errori di modulo"
}, I = {
  actions: e,
  annotation: o,
  bottomPanel: i,
  codeActionEditor: a,
  codeEditor: t,
  common: n,
  componentToolbar: l,
  componentsList: r,
  componentsModal: s,
  editJson: c,
  errorsPanel: m,
  formsList: d,
  leftMenu: p,
  leftPanel: u,
  localization: g,
  promptDialog: h,
  propertiesEditor: z,
  rightMenu: f,
  searchForm: v,
  style: b,
  testingEditor: A,
  toolbar: C,
  tree: S,
  validation: M
};
export {
  e as actions,
  o as annotation,
  i as bottomPanel,
  a as codeActionEditor,
  t as codeEditor,
  n as common,
  l as componentToolbar,
  r as componentsList,
  s as componentsModal,
  I as default,
  c as editJson,
  m as errorsPanel,
  d as formsList,
  p as leftMenu,
  u as leftPanel,
  g as localization,
  h as promptDialog,
  z as propertiesEditor,
  f as rightMenu,
  v as searchForm,
  b as style,
  A as testingEditor,
  C as toolbar,
  S as tree,
  M as validation
};
//# sourceMappingURL=it-IT-d0c41c64.js.map
