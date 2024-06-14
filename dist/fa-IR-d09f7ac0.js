const e = {
  add: "افزودن",
  addAction: "افزودن عملیات",
  addCodeAction: "افزودن عملیات کد",
  arguments: "آرگومان‌ها",
  code: "کد",
  common: "متداول",
  custom: "سفارشی",
  delete: "حذف",
  duplicate: "تکرار",
  edit: "ویرایش",
  name: "نام",
  parameters: "پارامترها",
  type: "نوع"
}, t = {
  accept: {
    hint: "انواع فایل‌های قابل قبول. برای اطلاعات بیشتر به استاندارد HTML مراجعه کنید: accept",
    name: "قبول"
  },
  action: {
    hint: "دانلود پیوند",
    name: "عمل"
  },
  allowEmptyFormatting: {
    hint: 'به طور پیش فرض، زمانی که مقدار خالی است (خالی، نامشخص یا ")، قالب‌بندی‌دهنده استایل فرمت بر روی مقدار اعمال نمی‌شود.',
    name: "اجازه تنظیم فرمت خالی"
  },
  allowLeadingZeros: {
    hint: "این اجازه می‌دهد صفرهای ابتدایی در فیلد ورودی فعال یا غیرفعال شوند. به طور پیش‌فرض، هنگامی که یکی از ورودی‌ها می‌درخشد، صفرهای ابتدایی حذف می‌شوند",
    name: "اجازه صفرهای ابتدایی"
  },
  allowNegative: {
    hint: "اگر به صورت نادرست تنظیم شود، اعداد منفی مجاز نمی‌شوند",
    name: "اجازه منفی"
  },
  allowedDecimalSeparators: {
    hint: "کاراکترهایی که با فشردن آن‌ها جداکننده اعشار در نظر گرفته می‌شوند. در صورت عدم تعیین، جداکننده اعشار و '.' استفاده می‌شود",
    name: "جداکننده‌های اعشاری مجاز"
  },
  autoUpload: {
    hint: "بارگذاری فایل‌ها به طور خودکار پس از انتخاب آن‌ها",
    name: "بارگذاری خودکار"
  },
  block: {
    hint: "مسدود کردن یک سطر کامل",
    name: "مسدود"
  },
  bodyFill: {
    hint: "پر کردن محتوای محفظه",
    name: "پر کردن بدنه"
  },
  cleanable: {
    hint: "آیا امکان خالی کردن گزینه وجود دارد یا نه",
    name: "قابل پاک‌سازی"
  },
  code: {
    hint: "ویرایش کد",
    name: "کد"
  },
  creatable: {
    hint: "تنظیمات قادر به ایجاد گزینه‌های جدید هستند",
    name: "قابل ایجاد"
  },
  data: {
    hint: "داده‌های قابل تعیین",
    name: "داده"
  },
  decimalScale: {
    hint: "اگر تنظیم شود، تعداد اعداد پس از جداکننده اعشار را محدود می‌کند",
    name: "مقیاس اعشاری"
  },
  decimalSeparator: {
    hint: "مشخص می‌کند کاراکتر جداکننده اعشاری",
    name: "جداکننده اعشاری"
  },
  disableMultipart: {
    hint: "اگر درست باشد، غیرفعال کردن استفاده از فرمت چند قسمتی برای بارگذاری فایل و به جای آن جریان فایل را استفاده می‌کند. برخی از رابط‌های برنامه‌نویسی (مانند ای‌اس ۳ آمازون) انتظار می‌رود فایل را به جای ارسال از طریق فرمت، جریان دهند",
    name: "غیرفعال کردن فرمت چند قسمتی"
  },
  disabled: {
    hint: "آیا اجزا غیرفعال هستند یا نه",
    name: "غیرفعال"
  },
  draggable: {
    hint: "فعال کردن قابلیت کشیدن و رها کردن برای بارگذاری",
    name: "قابل کشیده شدن"
  },
  errorConfig: {
    show: "نمایش"
  },
  eventKey: {
    hint: "کلید رویداد متناظر با این عنصر",
    name: "کلید رویداد"
  },
  fixedDecimalScale: {
    hint: "اگر تنظیم شود، یک صفر اضافی بعد از جداکننده اعشاری اضافه می‌شود تا مقیاس اعشاری مشخصی را تطابق دهد",
    name: "مقیاس اعشاری ثابت"
  },
  flexDirection: {
    hint: "جهت انعطاف‌پذیری محفظه‌ها",
    name: "جهت"
  },
  format: {
    hint: "قالب‌بندی الگو با استفاده از کاراکتر # (یا کاراکتر الگو). # نماینده کاراکتر جانشین برای اعداد است. مثال: '### ###'",
    name: "قالب‌بندی"
  },
  groupBy: {
    hint: "تنظیم معیارهای گروه‌بندی براساس 'کلید' در 'داده'",
    name: "گروه‌بندی براساس"
  },
  htmlAttributes: {
    hint: "ویژگی‌های HTML در فرمت واکنشگرا (کاملکیس)",
    name: "ویژگی‌های HTML"
  },
  justifyContent: {
    name: "تراز"
  },
  label: {
    hint: "تنظیم برچسب",
    name: "برچسب"
  },
  mask: {
    hint: "از یک کاراکتر قناع برای مکان‌های عددی استفاده می‌شود تا هر کاراکتر عددی معتبری برای این مکان فراهم شود",
    name: "قناع"
  },
  method: {
    hint: "روش درخواست برای بارگیری",
    name: "روش"
  },
  name: {
    hint: "نام پارامتر برای فایل مرتبط را بارگیری کنید",
    name: "نام"
  },
  objectFit: {
    name: "تناسب شیء"
  },
  objectPosition: {
    name: "موقعیت شیء"
  },
  passwordMask: {
    hint: "از قناع برای ماسک کردن رمز عبور استفاده کنید",
    name: "قناع رمز عبور"
  },
  patternChar: {
    hint: "این به تعیین کاراکتر الگو برای قالب‌بندی کمک می‌کند",
    name: "کاراکتر الگو"
  },
  placeholder: {
    hint: "قراردادن مقادیر پیش‌فرض",
    name: "نشانگر"
  },
  placement: {
    hint: "موقعیت قرارگیری اجزا",
    name: "قرارگیری"
  },
  prefix: {
    hint: "افزودن پیشوند قبل از مقدار ورودی",
    name: "پیشوند"
  },
  size: {
    hint: "می‌تواند اندازه‌های مختلفی برای اجزا داشته باشد",
    name: "اندازه"
  },
  suffix: {
    hint: "افزودن پسوند بعد از مقدار ورودی",
    name: "پسوند"
  },
  textAlign: {
    name: "تراز متن"
  },
  thousandsGroupStyle: {
    hint: "نمط گروه‌بندی هزار (هزار): 123,456,789، نمط هندی (لکھ): 12,34,56,789، نمط چینی (وان): 1,2345,6789",
    name: "نمط گروه‌بندی هزار"
  },
  tooltipProps: {
    hint: "از ابزارک راهنما برای این عنصر استفاده کنید",
    tooltip: "ابزارک راهنما"
  },
  withCredentials: {
    hint: "آیا می‌خواهید درخواست‌ها همراه با مدارک اعتباری بارگیری شوند یا نه",
    name: "با مدارک اعتباری"
  }
}, o = {
  calculable: "مقدار قابل محاسبه",
  editCodeAction: "ویرایش عملکرد کد",
  editProperty: "ویرایش ویژگی",
  function: "مقدار قابل محاسبه",
  localization: "محلی‌سازی دقیق",
  simpleValue: "مقدار ساده",
  simpleValueHint: "ویرایش ویژگی در صفحه راست",
  use: "استفاده"
}, n = {
  actionNameExists: "عملیات با این نام از قبل وجود دارد",
  nameIsRequired: "نام عملیات مورد نیاز است",
  parameterNameExists: "پارامتر با این نام از قبل وجود دارد",
  parameterNameIsNotValid: "نام پارامتر معتبر نیست",
  parameterNameIsRequired: "نام پارامتر مورد نیاز است",
  saveAsNew: "ذخیره به عنوان جدید"
}, a = {
  close: "بستن",
  codeActionHeader: "ویرایشگر عملیات کد",
  codePlaceholder: "// کد خود را اینجا وارد کنید",
  compilationResult: "نتیجه کامپایل:",
  compile: "کامپایل",
  ok: "تایید",
  save: "ذخیره"
}, i = {
  apply: "اعمال",
  cancel: "لغو",
  clone: "کپی",
  close: "بستن",
  edit: "ویرایش",
  name: "نام",
  remove: "حذف",
  reset: "بازنشانی",
  save: "ذخیره",
  test: "تست"
}, r = {
  add: "افزودن عنصر جدید",
  after: "بعد",
  before: "قبل",
  inside: "درون"
}, s = {
  categories: {
    fields: "فیلدها",
    static: "ثابت",
    structure: "ساختار",
    templates: "قالب‌ها"
  }
}, l = {
  clickToAdd: "برای افزودن کنترل، کلیک کنید"
}, m = "ویرایش JSON", c = {
  data: "داده‌ها",
  errors: "خطاها"
}, d = {
  addNewForm: "افزودن فرم جدید",
  noFormsInFormStorage: "فرم را ذخیره کنید تا در لیست فرم‌ها نمایش داده شود."
}, p = {
  clear: "پاک کردن",
  currentFormName: "نام فرم فعلی",
  download: "دانلود",
  enterFormName: "لطفاً نام فرم را وارد کنید",
  exportForms: "صادرات فرم‌ها",
  exportFormsError: "خطا در صادرات فرم‌ها! لطفاً لاگ‌های کنسول مرورگر را بررسی نمایید.",
  exportFormsSuccess: "فرم‌ها با موفقیت صادر شدند",
  formNamePlaceholder: "فرم زیبای من",
  formSaveError: "خطا در ذخیره فرم! لطفاً لاگ‌های کنسول مرورگر را بررسی نمایید.",
  formSaved: "فرم ذخیره شده است",
  importForms: "واردات فرم‌ها",
  importFormsError: "خطا در واردات فرم‌ها! لطفاً لاگ‌های کنسول مرورگر را بررسی نمایید.",
  importFormsSuccess: "فرم‌ها با موفقیت وارد شدند",
  menu: "منو",
  print: "چاپ",
  save: "ذخیره",
  saveAs: "ذخیره با نام...",
  settings: "تنظیمات",
  translation: "ترجمه",
  undo: "بازگشت",
  upload: "بارگذاری",
  validateForm: "اعتبارسنجی فرم"
}, h = {
  formSettings: {
    actions: "اقدامات",
    error: "تنظیمات خطا",
    language: "تنظیمات زبان",
    tooltip: "راهنمای ابزار"
  },
  sectionName: {
    components: "اجزا",
    forms: "فرم‌ها",
    settings: "تنظیمات",
    tree: "درخت"
  }
}, u = {
  messageIsNull: "پیام ترجمه خالی است",
  messageNotFound: "پیام ترجمه یافت نشد"
}, b = {
  close: "بستن",
  save: "ذخیره",
  test: "تست",
  useFluentLocalization: "استفاده از ترجمه مسلط"
}, g = {
  cancel: "لغو",
  ok: "تایید"
}, f = {
  applyKey: "اعمال تغییرات اصلی",
  codeButton: {
    editCalculable: "ویرایش قابل محاسبه",
    editLocalizable: "ویرایش ترجمه مسلط",
    hintCalculable: "این خصوصیت قابل محاسبه است",
    hintCalculableAndLocalizable: "این خصوصیت قابل محاسبه یا ترجمه مسلط است",
    hintLocalizable: "این خصوصیت ترجمه مسلط است",
    neitherCalculableNorLocalizable: "قابل محاسبه یا ترجمه مسلط نیست"
  },
  keyMustBeUnique: "کلید باید یکتا باشد",
  keyMustNotBeEmpty: "کلید نمی‌تواند خالی باشد",
  sectionName: {
    actions: "اقدامات",
    expression: "عبارت",
    linkedProperty: "خصوصیت مرتبط",
    main: "اصلی",
    rules: "قوانین",
    style: "سبک",
    withTarget: "با هدف",
    withoutTarget: "بدون هدف"
  },
  selectElementForEdit: "عنصر مورد نظر را در فرم برای ویرایش خصوصیت‌ها انتخاب کنید",
  setInputHint: "برای اضافه کردن مقدار، روی ورودی کلیک کنید",
  subSection: {
    additionalProperties: "خصوصیت‌های اضافی"
  }
}, F = {
  modes: {
    builder: "پیش‌نمایش",
    desktop: "دسکتاپ",
    mobile: "موبایل",
    tablet: "تبلت",
    viewer: "ویرایش"
  },
  toggleTheme: "تغییر تم"
}, y = {
  search: "جستجو..."
}, E = {
  any: "هر",
  component: "اجزا",
  componentHint: "استایل‌هایی که بر روی اجزا اعمال می‌شود",
  desktop: "رایانه‌شخصی",
  forDevice: "برای دستگاه:",
  mobile: "موبایل",
  other: "دیگر",
  tablet: "تبلت",
  wrapper: "بسته‌بندی",
  wrapperHint: "استایل‌هایی که بر روی بسته‌بندی اجزا اعمال می‌شود"
}, v = {
  autorun: "اجرای خودکار",
  compilationOk: "نتیجه کامپایل: موفق",
  hasNotReturnedValue: "مقدار برگشتی وجود ندارد",
  run: "اجرا",
  testFormData: "داده‌های آزمایش فرم"
}, N = {
  cloneComponent: "کپی‌برداری اجزا",
  elements: "اجزا",
  notFound: "پیدا نشد",
  removeComponent: "حذف اجزا",
  reset: "بازنشانی"
}, w = {
  collapse: "جمع شدن همه",
  expand: "باز شدن همه"
}, x = {
  addRule: "اضافه کردن قاعده",
  chooseValidation: "انتخاب نوع خود",
  editCode: "ویرایش کد قاعده",
  editCustomValidationCode: "ویرایش کد اعتبارسنجی سفارشی اجزا",
  formErrors: "خطاهای فرم",
  removeRule: "حذف قاعده",
  rule: {
    code: "کد",
    custom: "سفارشی",
    datetime: "تاریخ و زمان",
    email: "ایمیل",
    endsWith: "با پایان می‌یابد",
    falsy: "غلط",
    finite: "محدود",
    includes: "شامل می‌شود",
    integer: "عدد صحیح",
    ip: "آی‌پ",
    length: "طول",
    lessThan: "کمتر از",
    max: "حداکثر",
    min: "حداقل",
    moreThan: "بیشتر از",
    multipleOf: "ضرب در",
    nonEmpty: "غیر خالی",
    regex: "عبارت باقاعده",
    required: "اجباری",
    startsWith: "شروع با",
    truthy: "درست",
    url: "آدرس وب",
    uuid: "شناسه یکتا"
  },
  showFormErrors: "نمایش خطاهای فرم",
  validationRules: "قوانین اعتبارسنجی"
}, C = {
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
  localizationEditor: b,
  promptDialog: g,
  propertiesEditor: f,
  rightMenu: F,
  searchForm: y,
  style: E,
  testingEditor: v,
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
  C as default,
  m as editJson,
  c as errorsPanel,
  d as formsList,
  p as leftMenu,
  h as leftPanel,
  u as localization,
  b as localizationEditor,
  g as promptDialog,
  f as propertiesEditor,
  F as rightMenu,
  y as searchForm,
  E as style,
  v as testingEditor,
  N as toolbar,
  w as tree,
  x as validation
};
//# sourceMappingURL=fa-IR-d09f7ac0.js.map
