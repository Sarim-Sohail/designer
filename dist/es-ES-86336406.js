const e = {
  add: "Añadir",
  addAction: "Añadir acción",
  addCodeAction: "Agregar una acción de código",
  arguments: "Argumentos",
  code: "Código",
  common: "Común",
  custom: "Personalizado",
  delete: "Suprimir",
  duplicate: "Duplicado",
  edit: "Editar",
  name: "Nombre",
  parameters: "Parámetros",
  type: "Tipo"
}, a = {
  accept: {
    hint: "Tipos de archivos que se pueden aceptar. Consulte atributo HTML estándar: aceptar",
    name: "Aceptar"
  },
  action: {
    hint: "URL de carga",
    name: "Acción"
  },
  allowEmptyFormatting: {
    hint: 'De forma predeterminada, el componente PatternFormat no aplica formato cuando el valor está vacío (nulo, indefinido o ")',
    name: "Permitir formato vacío "
  },
  allowLeadingZeros: {
    hint: "Esto permite habilitar o deshabilitar los ceros iniciales en el campo de entrada. De forma predeterminada, al desenfocar una entrada, se eliminan los ceros iniciales",
    name: "Permitir ceros iniciales"
  },
  allowNegative: {
    hint: "Si se establece en falso, no se permitirán números negativos",
    name: "Permitir negativo"
  },
  allowedDecimalSeparators: {
    hint: `Caracteres que cuando se presionan dan como resultado un separador decimal. Cuando falte, separador decimal y '."se utilizan`,
    name: "Separadores decimales permitidos"
  },
  autoUpload: {
    hint: "Carga automática de archivos después de seleccionarlos",
    name: "Carga automática"
  },
  block: {
    hint: "Bloquear una fila entera",
    name: "Bloque"
  },
  bodyFill: {
    hint: "Área de contenido llena de contenedores",
    name: "Relleno corporal"
  },
  cleanable: {
    hint: "Si la opción se puede vaciar",
    name: "Lavable"
  },
  code: {
    hint: "Editar código",
    name: "Código"
  },
  creatable: {
    hint: "La configuración puede crear nuevas opciones",
    name: "Creable"
  },
  data: {
    hint: "Datos seleccionables",
    name: "Datos"
  },
  decimalScale: {
    hint: "Si se define, limita el número de dígitos después del punto decimal",
    name: "Escala decimal"
  },
  decimalSeparator: {
    hint: "Define el carácter decimal",
    name: "Separador decimal"
  },
  disableMultipart: {
    hint: "Si es 'verdadero', deshabilite el uso de un formulario de varias partes para cargar archivos y, en su lugar, transmita el archivo. Algunas API (por ejemplo, Amazon S3) pueden esperar que el archivo se transmita en lugar de enviarse a través de un formulario",
    name: "Deshabilitar multiparte"
  },
  disabled: {
    hint: "Si el componente está deshabilitado o no",
    name: "Discapacitados"
  },
  draggable: {
    hint: "Habilitado arrastrar y soltar para cargar",
    name: "Arrastrable"
  },
  errorConfig: {
    show: "Espectáculo"
  },
  eventKey: {
    hint: "La clave de evento correspondiente a este elemento",
    name: "Clave de evento"
  },
  fixedDecimalScale: {
    hint: "Si se establece en true, agrega 0 finales después de decimalSeparator para que coincida con la escala decimal dada",
    name: "Escala decimal fija"
  },
  flexDirection: {
    hint: "Dirección flexible de los niños contenedores",
    name: "Dirección"
  },
  format: {
    hint: "Formatee el patrón usando el carácter # (o un carácter de patrón). # es el carácter de marcador de posición para los números. Ejemplo:'######'",
    name: "Formato"
  },
  groupBy: {
    hint: "Establecer criterios de agrupación 'clave' en 'datos'",
    name: "Grupo por"
  },
  htmlAttributes: {
    hint: "Atributos HTML en formato React (camelCase) ",
    name: "Atributos HTML"
  },
  justifyContent: {
    name: "Alineación"
  },
  label: {
    hint: "Configuración de la etiqueta",
    name: "Etiqueta"
  },
  mask: {
    hint: "Se utiliza como carácter de máscara para lugares numéricos, hasta que se proporcione cualquier carácter numérico para esa posición",
    name: "Máscara"
  },
  method: {
    hint: "El método HTTP de solicitud de carga",
    name: "Método"
  },
  name: {
    hint: "Cargue el nombre del parámetro del archivo correspondiente",
    name: "Nombre"
  },
  objectFit: {
    name: "Ajuste"
  },
  objectPosition: {
    name: "Posición"
  },
  passwordMask: {
    hint: "Usar máscara de contraseña",
    name: "Máscara de contraseña"
  },
  patternChar: {
    hint: "Esto ayuda a definir el carácter del patrón de formato",
    name: "Carácter de patrón"
  },
  placeholder: {
    hint: "Configuración de marcadores de posición",
    name: "Marcador de posición"
  },
  placement: {
    hint: "La colocación del componente",
    name: "Colocación"
  },
  prefix: {
    hint: "Agrega el carácter de prefijo antes del valor de entrada",
    name: "Prefijo"
  },
  size: {
    hint: "El componente puede tener diferentes tamaños",
    name: "Tamaño"
  },
  suffix: {
    hint: "Agrega el sufijo después del valor de entrada",
    name: "Sufijo "
  },
  textAlign: {
    name: "Alineación"
  },
  thousandsGroupStyle: {
    hint: "Estilo mil (miles): 123,456,789, estilo indio (lakh): 12,34,56,789, estilo chino (wan): 1,2345,6789",
    name: "Estilo de grupo de miles"
  },
  tooltipProps: {
    hint: "Utilice información sobre herramientas para este elemento",
    tooltip: "Información sobre Herramientas"
  },
  withCredentials: {
    hint: "Si llevar cookies al cargar solicitudes",
    name: "Con credenciales"
  }
}, o = {
  editCodeAction: "Editar acción de código",
  editProperty: "Editar propiedad",
  function: "Valor calculable",
  localization: "Localización fluida",
  simpleValue: "Valor simple",
  simpleValueHint: "Edite la propiedad en el panel derecho",
  use: "Uso"
}, r = {
  actionNameExists: "La acción con este nombre ya existe",
  nameIsRequired: "El nombre de la acción es obligatorio",
  parameterNameExists: "El parámetro con este nombre ya existe",
  parameterNameIsNotValid: "El nombre del parámetro no es válido",
  parameterNameIsRequired: "El nombre del parámetro es obligatorio"
}, i = {
  codeActionHeader: "Editor de acciones de código",
  codePlaceholder: "// ingrese su código aquí",
  compilationResult: "Resultado de la compilación:",
  compile: "Compilar",
  ok: "OK"
}, t = {
  apply: "Aplicar",
  cancel: "Cancelar",
  clone: "Clon",
  close: "Cerrar",
  edit: "Editar",
  name: "Nombre",
  remove: "Eliminar",
  save: "Guardar",
  test: "Prueba"
}, n = {
  add: "Añadir nuevo elemento",
  after: "Después",
  before: "Antes",
  inside: "En el Interior"
}, l = {
  categories: {
    fields: "Campos",
    static: "Estática",
    structure: "Estructura",
    templates: "Plantillas"
  }
}, s = {
  clickToAdd: "Haga clic para agregar control"
}, c = "Editar JSON", d = {
  data: "Datos",
  errors: "Errores"
}, m = {
  addNewForm: "Añadir nuevo formulario",
  noFormsInFormStorage: "Guarde el formulario para que aparezca en la lista de formularios."
}, u = {
  clear: "Claro",
  currentFormName: "El nombre del formulario actual",
  download: "Descargar",
  enterFormName: "Por favor, introduzca el nombre del formulario",
  exportForms: "Formularios de exportación",
  exportFormsError: "Error al exportar formularios! Ver los registros en la consola del navegador",
  exportFormsSuccess: "Formularios exportados",
  formNamePlaceholder: "Mi hermosa forma",
  formSaveError: "Error al guardar el formulario! Ver los registros en la consola del navegador",
  formSaved: "El formulario se guarda",
  importForms: "Formularios de importación",
  importFormsError: "Error al importar formularios! Ver los registros en la consola del navegador",
  importFormsSuccess: "Formularios importados",
  menu: "Menú",
  print: "Imprimir",
  save: "Guardar",
  saveAs: "Guardar como...",
  settings: "Ajustes",
  translation: "Traducción",
  undo: "Deshacer",
  upload: "Subir",
  validateForm: "Validar formulario"
}, p = {
  formSettings: {
    actions: "Acciones",
    error: "Configuración de errores",
    language: "Ajustes de idioma",
    tooltip: "Información sobre Herramientas"
  },
  sectionName: {
    components: "Componentes",
    forms: "Formularios",
    settings: "Ajustes",
    tree: "Árbol"
  }
}, g = {
  messageIsNull: "El mensaje de localización es nulo",
  messageNotFound: "Mensaje de localización no encontrado"
}, h = {
  cancel: "Cancelar",
  ok: "OK"
}, b = {
  applyKey: "Aplicar cambios de clave",
  codeButton: {
    editCalculable: "Editar calculable",
    editLocalizable: "Editar localización fluida",
    hintCalculable: "Hacer calculable esta propiedad",
    hintCalculableAndLocalizable: "Haga que esta propiedad sea calculable o localice con Fluent",
    hintLocalizable: "Localice esta propiedad con Fluent",
    neitherCalculableNorLocalizable: "Ni calculable ni localizable"
  },
  keyMustBeUnique: "La clave debe ser única",
  keyMustNotBeEmpty: "La clave no debe estar vacía",
  sectionName: {
    actions: "Acciones",
    expression: "Expresión",
    linkedProperty: "Propiedad vinculada",
    main: "Principal",
    rules: "Reglas",
    style: "Estilo",
    withTarget: "Con Objetivo",
    withoutTarget: "Sin Objetivo"
  },
  selectElementForEdit: "Seleccionar elemento en el formulario para editar propiedades",
  setInputHint: "Presione Entrar para agregar un valor",
  subSection: {
    additionalProperties: "Propiedades adicionales"
  }
}, f = {
  modes: {
    builder: "Vista previa",
    desktop: "Escritorio",
    mobile: "Móvil",
    tablet: "Comprimido",
    viewer: "Editar"
  },
  toggleTheme: "Alternar tema"
}, E = {
  search: "Búsqueda..."
}, v = {
  any: "Cualquiera",
  component: "Componente",
  componentHint: "Estilos que se aplican al componente",
  desktop: "Escritorio",
  forDevice: "Para el dispositivo:",
  mobile: "Móvil",
  other: "Los demás",
  tablet: "Comprimido",
  wrapper: "Envoltura",
  wrapperHint: "Estilos que se aplican al contenedor de componentes"
}, C = {
  autorun: "Ejecución automática",
  compilationOk: "Resultado de la compilación: OK",
  hasNotReturnedValue: "No ha devuelto valor",
  run: "Corre",
  testFormData: "Datos del formulario de prueba"
}, A = {
  cloneComponent: "Componente de clonación",
  elements: "Elementos",
  notFound: "No encontrado",
  removeComponent: "Eliminar componente",
  reset: "Restablecer"
}, F = {
  collapse: "Contraer todo",
  expand: "Expandir todo"
}, P = {
  addRule: "Añadir regla",
  chooseValidation: "Elige tu tipo",
  editCustomValidationCode: "Editar código de validación personalizado para el componente",
  formErrors: "Errores de formulario",
  rule: {
    code: "Código",
    custom: "Personalizado",
    datetime: "Fecha y Hora",
    email: "Correo Electrónico",
    endsWith: "Termina con",
    falsy: "Falso",
    finite: "Finito",
    includes: "Incluye",
    integer: "Entero",
    ip: "Pi",
    length: "Longitud",
    lessThan: "Menos de",
    max: "Máx.",
    min: "Mín.",
    moreThan: "Más de",
    multipleOf: "Múltiplo de",
    nonEmpty: "No vacío",
    regex: "Expresiones regulares",
    required: "Requerido",
    startsWith: "Comienza con",
    truthy: "Verdad",
    url: "Url",
    uuid: "Uuid"
  },
  showFormErrors: "Mostrar errores de formulario"
}, S = {
  actions: e,
  annotation: a,
  bottomPanel: o,
  codeActionEditor: r,
  codeEditor: i,
  common: t,
  componentToolbar: n,
  componentsList: l,
  componentsModal: s,
  editJson: c,
  errorsPanel: d,
  formsList: m,
  leftMenu: u,
  leftPanel: p,
  localization: g,
  promptDialog: h,
  propertiesEditor: b,
  rightMenu: f,
  searchForm: E,
  style: v,
  testingEditor: C,
  toolbar: A,
  tree: F,
  validation: P
};
export {
  e as actions,
  a as annotation,
  o as bottomPanel,
  r as codeActionEditor,
  i as codeEditor,
  t as common,
  n as componentToolbar,
  l as componentsList,
  s as componentsModal,
  S as default,
  c as editJson,
  d as errorsPanel,
  m as formsList,
  u as leftMenu,
  p as leftPanel,
  g as localization,
  h as promptDialog,
  b as propertiesEditor,
  f as rightMenu,
  E as searchForm,
  v as style,
  C as testingEditor,
  A as toolbar,
  F as tree,
  P as validation
};
//# sourceMappingURL=es-ES-86336406.js.map
