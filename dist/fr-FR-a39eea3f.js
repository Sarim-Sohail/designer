const e = {
  add: "Ajouter",
  addAction: "Ajouter une action",
  addCodeAction: "Ajouter une action de code",
  arguments: "Arguments",
  code: "Code",
  common: "Commun",
  custom: "Personnalisé",
  delete: "Supprimer",
  duplicate: "Dupliquer",
  edit: "Modifier",
  name: "Nom",
  parameters: "Paramètres",
  type: "Type"
}, t = {
  accept: {
    hint: "Types de fichiers pouvant être acceptés. Voir attribut HTML standard: accepter",
    name: "Accepter"
  },
  action: {
    hint: "URL de TÉLÉCHARGEMENT",
    name: "Actions"
  },
  allowEmptyFormatting: {
    hint: "Par défaut, le composant PatternFormat n'applique pas la mise en forme lorsque la valeur est vide (null, undefined ou‘)",
    name: "Autoriser le formatage vide "
  },
  allowLeadingZeros: {
    hint: "Cela permet d'activer ou de désactiver les zéros non significatifs dans le champ de saisie. Par défaut, en cas de flou d'une entrée, les zéros en tête sont supprimés",
    name: "Autoriser les zéros non significatifs"
  },
  allowNegative: {
    hint: "S'il est défini sur false, les nombres négatifs ne seront pas autorisés",
    name: "Autoriser le négatif"
  },
  allowedDecimalSeparators: {
    hint: `Caractères qui, lorsqu'ils sont pressés, donnent un séparateur décimal. En cas d'absence, séparateur décimal et '."sont utilisés`,
    name: "Séparateurs décimaux autorisés"
  },
  autoUpload: {
    hint: "Télécharger automatiquement les fichiers après les avoir sélectionnés",
    name: "Téléchargement automatique"
  },
  block: {
    hint: "Blocage d'une ligne entière",
    name: "Bloquer"
  },
  bodyFill: {
    hint: "Zone de contenu remplie de conteneurs",
    name: "Remplissage du corps"
  },
  cleanable: {
    hint: "Indique si l'option peut être vidée",
    name: "Nettoyable"
  },
  code: {
    hint: "Modifier le code",
    name: "Code"
  },
  creatable: {
    hint: "Les paramètres peuvent créer de nouvelles options",
    name: "Créable"
  },
  data: {
    hint: "Données sélectionnables",
    name: "Données"
  },
  decimalScale: {
    hint: "S'il est défini, il limite le nombre de chiffres après la virgule décimale",
    name: "Échelle décimale"
  },
  decimalSeparator: {
    hint: "Définit le caractère décimal",
    name: "Séparateur décimal"
  },
  disableMultipart: {
    hint: "Si 'true', désactivez l'utilisation d'un formulaire en plusieurs parties pour le téléchargement de fichiers et diffusez le fichier à la place. Certaines API (par exemple Amazon S3) peuvent s'attendre à ce que le fichier soit diffusé en continu plutôt qu'envoyé via un formulaire",
    name: "Désactiver les parties multiples"
  },
  disabled: {
    hint: "Indique si le composant est désactivé ou non",
    name: "Désactivé"
  },
  draggable: {
    hint: "Activé glisser-déposer pour télécharger",
    name: "Déplaçable"
  },
  errorConfig: {
    show: "Spectacle"
  },
  eventKey: {
    hint: "La clé d'événement correspondant à cet élément",
    name: "Clé d'événement"
  },
  fixedDecimalScale: {
    hint: "S'il est défini sur true, il ajoute des 0 de fin après DecimalSeparator pour correspondre à l'échelle décimale donnée",
    name: "Échelle décimale fixe"
  },
  flexDirection: {
    hint: "Flex direction des enfants du conteneur",
    name: "Direction Générale"
  },
  format: {
    hint: "Formatez le motif en utilisant le caractère # (ou un caractère de motif). # est le caractère d'espace réservé pour les nombres. Exemple:'######'",
    name: "Format"
  },
  groupBy: {
    hint: 'Définir les critères de regroupement " clé "dans " données"',
    name: "Groupe par"
  },
  htmlAttributes: {
    hint: "Attributs HTML au format React (CamelCase) ",
    name: "Attributs HTML"
  },
  justifyContent: {
    name: "Alignement"
  },
  label: {
    hint: "Étiquette de réglage",
    name: "Étiquette"
  },
  mask: {
    hint: "Utilisé comme caractère de masque pour les emplacements numériques, jusqu'à ce qu'un caractère numérique soit fourni pour cette position",
    name: "Masque"
  },
  method: {
    hint: "La méthode HTTP de demande de téléchargement",
    name: "Méthode"
  },
  name: {
    hint: "Télécharger le nom du paramètre du fichier correspondant",
    name: "Nom"
  },
  objectFit: {
    name: "Coupe"
  },
  objectPosition: {
    name: "Poste"
  },
  passwordMask: {
    hint: "Utiliser un masque de mot de passe",
    name: "Masque de mot de passe"
  },
  patternChar: {
    hint: "Cela permet de définir le caractère du modèle de format",
    name: "Caractère de motif"
  },
  placeholder: {
    hint: "Définition d'espaces réservés",
    name: "Espace Réservé"
  },
  placement: {
    hint: "Le placement du composant",
    name: "Placement"
  },
  prefix: {
    hint: "Ajoute le caractère de préfixe avant la valeur d'entrée",
    name: "Préfixe"
  },
  size: {
    hint: "Le composant peut avoir différentes tailles",
    name: "Taille"
  },
  suffix: {
    hint: "Ajoute le suffixe après la valeur d'entrée",
    name: "Suffixe "
  },
  textAlign: {
    name: "Alignement"
  },
  thousandsGroupStyle: {
    hint: "Mille style (mille): 123 456 789, style indien (lakh): 12,34,56,789, style chinois (wan): 1 2345 6789",
    name: "Style de groupe de milliers"
  },
  tooltipProps: {
    hint: "Utilisez l'info-bulle pour cet élément",
    tooltip: "Infobulle"
  },
  withCredentials: {
    hint: "Indique s'il faut transporter des cookies lors du téléchargement des demandes",
    name: "Avec informations d'identification"
  }
}, r = {
  editCodeAction: "Action de modification du code",
  editProperty: "Modifier la propriété",
  function: "Valeur calculable",
  localization: "Localisation fluide",
  simpleValue: "Valeur simple",
  simpleValueHint: "Modifiez la propriété dans le panneau de droite",
  use: "Utilisation"
}, a = {
  actionNameExists: "L'action avec ce nom existe déjà",
  nameIsRequired: "Le nom de l'action est requis",
  parameterNameExists: "Le paramètre avec ce nom existe déjà",
  parameterNameIsNotValid: "Le nom du paramètre n'est pas valide",
  parameterNameIsRequired: "Le nom du paramètre est requis"
}, o = {
  codeActionHeader: "Éditeur d'actions de code",
  codePlaceholder: "// entrez votre code ici",
  compilationResult: "Résultat de la compilation:",
  compile: "Compiler",
  ok: "D'ACCORD"
}, i = {
  apply: "Appliquer",
  cancel: "Annuler",
  clone: "Clonage",
  close: "Fermer",
  edit: "Modifier",
  name: "Nom",
  remove: "Supprimer",
  save: "Sauvegarder",
  test: "Essai"
}, n = {
  add: "Ajouter un nouvel élément",
  after: "Après",
  before: "Avant",
  inside: "À l'Intérieur"
}, s = {
  categories: {
    fields: "Champs",
    static: "Statique",
    structure: "Structure",
    templates: "Modèles"
  }
}, l = {
  clickToAdd: "Cliquez pour ajouter un contrôle"
}, u = "Modifier JSON", m = {
  data: "Données",
  errors: "Erreurs"
}, c = {
  addNewForm: "Ajouter un nouveau formulaire",
  noFormsInFormStorage: "Enregistrez le formulaire pour qu'il apparaisse dans la liste des formulaires."
}, d = {
  clear: "Clair",
  currentFormName: "Le nom du formulaire actuel",
  download: "Télécharger",
  enterFormName: "Veuillez entrer le nom du formulaire",
  exportForms: "Formulaires d'exportation",
  exportFormsError: "Impossible d'exporter les formulaires! Voir les journaux dans la console du navigateur",
  exportFormsSuccess: "Formulaires exportés",
  formNamePlaceholder: "Ma belle forme",
  formSaveError: "Impossible d'enregistrer le formulaire! Voir les journaux dans la console du navigateur",
  formSaved: "Le formulaire est sauvegardé",
  importForms: "Importer des formulaires",
  importFormsError: "Impossible d'importer des formulaires! Voir les journaux dans la console du navigateur",
  importFormsSuccess: "Formulaires importés",
  menu: "Le Menu",
  print: "Imprimer",
  save: "Sauvegarder",
  saveAs: "Enregistrer sous...",
  settings: "Paramètres",
  translation: "Traduction",
  undo: "Annuler",
  upload: "Télécharger",
  validateForm: "Valider le formulaire"
}, p = {
  formSettings: {
    actions: "Actions",
    error: "Paramètres d'erreur",
    language: "Paramètres de langue",
    tooltip: "Infobulle"
  },
  sectionName: {
    components: "Composants",
    forms: "Formulaires",
    settings: "Paramètres",
    tree: "Arbre"
  }
}, f = {
  messageIsNull: "Le message de localisation est nul",
  messageNotFound: "Message de localisation non trouvé"
}, h = {
  cancel: "Annuler",
  ok: "D'ACCORD"
}, g = {
  applyKey: "Appliquer les modifications clés",
  codeButton: {
    editCalculable: "Modifier calculable",
    editLocalizable: "Modifier la localisation fluide",
    hintCalculable: "Rendre cette propriété calculable",
    hintCalculableAndLocalizable: "Rendez cette propriété calculable ou localisez-la avec Fluent",
    hintLocalizable: "Localisez cette propriété avec Fluent",
    neitherCalculableNorLocalizable: "Ni calculable ni localisable"
  },
  keyMustBeUnique: "La clé doit être unique",
  keyMustNotBeEmpty: "La clé ne doit pas être vide",
  sectionName: {
    actions: "Actions",
    expression: "Expression",
    linkedProperty: "Propriété liée",
    main: "Principale",
    rules: "Règles",
    style: "Style",
    withTarget: "Avec Cible",
    withoutTarget: "Sans Cible"
  },
  selectElementForEdit: "Sélectionnez l'élément sur le formulaire pour modifier les propriétés",
  setInputHint: "Appuyez sur Entrée pour ajouter une valeur",
  subSection: {
    additionalProperties: "Propriétés supplémentaires"
  }
}, v = {
  modes: {
    builder: "Aperçu",
    desktop: "Bureau",
    mobile: "Mobiles",
    tablet: "Tablette",
    viewer: "Modifier"
  },
  toggleTheme: "Basculer le thème"
}, b = {
  search: "Chercher..."
}, A = {
  any: "Tout",
  component: "Composant",
  componentHint: "Styles qui s'appliquent au composant",
  desktop: "Bureau",
  forDevice: "Pour l'appareil:",
  mobile: "Mobiles",
  other: "Autres",
  tablet: "Tablette",
  wrapper: "Emballage",
  wrapperHint: "Styles qui s'appliquent à l'encapsuleur de composant"
}, C = {
  autorun: "Exécution Automatique",
  compilationOk: "Résultat de la compilation: OK",
  hasNotReturnedValue: "N'a pas renvoyé de valeur",
  run: "Courir",
  testFormData: "Données du formulaire de test"
}, q = {
  cloneComponent: "Composant Clone",
  elements: "Éléments",
  notFound: "Non trouvé",
  removeComponent: "Supprimer un composant",
  reset: "Réinitialiser"
}, M = {
  collapse: "Tout réduire",
  expand: "Tout développer"
}, x = {
  addRule: "Ajouter une règle",
  chooseValidation: "Choisissez votre type",
  editCustomValidationCode: "Modifier le code de validation personnalisé pour le composant",
  formErrors: "Erreurs de formulaire",
  rule: {
    code: "Code",
    custom: "Personnalisé",
    datetime: "Dateheure",
    email: "Courriel",
    endsWith: "Se termine par",
    falsy: "Faux",
    finite: "Fini",
    includes: "Comprend",
    integer: "Entier",
    ip: "Adresse IP",
    length: "Longueur",
    lessThan: "Moins de",
    max: "Max",
    min: "Minute",
    moreThan: "Plus de",
    multipleOf: "Multiple de",
    nonEmpty: "Non vide",
    regex: "Expression régulière",
    required: "Requis",
    startsWith: "Commence par",
    truthy: "Vérité",
    url: "Adresse URL",
    uuid: "UID"
  },
  showFormErrors: "Afficher les erreurs de formulaire"
}, S = {
  actions: e,
  annotation: t,
  bottomPanel: r,
  codeActionEditor: a,
  codeEditor: o,
  common: i,
  componentToolbar: n,
  componentsList: s,
  componentsModal: l,
  editJson: u,
  errorsPanel: m,
  formsList: c,
  leftMenu: d,
  leftPanel: p,
  localization: f,
  promptDialog: h,
  propertiesEditor: g,
  rightMenu: v,
  searchForm: b,
  style: A,
  testingEditor: C,
  toolbar: q,
  tree: M,
  validation: x
};
export {
  e as actions,
  t as annotation,
  r as bottomPanel,
  a as codeActionEditor,
  o as codeEditor,
  i as common,
  n as componentToolbar,
  s as componentsList,
  l as componentsModal,
  S as default,
  u as editJson,
  m as errorsPanel,
  c as formsList,
  d as leftMenu,
  p as leftPanel,
  f as localization,
  h as promptDialog,
  g as propertiesEditor,
  v as rightMenu,
  b as searchForm,
  A as style,
  C as testingEditor,
  q as toolbar,
  M as tree,
  x as validation
};
//# sourceMappingURL=fr-FR-a39eea3f.js.map
