const e = {
  add: "إضافة",
  addAction: "إضافة إجراء",
  addCodeAction: "أضف إجراء التعليمات البرمجية",
  arguments: "الحجج",
  code: "شفرة",
  common: "مشترك",
  custom: "مخصص",
  delete: "يحذف",
  duplicate: "مكررة",
  edit: "تحرير",
  name: "الاسم",
  parameters: "المعلمات",
  type: "النوع"
}, t = {
  accept: {
    hint: "أنواع الملفات التي يمكن قبولها. انظر سمة هتمل القياسية: قبول",
    name: "قبول"
  },
  action: {
    hint: "تحميل رابط",
    name: "الإجراء"
  },
  allowEmptyFormatting: {
    hint: 'بشكل افتراضي ، لا يطبق مكون تنسيق النمط التنسيق عندما تكون القيمة فارغة (فارغة أو غير محددة أو")',
    name: "السماح بالتنسيق الفارغ "
  },
  allowLeadingZeros: {
    hint: "هذا يسمح بتمكين أو تعطيل الأصفار البادئة في حقل الإدخال. بشكل افتراضي ، عند طمس أحد المدخلات ، تتم إزالة الأصفار البادئة",
    name: "السماح بالأصفار البادئة"
  },
  allowNegative: {
    hint: "إذا تم ضبطه على خطأ ، فلن يسمح بالأرقام السالبة",
    name: "السماح السلبية"
  },
  allowedDecimalSeparators: {
    hint: "الأحرف التي تؤدي عند الضغط عليها إلى فاصل عشري. في عداد المفقودين, فاصل عشري و'.'تستخدم",
    name: "الفواصل العشرية المسموح بها"
  },
  autoUpload: {
    hint: "تحميل الملفات تلقائيا بعد تحديدها",
    name: "تحميل تلقائي"
  },
  block: {
    hint: "حظر صف كامل",
    name: "بلوك"
  },
  bodyFill: {
    hint: "منطقة المحتوى مليئة الحاويات",
    name: "ملء الجسم"
  },
  cleanable: {
    hint: "ما إذا كان يمكن إفراغ الخيار",
    name: "قابل للتنظيف"
  },
  code: {
    hint: "تحرير الكود",
    name: "كود"
  },
  creatable: {
    hint: "يمكن للإعدادات إنشاء خيارات جديدة",
    name: "كريتابل"
  },
  data: {
    hint: "بيانات قابلة للتحديد",
    name: "البيانات"
  },
  decimalScale: {
    hint: "إذا تم تعريفه ، فإنه يحد من عدد الأرقام بعد الفاصلة العشرية",
    name: "مقياس عشري"
  },
  decimalSeparator: {
    hint: "يحدد الحرف العشري",
    name: "فاصل عشري"
  },
  disableMultipart: {
    hint: "إذا 'صحيح' ، تعطيل باستخدام نموذج متعدد الأجزاء لتحميل الملف وبدلا من ذلك تيار الملف. قد تتوقع بعض واجهات برمجة التطبيقات (مثل أمازون إس 3) تدفق الملف بدلا من إرساله عبر نموذج",
    name: "تعطيل متعدد الأجزاء"
  },
  disabled: {
    hint: "ما إذا كان المكون معطلا أم لا",
    name: "معاق"
  },
  draggable: {
    hint: "تمكين السحب والإفلات للتحميل",
    name: "قابل للسحب"
  },
  errorConfig: {
    show: "عرض"
  },
  eventKey: {
    hint: "مفتاح الحدث المقابل لهذا العنصر",
    name: "مفتاح الحدث"
  },
  fixedDecimalScale: {
    hint: "إذا تم ضبطه على ترو ، فإنه يضيف 0 ثانية زائدة بعد الفاصل العشري لمطابقة مقياس عشري معين",
    name: "مقياس عشري ثابت"
  },
  flexDirection: {
    hint: "الاتجاه المرن للأطفال الحاويات",
    name: "الاتجاه"
  },
  format: {
    hint: "تنسيق النمط باستخدام الحرف # (أو حرف نمط). # هو حرف العنصر النائب للأرقام. مثال:'### ###'",
    name: "الشكل"
  },
  groupBy: {
    hint: "تعيين معايير التجميع 'مفتاح ' في'البيانات'",
    name: "المجموعة حسب"
  },
  htmlAttributes: {
    hint: "سمات هتمل في رد فعل (كاملكيس) شكل",
    name: "سمات هتمل"
  },
  justifyContent: {
    name: "المحاذاة"
  },
  label: {
    hint: "وضع التسمية",
    name: "التسمية"
  },
  mask: {
    hint: "تستخدم كحرف قناع للأماكن الرقمية ، حتى يتم توفير أي حرف رقمي لهذا الموضع",
    name: "قناع"
  },
  method: {
    hint: "طريقة هتب لطلب التحميل",
    name: "الطريقة"
  },
  name: {
    hint: "قم بتحميل اسم المعلمة للملف المقابل",
    name: "الاسم"
  },
  objectFit: {
    name: "صالح"
  },
  objectPosition: {
    name: "المنصب"
  },
  passwordMask: {
    hint: "استخدم قناع كلمة المرور",
    name: "قناع كلمة المرور"
  },
  patternChar: {
    hint: "يساعد هذا في تحديد حرف نمط التنسيق",
    name: "نمط شار"
  },
  placeholder: {
    hint: "وضع العناصر النائبة",
    name: "نائب"
  },
  placement: {
    hint: "وضع المكون",
    name: "التنسيب"
  },
  prefix: {
    hint: "يضيف حرف البادئة قبل قيمة الإدخال",
    name: "بادئة"
  },
  size: {
    hint: "يمكن أن يكون للمكون أحجام مختلفة",
    name: "الحجم"
  },
  suffix: {
    hint: "يضيف اللاحقة بعد قيمة الإدخال",
    name: "لاحقة "
  },
  textAlign: {
    name: "المحاذاة"
  },
  thousandsGroupStyle: {
    hint: "ألف نمط (ألف): 123 ، 456 ، 789 ، النمط الهندي (لكح): 12 ، 34 ، 56 ، 789 ، النمط الصيني (وان): 1 ، 2345 ، 6789",
    name: "نمط مجموعة الآلاف"
  },
  tooltipProps: {
    hint: "استخدم تلميح الأدوات لهذا العنصر",
    tooltip: "تلميح الأدوات"
  },
  withCredentials: {
    hint: "ما إذا كنت تريد حمل ملفات تعريف الارتباط عند تحميل الطلبات",
    name: "مع وثائق التفويض"
  }
}, o = {
  editCodeAction: "تحرير إجراء التعليمات البرمجية",
  editProperty: "تحرير الممتلكات",
  function: "قيمة قابلة للحساب",
  localization: "التعريب بطلاقة",
  simpleValue: "قيمة بسيطة",
  simpleValueHint: "تحرير الخاصية في اللوحة اليمنى",
  use: "استخدام"
}, n = {
  actionNameExists: "العمل مع هذا الاسم موجود بالفعل",
  nameIsRequired: "اسم الإجراء مطلوب",
  parameterNameExists: "المعلمة مع هذا الاسم موجود بالفعل",
  parameterNameIsNotValid: "اسم المعلمة غير صالح",
  parameterNameIsRequired: "مطلوب اسم المعلمة"
}, a = {
  codeActionHeader: "محرر إجراءات التعليمات البرمجية",
  codePlaceholder: "// أدخل الرمز الخاص بك هنا",
  compilationResult: "نتيجة التجميع:",
  compile: "ترجمة",
  ok: "حسنا"
}, i = {
  apply: "تطبيق",
  cancel: "إلغاء",
  clone: "استنساخ",
  close: "إغلاق",
  edit: "تحرير",
  name: "الاسم",
  remove: "إزالة",
  save: "حفظ",
  test: "اختبار"
}, r = {
  add: "إضافة عنصر جديد",
  after: "بعد",
  before: "قبل",
  inside: "داخل"
}, s = {
  categories: {
    fields: "الحقول",
    static: "ثابت",
    structure: "الهيكل",
    templates: "قوالب"
  }
}, l = {
  clickToAdd: "انقر لإضافة عنصر تحكم"
}, m = "تحرير جسون", c = {
  data: "البيانات",
  errors: "أخطاء"
}, d = {
  addNewForm: "إضافة نموذج جديد",
  noFormsInFormStorage: "احفظ النموذج بحيث يظهر في قائمة النماذج."
}, p = {
  clear: "واضح",
  currentFormName: "اسم النموذج الحالي",
  download: "تحميل",
  enterFormName: "الرجاء إدخال اسم النموذج",
  exportForms: "نماذج التصدير",
  exportFormsError: "فشل في تصدير النماذج! راجع السجلات في وحدة تحكم المتصفح",
  exportFormsSuccess: "النماذج المصدرة",
  formNamePlaceholder: "بلدي شكل جميل",
  formSaveError: "فشل في حفظ النموذج! راجع السجلات في وحدة تحكم المتصفح",
  formSaved: "يتم حفظ النموذج",
  importForms: "نماذج الاستيراد",
  importFormsError: "فشل في استيراد النماذج! راجع السجلات في وحدة تحكم المتصفح",
  importFormsSuccess: "النماذج المستوردة",
  menu: "القائمة",
  print: "طباعة",
  save: "حفظ",
  saveAs: "حفظ باسم...",
  settings: "الإعدادات",
  translation: "ترجمة",
  undo: "تراجع",
  upload: "تحميل",
  validateForm: "التحقق من صحة النموذج"
}, h = {
  formSettings: {
    actions: "الإجراءات",
    error: "إعدادات الخطأ",
    language: "اعدادات اللغة",
    tooltip: "تلميح الأدوات"
  },
  sectionName: {
    components: "المكونات",
    forms: "النماذج",
    settings: "الإعدادات",
    tree: "شجرة"
  }
}, u = {
  messageIsNull: "رسالة التعريب فارغة",
  messageNotFound: "لم يتم العثور على رسالة التعريب"
}, b = {
  cancel: "إلغاء",
  ok: "حسنا"
}, g = {
  applyKey: "تطبيق التغييرات الرئيسية",
  codeButton: {
    editCalculable: "تحرير حساب",
    editLocalizable: "تحرير الترجمة بطلاقة",
    hintCalculable: "اجعل هذه الخاصية قابلة للحساب",
    hintCalculableAndLocalizable: "اجعل هذه الخاصية قابلة للحساب أو التوطين بطلاقة",
    hintLocalizable: "توطين هذه الخاصية بطلاقة",
    neitherCalculableNorLocalizable: "لا يمكن حسابه ولا توطينه"
  },
  keyMustBeUnique: "يجب أن يكون المفتاح فريدا",
  keyMustNotBeEmpty: "يجب ألا يكون المفتاح فارغا",
  sectionName: {
    actions: "الإجراءات",
    expression: "التعبير",
    linkedProperty: "خاصية مرتبطة",
    main: "الرئيسية",
    rules: "القواعد",
    style: "نمط",
    withTarget: "مع الهدف",
    withoutTarget: "بدون هدف"
  },
  selectElementForEdit: "حدد العنصر في النموذج لتحرير الخصائص",
  setInputHint: "اضغط على إدخال لإضافة قيمة",
  subSection: {
    additionalProperties: "خصائص إضافية"
  }
}, f = {
  modes: {
    builder: "معاينة",
    desktop: "سطح المكتب",
    mobile: "موبايل",
    tablet: "تابلت",
    viewer: "تحرير"
  },
  toggleTheme: "تبديل الموضوع"
}, y = {
  search: "بحث..."
}, F = {
  any: "أي",
  component: "العنصر",
  componentHint: "الأنماط التي تنطبق على المكون",
  desktop: "سطح المكتب",
  forDevice: "للجهاز:",
  mobile: "موبايل",
  other: "أخرى",
  tablet: "تابلت",
  wrapper: "المجمع",
  wrapperHint: "الأنماط التي تنطبق على غلاف المكون"
}, E = {
  autorun: "التشغيل التلقائي",
  compilationOk: "نتيجة التجميع: حسنا",
  hasNotReturnedValue: "لم يتم إرجاع القيمة",
  run: "تشغيل",
  testFormData: "بيانات نموذج الاختبار"
}, N = {
  cloneComponent: "مكون استنساخ",
  elements: "الأركان",
  notFound: "غير موجود",
  removeComponent: "إزالة المكون",
  reset: "إعادة تعيين"
}, w = {
  collapse: "طي الكل",
  expand: "توسيع الكل"
}, x = {
  addRule: "إضافة قاعدة",
  chooseValidation: "اختر النوع الخاص بك",
  editCustomValidationCode: "تحرير رمز التحقق المخصص للمكون",
  formErrors: "أخطاء النموذج",
  rule: {
    code: "شفرة",
    custom: "مخصص",
    datetime: "التاريخ والوقت",
    email: "البريد الإلكتروني",
    endsWith: "ينتهي مع",
    falsy: "فالسي",
    finite: "محدود",
    includes: "يشمل",
    integer: "عدد صحيح",
    ip: "الملكية الفكرية",
    length: "الطول",
    lessThan: "أقل من",
    max: "ماكس",
    min: "دقيقة",
    moreThan: "أكثر من",
    multipleOf: "مضاعف من",
    nonEmpty: "غير فارغ",
    regex: "التعبير العادي",
    required: "مطلوب",
    startsWith: "يبدأ ب",
    truthy: "تروثي",
    url: "رابط",
    uuid: "الجامعة"
  },
  showFormErrors: "إظهار أخطاء النموذج"
}, v = {
  actions: e,
  annotation: t,
  bottomPanel: o,
  codeActionEditor: n,
  codeEditor: a,
  common: i,
  componentToolbar: r,
  componentsList: s,
  componentsModal: l,
  editJson: m,
  errorsPanel: c,
  formsList: d,
  leftMenu: p,
  leftPanel: h,
  localization: u,
  promptDialog: b,
  propertiesEditor: g,
  rightMenu: f,
  searchForm: y,
  style: F,
  testingEditor: E,
  toolbar: N,
  tree: w,
  validation: x
};
export {
  e as actions,
  t as annotation,
  o as bottomPanel,
  n as codeActionEditor,
  a as codeEditor,
  i as common,
  r as componentToolbar,
  s as componentsList,
  l as componentsModal,
  v as default,
  m as editJson,
  c as errorsPanel,
  d as formsList,
  p as leftMenu,
  h as leftPanel,
  u as localization,
  b as promptDialog,
  g as propertiesEditor,
  f as rightMenu,
  y as searchForm,
  F as style,
  E as testingEditor,
  N as toolbar,
  w as tree,
  x as validation
};
//# sourceMappingURL=ar-EG-5607d597.js.map
