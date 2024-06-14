const e = {
  add: "添加",
  addAction: "添加操作",
  addCodeAction: "添加代码操作",
  arguments: "争论",
  code: "代码",
  common: "普通",
  custom: "海关规定",
  delete: "删除",
  duplicate: "复制",
  edit: "编辑",
  name: "姓名",
  parameters: "参数",
  type: "类型"
}, t = {
  accept: {
    hint: "可以接受的文件类型。 请参阅标准HTML属性：接受",
    name: "接受"
  },
  action: {
    hint: "上传URL",
    name: "开始！"
  },
  allowEmptyFormatting: {
    hint: '默认情况下，当值为空（null、未定义或"）时，PatternFormat组件不应用格式',
    name: "允许空格式 "
  },
  allowLeadingZeros: {
    hint: "这允许启用或禁用输入字段中的前导零。 默认情况下，在输入模糊时，前导零将被删除",
    name: "允许前导零"
  },
  allowNegative: {
    hint: "如果设置为false，则不允许使用负数",
    name: "允许否定"
  },
  allowedDecimalSeparators: {
    hint: "按下时产生小数点分隔符的字符。 缺失时，小数点分隔符和'。'被使用",
    name: "允许的小数分隔符"
  },
  autoUpload: {
    hint: "选择文件后自动上传",
    name: "自动上传"
  },
  block: {
    hint: "阻塞整行",
    name: "座"
  },
  bodyFill: {
    hint: "填充容器的内容区域",
    name: "身体填充"
  },
  cleanable: {
    hint: "选项是否可以清空",
    name: "可清洁"
  },
  code: {
    hint: "编辑代码",
    name: "密码"
  },
  creatable: {
    hint: "设置可以创建新选项",
    name: "可创造的"
  },
  data: {
    hint: "可选择的数据",
    name: "数据资料"
  },
  decimalScale: {
    hint: "如果定义，它会限制小数点后的位数",
    name: "十进制刻度"
  },
  decimalSeparator: {
    hint: "定义十进制字符",
    name: "小数分隔符"
  },
  disableMultipart: {
    hint: "如果'true'，则禁用使用多部分表单进行文件上传，而是流式传输文件。 某些Api（例如Amazon S3）可能期望将文件流式传输，而不是通过表单发送",
    name: "禁用多部分"
  },
  disabled: {
    hint: "组件是否被禁用",
    name: "残疾人士"
  },
  draggable: {
    hint: "启用拖放以上载",
    name: "可拖动"
  },
  errorConfig: {
    show: "展览"
  },
  eventKey: {
    hint: "此元素对应的事件键",
    name: "活动键"
  },
  fixedDecimalScale: {
    hint: "如果设置为true，它会在decimalSeparator之后添加尾随0以匹配给定的decimalScale",
    name: "固定小数位数"
  },
  flexDirection: {
    hint: "容器子项的弯曲方向",
    name: "方向感"
  },
  format: {
    hint: "使用#（或模式char）字符格式化模式。 #是数字的占位符字符。 例如：'######'",
    name: "格式"
  },
  groupBy: {
    hint: '在"数据"中设置分组条件"键"',
    name: "组别"
  },
  htmlAttributes: {
    hint: "React(camelCase)格式的HTML属性",
    name: "HTML属性"
  },
  justifyContent: {
    name: "对齐方式"
  },
  label: {
    hint: "设置标签",
    name: "标签"
  },
  mask: {
    hint: "用作数字位置的掩码字符，直到为该位置提供任何数字字符为止",
    name: "面具"
  },
  method: {
    hint: "上传请求的HTTP方法",
    name: "方法"
  },
  name: {
    hint: "上传对应文件的参数名",
    name: "姓名"
  },
  objectFit: {
    name: "适合"
  },
  objectPosition: {
    name: "职位"
  },
  passwordMask: {
    hint: "使用密码掩码",
    name: "密码掩码"
  },
  patternChar: {
    hint: "这有助于定义格式模式字符",
    name: "模式char"
  },
  placeholder: {
    hint: "设置占位符",
    name: "占位符"
  },
  placement: {
    hint: "组件的放置",
    name: "就业情况"
  },
  prefix: {
    hint: "在输入值之前添加前缀字符",
    name: "前缀"
  },
  size: {
    hint: "组件可以有不同的尺寸",
    name: "大小"
  },
  suffix: {
    hint: "在输入值后添加后缀",
    name: "后缀 "
  },
  textAlign: {
    name: "对齐方式"
  },
  thousandsGroupStyle: {
    hint: "千式(千):123,456,789,印度式(万):12,34,56,789,中国式(万):1,2345,6789",
    name: "千人团体风格"
  },
  tooltipProps: {
    hint: "为此元素使用工具提示",
    tooltip: "工具提示"
  },
  withCredentials: {
    hint: "上传请求时是否携带cookie",
    name: "有证件"
  }
}, o = {
  editCodeAction: "编辑代码操作",
  editProperty: "编辑属性",
  function: "可计算价值",
  localization: "流利的本地化",
  simpleValue: "简单值",
  simpleValueHint: "在右侧面板中编辑属性",
  use: "使用方法"
}, n = {
  actionNameExists: "具有此名称的操作已存在",
  nameIsRequired: "需要操作名称",
  parameterNameExists: "具有此名称的参数已存在",
  parameterNameIsNotValid: "参数名称无效",
  parameterNameIsRequired: "参数名称为必填项"
}, a = {
  codeActionHeader: "代码动作编辑器",
  codePlaceholder: "//在这里输入你的代码",
  compilationResult: "编译结果:",
  compile: "编译",
  ok: "好的"
}, i = {
  apply: "申请",
  cancel: "取消",
  clone: "克隆",
  close: "接近/接近",
  edit: "编辑",
  name: "姓名",
  remove: "移走",
  save: "储蓄",
  test: "测试"
}, r = {
  add: "添加新元素",
  after: "之后",
  before: "以前",
  inside: "里面"
}, l = {
  categories: {
    fields: "字段",
    static: "静态",
    structure: "结构",
    templates: "模板"
  }
}, s = {
  clickToAdd: "点击添加控件"
}, m = "编辑JSON", c = {
  data: "数据资料",
  errors: "错误"
}, d = {
  addNewForm: "添加新表单",
  noFormsInFormStorage: "保存表单，使其显示在表单列表中。"
}, p = {
  clear: "清楚",
  currentFormName: "当前表单的名称",
  download: "下载",
  enterFormName: "请输入表格名称",
  exportForms: "出口表格",
  exportFormsError: "导出表单失败！ 查看浏览器控制台中的日志",
  exportFormsSuccess: "导出的表单",
  formNamePlaceholder: "我美丽的形式",
  formSaveError: "未能保存表格！ 查看浏览器控制台中的日志",
  formSaved: "表格已保存",
  importForms: "进口表格",
  importFormsError: "导入表单失败! 查看浏览器控制台中的日志",
  importFormsSuccess: "输入的表格",
  menu: "菜单",
  print: "印刷业",
  save: "储蓄",
  saveAs: "省省吧。..",
  settings: "设置",
  translation: "翻译",
  undo: "撤消",
  upload: "上载",
  validateForm: "验证表格"
}, h = {
  formSettings: {
    actions: "行动",
    error: "错误设置",
    language: "语言设定",
    tooltip: "工具提示"
  },
  sectionName: {
    components: "组件",
    forms: "表格",
    settings: "设置",
    tree: "树"
  }
}, u = {
  messageIsNull: "本地化消息为null",
  messageNotFound: "找不到本地化消息"
}, b = {
  cancel: "取消",
  ok: "好的"
}, g = {
  applyKey: "应用关键更改",
  codeButton: {
    editCalculable: "编辑可计算",
    editLocalizable: "编辑流利的本地化",
    hintCalculable: "使此属性可计算",
    hintCalculableAndLocalizable: "使用Fluent使此属性可计算或本地化",
    hintLocalizable: "使用Fluent本地化此属性",
    neitherCalculableNorLocalizable: "既不可计算也不可本地化"
  },
  keyMustBeUnique: "密钥必须是唯一的",
  keyMustNotBeEmpty: "密钥不能为空",
  sectionName: {
    actions: "行动",
    expression: "表达方式",
    linkedProperty: "链接属性",
    main: "主要",
    rules: "规则",
    style: "风格",
    withTarget: "带目标",
    withoutTarget: "没有目标"
  },
  selectElementForEdit: "为编辑属性选择表单上的元素",
  setInputHint: "按Enter键添加值",
  subSection: {
    additionalProperties: "其他属性"
  }
}, f = {
  modes: {
    builder: "预览",
    desktop: "桌面版",
    mobile: "流动电话",
    tablet: "平板电脑",
    viewer: "编辑"
  },
  toggleTheme: "切换主题"
}, F = {
  search: "搜索。.."
}, y = {
  any: "任何",
  component: "组件",
  componentHint: "适用于组件的样式",
  desktop: "桌面版",
  forDevice: "用于设备:",
  mobile: "流动电话",
  other: "其他",
  tablet: "平板电脑",
  wrapper: "包装器,包装器",
  wrapperHint: "适用于组件包装器的样式"
}, E = {
  autorun: "自动运行",
  compilationOk: "编译结果：OK",
  hasNotReturnedValue: "没有返回值",
  run: "跑",
  testFormData: "测试表格数据"
}, N = {
  cloneComponent: "克隆组件",
  elements: "元素",
  notFound: "未找到",
  removeComponent: "移除组件",
  reset: "重置"
}, C = {
  collapse: "全部崩溃",
  expand: "全部展开"
}, S = {
  addRule: "添加规则",
  chooseValidation: "选择你的类型",
  editCustomValidationCode: "编辑组件的自定义验证代码",
  formErrors: "表单错误",
  rule: {
    code: "代码",
    custom: "海关规定",
    datetime: "日期时间",
    email: "电邮",
    endsWith: "以",
    falsy: "法尔西",
    finite: "有限的",
    includes: "包括",
    integer: "整数",
    ip: "知识产权",
    length: "长度",
    lessThan: "小于",
    max: "麦克斯",
    min: "敏",
    moreThan: "超过",
    multipleOf: "的倍数",
    nonEmpty: "非空",
    regex: "正则表达式",
    required: "需要",
    startsWith: "开始于",
    truthy: "真实的，真实的",
    url: "网址",
    uuid: "Uuid"
  },
  showFormErrors: "显示表单错误"
}, w = {
  actions: e,
  annotation: t,
  bottomPanel: o,
  codeActionEditor: n,
  codeEditor: a,
  common: i,
  componentToolbar: r,
  componentsList: l,
  componentsModal: s,
  editJson: m,
  errorsPanel: c,
  formsList: d,
  leftMenu: p,
  leftPanel: h,
  localization: u,
  promptDialog: b,
  propertiesEditor: g,
  rightMenu: f,
  searchForm: F,
  style: y,
  testingEditor: E,
  toolbar: N,
  tree: C,
  validation: S
};
export {
  e as actions,
  t as annotation,
  o as bottomPanel,
  n as codeActionEditor,
  a as codeEditor,
  i as common,
  r as componentToolbar,
  l as componentsList,
  s as componentsModal,
  w as default,
  m as editJson,
  c as errorsPanel,
  d as formsList,
  p as leftMenu,
  h as leftPanel,
  u as localization,
  b as promptDialog,
  g as propertiesEditor,
  f as rightMenu,
  F as searchForm,
  y as style,
  E as testingEditor,
  N as toolbar,
  C as tree,
  S as validation
};
//# sourceMappingURL=zh-CN-0bf5115a.js.map
