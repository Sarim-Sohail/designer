const e = {
  apply: "Apply",
  name: "Name",
  save: "Save",
  cancel: "Cancel",
  clone: "Clone",
  close: "Close",
  edit: "Edit",
  remove: "Remove",
  test: "Test"
}, t = {
  errorConfig: {
    show: "Show"
  },
  htmlAttributes: {
    name: "HTML attributes",
    hint: "HTML attributes in React (camelCase) format"
  },
  tooltipProps: {
    tooltip: "Tooltip",
    hint: "Use tooltip for this element"
  },
  objectPosition: {
    name: "Position"
  },
  justifyContent: {
    name: "Justify"
  },
  objectFit: {
    name: "Fit"
  },
  textAlign: {
    name: "Alignment"
  },
  passwordMask: {
    name: "Password mask",
    hint: "Use password mask"
  },
  allowLeadingZeros: {
    name: "Allow leading zeros",
    hint: "This allows enabling or disabling leading zeros in the input field. By default, on blur of an input, leading zeros are removed"
  },
  allowNegative: {
    name: "Allow negative",
    hint: "If set to false, negative numbers will not be allowed"
  },
  allowedDecimalSeparators: {
    name: "Allowed decimal separators",
    hint: "Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used"
  },
  decimalScale: {
    name: "Decimal scale",
    hint: "If defined, it limits the number of digits after the decimal point"
  },
  decimalSeparator: {
    name: "Decimal separator",
    hint: "Defines the decimal character"
  },
  fixedDecimalScale: {
    name: "Fixed decimal scale",
    hint: "If set to true, it adds trailing 0s after decimalSeparator to match given decimalScale"
  },
  prefix: {
    name: "Prefix",
    hint: "Adds the prefix character before the input value"
  },
  suffix: {
    name: "Suffix ",
    hint: "Adds the suffix after the input value"
  },
  thousandsGroupStyle: {
    name: "Thousands group style",
    hint: "Thousand style (thousand) : 123,456,789, indian style (lakh) : 12,34,56,789, chinese style (wan) : 1,2345,6789"
  },
  allowEmptyFormatting: {
    name: "Allow empty formatting ",
    hint: "By default PatternFormat component does not apply formatting when value is empty (null, undefined or ‘’)"
  },
  format: {
    name: "Format",
    hint: "Format pattern using the # (or a Pattern char) character. # is the placeholder character for numbers. Example: '### ###'"
  },
  mask: {
    name: "Mask",
    hint: "Used as mask character for numeric places, until any numeric character is provided for that position"
  },
  patternChar: {
    name: "Pattern char",
    hint: "This helps define the format pattern character"
  },
  bodyFill: {
    name: "Body fill",
    hint: "Content area filled with containers"
  },
  eventKey: {
    name: "Event key",
    hint: "The event key corresponding to this element"
  },
  action: {
    name: "Action",
    hint: "Uploading URL"
  },
  accept: {
    name: "Accept",
    hint: "File types that can be accepted. See standard HTML attribute: accept"
  },
  autoUpload: {
    name: "Auto upload",
    hint: "Automatically upload files after selecting them"
  },
  disableMultipart: {
    name: "Disable multipart",
    hint: "If 'true', disable using a multipart form for file upload and instead stream the file. Some APIs (e.g. Amazon S3) may expect the file to be streamed rather than sent via a form"
  },
  draggable: {
    name: "Draggable",
    hint: "Enabled drag and drop to upload"
  },
  method: {
    name: "Method",
    hint: "The HTTP method of upload request"
  },
  name: {
    name: "Name",
    hint: "Upload the parameter name of the corresponding file"
  },
  withCredentials: {
    name: "With credentials",
    hint: "Whether to carry cookies when uploading requests"
  },
  block: {
    name: "Block",
    hint: "Blocking an entire row"
  },
  cleanable: {
    name: "Cleanable",
    hint: "Whether the option can be emptied"
  },
  creatable: {
    name: "Creatable",
    hint: "Settings can create new options"
  },
  data: {
    name: "Data",
    hint: "Selectable data"
  },
  disabled: {
    name: "Disabled",
    hint: "Whether or not component is disabled"
  },
  placeholder: {
    name: "Placeholder",
    hint: "Setting placeholders"
  },
  placement: {
    name: "Placement",
    hint: "The placement of component"
  },
  size: {
    name: "Size",
    hint: "Component can have different sizes"
  },
  label: {
    name: "Label",
    hint: "Setting label"
  },
  groupBy: {
    name: "Group by",
    hint: "Set grouping criteria 'key' in 'data'"
  },
  code: {
    name: "Code",
    hint: "Edit code"
  },
  flexDirection: {
    name: "Direction",
    hint: "Flex direction of container children"
  },
  href: {
    name: "Href",
    hint: "The URL that the hyperlink points to"
  },
  download: {
    name: "Download",
    hint: "Causes the browser to treat the linked URL as a download"
  },
  target: {
    name: "Target",
    hint: "Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>)"
  },
  downloadFilename: {
    name: "Download filename",
    hint: "Defining a value suggests it as the filename. / and \\ characters are converted to underscores (_)"
  }
}, a = {
  translation: "Translation",
  undo: "Undo",
  menu: "Menu",
  download: "Download",
  upload: "Upload",
  print: "Print",
  settings: "Settings",
  clear: "Clear",
  save: "Save",
  saveAs: "Save as...",
  validateForm: "Validate form",
  currentFormName: "The name of the current form",
  formSaved: "The form is saved",
  formSaveError: "Failed to save form! See the logs in the browser console",
  enterFormName: "Please enter form name",
  formNamePlaceholder: "My beautiful form",
  exportForms: "Export forms",
  exportFormsSuccess: "Forms exported",
  exportFormsError: "Failed to export forms! See the logs in the browser console",
  importForms: "Import forms",
  importFormsSuccess: "Forms imported",
  importFormsError: "Failed to import forms! See the logs in the browser console"
}, o = {
  noFormsInFormStorage: "Save the form so that it appears in the list of forms.",
  addNewForm: "Add a new form"
}, n = {
  toggleTheme: "Toggle theme",
  modes: {
    builder: "Preview",
    viewer: "Edit",
    desktop: "Desktop",
    mobile: "Mobile",
    tablet: "Tablet"
  }
}, i = {
  clickToAdd: "Click to add control"
}, r = {
  categories: {
    fields: "Fields",
    static: "Static",
    structure: "Structure",
    templates: "Templates"
  }
}, l = {
  add: "Add new element",
  before: "Before",
  after: "After",
  inside: "Inside"
}, s = {
  codeActionHeader: "Code action editor",
  ok: "OK",
  compilationResult: "Compilation result:",
  codePlaceholder: "// enter your code here",
  compile: "Compile"
}, m = {
  selectElementForEdit: "Select element on form for edit properties",
  sectionName: {
    main: "Main",
    style: "Style",
    actions: "Actions",
    rules: "Rules",
    withTarget: "With Target",
    withoutTarget: "Without Target",
    linkedProperty: "Linked property",
    expression: "Expression"
  },
  subSection: {
    additionalProperties: "Additional properties"
  },
  codeButton: {
    hintCalculable: "Make this property calculable",
    hintLocalizable: "Localize this property with Fluent",
    hintCalculableAndLocalizable: "Make this property calculable or localize with Fluent",
    editCalculable: "Edit calculable",
    editLocalizable: "Edit Fluent localization",
    neitherCalculableNorLocalizable: "Neither calculable nor localizable"
  },
  setInputHint: "Press Enter to add a value",
  applyKey: "Apply key changes",
  keyMustBeUnique: "Key must be unique",
  keyMustNotBeEmpty: "Key must not be empty"
}, d = {
  elements: "Elements",
  notFound: "Not found",
  reset: "Reset",
  cloneComponent: "Clone component",
  removeComponent: "Remove component"
}, c = {
  data: "Data",
  errors: "Errors"
}, p = {
  search: "Search..."
}, h = {
  expand: "Expand all",
  collapse: "Collapse all"
}, u = {
  other: "Other",
  forDevice: "For device",
  component: "Component",
  componentHint: "Styles that apply to the component",
  wrapper: "Wrapper",
  wrapperHint: "Styles that apply to the component wrapper",
  any: "Any",
  desktop: "Desktop",
  mobile: "Mobile",
  tablet: "Tablet"
}, f = {
  arguments: "Arguments",
  code: "Code",
  custom: "Custom",
  common: "Common",
  edit: "Edit",
  duplicate: "Duplicate",
  delete: "Delete",
  addCodeAction: "Add a code action",
  addAction: "Add an action",
  parameters: "Parameters",
  add: "Add",
  name: "Name",
  type: "Type"
}, g = {
  showFormErrors: "Show form errors",
  formErrors: "Form errors",
  chooseValidation: "Choose your type",
  addRule: "Add a validation rule",
  editCustomValidationCode: "Edit custom validation code for component",
  rule: {
    required: "Required",
    nonEmpty: "Non empty",
    length: "Length",
    min: "Min",
    max: "Max",
    regex: "Regex",
    email: "Email",
    url: "Url",
    uuid: "Uuid",
    ip: "Ip",
    datetime: "Datetime",
    includes: "Includes",
    startsWith: "Starts with",
    endsWith: "Ends with",
    code: "Code",
    custom: "Custom",
    truthy: "Truthy",
    falsy: "Falsy",
    lessThan: "Less than",
    moreThan: "More than",
    integer: "Integer",
    multipleOf: "Multiple of",
    finite: "Finite"
  }
}, b = {
  ok: "OK",
  cancel: "Cancel"
}, y = {
  messageNotFound: "Localization message not found",
  messageIsNull: "Localization message is null"
}, w = {
  sectionName: {
    components: "Components",
    tree: "Tree",
    forms: "Forms",
    settings: "Settings"
  },
  formSettings: {
    actions: "Actions",
    error: "Error settings",
    tooltip: "Tooltip",
    language: "Language settings"
  }
}, S = {
  use: "Use",
  localization: "Fluent localization",
  function: "Calculable value",
  simpleValue: "Simple value",
  simpleValueHint: "Edit the property in the right panel",
  editProperty: "Edit property",
  editCodeAction: "Edit code action"
}, v = {
  actionNameExists: "Action with this name already exists",
  nameIsRequired: "Action name is required",
  parameterNameExists: "Parameter with this name already exists",
  parameterNameIsRequired: "Parameter name is required",
  parameterNameIsNotValid: "Parameter name is not valid"
}, F = {
  run: "Run",
  autorun: "Autorun",
  testFormData: "Test form data",
  hasNotReturnedValue: "Has not returned value",
  compilationOk: "Compilation result: OK"
}, C = "Edit JSON", E = {
  common: e,
  annotation: t,
  leftMenu: a,
  formsList: o,
  rightMenu: n,
  componentsModal: i,
  componentsList: r,
  componentToolbar: l,
  codeEditor: s,
  propertiesEditor: m,
  toolbar: d,
  errorsPanel: c,
  searchForm: p,
  tree: h,
  style: u,
  actions: f,
  validation: g,
  promptDialog: b,
  localization: y,
  leftPanel: w,
  bottomPanel: S,
  codeActionEditor: v,
  testingEditor: F,
  editJson: C
};
export {
  f as actions,
  t as annotation,
  S as bottomPanel,
  v as codeActionEditor,
  s as codeEditor,
  e as common,
  l as componentToolbar,
  r as componentsList,
  i as componentsModal,
  E as default,
  C as editJson,
  c as errorsPanel,
  o as formsList,
  a as leftMenu,
  w as leftPanel,
  y as localization,
  b as promptDialog,
  m as propertiesEditor,
  n as rightMenu,
  p as searchForm,
  u as style,
  F as testingEditor,
  d as toolbar,
  h as tree,
  g as validation
};
//# sourceMappingURL=en-US-524e96fa.js.map
