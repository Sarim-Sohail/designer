const e = {
  add: "Hinzufügen",
  addAction: "Aktion hinzufügen",
  addCodeAction: "Fügen Sie eine Codeaktion hinzu",
  arguments: "Argument",
  code: "Code",
  common: "Gemeinsam",
  custom: "Benutzerdefinierte",
  delete: "Löschen",
  duplicate: "Doppelt",
  edit: "Bearbeiten",
  name: "Name",
  parameters: "Rahmenbedingungen",
  type: "Art"
}, n = {
  accept: {
    hint: "Dateitypen, die akzeptiert werden können. Siehe Standard-HTML-Attribut: akzeptieren",
    name: "Akzeptieren"
  },
  action: {
    hint: "URL hochladen",
    name: "Aktion"
  },
  allowEmptyFormatting: {
    hint: "Standardmäßig wendet die PatternFormat-Komponente keine Formatierung an, wenn der Wert leer ist (null, undefiniert oder ‘)",
    name: "Leere Formatierung zulassen "
  },
  allowLeadingZeros: {
    hint: "Dies ermöglicht das Aktivieren oder Deaktivieren führender Nullen im Eingabefeld. Standardmäßig werden bei Unschärfe einer Eingabe führende Nullen entfernt",
    name: "Führende Nullen zulassen"
  },
  allowNegative: {
    hint: "Wenn auf false gesetzt, sind negative Zahlen nicht zulässig",
    name: "Negativ zulassen"
  },
  allowedDecimalSeparators: {
    hint: "Zeichen, die beim Drücken zu einem Dezimaltrennzeichen führen. Wenn fehlt, Dezimaltrennzeichen und '.' werden verwendet",
    name: "Zulässige Dezimaltrennzeichen"
  },
  autoUpload: {
    hint: "Dateien nach Auswahl automatisch hochladen",
    name: "Automatischer Upload"
  },
  block: {
    hint: "Eine ganze Zeile blockieren",
    name: "Block"
  },
  bodyFill: {
    hint: "Inhaltsbereich mit Containern gefüllt",
    name: "Körperfüllung"
  },
  cleanable: {
    hint: "Ob die Option geleert werden kann",
    name: "Reinigbar"
  },
  code: {
    hint: "Code bearbeiten",
    name: "Codes"
  },
  creatable: {
    hint: "Einstellungen können neue Optionen erstellen",
    name: "Gestaltbar"
  },
  data: {
    hint: "Auswählbare Daten",
    name: "Daten"
  },
  decimalScale: {
    hint: "Wenn definiert, begrenzt es die Anzahl der Nachkommastellen",
    name: "Dezimalskala"
  },
  decimalSeparator: {
    hint: "Definiert das Dezimalzeichen",
    name: "Dezimaltrennzeichen"
  },
  disableMultipart: {
    hint: "Wenn 'true', deaktivieren Sie die Verwendung eines mehrteiligen Formulars zum Hochladen von Dateien und streamen Sie stattdessen die Datei. Einige APIs (z. B. Amazon S3) erwarten möglicherweise, dass die Datei gestreamt und nicht über ein Formular gesendet wird",
    name: "Multipart deaktivieren"
  },
  disabled: {
    hint: "Ob die Komponente deaktiviert ist oder nicht",
    name: "Behinderte"
  },
  draggable: {
    hint: "Drag & Drop zum Hochladen aktiviert",
    name: "Ziehbar"
  },
  errorConfig: {
    show: "Karte"
  },
  eventKey: {
    hint: "Der Ereignisschlüssel, der diesem Element entspricht",
    name: "Ereignisschlüssel"
  },
  fixedDecimalScale: {
    hint: "Wenn auf true gesetzt, werden nachgestellte 0 nach dem Dezimaltrennzeichen hinzugefügt, um der angegebenen Dezimalskala zu entsprechen",
    name: "Feste Dezimalskala"
  },
  flexDirection: {
    hint: "Flexrichtung von Containerkindern",
    name: "Richtung"
  },
  format: {
    hint: "Formatieren Sie das Muster mit dem Zeichen # (oder einem Musterzeichen). # ist das Platzhalterzeichen für Zahlen. Beispiel: '### ###'",
    name: "Formatierung"
  },
  groupBy: {
    hint: "Gruppierungskriterien 'Schlüssel' in 'Daten' setzen",
    name: "Gruppieren nach"
  },
  htmlAttributes: {
    hint: "HTML-Attribute im React (camelCase) -Format",
    name: "HTML-Attribute"
  },
  justifyContent: {
    name: "Ausrichtung"
  },
  label: {
    hint: "Beschriftung einstellen",
    name: "Etikett"
  },
  mask: {
    hint: "Wird als Maskenzeichen für numerische Stellen verwendet, bis ein beliebiges numerisches Zeichen für diese Position bereitgestellt wird",
    name: "Maske"
  },
  method: {
    hint: "Die HTTP-Methode der Upload-Anforderung",
    name: "Methode"
  },
  name: {
    hint: "Laden Sie den Parameternamen der entsprechenden Datei hoch",
    name: "Name"
  },
  objectFit: {
    name: "Passen"
  },
  objectPosition: {
    name: "Position"
  },
  passwordMask: {
    hint: "Passwortmaske verwenden",
    name: "Passwortmaske"
  },
  patternChar: {
    hint: "Dies hilft bei der Definition des Formatmusterzeichens",
    name: "Muster Zeichen"
  },
  placeholder: {
    hint: "Platzhalter setzen",
    name: "Platzhalter"
  },
  placement: {
    hint: "Die Platzierung der Komponente",
    name: "Platzierung"
  },
  prefix: {
    hint: "Fügt das Präfixzeichen vor dem Eingabewert hinzu",
    name: "Präfix"
  },
  size: {
    hint: "Komponente kann verschiedene Größen haben",
    name: "Größe"
  },
  suffix: {
    hint: "Fügt das Suffix nach dem Eingabewert hinzu",
    name: "Nachsilbe "
  },
  textAlign: {
    name: "Ausrichtung"
  },
  thousandsGroupStyle: {
    hint: "Tausend Stil (tausend): 123,456,789, indischer Stil (Lakh): 12,34,56,789, chinesischer Stil (wan): 1,2345,6789",
    name: "Tausende Gruppenstil"
  },
  tooltipProps: {
    hint: "Tooltip für dieses Element verwenden",
    tooltip: "QuickInfo"
  },
  withCredentials: {
    hint: "Ob beim Hochladen von Anfragen Cookies mitgeführt werden sollen",
    name: "Mit Anmeldeinformationen"
  }
}, t = {
  editCodeAction: "Codeaktion bearbeiten",
  editProperty: "Eigenschaft bearbeiten",
  function: "Kalkulierbarer Wert",
  localization: "Fließende Lokalisierung",
  simpleValue: "Einfacher Wert",
  simpleValueHint: "Bearbeiten Sie die Eigenschaft im rechten Bereich",
  use: "Verwenden"
}, i = {
  actionNameExists: "Aktion mit diesem Namen ist bereits vorhanden",
  nameIsRequired: "Aktionsname ist erforderlich",
  parameterNameExists: "Parameter mit diesem Namen existiert bereits",
  parameterNameIsNotValid: "Parametername ist ungültig",
  parameterNameIsRequired: "Parametername ist erforderlich"
}, r = {
  codeActionHeader: "Code-Aktionseditor",
  codePlaceholder: "// geben Sie hier Ihren Code ein",
  compilationResult: "Kompilierungsergebnis:",
  compile: "Kompilieren",
  ok: "Okay"
}, a = {
  apply: "Gelten",
  cancel: "Stornieren",
  clone: "Klonen",
  close: "Schließen",
  edit: "Bearbeiten",
  name: "Geltener",
  remove: "Entfernen",
  save: "Speichern",
  test: "Test"
}, o = {
  add: "Neues Element hinzufügen",
  after: "Nach",
  before: "Vor",
  inside: "Inneren"
}, s = {
  categories: {
    fields: "Datenfelder",
    static: "Statisch",
    structure: "Struktur",
    templates: "Vorlagen"
  }
}, l = {
  clickToAdd: "Klicken Sie, um Steuerelement hinzuzufügen"
}, m = "JSON bearbeiten", d = {
  data: "Daten",
  errors: "Fehlermeldung"
}, c = {
  addNewForm: "Neues Formular hinzufügen",
  noFormsInFormStorage: "Speichern Sie das Formular so, dass es in der Liste der Formulare angezeigt wird."
}, h = {
  clear: "Klar",
  currentFormName: "Der Name des aktuellen Formulars",
  download: "Herunterladen",
  enterFormName: "Bitte geben Sie den Formularnamen ein",
  exportForms: "Formulare exportieren",
  exportFormsError: "Formulare konnten nicht exportiert werden! Sehen Sie sich die Protokolle in der Browserkonsole an",
  exportFormsSuccess: "Exportierte Formulare",
  formNamePlaceholder: "Meine schöne Form",
  formSaveError: "Formular konnte nicht gespeichert werden! Sehen Sie sich die Protokolle in der Browserkonsole an",
  formSaved: "Das Formular wird gespeichert",
  importForms: "Formulare importieren",
  importFormsError: "Formulare konnten nicht importiert werden! Sehen Sie sich die Protokolle in der Browserkonsole an",
  importFormsSuccess: "Importierte Formulare",
  menu: "Menü",
  print: "Druck",
  save: "Speichern",
  saveAs: "Speichern unter...",
  settings: "Einstellung",
  translation: "Übersetzung",
  undo: "Rückgängig",
  upload: "Laden",
  validateForm: "Formular validieren"
}, u = {
  formSettings: {
    actions: "Aktionen",
    error: "Fehlereinstellungen",
    language: "Spracheinstellungen",
    tooltip: "QuickInfo"
  },
  sectionName: {
    components: "Hauptkomponenten",
    forms: "Forms",
    settings: "Einstellung",
    tree: "Baum"
  }
}, g = {
  messageIsNull: "Lokalisierungsnachricht ist null",
  messageNotFound: "Lokalisierungsnachricht nicht gefunden"
}, p = {
  cancel: "Stornieren",
  ok: "Okay"
}, b = {
  applyKey: "Wichtige Änderungen anwenden",
  codeButton: {
    editCalculable: "Berechenbar bearbeiten",
    editLocalizable: "Fluent Lokalisierung bearbeiten",
    hintCalculable: "Machen Sie diese Eigenschaft berechenbar",
    hintCalculableAndLocalizable: "Machen Sie diese Eigenschaft berechenbar oder lokalisieren Sie sie mit Fluent",
    hintLocalizable: "Lokalisieren Sie diese Eigenschaft mit Fluent",
    neitherCalculableNorLocalizable: "Weder kalkulierbar noch lokalisierbar"
  },
  keyMustBeUnique: "Schlüssel muss eindeutig sein",
  keyMustNotBeEmpty: "Schlüssel darf nicht leer sein",
  sectionName: {
    actions: "Aktionen",
    expression: "Ausdruck",
    linkedProperty: "Verknüpfte Eigenschaft",
    main: "Wichtigsten",
    rules: "Geschäftsregeln",
    style: "Stil",
    withTarget: "Mit Ziel",
    withoutTarget: "Ohne Ziel"
  },
  selectElementForEdit: "Element im Formular auswählen, um Eigenschaften zu bearbeiten",
  setInputHint: "Drücken Sie die Eingabetaste, um den Wert hinzuzufügen",
  subSection: {
    additionalProperties: "Zusätzliche Eigenschaften"
  }
}, f = {
  modes: {
    builder: "Vorschau",
    desktop: "Desktop",
    mobile: "Mobile",
    tablet: "Tablet",
    viewer: "Bearbeiten"
  },
  toggleTheme: "Thema umschalten"
}, k = {
  search: "Suche..."
}, z = {
  any: "Jedes Gerät",
  component: "Komponente",
  componentHint: "Stile, die für die Komponente gelten",
  desktop: "Desktop",
  forDevice: "Für Gerät:",
  mobile: "Mobile",
  other: "Andere",
  tablet: "Tablet",
  wrapper: "Wickler",
  wrapperHint: "Stile, die für den Komponenten-Wrapper gelten"
}, F = {
  autorun: "Autostart",
  compilationOk: "Kompilierungsergebnis: OK",
  hasNotReturnedValue: "Hat keinen Wert zurückgegeben",
  run: "Laufen",
  testFormData: "Testformulardaten"
}, S = {
  cloneComponent: "Komponente klonen",
  elements: "Schlüsselelemente",
  notFound: "Nicht gefunden",
  removeComponent: "Komponente entfernen",
  reset: "Zurücksetzen"
}, E = {
  collapse: "Alles ausblenden",
  expand: "Alles erweitern"
}, w = {
  addRule: "Regel hinzufügen",
  chooseValidation: "Wählen Sie Ihren Typ",
  editCustomValidationCode: "Benutzerdefinierten Validierungscode für Komponente bearbeiten",
  formErrors: "Formularfehler",
  rule: {
    code: "Code",
    custom: "Benutzerdefinierte",
    datetime: "Datum /Uhrzeit",
    email: "Email",
    endsWith: "Endet mit",
    falsy: "Falschheit",
    finite: "Finite",
    includes: "Enthalten",
    integer: "Ganzzahl",
    ip: "IP",
    length: "Länge",
    lessThan: "Knapp",
    max: "Max",
    min: "Min",
    moreThan: "Über",
    multipleOf: "Vielfaches von",
    nonEmpty: "Nicht leer",
    regex: "Regex",
    required: "Erforderlich",
    startsWith: "Beginnt mit",
    truthy: "Truthy",
    url: "URL",
    uuid: "Uuid"
  },
  showFormErrors: "Formularfehler anzeigen"
}, D = {
  actions: e,
  annotation: n,
  bottomPanel: t,
  codeActionEditor: i,
  codeEditor: r,
  common: a,
  componentToolbar: o,
  componentsList: s,
  componentsModal: l,
  editJson: m,
  errorsPanel: d,
  formsList: c,
  leftMenu: h,
  leftPanel: u,
  localization: g,
  promptDialog: p,
  propertiesEditor: b,
  rightMenu: f,
  searchForm: k,
  style: z,
  testingEditor: F,
  toolbar: S,
  tree: E,
  validation: w
};
export {
  e as actions,
  n as annotation,
  t as bottomPanel,
  i as codeActionEditor,
  r as codeEditor,
  a as common,
  o as componentToolbar,
  s as componentsList,
  l as componentsModal,
  D as default,
  m as editJson,
  d as errorsPanel,
  c as formsList,
  h as leftMenu,
  u as leftPanel,
  g as localization,
  p as promptDialog,
  b as propertiesEditor,
  f as rightMenu,
  k as searchForm,
  z as style,
  F as testingEditor,
  S as toolbar,
  E as tree,
  w as validation
};
//# sourceMappingURL=de-DE-1eb76515.js.map
