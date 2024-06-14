var si = Object.defineProperty;
var ci = (t, e, n) => e in t ? si(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var k = (t, e, n) => (ci(t, typeof e != "symbol" ? e + "" : e, n), n), ct = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var U = (t, e, n) => (ct(t, e, "read from private field"), n ? n.call(t) : e.get(t)), re = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ve = (t, e, n, o) => (ct(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var _e = (t, e, n) => (ct(t, e, "access private method"), n);
import { jsx as r, jsxs as m, Fragment as $ } from "@emotion/react/jsx-runtime";
import p from "@emotion/styled";
import { createNonNullableContext as sn, Language as ie, BiDi as se, isPromise as li, nameObservable as cn, BuilderView as Uo, ActionDefinition as Go, treeForEach as Mn, ComponentStore as Ee, PersistedFormVersion as di, screenModel as Tn, ActionEventArgsDeclaration as ui, IFormDataDeclaration as mi, namedObserver as C, useStore as D, CalculableResult as Ge, initFormFields as hi, toLabeledValues as ln, generateUniqueName as pi, AsyncFunction as Ko, calculatePropertyValue as gi, getFluentCompatibleId as fi, testFluentLocalization as vi, getFluentData as bi, nameAutorun as be, emotionCache as $n, loadResource as qo, unloadResource as wi, useDisposable as Ci, useForwardRef as xi, ViewerPropsProvider as Jo, StoreProvider as yi, Store as Si, FormViewerPropsStore as ki, useComponentData as I, DefaultWrapper as Li, isContainer as Ei, checkSlotCondition as On, groupBy as Ai, ComponentTree as dn, ComponentState as Pi, TemplateField as Mi, slotModel as Ti, node as $i, toArray as Oi, findTreeElementDepth as ji, useViewerProps as Ri, FormViewer as Fi, getKey as zi, ComponentDataProvider as Oe, KeySymbol as Bi, useTooltipType as un, createAnnotation as Ii, getValidatorPropertyBlockType as Di, boolean as Ni, DataValidator as Vi, isProperty as jn, isValidatorPropertyBlockType as lt, key as _i, className as Hi, oneOf as Xo, useErrorModel as Wi, tooltipType as Zi, SuppressResizeObserverErrors as Ui } from "@react-form-builder/core";
import { BuilderView as ah } from "@react-form-builder/core";
import * as g from "react";
import { useMemo as F, useRef as K, useCallback as b, useEffect as L, forwardRef as ye, useState as S, useReducer as Yo, cloneElement as Qo, createElement as Gi, Suspense as Ki } from "react";
import { Button as z, Checkbox as Je, Message as mn, ButtonGroup as oe, Schema as Ke, Animation as er, Form as ee, InputPicker as je, RadioGroup as qi, Radio as Ji, SelectPicker as Xi, Dropdown as j, CustomProvider as Yi, IconButton as H, Whisper as le, Tooltip as Re, Popover as hn, Table as Fe, Modal as _, Row as Qi, Col as ea, useToaster as ta, InputGroup as ce, Input as te, Nav as tr, TagInput as na, DatePicker as oa, InputNumber as pn, List as nr, Divider as ra, TagPicker as ia, Loader as aa } from "rsuite";
import { cx as W, css as Xe } from "@emotion/css";
import { observer as sa } from "mobx-react";
import { Resizable as ca } from "re-resizable";
import { isEmpty as or, assign as Ye, cloneDeep as la, isUndefined as Qe, toUpper as rr, replace as da, upperFirst as ir, camelCase as ua, startCase as ar } from "lodash-es";
import { makeAutoObservable as gn, observable as ke, action as Ae, reaction as sr, autorun as we, computed as ma } from "mobx";
import { debounceTime as ha, distinctUntilChanged as pa, Subject as ga } from "rxjs";
import Rn, { t as fa } from "i18next";
import va from "i18next-browser-languagedetector";
import ba from "i18next-resources-to-backend";
import { initReactI18next as wa, useTranslation as O } from "react-i18next";
import { arEG as Ca, deDE as xa, enUS as cr, itIT as ya, faIR as Sa, frFR as ka, esES as La, zhCN as Ea } from "rsuite/esm/locales/index.js";
import lr, { loader as Aa } from "@monaco-editor/react";
import { constrainedEditor as Pa } from "constrained-editor-plugin";
import { css as ze, CacheProvider as Ma } from "@emotion/react";
import * as dr from "@fortawesome/free-solid-svg-icons/faPlay.js";
import { Icon as fn, Close as Se, ArrowDownLine as et, ArrowUpLine as ur, Plus as Be, SortUp as Ta, SortDown as $a, ArrowRightLine as Oa, Danger as ja, Export as Ra, Import as Fa, FileDownload as za, FileUpload as Ba, Search as Ia, Copy as Da, Check as Na, ExpandOutline as Va, CollaspedOutline as _a } from "@rsuite/icons";
import { useDragLayer as tt, DndProvider as Ha, useDrag as Wa, useDrop as mr } from "react-dnd";
import { HTML5Backend as Za, getEmptyImage as Ua } from "react-dnd-html5-backend";
import { faGlobe as Ga, faBars as Ka, faMarker as qa } from "@fortawesome/free-solid-svg-icons";
import { createPortal as Ja } from "react-dom";
import * as Xa from "@fortawesome/free-regular-svg-icons/faClone.js";
import * as Ya from "@fortawesome/free-regular-svg-icons/faTrashAlt.js";
import hr from "scroll-into-view-if-needed";
import * as Qa from "@fortawesome/free-solid-svg-icons/faRedo.js";
import * as pt from "@fortawesome/free-solid-svg-icons/faSave.js";
import * as es from "@fortawesome/free-solid-svg-icons/faUndo.js";
import { Column as dt, HeaderCell as ut, Cell as mt } from "rsuite-table";
import * as ts from "@fortawesome/free-solid-svg-icons/faTrash.js";
import { saveAs as ns } from "file-saver";
import pr from "jszip";
import * as gr from "@fortawesome/free-solid-svg-icons/faPaintBrush.js";
import * as fr from "@fortawesome/free-solid-svg-icons/faMoon.js";
import * as vr from "@fortawesome/free-solid-svg-icons/faSun.js";
import * as os from "@fortawesome/free-solid-svg-icons/faDesktop.js";
import * as rs from "@fortawesome/free-solid-svg-icons/faMobile.js";
import * as is from "@fortawesome/free-solid-svg-icons/faTablet.js";
import * as br from "@fortawesome/free-solid-svg-icons/faCode.js";
import * as as from "@fortawesome/free-solid-svg-icons/faList.js";
import * as ss from "@fortawesome/free-solid-svg-icons/faPlusCircle.js";
import * as cs from "@fortawesome/free-solid-svg-icons/faSitemap.js";
import * as ls from "@fortawesome/free-solid-svg-icons/faSlidersH.js";
import * as ds from "@fortawesome/free-solid-svg-icons/faGlobe.js";
import * as us from "@fortawesome/free-solid-svg-icons/faMarker.js";
import wr from "rsuite/esm/utils/useUniqueId.js";
import { RgbaColorPicker as ms } from "react-colorful";
import * as hs from "@fortawesome/free-solid-svg-icons/faCheck.js";
import * as ps from "@fortawesome/free-solid-svg-icons/faBolt.js";
import * as gs from "@fortawesome/free-solid-svg-icons/faCircle.js";
import * as fs from "@fortawesome/free-solid-svg-icons/faSpellCheck.js";
const [
  /**
   * **Internal use only.**
   */
  x,
  /**
   * **Internal use only.**
   */
  vs
] = sn("BuildStoreContext"), Y = (t, e) => {
  e.displayName = t;
  const n = e;
  return (o) => {
    var d;
    const a = (d = x().props.customization) == null ? void 0 : d[t];
    if (!a)
      return /* @__PURE__ */ r(n, { ...o });
    if (a.hidden)
      return null;
    const { style: s, customRenderer: c } = a, l = W(o == null ? void 0 : o.className, a.className, Xe`${s}`, t), u = /* @__PURE__ */ r(n, { ...o, className: l });
    return c ? c(u, e, o) : u;
  };
}, N = (t, e) => Y(t, sa(e));
class bs {
  /**
   * Creates i18n for the form builder.
   * @param defaultLanguage the default language.
   * @param translationResolver the callback function that returns JSON with a translation by the specified language.
   */
  constructor(e, n) {
    Rn.use(ba((o, i, a) => {
      n(o).then((s) => a(null, s)).catch((s) => a(s, null));
    })).use(va).use(wa).init(
      {
        fallbackLng: e.fullCode,
        load: "currentOnly",
        interpolation: {
          escapeValue: !1
        }
      },
      this.onLoadError.bind(this)
    ).catch((o) => console.error(o));
  }
  /**
   * Sets the language for the web page.
   * @param language the language.
   * @returns the {@link Promise} with the result of the language setting.
   */
  async changeWebDocumentLanguage(e) {
    await Rn.changeLanguage(e.fullCode), document.documentElement.lang = e.fullCode, document.documentElement.dir = e.bidi;
  }
  onLoadError(e) {
    e && console.log("An error occurred while initializing the language", e);
  }
}
const ws = (t, e) => {
  const n = t[e];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((o, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
}, Cs = {
  "ar-EG": Ca,
  "de-DE": xa,
  "en-US": cr,
  "it-IT": ya,
  "fa-IR": Sa,
  "fr-FR": ka,
  "es-ES": La,
  "zh-CN": Ea
}, xs = cr, ys = {
  languages: [
    new ie("en", "US", "English", "American English"),
    new ie("de", "DE", "Deutsch", "German"),
    new ie("ar", "EG", "عرب", "Arabic (Egypt)", se.RTL),
    new ie("it", "IT", "Italiano", "Italian"),
    new ie("fa", "IR", "فارسی", "Persian", se.RTL),
    new ie("fr", "FR", "Français", "French"),
    new ie("es", "ES", "Español", "Spanish"),
    new ie("zh", "CN", "中文", "Chinese")
  ],
  getData: async (t) => ({
    data: await ws(/* @__PURE__ */ Object.assign({ "../../../public/locales/ar-EG.json": () => import("./ar-EG-5607d597.js"), "../../../public/locales/de-DE.json": () => import("./de-DE-1eb76515.js"), "../../../public/locales/en-US.json": () => import("./en-US-524e96fa.js"), "../../../public/locales/es-ES.json": () => import("./es-ES-86336406.js"), "../../../public/locales/fa-IR.json": () => import("./fa-IR-d09f7ac0.js"), "../../../public/locales/fr-FR.json": () => import("./fr-FR-a39eea3f.js"), "../../../public/locales/it-IT.json": () => import("./it-IT-d0c41c64.js"), "../../../public/locales/zh-CN.json": () => import("./zh-CN-0bf5115a.js") }), `../../../public/locales/${t}.json`),
    componentsLocale: Cs[t]
  })
};
function Fn(t, e) {
  return t.find((n) => n.code === e);
}
function Ss(t, e) {
  const n = e.split("-");
  if (n.length > 1) {
    const o = n[0], i = n[1], a = t.find((c) => c.code === o && c.dialect === i);
    if (a)
      return a;
    const s = Fn(t, o);
    if (s)
      return s;
  }
  return Fn(t, e);
}
const Cr = ({ annotation: t, store: e }) => {
  const n = (i) => {
    if (t.required)
      return typeof i == "number" || !or(i) ? void 0 : [{
        settings: { key: "required_property" },
        message: "This property is required!",
        annotation: t
      }];
  }, o = async (i) => {
    var c, l;
    const a = (c = t.validator) == null ? void 0 : c.call(t, i, e);
    if ((li(a) ? await a : a) === !1)
      return [{
        settings: { key: "property_validator" },
        message: (l = t.errorMap) == null ? void 0 : l.message,
        annotation: t
      }];
  };
  return async (i) => n(i) ?? await o(i);
}, xr = () => {
  var t;
  return (t = window.matchMedia("(prefers-color-scheme: dark)")) != null && t.matches ? "dark" : "light";
};
var he;
class ks {
  constructor() {
    re(this, he, "Not implemented");
  }
  /**
   * @inheritDoc
   */
  getForm() {
    return Promise.reject(U(this, he));
  }
  /**
   * @inheritDoc
   */
  getFormNames() {
    return Promise.reject(U(this, he));
  }
  /**
   * @inheritDoc
   */
  removeForm() {
    return Promise.reject(U(this, he));
  }
  /**
   * @inheritDoc
   */
  saveForm() {
    return Promise.reject(U(this, he));
  }
}
he = new WeakMap();
var Ce, Ue;
class Ls {
  /**
   * Constructor.
   * @param delegate IFormStorage delegate.
   */
  constructor(e) {
    /**
     * Creates and adds a new value to the cache if the key does not exist in the cache.
     * @param name the cache key.
     */
    re(this, Ce);
    k(this, "cache", /* @__PURE__ */ new Map());
    this.delegate = e, gn(this, void 0, { name: cn("CachedFormStorage") });
  }
  /**
   * @returns the cached instances of BuilderComponent.
   */
  get builderComponents() {
    return Array.from(this.cache.values());
  }
  /**
   * @inheritDoc
   */
  async getForm(e) {
    const n = await this.delegate.getForm(e);
    return _e(this, Ce, Ue).call(this, e), n;
  }
  /**
   * @inheritDoc
   */
  async getFormNames() {
    const e = await this.delegate.getFormNames(), n = [];
    for (const [o] of this.cache)
      e.indexOf(o) < 0 && n.push(o);
    return e.forEach((o) => _e(this, Ce, Ue).call(this, o)), n.forEach((o) => this.cache.delete(o)), e;
  }
  /**
   * @inheritDoc
   */
  async removeForm(e) {
    const n = await this.delegate.removeForm(e);
    return this.cache.delete(e), n;
  }
  /**
   * @inheritDoc
   */
  async saveForm(e, n) {
    const o = await this.delegate.saveForm(e, n);
    return _e(this, Ce, Ue).call(this, e), o;
  }
}
Ce = new WeakSet(), Ue = function(e) {
  this.cache.has(e) || this.cache.set(e, Uo.createTemplateComponent(e));
};
const yr = "desktop", Sr = ["left", "right"], kr = 380;
function Es(t, e) {
  const n = new FileReader();
  n.readAsText(t, "UTF-8"), n.onload = (o) => {
    var a;
    const i = ((a = o.target) == null ? void 0 : a.result) ?? "";
    e(i);
  };
}
function Lr(t) {
  const e = document.createElement("input");
  e.type = "file", e.onchange = (n) => {
    const i = n.target.files[0];
    t(i);
  }, e.click();
}
function As(t) {
  Lr((e) => Es(e, t));
}
function Ps(t) {
  Lr((e) => t(e.arrayBuffer()));
}
function Ms(t, e, n) {
  let o = !1;
  const i = [t()], a = ke.box(i.length - 1);
  let s = () => {
  };
  const c = () => {
    s = sr(t, (l) => {
      if (o)
        throw new Error("Undo already disposed");
      a.set(a.get() + 1), i[a.get()] = l, i.length = a.get() + 1, n && n > 0 && i.length > n && (a.set(a.get() - 1), i.splice(0, 1));
    });
  };
  return c(), ke(
    {
      undo: Ae(() => {
        if (o)
          throw new Error("Undo already disposed");
        a.get() !== 0 && (a.set(a.get() - 1), s(), e(i[a.get()]), c());
      }),
      redo: Ae(() => {
        if (o)
          throw new Error("Undo already disposed");
        a.get() >= i.length - 1 || (a.set(a.get() + 1), s(), e(i[a.get()]), c());
      }),
      get hasUndo() {
        return a.get() !== 0;
      },
      get hasRedo() {
        return a.get() < i.length - 1;
      },
      dispose: () => {
        s(), o = !0;
      }
    }
  );
}
function zn(t) {
  return JSON.stringify(t, null, 2);
}
class Er {
  /**
   * Creates the editable property settings.
   * @param disableCompute the function to set the property as not computed.
   * @param setComputeCode the function to set the code value.
   * @param getComputeCode the function to get the code value.
   * @param getComputeType the function to get the computed type of the property.
   * @param hasComputeCode the function for checking the existence of the computed code.
   * @param annotation the annotation object for the property.
   * @param componentKey the key of the component that the property belongs to.
   */
  constructor(e, n, o, i, a, s, c) {
    this.disableCompute = e, this.setComputeCode = n, this.getComputeCode = o, this.getComputeType = i, this.hasComputeCode = a, this.annotation = s, this.componentKey = c;
  }
}
class Ar {
  /**
   * Creates the editable custom validation code.
   * @param editorKey the unique code editor key.
   * @param code the custom validation code.
   * @param functionSignature the function signature.
   * @param onSave the callback function called when data should be saved.
   */
  constructor(e, n, o, i) {
    this.editorKey = e, this.code = n, this.functionSignature = o, this.onSave = i;
  }
}
class Pr {
  /**
   * Creates the editable action settings.
   * @param namedAction the named custom action.
   * @param onSave the callback function called when data should be saved.
   */
  constructor(e, n) {
    k(this, "codeAction");
    this.namedAction = e, this.onSave = n;
    const o = JSON.parse(JSON.stringify(e.actionDefinition));
    this.codeAction = {
      name: e.name,
      body: o.body ?? "",
      params: o.params
    };
  }
}
var Me, Te, pe;
class Ts {
  constructor(e, n, o = 1e3) {
    k(this, "serializedForm");
    k(this, "undoer");
    re(this, Me, new ga());
    re(this, Te, void 0);
    re(this, pe, void 0);
    this.builderStore = e, gn(this, void 0, { name: cn("BuilderUndoer") });
    const i = () => sr(() => this.builderStore.formAsString, (s) => U(this, Me).next(s));
    this.serializedForm = this.builderStore.formAsString, ve(this, pe, i()), this.undoer = Ms(
      () => this.serializedForm,
      (s) => {
        U(this, pe).call(this), this.builderStore.parseForm(s), ve(this, pe, i());
      },
      n
    );
    const a = U(this, Me).pipe(
      ha(o),
      pa()
    );
    ve(this, Te, [
      a.subscribe((s) => this.serializedForm = s)
    ]);
  }
  undo() {
    this.undoer.undo();
  }
  redo() {
    this.undoer.redo();
  }
  get hasUndo() {
    return this.undoer.hasUndo;
  }
  get hasRedo() {
    return this.undoer.hasRedo;
  }
  /**
   * Releases allocated resources, must be used when destroying an object instance.
   */
  dispose() {
    U(this, pe).call(this), U(this, Te).forEach((e) => e.unsubscribe()), this.undoer.dispose();
  }
}
Me = new WeakMap(), Te = new WeakMap(), pe = new WeakMap();
var ae;
class $s {
  /**
   * Creates the form builder settings.
   * @param viewer the form viewer settings.
   * @param props the form viewer properties.
   */
  constructor(e, n) {
    k(this, "builderMode", "viewer");
    k(this, "viewMode", yr);
    k(this, "landscapeMode");
    k(this, "theme", xr());
    k(this, "openedPanels", Sr);
    k(this, "bottomPanelHeight", kr);
    k(this, "testingData");
    k(this, "testingAutorun", !0);
    k(this, "builderI18n");
    k(this, "formBuilderLanguage");
    k(this, "localizationLanguage");
    k(this, "loadedLanguages", {});
    k(this, "currentEditable");
    k(this, "lastSaveTime", /* @__PURE__ */ new Date());
    k(this, "componentsModalState", {
      opened: !1,
      onSelect: () => {
      }
    });
    k(this, "promptModalState", {
      opened: !1,
      title: "",
      value: "",
      onOk: () => {
      }
    });
    k(this, "errorMap", /* @__PURE__ */ new Map());
    k(this, "view");
    k(this, "formStorageEnabled");
    k(this, "selected", /* @__PURE__ */ new Set());
    k(this, "expanded", /* @__PURE__ */ new Set());
    k(this, "formStorage");
    re(this, ae, void 0);
    k(this, "undoer");
    k(this, "activeFormName");
    /**
     * Validates all properties of all components on the form.
     */
    k(this, "validate", async () => {
      await Promise.allSettled(this.viewer.reduceScreen((e, n) => (this.getComponentMetadata(n.store.type).properties.forEach((i) => {
        const a = Cr({ annotation: i, store: this.viewer });
        this.errorMap.has(n) || this.errorMap.set(n, {});
        const s = this.errorMap.get(n);
        for (const c in n.store.props)
          e.push(a(n.store.props[c].value, this.viewer).then((l) => {
            if (!l)
              return s[i.key] = void 0;
            const u = l.map((d) => d.message).filter((d) => d !== "undefined").join("; ");
            return s[i.key] = u;
          }));
      }), e), []));
    });
    /**
     * Downloads the current form to a file in the browser.
     */
    k(this, "download", () => {
      const e = "data:text/json;charset=utf-8," + encodeURIComponent(this.formAsString), n = document.createElement("a");
      n.setAttribute("href", e), n.setAttribute("download", "form.json"), document.body.appendChild(n), n.onclick = () => {
        document.body.removeChild(n);
      }, n.click();
    });
    /**
     * Loads a form from the file selected in the browser.
     */
    k(this, "upload", () => {
      As(this.parseForm.bind(this));
    });
    /**
     * Adds a component to the list of selected components.
     * @param target the component to be added to the list.
     * @param multipleSelection true if you need to add the component to the list of components,
     * false if you need to leave only the component you want to add in the list of selected components.
     */
    k(this, "selectNode", (e, n = !1) => {
      const o = this.selected.has(e);
      n && (o ? this.selected.delete(e) : this.selected.add(e)), !n && !o && (this.selected.clear(), this.selected.add(e)), o || this.expandParents(e);
    });
    this.viewer = e, this.props = n, gn(
      this,
      {
        selected: ke,
        formBuilderLanguage: ke.ref,
        localizationLanguage: ke.ref,
        dispose: !1,
        builderMode: !0,
        viewMode: !0,
        openedPanels: !0,
        changeBuilderMode: Ae,
        view: !1
      },
      { name: cn("BuilderStore") }
    ), this.formStorageEnabled = !!n.formStorage, this.formStorage = new Ls(n.formStorage ?? new ks()), this.formStorageEnabled && this.formStorage.getFormNames().catch(console.error), ve(this, ae, n), this.view = n.view, this.activeFormName = n.formName, this.formBuilderLanguage = this.availableLanguages[0], this.localizationLanguage = this.formBuilderLanguage;
    const o = async (i) => {
      const a = this.loadedLanguages[i];
      if (a)
        return a.data;
      const s = Ss(this.availableLanguages, i) ?? this.defaultLanguage, c = await this.i18n.getData(s.fullCode);
      return this.loadedLanguages[i] = c, c.data;
    };
    this.builderI18n = new bs(this.defaultLanguage, o), this.undoer = new Ts(this, 100);
  }
  /**
   * Opens the code action editor to add a new code action.
   * @param afterAdd the callback function called after a new code action added.
   */
  addCodeAction(e) {
    const o = { name: "", actionDefinition: Go.sourceAction("") };
    this.editCodeAction(o, (i) => {
      e == null || e(i);
    });
  }
  /**
   * Opens the code action editor.
   * @param namedAction the named action name.
   * @param afterEdit callback function called after data editing.
   */
  editCodeAction(e, n) {
    this.currentEditable = new Pr(e, (o) => {
      this.viewer.form.updateOrAddAction(e.name, o), n == null || n(o), this.editCodeAction(o);
    });
  }
  /**
   * Opens the custom validation code editor.
   * @param componentKey the component key.
   * @param code the custom validation code.
   * @param functionSignature the function signature.
   * @param onChange the callback function called when data should be saved.
   */
  editCustomValidationCode(e, n, o, i) {
    this.currentEditable = new Ar(e, n, o, i);
  }
  /**
   * Changes the language in the form builder.
   * @param language the language to be set.
   */
  changeLanguage(e) {
    this.builderI18n.changeWebDocumentLanguage(e).then(() => this.formBuilderLanguage = e).catch((n) => console.error(n));
  }
  /**
   * @returns the i18n data of the form builder.
   */
  get i18n() {
    return U(this, ae).i18n && U(this, ae).i18n.languages.length > 0 ? U(this, ae).i18n : ys;
  }
  /**
   * @returns set of languages for translating the Form Builder interface.
   */
  get availableLanguages() {
    return this.i18n.languages;
  }
  /**
   * @returns the default language.
   */
  get defaultLanguage() {
    return this.availableLanguages[0];
  }
  /**
   * @returns the current locale for the components.
   */
  get componentsLocale() {
    var e;
    return (e = this.loadedLanguages[this.formBuilderLanguage.fullCode]) == null ? void 0 : e.componentsLocale;
  }
  /**
   * @returns selected component if only one component is selected in the form builder, otherwise undefined.
   */
  get oneSelected() {
    return this.selected.size === 1 ? Array.from(this.selected)[0] : void 0;
  }
  /**
   * @returns the selected tree element if only one component is selected in the form builder, otherwise undefined.
   */
  get oneSelectedComponentData() {
    const e = this.oneSelected;
    if (e)
      return this.viewer.form.componentTree.findByKey(e.key);
  }
  /**
   * @returns the current form name.
   */
  get formName() {
    return this.activeFormName || "__DefaultForm__";
  }
  /**
   * @returns true if the form builder is in RTL mode, false otherwise.
   */
  get isRTL() {
    return this.formBuilderLanguage.bidi === se.RTL;
  }
  /**
   * Correctly clears allocated resources, the function must be called when destroying an instance of the class.
   */
  dispose() {
    this.undoer.dispose();
  }
  /**
   * Changes the form builder mode.
   * @param value the new form builder mode.
   */
  changeBuilderMode(e) {
    this.builderMode = e, this.currentEditable = void 0;
  }
  /**
   * Expands all elements in the component tree.
   */
  expandAll() {
    Mn(this.viewer.form.componentTree, (e) => this.expanded.add(e));
  }
  /**
   * Collapses all elements in the component tree.
   */
  collapseAll() {
    this.expanded.clear();
  }
  /**
   * @inheritDoc
   */
  parseForm(e) {
    this.viewer.applyStringForm(e), this.currentEditable = void 0;
  }
  /**
   * Clones the component and adds the clone to the component tree.
   * @param source the cloning component.
   */
  clone(e) {
    this.add(e, e);
  }
  /**
   * Moves one selected component in the component tree.
   * @param source the selected component.
   * @param target the new parent component for the selected component.
   * @param insertPosition the insertion position relative to the new parent component.
   * @returns void
   */
  move(e, n, o = "after") {
    if (!(e === n || e === this.viewer.form.componentTree)) {
      if (o === "inner" || n.isRoot)
        return e.setParent(n);
      if (o === "before")
        return n.insertBeforeMe(e);
      if (o === "after")
        return n.insertAfterMe(e);
      throw new Error(`Unknown insert position ${o}`);
    }
  }
  /**
   * Moves several selected components in the component tree.
   * @param target the new parent component for relocatable components.
   * @param insertPosition the insertion position relative to the new parent component.
   */
  multipleMove(e, n = "after") {
    this.selected.forEach((o) => {
      const i = this.viewer.form.componentTree.findByKey(o.key);
      if (!i)
        throw Error(`Component with key ${o.key} not found`);
      this.move(i, e, n);
    });
  }
  /**
   * Adds the new component to the component tree.
   * @param source the component to be added to the component tree.
   * @param target the parent component for the component to be added.
   * @param insertPosition the insertion position relative to the new parent component.
   * @param slot the property name of the parent component where the new component will be added.
   * @param slotCondition the source code of the function that checks if the component can be bound to parent.
   * @returns the new added component.
   */
  add(e, n, o = "after", i, a) {
    const s = Ye(new Ee("", ""), la(e.store));
    s.slot = i, s.slotCondition = a;
    const c = this.viewer.createComponentData(s), l = c.unifyKeys(this.viewer.form.componentTree);
    return this.move(c, n, o), Mn(c, (u) => {
      const d = l.get(u.key);
      if (!d)
        return;
      const h = this.viewer.form.localization.getLocalizationForComponent(d);
      h && this.viewer.form.localization.addLocalizationWithNewKey(h, d, u.key);
    }), this.selectNode(c), s;
  }
  /**
   * Removes the component from the component tree.
   * @param source the component for removal.
   */
  remove(e) {
    this.selected.clear(), this.viewer.form.localization.removeLocalization(e.key), e.delete();
  }
  /**
   * Clears the current form.
   */
  clear() {
    this.viewer.clear();
  }
  /**
   * @inheritDoc
   */
  get formAsString() {
    const e = this.viewer.form.actionNames.length ? this.viewer.form.actions : void 0, n = Object.keys(this.viewer.form.errorProps).length ? this.viewer.form.errorProps : void 0, o = {
      version: di.version1,
      actions: e,
      errorProps: n,
      tooltipType: this.viewer.form.tooltipType,
      errorType: this.viewer.form.errorType,
      form: this.viewer.form.componentTree.store,
      localization: this.viewer.form.localization.value,
      languages: this.formAvailableLanguages,
      defaultLanguage: this.viewer.form.defaultLanguage.fullCode
    };
    return zn(o);
  }
  /**
   * @returns the list of available languages for the form.
   */
  get formAvailableLanguages() {
    return this.availableLanguages.filter((e) => e.fullCode === this.defaultLanguage.fullCode || this.viewer.form.localization.hasLanguage(e.fullCode));
  }
  /**
   * Saves the current form in the form storage.
   * @param formName the form name.
   * @returns the {@link Promise} with the result of saving the form.
   */
  async save(e) {
    const n = e || this.formName, o = await this.saveForm(n, this.formAsString);
    return this.activeFormName = n, o;
  }
  /**
   * Saves the form in the form storage.
   * @param formName the form name.
   * @param formValue the form serialized to JSON.
   * @returns the {@link Promise} with the result of saving the form.
   */
  saveForm(e, n) {
    return this.lastSaveTime = /* @__PURE__ */ new Date(), this.formStorage.saveForm(e, n);
  }
  /**
   * Creates a new form in the form storage.
   * @param formName the form name.
   * @returns the Promise with the result of the form creation.
   */
  createForm(e) {
    const n = {
      form: new Ee(Tn.name, Tn.type),
      localization: {},
      languages: [],
      defaultLanguage: this.defaultLanguage.fullCode
    };
    return this.saveForm(e, zn(n));
  }
  /**
   * @returns the {@link Promise} with all form names from the form storage.
   */
  async getFormKeys() {
    return (await this.formStorage.getFormNames()).map((n) => `${n}`) || [];
  }
  /**
   * Removes the form from the form storage by form name.
   * @param value the form name.
   * @param onSuccess the callback function that is called when a form is successfully removed.
   */
  removeForm(e, n) {
    this.formStorage.removeForm(e).then(n);
  }
  /**
   * Loads the form from the form storage into the form builder.
   * @param value the form name.
   * @param onSuccess the callback function that is called when the form is loaded successfully.
   * @param onError the callback function that is called if the form fails to load.
   */
  loadForm(e, n, o) {
    this.getStoredFormJson(e).then((i) => {
      this.parseForm(i), this.activeFormName = e, n == null || n();
    }).catch((i) => o == null ? void 0 : o(i));
  }
  /**
   * @param formName the form name.
   * @returns the {@link Promise} with a form serialized in JSON.
   */
  getStoredFormJson(e) {
    return this.formStorage.getForm(e);
  }
  /**
   * Hides or shows the form builder panel.
   * @param placement placement of the form builder panel.
   * @param visible true if you want to show the panel, false otherwise.
   */
  setPanelVisible(e, n) {
    var i;
    const o = ((i = this.openedPanels) == null ? void 0 : i.filter((a) => a !== e)) ?? [];
    this.openedPanels = [
      ...o,
      ...n ? [e] : []
    ];
  }
  /**
   * Expands all the parents of a component in the form builder's component tree.
   * @param target the expanded component.
   * @param componentTree the initial node of the component tree.
   * @returns true if at least one component has been marked as expanded,
   * or if the beginning of the tree matches the component's key, undefined otherwise.
   */
  expandParents(e, n = this.viewer.form.componentTree) {
    var o;
    if (!((o = n.children) != null && o.length))
      return n.key === e.key;
    if (n.children.some((i) => this.expandParents(e, i)))
      return this.expanded.add(n), !0;
  }
  /**
   * Returns the component metadata for the specified component type name.
   * @param type the component type name.
   * @returns the component metadata for the specified component type name.
   */
  getComponentMetadata(e) {
    var n;
    return this.view.findMeta(e) ?? ((n = this.builderComponents.find((o) => o.model.type === e)) == null ? void 0 : n.meta) ?? this.view.getMeta(e);
  }
  /**
   * @returns the array of metadata of form builder components.
   */
  get builderComponents() {
    const e = [...this.view.builderComponents], n = e.map((s) => s.model.type), o = new Set(n), i = Uo.createTemplateComponent(this.formName), a = this.formsMetadata.filter((s) => !o.has(s.model.type) && i.model.type !== s.model.type);
    return e.push(...a), e;
  }
  /**
   * @returns form metadata from an external form storage.
   */
  get formsMetadata() {
    return this.formStorageEnabled ? this.formStorage.builderComponents : [];
  }
  /**
   * Returns the custom property editor for the specified editorType.
   * @param editorType the property editor type.
   * @returns the custom property editor for the specified editorType.
   */
  customPropertyEditor(e) {
    var n;
    return (n = U(this, ae).propertyEditors) == null ? void 0 : n[e];
  }
  /**
   * Displays the modal window of the components.
   * @param onSelect the callback function called when a component is selected.
   */
  showComponentsModal(e) {
    this.componentsModalState.onSelect = e, this.componentsModalState.opened = !0;
  }
  /**
   * Displays the modal window for entering a value.
   * @param props the modal window properties.
   */
  showPromptModal(e) {
    Object.assign(this.promptModalState, e, { opened: !0 });
  }
}
ae = new WeakMap();
const gt = "fluent", Os = [
  { content: ui, filePath: "ActionEventArgs" },
  { content: mi, filePath: "Form" }
];
Aa.init().then((t) => {
  var f;
  Os.forEach(({ content: v, filePath: w }) => {
    var y;
    (y = t == null ? void 0 : t.languages.typescript) == null || y.javascriptDefaults.addExtraLib(v, w);
  }), (f = t == null ? void 0 : t.languages.css) == null || f.scssDefaults.setOptions({ lint: { emptyRules: "ignore" } });
  const e = /[a-zA-Z-][a-zA-Z0-9_-]*/.source, n = /([^{}\s[\]]+)/.source, o = /\s\s|\s\s\s\s/.source, i = /\s|\s\s\s|\s{5,}/.source, a = /(\s*)/.source, s = /$/.source, c = `${a}({${a}[$])${n}${a}}`, l = `${a}({${a}[$])${n}${a}->${a}(${s})`, u = /\*?\[(zero|one|two|few|many|other)]/.source, d = `\\*?\\[${n}]`, h = '(\\s*{\\s*")(.*)("\\s*})';
  t == null || t.languages.register({ id: gt }), t == null || t.languages.setMonarchTokensProvider(gt, {
    tokenizer: {
      root: [
        [`^-?${e}${a}=`, "constant", "@value"],
        [/.*/, "invalid"]
      ],
      value: [
        //https://projectfluent.org/fluent/guide/variables.html
        [c, "variable"],
        //https://projectfluent.org/fluent/guide/selectors.html
        [l, "regexp", "@function"],
        //https://projectfluent.org/fluent/guide/special.html
        [h, ["variable", "string", "variable"]],
        //new line string must be started with tab
        //https://projectfluent.org/fluent/guide/multiline.html
        [`^(${o})${n}`, "string"],
        [`^(${i})(.*)`, "invalid"],
        [`^${n}`, "invalid"],
        //first line string
        [`${a}${n}`, "string"],
        [/.*/, "invalid"]
      ],
      function: [
        //https://projectfluent.org/fluent/guide/variables.html
        [c, "variable"],
        //https://projectfluent.org/fluent/guide/selectors.html
        [l, "regexp", "@function"],
        //https://projectfluent.org/fluent/guide/special.html
        [h, ["variable", "string", "variable"]],
        //https://projectfluent.org/fluent/guide/selectors.html
        [`${a}${u}`, "regexp"],
        [`${a}${d}`, "regexp"],
        [`${a}${n}`, "string"],
        [`${a}}`, "regexp", "@pop"],
        [/.*/, "invalid"]
      ]
    }
  }), t.editor.defineTheme("vs-extended", js);
});
const js = {
  base: "vs",
  inherit: !0,
  rules: [
    {
      token: "string.fluent",
      foreground: "008000"
    },
    {
      token: "variable.fluent",
      foreground: "1d087a"
    },
    {
      token: "regexp.fluent",
      foreground: "1d087a"
    },
    {
      token: "constant.fluent",
      foreground: "4978ad"
    }
  ],
  colors: {
    "editor.background": "#f7f7fa"
  }
}, Rs = (t) => {
  const e = F(() => {
    const c = t.beginContextLine ?? "", l = t.beginContextLine && t.canEditBeginContextLine ? "" : `
`, u = t.endContextLine ? `
${t.endContextLine}` : "";
    return c + l + t.initialValue + u;
  }, [t.beginContextLine, t.endContextLine, t.initialValue, t.canEditBeginContextLine]), n = K(), o = K(), i = b((c) => {
    const l = !!t.endContextLine, [u, d] = Bn(t.beginContextLine ?? ""), [h] = Bn(t.endContextLine ?? ""), f = l ? c.getLineCount() - (h - 1) : c.getLineCount(), v = l ? 1 : c.getFullModelRange().endColumn;
    return [{
      label: "body",
      allowMultiline: !0,
      range: [u, d, f, v],
      validate: (w, y, { endLineOfRange: A, startLineOfRange: M }) => M ? w.startsWith(`
`) || t.canEditBeginContextLine : A ? w.endsWith(`
`) || !l : !0
    }];
  }, [t.beginContextLine, t.canEditBeginContextLine, t.endContextLine]);
  L(() => {
    var l;
    if ((l = n.current) == null || l.setValue(e), !o.current)
      return;
    const c = i(o.current);
    o.current.updateRestrictions(c);
  }, [i, e]);
  const { onChange: a } = t, s = b((c, l) => {
    n.current = c;
    const u = c.getModel();
    if (!u)
      return;
    const d = Pa(l);
    d.initializeIn(c);
    const h = i(u), f = d.addRestrictionsTo(u, h);
    f.onDidChangeContentInEditableRange((v) => {
      let w = v.body;
      w && (t.beginContextLine && w.startsWith(`
`) && (w = w.substring(1)), t.endContextLine && w.endsWith(`
`) && (w = w.substring(0, w.length - 1)), a(w));
    }), o.current = f;
  }, [t.beginContextLine, t.endContextLine, i, a]);
  return /* @__PURE__ */ r(
    lr,
    {
      onMount: s,
      className: t.className,
      defaultValue: e,
      height: t.height ?? "100%",
      width: t.width ?? "100%",
      language: t.language ?? "javascript",
      options: {
        wordWrap: "on",
        ...t.options
      },
      theme: t.theme
    }
  );
};
function Bn(t) {
  var o;
  const e = t.split(`
`), n = ((o = e.at(-1)) == null ? void 0 : o.length) ?? 0;
  return [e.length, n + 1];
}
const Fs = (t) => {
  const e = K();
  return L(() => {
    var o;
    (o = e.current) == null || o.setValue(t.initialValue);
  }, [t.initialValue]), /* @__PURE__ */ r(
    lr,
    {
      onMount: (o) => {
        o.onDidChangeModelContent(() => t.onChange(o.getValue())), e.current = o;
      },
      className: t.className,
      defaultValue: t.initialValue,
      height: t.height ?? "100%",
      width: t.width ?? "100%",
      language: t.language ?? "javascript",
      options: {
        wordWrap: "on",
        ...t.options
      },
      theme: t.theme
    }
  );
}, zs = ({ children: t }) => /* @__PURE__ */ r("div", { dir: "ltr", style: { width: "100%", height: "100%", minHeight: 0 }, children: t }), Bs = (t) => {
  const n = x().theme === "light" ? "vs-extended" : "vs-dark", o = t.theme ?? n, i = { ...t, theme: o };
  let a = /* @__PURE__ */ r(Rs, { ...i });
  if (!t.beginContextLine && !t.endContextLine) {
    const s = { ...i };
    delete s.beginContextLine, delete s.endContextLine, delete s.canEditBeginContextLine, a = /* @__PURE__ */ r(Fs, { ...s });
  }
  return /* @__PURE__ */ r(zs, { children: a });
}, Ie = C("CodeEditor", Bs), vn = 5, B = p.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ gap: t }) => t ?? vn}px;
`, ne = p.div`
  display: flex;
  gap: ${({ gap: t }) => t ?? vn}px;
  ${({ stretchElements: t }) => t && "& > * { flex: 1; }"};
  ${({ spaceBetween: t }) => t && "justify-content: space-between"};
`, Mr = p.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  & > label {
    width: 100px;
    min-width: 80px;
  }
`, Tr = ze`
  && {
    display: flex;
    position: relative;
    background-color: var(--rs-btn-default-bg);
    border-radius: 10px;
    padding: 8px;
    padding-inline-start: 12px;
    align-items: center;
    user-select: none;
    justify-content: space-between;
  }
`, $r = ze`
  && {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${vn}px;
  }
`, Is = ze`
  && > * {
    cursor: pointer;

    :hover {
      background-color: var(--rs-btn-default-hover-bg);
    }
  }
`, Le = p.div`
  ${Tr}
`, bn = p.div`
  ${$r}
  ${({ clickable: t = !1 }) => t && Is}
`, In = (t) => {
  if (!Qe(t))
    try {
      return JSON.parse(t);
    } catch (e) {
      return e instanceof SyntaxError && console.error(e.name), null;
    }
}, wn = (t) => {
  if (typeof t != "object" || t === null)
    return t;
  const e = {};
  return Object.entries(t).forEach(([n, o]) => {
    const i = (a) => typeof o == a;
    if (o instanceof Date) {
      e[n] = o.toISOString();
      return;
    }
    if (i("object")) {
      e[n] = wn(o);
      return;
    }
    (i("string") || i("number") || i("boolean")) && (e[n] = o);
  }), e;
}, Ds = ye(({ faIcon: t, size: e, ...n }, o) => {
  const { width: i, height: a, svgPathData: s } = Ns(t);
  return /* @__PURE__ */ r(
    "svg",
    {
      viewBox: `0 0 ${i} ${a}`,
      width: `${e ?? 1}em`,
      height: `${e ?? 1}em`,
      fill: "currentColor",
      ...n,
      ref: o,
      children: /* @__PURE__ */ r("path", { d: s })
    }
  );
}), Ns = (t) => {
  if (t != null && t.icon) {
    const [e, n, , , o] = t.icon;
    return { width: e, height: n, svgPathData: o };
  }
  return t;
}, R = ye(({ icon: t, size: e, ...n }, o) => /* @__PURE__ */ r(fn, { as: Ds, ref: o, faIcon: t, size: e, ...n })), P = (t) => {
  const [e, { exists: n }] = O();
  return (o) => {
    const i = `${t}.${o}`;
    return n(i) ? e(i) : "";
  };
}, Vs = {
  contextmenu: !1,
  lineNumbers: "off",
  minimap: { enabled: !1 },
  glyphMargin: !1,
  folding: !1,
  lineDecorationsWidth: 0,
  lineNumbersMinChars: 0,
  autoIndent: "full"
}, _s = ye(({ testingFunction: t }, e) => {
  const n = P("testingEditor"), o = x(), { formData: i } = D(), [a, s] = S(o.testingData ?? Gs(i)), [c] = S(a);
  return L(() => () => {
    o.testingData = a;
  }, [o, a]), /* @__PURE__ */ m(B, { style: { flex: 1, minHeight: 100, minWidth: 0, alignItems: "start", position: "relative" }, children: [
    /* @__PURE__ */ r("span", { style: { marginTop: -40, paddingBlock: 7, opacity: 0.6 }, children: n("testFormData") }),
    /* @__PURE__ */ r("div", { style: { flex: 1, minHeight: 20, width: "100%" }, children: /* @__PURE__ */ r(Ie, { language: "json", initialValue: c, onChange: s, options: Vs }) }),
    /* @__PURE__ */ r(jr, { data: a, testingFunction: t, ref: e })
  ] });
}), Or = C("TestingEditor", _s), Hs = ye(({ data: t, testingFunction: e, compact: n }, o) => {
  const i = P("testingEditor"), a = x(), [s, c] = S(), l = b(() => {
    const h = Us(t ?? "{}", e);
    return c(h), h;
  }, [t, e]);
  L(() => {
    if (o && typeof o == "object" && ((o.current ?? {}).test = l), a.testingAutorun) {
      l();
      return;
    }
    c(void 0);
  }, [l, a.testingAutorun, o]);
  const u = (h, f) => a.testingAutorun = f, d = /* @__PURE__ */ m(
    ne,
    {
      style: { justifyContent: n ? "end" : "space-between", paddingInlineEnd: 10, paddingTop: 3, alignItems: "end", flex: 1 },
      children: [
        n && s && /* @__PURE__ */ r(Dn, { compact: !0, result: s, onClose: () => c(void 0) }),
        /* @__PURE__ */ m(z, { onClick: l, size: "sm", appearance: "ghost", style: { display: "flex", gap: 10 }, children: [
          /* @__PURE__ */ r(R, { icon: dr }),
          " ",
          i("run")
        ] }),
        /* @__PURE__ */ r(Je, { checked: a.testingAutorun, onChange: u, style: { height: 32 }, children: i("autorun") })
      ]
    }
  );
  return n ? d : /* @__PURE__ */ m(B, { style: { width: "100%", flex: 0 }, children: [
    s && /* @__PURE__ */ r(Dn, { result: s, onClose: () => c(void 0) }),
    d
  ] });
}), jr = C("TestRunner", Hs), Rr = {
  error: "var(--rs-red-500)",
  warning: "var(--rs-orange-400)",
  success: "var(--rs-green-500)"
}, Fr = (t) => ze`
  .rs-theme-dark && {
    background-color: initial !important;

    .rs-message-body, .rs-btn-close {
      color: white;
    }

    .rs-message-icon-wrapper .rs-icon {
      color: ${Rr[t]} !important;
    }
  }
`, Ws = p(mn)`
  ${({ type: t }) => Fr(t)};
  background-color: initial !important;
  flex: 1;

  .rs-message-container {
    padding: 5px;
  }
`, Zs = p(mn)`
  ${({ type: t }) => Fr(t)};
  border-radius: 6px;
  border: 2px solid ${({ type: t }) => Rr[t]};
`, Dn = ({ result: t, onClose: e, compact: n }) => {
  const o = n ? Ws : Zs, i = /* @__PURE__ */ r("div", { style: { maxHeight: 80, overflow: "auto", wordBreak: "break-word" }, children: /* @__PURE__ */ r("pre", { style: { whiteSpace: "pre-wrap", margin: 0 }, children: /* @__PURE__ */ r(Nn, { result: t }) }) });
  return /* @__PURE__ */ r(o, { type: Ks(t), closable: !n, onClose: e, showIcon: !0, children: n ? /* @__PURE__ */ r(Nn, { result: t }) : i });
}, Nn = ({ result: t }) => {
  var n;
  const e = P("testingEditor");
  return /* @__PURE__ */ r("div", { children: Qe(t.result) ? ((n = t.exceptions) == null ? void 0 : n.map((o) => o.message)) ?? e("hasNotReturnedValue") : zr(t == null ? void 0 : t.result) });
};
function Us(t, e) {
  try {
    const { data: n, errors: o } = JSON.parse(t);
    return e(new qs(n, o));
  } catch (n) {
    return Ge.error([n]);
  }
}
const Gs = (t) => zr({ data: hi(t), errors: {} }), zr = (t) => typeof t == "string" ? t : JSON.stringify(wn(t), null, 2), Ks = (t) => Qe(t.result) ? t != null && t.error || t != null && t.exceptions ? "error" : "warning" : "success";
class qs {
  /**
   * Constructor
   * @param data the test form data.
   * @param errors the test form errors.
   */
  constructor(e = {}, n = {}) {
    k(this, "state", {});
    k(this, "hasErrors", !1);
    k(this, "isValidating", !1);
    this.data = e, this.errors = n;
  }
  /** @inheritDoc */
  clear() {
    this.data = {};
  }
  /** @inheritDoc */
  validate() {
    return Promise.resolve();
  }
  /** @inheritDoc */
  reset() {
  }
  /** @inheritDoc */
  setAllErrors() {
  }
  /** @inheritDoc */
  getValidationResult() {
    return Promise.resolve(void 0);
  }
}
const Cn = (t) => {
  const { t: e } = O(), n = e("codeEditor.codePlaceholder"), { onCompile: o, onSave: i } = t, a = F(() => t.source ?? n, [t.source, n]), [s, c] = S(a), [l, u] = S(a), d = K({}), h = b(() => {
    var w, y;
    const v = (y = (w = d.current).test) == null ? void 0 : y.call(w);
    v != null && v.error || (Ae(() => i(s))(), u(s));
  }, [i, s]);
  L(() => {
    u(a), c(a);
  }, [a]);
  const f = b((v) => o(s, v), [s, o]);
  return /* @__PURE__ */ m(ne, { style: { minHeight: 0, flex: 1 }, children: [
    /* @__PURE__ */ m(B, { gap: 10, style: { minHeight: 0, flex: 1.5 }, children: [
      /* @__PURE__ */ r(
        Ie,
        {
          beginContextLine: t.beginContextLine,
          endContextLine: t.endContextLine,
          initialValue: l,
          onChange: c
        }
      ),
      /* @__PURE__ */ m(Js, { children: [
        /* @__PURE__ */ m(oe, { size: "sm", children: [
          /* @__PURE__ */ r(z, { appearance: "primary", onClick: h, children: e("common.save") }),
          /* @__PURE__ */ r(z, { appearance: "ghost", onClick: () => t.onClose(), children: e("common.close") })
        ] }),
        t.compact && /* @__PURE__ */ r(jr, { testingFunction: f, ref: d, compact: !0 })
      ] })
    ] }),
    !t.compact && /* @__PURE__ */ r(Or, { testingFunction: f, ref: d })
  ] });
}, Js = p.div`
  display: flex;
  gap: 10px;
  align-items: end;
  justify-content: space-between;
`, xn = p.div`
  display: flex;
  gap: 25px;
  width: 100%;
  align-items: center;
`, Xs = ln(["string", "number", "boolean"], !1), Ys = /^[A-Za-z_]+[A-Za-z0-9_]*$/, Vn = (t) => Ys.test(t), Qs = ({ value: t, collapsed: e, onClick: n }) => {
  const [o, i] = t;
  return /* @__PURE__ */ m(nc, { onClick: n, children: [
    /* @__PURE__ */ r(e ? et : ur, {}),
    " ",
    o,
    ": ",
    i
  ] });
}, ec = ({ value: t, onRemove: e, onChange: n, parameters: o }) => {
  const [i, a] = t, [s, c] = S(!0), { t: l } = O(), [u, d] = S({ name: i, type: a }), h = K(null), f = (A) => A === i || !(o != null && o.find(([M]) => M === A)), v = (A) => f(A.name) && Vn(A.name), w = (A) => {
    d(A), v(A) && n([A.name, A.type]);
  }, y = Ke.Model({
    name: Ke.Types.StringType().isRequired(l("codeActionEditor.parameterNameIsRequired")).addRule(f, l("codeActionEditor.parameterNameExists")).addRule(Vn, l("codeActionEditor.parameterNameIsNotValid"))
  });
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ m(ne, { style: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r(Qs, { value: [u.name, u.type], collapsed: s, onClick: () => c(!s) }),
      /* @__PURE__ */ r(tc, { onClick: e })
    ] }),
    /* @__PURE__ */ r(er.Collapse, { in: !s, unmountOnExit: !0, children: /* @__PURE__ */ r(B, { gap: 10, children: /* @__PURE__ */ m(
      ee,
      {
        model: y,
        checkTrigger: "change",
        formValue: u,
        ref: h,
        onChange: (A) => w({ name: A.name, type: A.type }),
        children: [
          /* @__PURE__ */ m(ee.Group, { children: [
            /* @__PURE__ */ r(ee.ControlLabel, { children: l("actions.name") }),
            /* @__PURE__ */ r(ee.Control, { name: "name", style: { maxWidth: "100%" } })
          ] }),
          /* @__PURE__ */ m(ee.Group, { children: [
            /* @__PURE__ */ r(ee.ControlLabel, { children: l("actions.type") }),
            /* @__PURE__ */ r(
              ee.Control,
              {
                name: "type",
                accepter: je,
                data: Xs,
                cleanable: !1,
                creatable: !1
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}, tc = p(Se)`
  margin-top: 5px;
  cursor: pointer;
`, nc = p.span`
  cursor: pointer;
`, oc = ({ value: t, onChange: e }) => {
  const n = P("actions"), [o, i] = S(t);
  L(() => {
    i(t);
  }, [t]);
  const a = (d) => {
    i(d), e(d);
  }, s = () => {
    const d = (o == null ? void 0 : o.map((y) => y[0])) ?? [], h = new Set(d), v = [pi("prop", h), "string"], w = o ? [...o, v] : [v];
    a(w);
  }, c = (d) => {
    const h = o ? [...o] : [];
    h == null || h.splice(d, 1), a(h);
  }, l = (d, h) => {
    const f = o ? [...o] : [];
    f[h] = d, a(f);
  }, u = o == null ? void 0 : o.map((d, h) => /* @__PURE__ */ r(
    ec,
    {
      value: d,
      onRemove: () => c(h),
      parameters: o,
      onChange: (f) => l(f, h)
    },
    h
  ));
  return /* @__PURE__ */ m(B, { style: { maxWidth: 240 }, children: [
    /* @__PURE__ */ m(ne, { style: { alignItems: "center", justifyContent: "space-between", height: 34 }, children: [
      /* @__PURE__ */ r("h6", { children: n("parameters") }),
      /* @__PURE__ */ r(z, { onClick: s, appearance: "link", children: /* @__PURE__ */ r("h6", { children: n("add") }) })
    ] }),
    /* @__PURE__ */ r(B, { style: { overflow: "auto" }, children: u })
  ] });
}, rc = (t) => {
  if (t)
    return Object.entries(t).map(([e, n]) => [e, n]);
}, ic = (t) => {
  if (!t)
    return;
  const e = {};
  return t.forEach(([n, o]) => e[n] = o), e;
}, ac = ({ codeAction: t, onSave: e }) => {
  const { t: n } = O(), o = D(), i = x(), a = F(
    () => ({ ...t, actionParameters: rc(t.params) }),
    [t]
  ), [s, c] = S(a), [l, u] = S(t.body), d = K(null), h = F(() => cc(s.actionParameters), [s.actionParameters]);
  L(() => {
    var M;
    c(a), u(a.body), (M = d.current) == null || M.cleanErrors();
  }, [t, a]);
  const f = Ke.Model({
    name: Ke.Types.StringType().isRequired(n("codeActionEditor.nameIsRequired")).addRule((M) => t.name === s.name || !o.form.actions[M], n("codeActionEditor.actionNameExists"))
  }), v = (M) => {
    c((q) => ({ ...q, ...M }));
  }, w = () => i.currentEditable = void 0, y = (M) => {
    var X;
    if (!((X = d.current) != null && X.check()))
      return;
    const q = Go.sourceAction(M, ic(s.actionParameters)), Q = { name: s.name, actionDefinition: q };
    e == null || e(Q);
  }, A = (M) => (Ko(M), Ge.success(n("testingEditor.compilationOk")));
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(xn, { children: n("bottomPanel.editCodeAction") }),
    /* @__PURE__ */ m(sc, { children: [
      /* @__PURE__ */ m(B, { gap: 10, children: [
        /* @__PURE__ */ r(
          ee,
          {
            model: f,
            checkTrigger: "change",
            formValue: s,
            ref: d,
            onChange: (M) => v({ name: M.name }),
            children: /* @__PURE__ */ r(ee.Control, { name: "name", style: { width: "100%" } })
          }
        ),
        /* @__PURE__ */ r(
          Cn,
          {
            beginContextLine: h,
            endContextLine: "}",
            source: l ?? "",
            onSave: y,
            onClose: w,
            onCompile: A,
            compact: !0
          }
        )
      ] }),
      /* @__PURE__ */ r(
        oc,
        {
          value: s.actionParameters,
          onChange: (M) => v({ actionParameters: M })
        }
      )
    ] })
  ] });
}, sc = p(ne)`
  gap: 20px;
  flex: 1;
  min-height: 0;
`, cc = (t) => {
  let e = "@param {} args - the action arguments.";
  return t != null && t.length && (e = `@param {{${t.map(([o, i]) => `${o}: ${i}`).join(", ")}}} args - the action parameters.`), `/**
 * @param {ActionEventArgs} e - the action arguments.
 * ${e}
 */
async function Action (e, args) {`;
}, lc = ({ editableProperty: t, onClose: e }) => {
  const n = (a) => {
    t.setComputeCode(a, "function");
  }, o = `/**
 * @param {IFormData} form
 * @return {${t.annotation.type}}
 */
function Calculation (form) {`, i = (a, s) => gi({ fnSource: a }, s);
  return /* @__PURE__ */ r(
    Cn,
    {
      beginContextLine: o,
      endContextLine: "}",
      source: t.getComputeCode("function"),
      onSave: n,
      onClose: e,
      onCompile: i
    },
    t.annotation.key
  );
}, yn = ({ label: t, items: e, style: n, ...o }) => /* @__PURE__ */ m(dc, { style: n, children: [
  !!t && /* @__PURE__ */ r("label", { children: t }),
  /* @__PURE__ */ r(qi, { ...o, size: "xs", inline: !0, appearance: "picker", children: e == null ? void 0 : e.map(({ value: i, label: a }, s) => /* @__PURE__ */ r(Ji, { value: i, children: a ?? i }, s)) })
] }), dc = p.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  .rs-radio-group {
    width: 100%;
    justify-content: space-evenly;
  }

  .rs-radio-group-picker .rs-radio-inline {
    padding: 0;
  }

  .rs-radio-checker {
    min-height: 27px;
    max-height: 27px;
    margin: 0 7px !important;

    label {
      line-height: 14px !important;
      padding: 4px 0 !important;
    }
  }
`, Sn = ({ width: t, ...e }) => /* @__PURE__ */ r(Xi, { ...e, style: { width: t } }), uc = ({ value: t, onSelect: e }) => {
  const { availableLanguages: n } = x(), o = F(() => n.reduce((s, c) => (s[c.fullCode] = c, s), {}), [n]), i = Object.entries(o).map(([s, { code: c }]) => ({ value: s, label: rr(c) }));
  return /* @__PURE__ */ r(
    hc,
    {
      value: t,
      data: i,
      onSelect: (s) => e(o[s]),
      cleanable: !1,
      placement: "autoVerticalEnd",
      size: "sm",
      searchable: !1,
      width: 62,
      renderMenuItem: (s, { value: c }) => !!c && Ir(o[c])
    }
  );
}, Br = C("LocalizationPicker", uc), Ir = (t) => {
  const { name: e, code: n } = t;
  return /* @__PURE__ */ m(mc, { children: [
    /* @__PURE__ */ r("label", { children: rr(n) }),
    e
  ] });
}, mc = p.div`
  display: flex;
  gap: 10px;

  label {
    min-width: 20px;
    text-align: center;
    font-weight: bold;
  }
`, hc = p(Sn)`
  .rs-picker-toggle-value {
    color: var(--rs-btn-default-text) !important;
    line-height: 22px;
  }

  .rs-picker-toggle {
    background-color: var(--rs-btn-default-bg) !important;
    border: none;
    min-width: 30px;
  }
`, pc = ({ editableProperty: t, onClose: e }) => {
  const n = P("common"), o = fi(`${t.componentKey}_${t.annotation.key}`), i = x(), a = K({}), [s, c] = S(i.localizationLanguage), l = F(() => t.getComputeCode("localization", { langCode: s.fullCode }), [t, s]), [u, d] = S(l);
  L(() => {
    d(l);
  }, [l, s, t]);
  const h = () => {
    var A, M;
    const y = (M = (A = a.current).test) == null ? void 0 : M.call(A);
    y != null && y.error || y != null && y.exceptions || Ae(() => t.setComputeCode(u, "localization", { langCode: s.fullCode }))();
  }, f = `${o} =`, v = "", w = b(
    (y) => vi({
      localizationStringId: o,
      localization: u,
      data: bi(y.data),
      language: s
    }),
    [o, u, s]
  );
  return /* @__PURE__ */ m(ne, { style: { minHeight: 0, flex: 1 }, children: [
    /* @__PURE__ */ m(B, { gap: 10, style: { minHeight: 0, minWidth: 0, flex: 1.5 }, children: [
      /* @__PURE__ */ r(
        Ie,
        {
          language: gt,
          initialValue: l,
          beginContextLine: f,
          endContextLine: v,
          canEditBeginContextLine: !0,
          onChange: d
        },
        `${t.annotation.key}_${s.fullCode}`
      ),
      /* @__PURE__ */ m(fc, { children: [
        /* @__PURE__ */ m(oe, { size: "sm", children: [
          /* @__PURE__ */ r(z, { appearance: "primary", onClick: h, children: n("save") }),
          /* @__PURE__ */ r(z, { appearance: "ghost", onClick: e, children: n("close") })
        ] }),
        /* @__PURE__ */ r(Br, { value: s.fullCode, onSelect: c })
      ] })
    ] }),
    /* @__PURE__ */ r(Or, { testingFunction: w, ref: a })
  ] });
}, gc = C("LocalizationEditor", pc), fc = p.div`
  display: flex;
  gap: 10px;
  align-items: center;
`, vc = ({ editableProperty: t, onClose: e }) => {
  const { t: n } = O();
  return /* @__PURE__ */ m(B, { children: [
    /* @__PURE__ */ r(bc, { children: n("bottomPanel.simpleValueHint") }),
    /* @__PURE__ */ m(oe, { size: "sm", children: [
      /* @__PURE__ */ r(z, { appearance: "ghost", onClick: t.disableCompute, children: n("common.save") }),
      /* @__PURE__ */ r(z, { appearance: "ghost", onClick: e, children: n("common.close") })
    ] })
  ] });
}, bc = p.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`, wc = {
  function: lc,
  localization: gc,
  simpleValue: vc
}, Cc = ({ property: t }) => {
  const e = x(), { t: n } = O(), o = t.getComputeType() ?? "simpleValue", [i, a] = S(o), { annotation: s, componentKey: c } = t, l = wc[i], u = yc(s, n), d = b(() => e.currentEditable = void 0, [e]);
  return L(() => a(o), [o]), /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ m(xn, { children: [
      `${n("bottomPanel.editProperty")}: ${c}.${s.name}`,
      u.length && /* @__PURE__ */ r(
        yn,
        {
          value: i,
          label: "Use",
          items: u,
          style: { flex: 0 },
          onChange: (h) => a(h)
        }
      )
    ] }),
    /* @__PURE__ */ r(l, { editableProperty: t, onClose: d })
  ] });
}, xc = C("ComputedPropertyEditor", Cc), yc = ({ calculable: t, localizable: e }, n) => [
  ...t ? ["function"] : [],
  ...e ? ["localization"] : [],
  ...t || e ? ["simpleValue"] : []
].map((o) => ({ label: n(`bottomPanel.${o}`), value: o })), Sc = (t) => {
  const { t: e } = O(), n = x(), o = t.functionSignature, i = "}", a = b(() => n.currentEditable = void 0, [n]), s = b((c) => {
    const l = `${o}
${c}
${i}`;
    try {
      return Ko(l), Ge.success(e("testingEditor.compilationOk"));
    } catch (u) {
      return Ge.error([u]);
    }
  }, [o, i, e]);
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ m(xn, { children: [
      e("validation.editCustomValidationCode"),
      " '",
      t.editorKey,
      "'"
    ] }),
    /* @__PURE__ */ r(
      Cn,
      {
        beginContextLine: o,
        endContextLine: i,
        source: t.code,
        onSave: t.onSave,
        onClose: a,
        onCompile: s,
        compact: !0
      },
      t.editorKey
    )
  ] });
}, kc = C("CustomValidationCodeEditor", Sc), Lc = () => {
  const t = x(), { currentEditable: e, bottomPanelHeight: n } = t;
  let o = null;
  return e instanceof Pr && (o = /* @__PURE__ */ r(ac, { ...e })), e instanceof Er && (o = /* @__PURE__ */ r(xc, { property: e })), e instanceof Ar && (o = /* @__PURE__ */ r(kc, { ...e })), o ? /* @__PURE__ */ r(ca, { ...{
    className: Ac,
    enable: { top: !0 },
    onResizeStop: (a, s, c, l) => t.bottomPanelHeight += l.height,
    defaultSize: { width: "initial", height: n },
    minHeight: 250,
    maxHeight: "92vh"
  }, children: o }) : null;
}, Ec = C("BottomPanel", Lc), Ac = Xe`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 980px;
  padding: 10px;
  gap: 10px;
  box-shadow: 0 -5px 20px 0 rgb(0 0 0 / 15%);
`;
var $e;
class Pc {
  /**
   * Creates {@LocalStorageSynchronizer}.
   * @param builderStore the form builder settings.
   */
  constructor(e) {
    re(this, $e, void 0);
    /**
     * Releases allocated resources, must be used when destroying an object instance.
     */
    k(this, "dispose", () => {
      U(this, $e).forEach((e) => e());
    });
    k(this, "getItem", (e, n) => localStorage.getItem(e) ?? n);
    k(this, "updateItem", (e, n) => {
      if (typeof n > "u") {
        localStorage.removeItem(e);
        return;
      }
      localStorage.setItem(e, n);
    });
    const n = "resolution";
    e.viewMode = this.getItem(n, yr);
    const o = "openedPanels";
    e.openedPanels = In(this.getItem(o)) ?? Sr;
    const i = "bottomPanelHeight";
    e.bottomPanelHeight = In(this.getItem(i)) ?? kr;
    const a = "theme";
    e.theme = this.getItem(a, xr()) === "dark" ? "dark" : "light";
    const s = "testingAutorun";
    e.testingAutorun = this.getItem(s) === "true";
    const c = "LocalStorageSynchronizer", l = "formName", u = this.getItem(l);
    u && (e.activeFormName = u);
    const d = "i18nextLng", h = this.getItem(d);
    if (h) {
      const f = e.availableLanguages.find((v) => v.fullCode === h);
      e.changeLanguage(f ?? e.defaultLanguage);
    }
    ve(this, $e, [
      we(
        () => this.updateItem(n, e.viewMode),
        { name: be(c, "saveResolution") }
      ),
      we(
        () => this.updateItem(o, JSON.stringify(e.openedPanels)),
        { name: be(c, "saveOpenedPanels") }
      ),
      we(
        () => this.updateItem(i, e.bottomPanelHeight),
        { name: be(c, "saveBottomPanelHeight") }
      ),
      we(
        () => this.updateItem(a, e.theme),
        { name: be(c, "saveTheme") }
      ),
      we(
        () => this.updateItem(s, e.testingAutorun),
        { name: be(c, "saveTestingAutorunSetting") }
      ),
      we(
        () => this.updateItem(l, e.activeFormName),
        { name: be(c, "saveFormName") }
      )
    ]);
  }
}
$e = new WeakMap();
const [
  /**
   * **Internal use only.**
   */
  Mc,
  /**
   * **Internal use only.**
   */
  Dr
] = sn("TooltipPlacementContext");
function Tc(t, e) {
  if (!t || !e)
    return { display: "none" };
  const { x: n, y: o } = e, i = `translate(${n}px, ${o}px)`;
  return {
    transform: i,
    WebkitTransform: i
  };
}
const $c = () => {
  const t = x().selected.size > 1, { isDragging: e, initialOffset: n, currentOffset: o } = tt((i) => ({
    item: i.getItem(),
    initialOffset: i.getInitialSourceClientOffset(),
    currentOffset: i.getClientOffset(),
    isDragging: i.isDragging()
  }));
  return e ? /* @__PURE__ */ r(Oc, { children: /* @__PURE__ */ r(jc, { className: W({ isMultiSelection: t }), style: Tc(n, o), id: "fb-drag-preview" }) }) : null;
}, Oc = p.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`, jc = p.div`
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 35%);
  width: fit-content;

  &, & > *, &::before, &::after {
    background-color: white;
    border-radius: 5px;
  }

  &.isMultiSelection {
    & > *, &::before, &::after {
      box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
    }

    &::before, &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 7px;
      top: 5px;
      z-index: -1;
    }

    &::after {
      left: 12px;
      top: 10px;
      z-index: -2;
    }
  }

  .rs-theme-dark & {
    &, & > *, &::before, &::after {
      background-color: #414549;
    }
  }
`, Rc = () => {
  const { t } = O(), e = x(), n = e.availableLanguages.map((o) => /* @__PURE__ */ r(
    j.Item,
    {
      eventKey: o.fullCode,
      onSelect: () => e.changeLanguage(o),
      children: Ir(o)
    },
    o.fullCode
  ));
  return /* @__PURE__ */ r(j.Menu, { title: t("leftMenu.translation"), icon: /* @__PURE__ */ r(R, { icon: Ga }), children: n });
}, Fc = C("MenuLanguageSwitch", Rc), Nr = {
  [se.LTR]: () => import("./rsuite-no-reset.min-b3ffcb2b.js"),
  [se.RTL]: () => import("./rsuite-no-reset-rtl.min-10caee1e.js"),
  common: () => import("./formengine-rsuite-763d9d03.js")
}, zc = async (t) => {
  const e = (await Nr[t]()).default;
  await qo(`rsuite-${t}-css`, e, "stylesheet");
  const n = t === se.LTR ? se.RTL : se.LTR;
  wi(`rsuite-${n}-css`);
}, Bc = async () => {
  const t = (await Nr.common()).default;
  await qo("form-engine-css", t, "stylesheet");
}, Ic = (t) => {
  const e = x(), { bidi: n } = e.formBuilderLanguage, o = e.componentsLocale ?? xs, i = e.isRTL ? $n.RTL : $n.LTR;
  return L(() => {
    zc(n).catch(console.error);
  }, [n]), L(() => {
    Bc().catch(console.error);
  }, []), /* @__PURE__ */ r(Ma, { value: i, children: /* @__PURE__ */ r(Yi, { rtl: e.isRTL, locale: o, theme: e.theme, children: t.children }) });
}, Dc = C("LocalizationProvider", Ic), Nc = "optimajet-formbuilder", Vc = p.div`
  height: 100%;
`, _c = (t) => /* @__PURE__ */ r(Vc, { className: Nc, children: t.children }), Hc = C("StylesProvider", _c);
class Wc {
  constructor(e, n, o) {
    this.store = e, this.builderStore = n, this.localStorageSynchronizer = o;
  }
  dispose() {
    this.localStorageSynchronizer.dispose(), this.builderStore.dispose(), this.store.dispose();
  }
}
const Zc = (t) => b(() => {
  const { builderRef: e, ...n } = t, o = new Si(new ki(n)), i = new $s(o, t);
  i.changeBuilderMode("builder");
  const a = new Pc(i);
  return new Wc(o, i, a);
}, [t]), Uc = ({ children: t, props: e }) => {
  const { builderRef: n, ...o } = e, i = Zc(e), a = Ci(i), s = a == null ? void 0 : a.builderStore, c = a == null ? void 0 : a.store;
  return xi(s, n), L(() => {
    s && (s.activeFormName || (s.activeFormName = e.formName));
  }, [s, e.formName]), L(() => {
    c && c.formViewerPropsStore.applyProps(o);
  }, [e.initialData, e.view, e.validators, e.formValidators, e.localize, e.language, e.actions]), !s || !c ? null : /* @__PURE__ */ r(Jo, { value: o, children: /* @__PURE__ */ r(vs, { value: s, children: /* @__PURE__ */ r(yi, { value: c, children: /* @__PURE__ */ r(Dc, { children: /* @__PURE__ */ r(Hc, { children: /* @__PURE__ */ r(Dr, { value: "auto", children: /* @__PURE__ */ m(Ha, { backend: Za, children: [
    t,
    /* @__PURE__ */ r($c, {})
  ] }) }) }) }) }) }) });
}, Gc = C("BuilderProviders", Uc);
var Pe = /* @__PURE__ */ ((t) => (t.Component = "Component", t.AddedComponent = "AddedComponent", t))(Pe || {});
const Vr = [
  "Component",
  "AddedComponent"
  /* AddedComponent */
], _r = (t) => {
  const e = I(), [n, o, i] = Wa(() => ({
    type: t,
    item: e,
    collect: (a) => ({ isDragging: a.isDragging() })
  }), []);
  return L(() => {
    i(Ua());
  }, [n.isDragging, i]), [n, o];
}, Kc = () => document.getElementById("fb-drag-preview") || document.body, Hr = ({ children: t }) => Ja(/* @__PURE__ */ r(qc, { children: t }), Kc()), qc = p.div`
  display: flex;
  width: 136px;
  height: 34px;
  align-items: center;
  overflow: hidden;

  .rs-theme-dark & {
    background-color: #414549;
  }
`, Jc = (t) => {
  const e = I(), n = e.store, o = e.isRoot, i = !!n.children, { slot: a, slotCondition: s, ...c } = t, l = { isContainer: i, isRoot: o, ...c }, u = `${t.isAfter ? "AFTER" : "BEFORE"} ${n.key}`;
  return /* @__PURE__ */ r(Yc, { className: W({ ...l }), children: /* @__PURE__ */ r(Qc, { children: o || t.isInner ? /* @__PURE__ */ r(Xc, { slot: a, slotCondition: s }) : /* @__PURE__ */ r(el, { className: W(l), children: u }) }) });
}, Xc = ({ slot: t, slotCondition: e }) => {
  const n = x(), o = I();
  return /* @__PURE__ */ r($, { children: /* @__PURE__ */ r(
    H,
    {
      onClick: () => {
        n.showComponentsModal((a) => {
          n.add(a, o, "inner", t, e);
        });
      },
      icon: /* @__PURE__ */ r(Be, {}),
      color: "green",
      appearance: "primary",
      circle: !0,
      size: "xs"
    }
  ) });
}, Yc = p.div`
  opacity: 0;
  display: flex;
  transition: min-height 120ms ease-in-out;
  transition-delay: 70ms;
  min-height: 0;
  justify-content: center;
  align-items: center;

  .isInner & {
    outline: 1px solid var(--rs-btn-default-disabled-text);
  }

  &.isActive, .isInner & {
    min-height: 40px;
    opacity: 1;
    flex: 1;
    width: 100%;
  }

  &.isActive {
    background-color: rgba(0, 116, 255, 0.15);
    outline: 1px solid blue;
  }

  .horizontal > * > &.isContainer:not(.isInner) {
    height: 100%;
    width: 40px;

    &.isAfter {
      inset-inline-start: initial;
      inset-inline-end: 0;
    }
  }

  &.isContainer {
    position: absolute;
    top: 0;
    inset-inline-start: 0;

    &.isAfter {
      top: initial;
      bottom: 0;
    }

    &.isRoot {
      top: 0;
      position: relative;
      max-height: 50px;
    }
  }
`, Qc = p.label`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
`, el = p.label`
  display: none;
  opacity: 0.4;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 12px;
  font-size: 12px;
  overflow: hidden;

  &.isActive, .isInner & {
    display: block;
  }

  .horizontal .isContainer > &:not(.isInner) {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
  }
`, tl = ({ isAfter: t = !1, className: e, isInner: n, ...o }) => {
  const i = I(), a = i.store, s = i.isRoot, c = !!a.children, { slot: l, slotCondition: u } = o, [{ isActive: d, isOver: h }, f] = nl(t, s || n, l), v = { isAfter: t, isActive: d, isContainer: c, isRoot: s, isInner: n }, w = /* @__PURE__ */ r(Jc, { ...v, isOver: h, slot: l, slotCondition: u });
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(ol, { ref: f, ...o, className: W(v, e), children: (s || n) && w }),
    !s && !n && w
  ] });
}, ft = C("DropZone", tl), nl = (t, e, n) => {
  const o = x(), i = I(), a = e ? "inner" : t ? "after" : "before", [{ isActive: s, isOver: c }, l] = mr({
    accept: Vr,
    drop: (u, d) => {
      switch (d.getItemType()) {
        case Pe.AddedComponent:
          o.add(u, i, a, n);
          break;
        case Pe.Component:
          u.store.slot = n, o.selected.size > 1 ? o.multipleMove(i, a) : o.move(u, i, a);
          break;
      }
    },
    collect: (u) => ({
      isOver: u.isOver(),
      isActive: u.isOver() && u.canDrop()
    })
  });
  return [{ isActive: s, isOver: c }, l];
}, ol = p.div`
  position: absolute;
  top: 0;
  height: 50%;
  width: 100%;
  z-index: 10;
  display: flex;

  &.isContainer {
    height: 40px;
    z-index: 9;
  }

  &.isAfter {
    top: 50%;

    &.isContainer {
      top: initial;
      bottom: 0;
    }

    &.isRoot {
      position: relative;
      flex: 1;
    }
  }

  .horizontal > * > & {
    height: 100%;
    width: 50%;
    top: 0;
    inset-inline-start: 0;
  }

  .horizontal > * > & {
    &.isContainer {
      width: 40px;
    }

    &.isAfter {
      inset-inline-start: 50%;

      &.isContainer {
        inset-inline-start: initial;
        inset-inline-end: 0;
      }
    }
  }

  &.isInner {
    position: relative;
    top: 0;
    padding: 10px;
    min-height: 40px;
  }
`, rl = () => {
  var o, i, a, s;
  const { viewMode: t } = x(), { css: e } = I().store, n = ((i = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.object) == null ? void 0 : i.flexDirection) ?? ((s = (a = e == null ? void 0 : e.any) == null ? void 0 : a.object) == null ? void 0 : s.flexDirection) ?? "";
  return ["row", "row-reverse", "initial"].includes(n);
}, il = ({ children: t, isInner: e, className: n, isTree: o, ...i }) => {
  const { key: a, isRoot: s, model: c } = I(), l = c.kind === "container", u = rl(), d = !o && u, [{ isActive: h, isDragging: f }, v] = al(), { isDragging: w } = tt((A) => ({ isDragging: A.isDragging() }));
  return /* @__PURE__ */ m($, { children: [
    f && /* @__PURE__ */ r(Hr, { children: /* @__PURE__ */ r(cl, { children: a }) }),
    /* @__PURE__ */ m(
      ll,
      {
        ref: v,
        ...i,
        className: W(n, { isActive: h, isContainer: l, isRoot: s, isInner: e, isDraggingCurrent: f, horizontal: d }),
        children: [
          !o && /* @__PURE__ */ r(sl, {}),
          w && !s && !e && /* @__PURE__ */ r(ft, {}),
          t,
          w && !s && /* @__PURE__ */ r(ft, { isAfter: !e && !0, isInner: e })
        ]
      }
    )
  ] });
}, Wr = C("Draggable", il), al = () => {
  const t = K(null), e = I(), [n, o] = mr({
    accept: Vr,
    canDrop: (c) => e.store.key !== c.store.key,
    collect: (c) => ({
      isOver: c.isOver(),
      canDrop: c.canDrop(),
      isActive: c.isOver() && c.canDrop()
    })
  }, []), [i, a] = _r(Pe.Component), s = F(() => ({ ...n, ...i }), [n, i]);
  return o(a(t)), [s, t];
}, sl = p.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
`, cl = p.label`
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, ll = p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: padding-block 200ms ease-in-out;
  transition-delay: 200ms;

  &.isDraggingCurrent > * {
    opacity: 0.4;
  }

  &.hovered {
    outline: 2px dashed #3498ff !important;
    cursor: pointer !important;
  }

  &.selected {
    outline: 2px solid #3498ff !important;
    cursor: move !important;
  }

  &:not(.isRoot) {
    &.isActive.isContainer {
      padding-block: 40px;
      padding-inline: 5px;
      outline: 1px dashed rgba(0, 116, 255, 0.25);
    }

    .horizontal > &.isActive.isContainer {
      padding-block: 5px !important;
      padding-inline: 40px !important;
    }
  }

  .horizontal > & {
    flex-direction: row;
  }
`, qe = (t) => {
  t.preventDefault(), t.stopPropagation();
}, Zr = ({ hint: t, children: e, ...n }) => t ? /* @__PURE__ */ r(fe, { hint: t, children: /* @__PURE__ */ r(_n, { ...n, hinted: !0, children: e }) }) : /* @__PURE__ */ r(_n, { ...n, children: e }), fe = ({ hint: t, children: e, ...n }) => {
  const o = Mc(), i = n.placement ?? o;
  return t ? /* @__PURE__ */ r(le, { speaker: /* @__PURE__ */ r(Re, { children: t }), placement: i, trigger: "hover", children: e }) : /* @__PURE__ */ r($, { children: e });
}, kn = ({ hint: t, hintPlacement: e, ...n }) => /* @__PURE__ */ r(fe, { hint: t, placement: e ?? "bottom", children: /* @__PURE__ */ r(H, { ...n, size: "xs" }) }), _n = p.label`
  min-width: 80px;

  ${({ hinted: t }) => t && `
    :hover {
      text-decoration: underline;
      text-decoration-style: dotted;
    }
  `};
`, nt = () => {
  const t = x(), e = I(), { isDragging: n } = tt((d) => ({ isDragging: d.isDragging() })), [o, i] = S(!1), a = t.selected.has(e), s = b((d) => {
    qe(d), t.selectNode(e, d.ctrlKey || d.shiftKey);
  }, [e, t]), c = b((d) => {
    qe(d), i(!0);
  }, []), l = b(() => {
    i(!1);
  }, []), u = F(() => W({
    hovered: o && !a && !n,
    selected: a && !n
  }), [o, a, n]);
  return [{ hovered: o, selected: a }, { onClick: s, onMouseOver: c, onMouseOut: l }, u];
}, dl = () => {
  const t = x(), e = I(), n = P("componentToolbar"), o = K(null), i = (s) => {
    var c;
    (c = o.current) == null || c.close(), t.showComponentsModal((l) => {
      t.add(l, e, s);
    });
  }, a = /* @__PURE__ */ r(ml, { arrow: !1, children: /* @__PURE__ */ m(hl, { children: [
    /* @__PURE__ */ r(pl, { children: n("add") }),
    /* @__PURE__ */ m(oe, { vertical: !0, children: [
      /* @__PURE__ */ r(
        H,
        {
          onClick: () => i("before"),
          icon: /* @__PURE__ */ r(Ta, {}),
          size: "xs",
          appearance: "primary",
          children: n("before")
        }
      ),
      /* @__PURE__ */ r(
        H,
        {
          onClick: () => i("after"),
          icon: /* @__PURE__ */ r($a, {}),
          size: "xs",
          appearance: "primary",
          children: n("after")
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ r($, { children: /* @__PURE__ */ r(le, { placement: t.isRTL ? "right" : "left", speaker: a, ref: o, enterable: !0, trigger: "hover", children: /* @__PURE__ */ r(Be, {}) }) });
}, ul = C("AddButton", dl), ml = p(hn)`
  transform: translateX(24px) !important;
  padding: 8px !important;
  border-radius: 14px !important;
`, hl = p.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`, pl = p.p`
  width: 48px;
  font-weight: bolder;
  line-height: 1.9;
  text-align: center;
  margin-inline-start: 8px;
`, gl = ({ compact: t }) => {
  const e = x(), n = I(), [{ selected: o }] = nt(), i = K(null), a = P("toolbar"), s = b((l) => {
    qe(l), e.clone(n);
  }, [n, e]), c = b((l) => {
    qe(l), e.remove(n);
  }, [n, e]);
  return L(() => {
    !t && o && i.current && hr(i.current, { scrollMode: "if-needed" });
  }, [o, t]), /* @__PURE__ */ m(fl, { ref: i, className: W({ compact: t }, "Toolbar"), children: [
    !t && /* @__PURE__ */ m(vl, { children: [
      n.store.key,
      /* @__PURE__ */ r("label", { children: ` (${n.store.type})` })
    ] }),
    /* @__PURE__ */ r(ul, {}),
    !n.isRoot && /* @__PURE__ */ m($, { children: [
      /* @__PURE__ */ r(fe, { hint: a("cloneComponent"), placement: "autoVertical", children: /* @__PURE__ */ r(R, { onClick: s, icon: Xa }) }),
      /* @__PURE__ */ r(fe, { hint: a("removeComponent"), placement: "autoVertical", children: /* @__PURE__ */ r(R, { onClick: c, icon: Ya }) })
    ] })
  ] });
}, Ur = C("Toolbar", gl), fl = p.div`
  inset: initial;
  right: 5px;
  top: -13px;

  &.compact {
    top: 8px;
  }

  position: absolute;
  z-index: 11;
  color: var(--rs-btn-ghost-text);
  cursor: pointer !important;
  white-space: nowrap;
  border-radius: 5px;
  height: 20px;
  width: fit-content;
  padding-inline: 5px;
  font-weight: 400;
  font-size: 14px;
  background-color: white;

  .rs-theme-dark & {
    background-color: #3b3f43;
  }

  display: flex;
  gap: 5px;
  align-items: center;

  & > .rs-icon {
    cursor: pointer;
  }
`, vl = p.label`
  display: inline;
  cursor: move;
`, Gr = "children";
function Hn(t) {
  return t.slot ?? Gr;
}
function bl(t, e, n) {
  var f;
  const o = e.children, i = {}, s = t.getComponentMetadata(e.model.type).properties.filter(Ei), c = Sl(e);
  s.push(...c);
  const l = ((f = e.store.children) == null ? void 0 : f.filter((v) => On(v, n)).map(Hn)) ?? [], u = s.filter((v) => !l.includes(v.key)), d = Ai(o, (v) => Hn(v.store)), h = (v) => On(v.store, n);
  for (const [v, w] of Object.entries(d)) {
    const y = w.filter(h);
    y.length && (i[v] = /* @__PURE__ */ r(dn, { data: y }));
  }
  return u.forEach((v) => {
    var Q;
    const w = t.viewer, y = w.localizeComponent.bind(w, "component"), A = new Pi(e, w, y, () => ({})), M = (Q = v == null ? void 0 : v.slotConditionBuilder) == null ? void 0 : Q.call(v, A.propsWithoutChildren), q = v.key === Gr ? void 0 : v.key;
    i[v.key] = /* @__PURE__ */ r(ft, { isInner: !0, slot: q, slotCondition: M });
  }), i;
}
const wl = ({ children: t, ...e }) => {
  const o = D().parentStore ? Li : yl;
  return /* @__PURE__ */ r(o, { children: t, ...e });
}, Cl = C("EditableWrapper", wl), xl = ({ children: t, className: e }) => {
  const [{ selected: n }, o, i] = nt(), { isDragging: a } = tt((c) => ({ isDragging: c.isDragging() })), s = n && !a && /* @__PURE__ */ r($, { children: /* @__PURE__ */ r(Ur, {}) });
  return /* @__PURE__ */ m(Wr, { ...o, className: W(i, e), children: [
    t,
    s
  ] });
}, yl = C("Editable", xl);
function Sl(t) {
  var o;
  if (!(t.field instanceof Mi))
    return [];
  const e = (o = t.field.viewerStore.form.componentTree.store.children) == null ? void 0 : o.filter((i) => i.type === Ti.type), n = e == null ? void 0 : e.reduce((i, a) => (i[a.key] = $i, i), {});
  return Oi(n);
}
function Ln(t) {
  return F(() => ma(t), [t]).get();
}
const kl = ({ className: t }) => {
  const e = I(), { expanded: n, viewer: o } = x(), [i, a] = S(!1), [{ selected: s }] = nt(), c = K(null), l = b(
    () => ji(o.form.componentTree, e) || 0,
    [e, o.form.componentTree]
  ), u = Ln(l), d = n.has(e), h = b(() => {
    n.has(e) ? n.delete(e) : n.add(e);
  }, [e, n]), f = b(() => a(!0), []), v = b(() => a(!1), []);
  return L(() => {
    s && c.current && hr(c.current, { scrollMode: "if-needed" });
  }, [s]), /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ m(
      Al,
      {
        className: t,
        ref: c,
        onMouseEnter: f,
        onMouseLeave: v,
        children: [
          /* @__PURE__ */ r(El, { depth: u, children: e.store.children && /* @__PURE__ */ r(fn, { onClick: h, as: d ? et : Oa, style: { cursor: "pointer" } }) }),
          /* @__PURE__ */ r("div", { children: e.key }),
          /* @__PURE__ */ r("label", { children: e.model.name }),
          i && /* @__PURE__ */ r(Ur, { compact: !0 })
        ]
      }
    ),
    d && e.children && /* @__PURE__ */ r(dn, { data: e.children })
  ] });
}, Ll = C("TreeNode", kl), El = p.div`
  min-width: ${({ depth: t }) => 14 * (t + 1) + 14}px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-inline-end: 4px;
`, Al = p.div`
  display: flex;
  flex: 1;
  justify-content: start;
  flex-direction: row;
  padding-block: 8px;
  padding-right: 8px;

  label {
    opacity: 0.4;
    margin-left: 6px;
  }

  &.hovered {
    background-color: var(--rs-listbox-option-selected-bg);
    cursor: pointer !important;
  }

  &.selected {
    background-color: var(--rs-listbox-option-selected-bg);
    color: var(--rs-listbox-option-selected-text);
  }
`, Pl = () => {
  const [t, e, n] = nt();
  return /* @__PURE__ */ r(Wr, { ...e, isTree: !0, style: { width: "100%" }, children: /* @__PURE__ */ r(Ll, { className: n }) });
}, Ml = C("DraggableTreeNode", Pl);
var Wn;
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, vt.apply(this, arguments);
}
var Tl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", vt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Wn || (Wn = /* @__PURE__ */ g.createElement("path", {
    fill: "#9CA3AF",
    fillRule: "evenodd",
    d: "M2.752 18.352a1.2 1.2 0 1 0 1.696 1.696l7.2-7.2a1.2 1.2 0 0 0 0-1.696l-7.2-7.2a1.2 1.2 0 0 0-1.696 1.696L9.103 12l-6.351 6.352Zm9.6 0a1.2 1.2 0 1 0 1.696 1.696l7.2-7.2a1.2 1.2 0 0 0 0-1.696l-7.2-7.2a1.2 1.2 0 1 0-1.696 1.696L18.703 12l-6.351 6.352Z",
    clipRule: "evenodd"
  })));
}, Zn, Un;
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, bt.apply(this, arguments);
}
var $l = function(e) {
  return /* @__PURE__ */ g.createElement("svg", bt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Zn || (Zn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m11 15 2.716-2.716a.402.402 0 0 0 0-.568L11 9"
  })), Un || (Un = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeWidth: 2,
    d: "M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
  })));
}, Gn;
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, wt.apply(this, arguments);
}
var Ol = function(e) {
  return /* @__PURE__ */ g.createElement("svg", wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Gn || (Gn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 6h.02m0 0h17.96M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107.192.377.497.683.874.875.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.875.218-.427.218-.986.218-2.104V7.197c0-.497 0-.883-.02-1.197M3.02 6c.023-.392.077-.67.198-.908.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.121.237.175.516.199.908m0 0H21"
  })));
}, Kn;
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ct.apply(this, arguments);
}
var jl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Ct({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Kn || (Kn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m8 12 3 3 5-6M4 16.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8Z"
  })));
}, qn;
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, xt.apply(this, arguments);
}
var Rl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", xt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), qn || (qn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m4 8 8-4 8 4-8 4-8-4ZM4 12l8 4 8-4M4 16l8 4 8-4"
  })));
}, Jn, Xn;
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, yt.apply(this, arguments);
}
var Fl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", yt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Jn || (Jn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeWidth: 2,
    d: "M3 8.976C3 4.055 4.055 3 8.976 3h6.048C19.945 3 21 4.055 21 8.976v6.048C21 19.945 19.945 21 15.024 21H8.976C4.055 21 3 19.945 3 15.024V8.976Z"
  })), Xn || (Xn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 3v18M21 12h-9"
  })));
}, Yn;
function St() {
  return St = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, St.apply(this, arguments);
}
var zl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", St({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Yn || (Yn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 18H4m16-4H4m16-4H4m16-4H4"
  })));
}, Qn;
function kt() {
  return kt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, kt.apply(this, arguments);
}
var Bl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", kt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Qn || (Qn = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 12h.01m3.525 3.536c-4.686 4.686-10.068 6.902-12.02 4.95-1.953-1.953.263-7.335 4.949-12.021 4.686-4.687 10.068-6.903 12.02-4.95 1.953 1.952-.263 7.334-4.949 12.02Zm0-7.072c4.686 4.687 6.902 10.069 4.95 12.021-1.953 1.953-7.335-.263-12.021-4.95-4.686-4.686-6.902-10.068-4.95-12.02 1.953-1.953 7.335.263 12.021 4.95ZM12.499 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
  })));
}, eo;
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Lt.apply(this, arguments);
}
var Il = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Lt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), eo || (eo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m17 17 5-5-5-5M7 7l-5 5 5 5m7-14-4 18"
  })));
}, to;
function Et() {
  return Et = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Et.apply(this, arguments);
}
var Dl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Et({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), to || (to = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m15 7 5 5-5 5m-6 0-5-5 5-5"
  })));
}, no;
function At() {
  return At = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, At.apply(this, arguments);
}
var Nl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", At({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), no || (no = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m16 10-4 4-4-4"
  })));
}, oo;
function Pt() {
  return Pt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Pt.apply(this, arguments);
}
var Vl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Pt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), oo || (oo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.5 2.003c-.675.009-1.08.048-1.408.215a2 2 0 0 0-.874.874c-.167.328-.206.733-.215 1.408M19.5 2.003c.675.009 1.08.048 1.408.215a2 2 0 0 1 .874.874c.167.328.206.733.215 1.408m0 9c-.009.675-.048 1.08-.215 1.408a2 2 0 0 1-.874.874c-.328.167-.733.206-1.408.215M22 8v2m-8-8h2M5.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 20.48 16 19.92 16 18.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 8 13.92 8 12.8 8H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 9.52 2 10.08 2 11.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 22 4.08 22 5.2 22Z"
  })));
}, ro;
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Mt.apply(this, arguments);
}
var _l = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Mt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), ro || (ro = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v4m-7.621 2.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.409c.068-.646-.386-1.434-1.296-3.01l-4.85-8.4c-.909-1.574-1.364-2.362-1.958-2.626a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625L4.38 15.2Zm7.672.8v.1h-.1V16h.1Z"
  })));
}, io;
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Tt.apply(this, arguments);
}
var Hl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Tt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), io || (io = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 15H4m16 0V7.197c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V15m16 0v1.803c0 1.118 0 1.677-.218 2.104a2.003 2.003 0 0 1-.875.875c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2.001 2.001 0 0 1-.874-.875C4 18.48 4 17.92 4 16.8V15"
  })));
}, ao, so;
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, $t.apply(this, arguments);
}
var Wl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", $t({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), ao || (ao = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeWidth: 2,
    d: "M14 17.5c0-1.404 0-2.107.337-2.611.146-.218.334-.406.552-.552C15.393 14 16.096 14 17.5 14c1.404 0 2.107 0 2.611.337.218.146.406.334.552.552.337.504.337 1.207.337 2.611 0 1.404 0 2.107-.337 2.611a1.999 1.999 0 0 1-.552.552C19.607 21 18.904 21 17.5 21c-1.404 0-2.107 0-2.611-.337a1.999 1.999 0 0 1-.552-.552C14 19.607 14 18.904 14 17.5ZM3 17.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 14 5.096 14 6.5 14c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C10 15.393 10 16.096 10 17.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C8.607 21 7.904 21 6.5 21c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 19.607 3 18.904 3 17.5ZM3 6.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 3 5.096 3 6.5 3c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C10 4.393 10 5.096 10 6.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C8.607 10 7.904 10 6.5 10c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 8.607 3 7.904 3 6.5Z"
  })), so || (so = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 6.5h7M17.5 3v7"
  })));
}, co;
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ot.apply(this, arguments);
}
var Zl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Ot({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), co || (co = /* @__PURE__ */ g.createElement("path", {
    fill: "#9CA3AF",
    fillRule: "evenodd",
    d: "M5.378 2H7.622c.395 0 .751 0 1.047.025.318.026.654.086.983.256a2.5 2.5 0 0 1 1.067 1.067c.17.329.23.665.257.983.024.296.024.652.024 1.047v4.244c0 .395 0 .751-.024 1.047-.027.318-.087.654-.258.983a2.5 2.5 0 0 1-1.066 1.067c-.329.17-.665.23-.983.257C8.373 13 8.017 13 7.622 13H5.378c-.395 0-.751 0-1.047-.024-.318-.027-.654-.087-.983-.258a2.5 2.5 0 0 1-1.067-1.066c-.17-.329-.23-.665-.256-.983C2 10.373 2 10.017 2 9.622V5.378c0-.395 0-.751.025-1.047.026-.318.086-.654.256-.983A2.5 2.5 0 0 1 3.348 2.28c.329-.17.665-.23.983-.256C4.627 2 4.983 2 5.378 2Zm-1.1 2.053-.008.003a.5.5 0 0 0-.214.214l-.003.008a1.278 1.278 0 0 0-.035.219C4 4.698 4 4.97 4 5.414v4.17c0 .444 0 .716.018.919a1.278 1.278 0 0 0 .035.219.5.5 0 0 0 .225.224 1.273 1.273 0 0 0 .219.035c.202.017.474.018.918.018h2.17c.444 0 .716 0 .919-.018a1.273 1.273 0 0 0 .218-.035.5.5 0 0 0 .221-.216l.004-.009a1.28 1.28 0 0 0 .035-.219C9 10.302 9 10.03 9 9.586v-4.17c0-.444 0-.716-.018-.919a1.28 1.28 0 0 0-.035-.218l-.003-.008a.5.5 0 0 0-.214-.214l-.008-.003a1.278 1.278 0 0 0-.219-.035A12.598 12.598 0 0 0 7.586 4h-2.17c-.444 0-.716 0-.919.018a1.278 1.278 0 0 0-.218.035ZM16.378 2h2.244c.395 0 .751 0 1.047.025.318.026.654.086.983.256a2.5 2.5 0 0 1 1.066 1.067c.172.329.231.665.258.983.024.296.024.652.024 1.047v.244c0 .395 0 .751-.024 1.047-.027.318-.086.654-.258.983a2.5 2.5 0 0 1-1.066 1.067c-.329.17-.665.23-.983.256C19.373 9 19.017 9 18.622 9h-2.244c-.395 0-.751 0-1.047-.025-.318-.026-.654-.086-.983-.256a2.5 2.5 0 0 1-1.067-1.067c-.17-.329-.23-.665-.257-.983C13 6.373 13 6.017 13 5.622v-.244c0-.395 0-.751.024-1.047.027-.318.087-.654.258-.983a2.5 2.5 0 0 1 1.066-1.067c.329-.17.665-.23.983-.256C15.627 2 15.983 2 16.378 2Zm-1.1 2.053-.008.003a.5.5 0 0 0-.214.214l-.003.008a1.273 1.273 0 0 0-.035.219C15 4.698 15 4.97 15 5.414v.17c0 .444 0 .716.018.919a1.273 1.273 0 0 0 .035.218l.003.008a.5.5 0 0 0 .222.217 1.282 1.282 0 0 0 .219.035c.202.017.474.018.918.018h2.17c.444 0 .716 0 .919-.018a1.28 1.28 0 0 0 .218-.035.5.5 0 0 0 .221-.217l.004-.008a1.273 1.273 0 0 0 .035-.219C20 6.302 20 6.03 20 5.586v-.17c0-.444 0-.716-.018-.919a1.273 1.273 0 0 0-.035-.218.5.5 0 0 0-.216-.221l-.008-.004a1.278 1.278 0 0 0-.219-.035A12.598 12.598 0 0 0 18.585 4h-2.17c-.444 0-.716 0-.919.018a1.28 1.28 0 0 0-.219.035Zm1.1 6.947h2.244c.395 0 .751 0 1.047.024.318.027.654.087.983.258a2.5 2.5 0 0 1 1.066 1.066c.172.329.231.665.258.983.024.296.024.652.024 1.047v4.244c0 .395 0 .751-.024 1.047-.027.318-.086.654-.258.983a2.5 2.5 0 0 1-1.066 1.066c-.329.172-.665.231-.983.258-.296.024-.652.024-1.047.024h-2.244c-.395 0-.751 0-1.047-.024-.318-.027-.654-.086-.983-.258a2.5 2.5 0 0 1-1.067-1.066c-.17-.329-.23-.665-.257-.983C13 19.373 13 19.017 13 18.622v-4.244c0-.395 0-.751.024-1.047.027-.318.087-.654.258-.983a2.5 2.5 0 0 1 1.066-1.067c.329-.17.665-.23.983-.257.296-.024.652-.024 1.047-.024Zm-1.1 2.053-.008.003a.5.5 0 0 0-.214.214l-.003.008a1.275 1.275 0 0 0-.035.219c-.017.202-.018.474-.018.918v4.17c0 .444 0 .716.018.919a1.273 1.273 0 0 0 .035.218.5.5 0 0 0 .224.224 1.275 1.275 0 0 0 .219.035c.203.018.475.019.919.019h2.17c.444 0 .716 0 .919-.018a1.273 1.273 0 0 0 .218-.035l.008-.003a.5.5 0 0 0 .214-.213l.003-.009a1.273 1.273 0 0 0 .035-.219c.017-.202.018-.474.018-.918v-4.17c0-.444 0-.716-.018-.919a1.275 1.275 0 0 0-.035-.219l-.003-.007a.5.5 0 0 0-.213-.214l-.009-.003a1.273 1.273 0 0 0-.219-.035 12.578 12.578 0 0 0-.918-.018h-2.17c-.444 0-.716 0-.919.018a1.275 1.275 0 0 0-.219.035ZM5.377 15h2.244c.395 0 .751 0 1.047.024.318.027.654.087.983.258a2.5 2.5 0 0 1 1.067 1.066c.17.329.23.665.257.983.024.296.024.652.024 1.047v.244c0 .395 0 .751-.024 1.047-.027.318-.087.654-.258.983a2.5 2.5 0 0 1-1.066 1.066c-.329.172-.665.231-.983.258C8.373 22 8.017 22 7.622 22H5.378c-.395 0-.751 0-1.047-.024-.318-.027-.654-.086-.983-.258a2.5 2.5 0 0 1-1.067-1.066c-.17-.329-.23-.665-.256-.983C2 19.373 2 19.017 2 18.622v-.244c0-.395 0-.751.025-1.047.026-.318.086-.654.256-.983a2.5 2.5 0 0 1 1.067-1.066c.329-.171.665-.231.983-.258C4.627 15 4.983 15 5.378 15Zm-1.1 2.053a.5.5 0 0 0-.221.216l-.004.008a1.28 1.28 0 0 0-.035.219C4 17.7 4 17.971 4 18.415v.17c0 .444 0 .716.018.919a1.278 1.278 0 0 0 .035.218.5.5 0 0 0 .225.224 1.273 1.273 0 0 0 .219.035c.202.018.474.019.918.019h2.17c.444 0 .716 0 .919-.018a1.273 1.273 0 0 0 .218-.035.5.5 0 0 0 .221-.216l.004-.008a1.28 1.28 0 0 0 .035-.219C9 19.3 9 19.029 9 18.585v-.17c0-.444 0-.716-.018-.919a1.282 1.282 0 0 0-.035-.218.5.5 0 0 0-.217-.221l-.008-.004a1.273 1.273 0 0 0-.219-.035A12.578 12.578 0 0 0 7.586 17h-2.17c-.444 0-.716 0-.919.018a1.273 1.273 0 0 0-.218.035Z",
    clipRule: "evenodd"
  })));
}, lo;
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, jt.apply(this, arguments);
}
var Ul = function(e) {
  return /* @__PURE__ */ g.createElement("svg", jt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), lo || (lo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeWidth: 2,
    d: "M14 17.5c0-1.404 0-2.107.337-2.611.146-.218.334-.406.552-.552C15.393 14 16.096 14 17.5 14c1.404 0 2.107 0 2.611.337.218.146.406.334.552.552.337.504.337 1.207.337 2.611 0 1.404 0 2.107-.337 2.611a1.999 1.999 0 0 1-.552.552C19.607 21 18.904 21 17.5 21c-1.404 0-2.107 0-2.611-.337a1.999 1.999 0 0 1-.552-.552C14 19.607 14 18.904 14 17.5ZM14 6.5c0-1.404 0-2.107.337-2.611.146-.218.334-.406.552-.552C15.393 3 16.096 3 17.5 3c1.404 0 2.107 0 2.611.337.218.146.406.333.552.552C21 4.393 21 5.096 21 6.5c0 1.404 0 2.107-.337 2.611a1.999 1.999 0 0 1-.552.552C19.607 10 18.904 10 17.5 10c-1.404 0-2.107 0-2.611-.337a1.999 1.999 0 0 1-.552-.552C14 8.607 14 7.904 14 6.5ZM3 17.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 14 5.096 14 6.5 14c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C10 15.393 10 16.096 10 17.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C8.607 21 7.904 21 6.5 21c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 19.607 3 18.904 3 17.5ZM3 6.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 3 5.096 3 6.5 3c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C10 4.393 10 5.096 10 6.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C8.607 10 7.904 10 6.5 10c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 8.607 3 7.904 3 6.5Z"
  })));
}, uo;
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Rt.apply(this, arguments);
}
var Gl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Rt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), uo || (uo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 19h2m0 0h2m-2 0V5m0 0H6v1m6-1h6v1"
  })));
}, mo;
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ft.apply(this, arguments);
}
var Kl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Ft({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), mo || (mo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 18V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v11.606c0 .485 0 .865-.018 1.174M3 18c0 .988.013 1.506.218 1.907.192.377.497.683.874.875.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218.376-.192.682-.498.874-.875.123-.242.177-.526.2-.93M3 18l4.768-5.563.001-.001c.423-.493.635-.74.886-.83a1 1 0 0 1 .681.005c.25.093.46.343.876.843l2.671 3.205c.386.464.58.696.816.79a1 1 0 0 0 .651.028c.244-.072.46-.287.889-.716l.497-.497c.437-.438.656-.656.904-.728.217-.063.45-.05.659.037.238.099.431.34.818.822l2.865 3.582m0 0L21 19M15 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
  })));
}, ho;
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, zt.apply(this, arguments);
}
var ql = function(e) {
  return /* @__PURE__ */ g.createElement("svg", zt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), ho || (ho = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 4H7.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m-4-9-6 6v3h3l6-6m-3-3 3-3 3 3-3 3m-3-3 3 3"
  })));
}, po;
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Bt.apply(this, arguments);
}
var Jl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Bt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), po || (po = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m19.293 9.951-2.333-2.8c-.353-.423-.53-.635-.746-.787a2.001 2.001 0 0 0-.632-.295C15.327 6 15.052 6 14.502 6H7.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C4 7.52 4 8.08 4 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H14.5c.551 0 .826 0 1.081-.069.226-.06.44-.16.632-.296.216-.152.393-.363.746-.786l2.333-2.8c.608-.729.91-1.093 1.027-1.5.102-.359.102-.74 0-1.098-.116-.407-.42-.77-1.027-1.5Z"
  })));
}, go;
function It() {
  return It = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, It.apply(this, arguments);
}
var Xl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", It({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), go || (go = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m13.795 5.22-.002.002m0 0c3.556-3.555 8.54 1.43 4.985 4.985l-3.039 3.038c-1.74 1.741-3.862 1.355-5.107.099a3.796 3.796 0 0 1-.36-.42m3.521-7.702-.943.943m-2.645 12.218.002-.001m0 0c-3.556 3.555-8.54-1.43-4.985-4.985l3.039-3.039c1.74-1.74 3.862-1.354 5.107-.098.13.13.25.271.36.42m-3.521 7.702.943-.944"
  })));
}, fo;
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Dt.apply(this, arguments);
}
var Yl = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Dt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), fo || (fo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 15h14M5 9h14"
  })));
}, vo;
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Nt.apply(this, arguments);
}
var Ql = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Nt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), vo || (vo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7.5 10.5h.01m4.49 0h.01m4.49 0h.01M9.9 19.2l1.46 1.947c.217.29.326.434.459.486a.5.5 0 0 0 .362 0c.133-.052.242-.197.459-.486L14.1 19.2c.293-.39.44-.586.619-.735a2 2 0 0 1 .822-.412c.226-.053.47-.053.959-.053 1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 15.597 21 14.898 21 13.5V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.7c0 1.398 0 2.097.228 2.648a3 3 0 0 0 1.624 1.624C5.403 18 6.102 18 7.5 18c.489 0 .733 0 .96.053a2 2 0 0 1 .821.412c.18.149.326.344.619.735ZM8 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
  })));
}, bo;
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Vt.apply(this, arguments);
}
var ed = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Vt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), bo || (bo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19.5 9H14v3.5h5V16l-2.129.851a1 1 0 0 1-.742 0L14 16M9.5 16.923H4v-3.5h5v-3.5l-2.129-.851a1 1 0 0 0-.742 0L4 9.923"
  })));
}, wo;
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, _t.apply(this, arguments);
}
var td = function(e) {
  return /* @__PURE__ */ g.createElement("svg", _t({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), wo || (wo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v4m0 0a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 0v4m0 0A1.5 1.5 0 1 0 6.5 19M5 17.5A1.5 1.5 0 0 1 6.5 19m0 0h4m0 0a1.5 1.5 0 0 0 3 0m-3 0a1.5 1.5 0 0 1 3 0m0 0h4m0 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-4-14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  })));
}, Co, xo;
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ht.apply(this, arguments);
}
var nd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Ht({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Co || (Co = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 14a9 9 0 1 0 18 0"
  })), xo || (xo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 5a9 9 0 1 0 0 18"
  })));
}, yo;
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Wt.apply(this, arguments);
}
var od = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Wt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), yo || (yo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  })));
}, So, ko;
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Zt.apply(this, arguments);
}
var rd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Zt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), So || (So = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
  })), ko || (ko = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
  })));
}, Lo;
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ut.apply(this, arguments);
}
var id = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Ut({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Lo || (Lo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m11 2 3 3m0 0-3 3m3-3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 7.28 2 8.12 2 9.8v5.7c0 .464 0 .697.026.892a3 3 0 0 0 2.582 2.582c.195.026.428.026.892.026m4.5 0h7.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 16.72 22 15.88 22 14.2V8.5c0-.464 0-.697-.026-.892a3 3 0 0 0-2.582-2.582C19.197 5 18.964 5 18.5 5M10 19l3 3m-3-3 3-3"
  })));
}, Eo;
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Gt.apply(this, arguments);
}
var ad = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Gt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Eo || (Eo = /* @__PURE__ */ g.createElement("path", {
    fill: "#9CA3AF",
    fillRule: "evenodd",
    d: "M13.174 3.597a3 3 0 0 1 2.279-.281c.34.094.63.258.904.443.26.176.559.41.904.679l.05.04c.347.27.645.502.879.712.246.22.476.462.65.77a3 3 0 0 1 .28 2.278c-.094.34-.258.63-.443.905-.176.26-.409.558-.679.904l-7.103 9.1a28.76 28.76 0 0 0-.053.067c-.333.428-.585.751-.897 1.017a3.999 3.999 0 0 1-.87.563c-.37.176-.768.274-1.294.404l-.084.021-2.125.524c-.147.037-.315.079-.463.101a1.519 1.519 0 0 1-.703-.042 1.5 1.5 0 0 1-.818-.638 1.518 1.518 0 0 1-.211-.672c-.014-.15-.015-.322-.015-.474v-.028l-.007-2.16v-.087c-.002-.542-.004-.952.078-1.354.068-.34.181-.669.335-.98.182-.367.434-.69.768-1.117l.053-.068 7.103-9.1c.27-.345.503-.644.712-.878.221-.246.463-.475.77-.65Zm1.745 1.646a1 1 0 0 0-.76.094c-.039.022-.113.074-.266.245-.158.176-.35.42-.644.798l3.153 2.461c.295-.378.485-.622.618-.819.128-.19.16-.274.173-.317a1 1 0 0 0-.094-.76c-.022-.04-.074-.114-.244-.266a16.92 16.92 0 0 0-.799-.645 16.954 16.954 0 0 0-.82-.618c-.189-.128-.273-.16-.317-.173Zm.252 5.175-3.153-2.461-5.852 7.497c-.41.525-.526.681-.606.843a2 2 0 0 0-.167.49c-.036.176-.04.37-.038 1.036l.006 1.913 1.857-.459c.646-.16.833-.21.996-.288.157-.075.303-.17.435-.282.137-.117.26-.267.67-.791l5.852-7.498ZM12.001 21a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z",
    clipRule: "evenodd"
  })));
}, Ao;
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Kt.apply(this, arguments);
}
var sd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Kt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Ao || (Ao = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
  })));
}, Po;
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, qt.apply(this, arguments);
}
var cd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", qt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Po || (Po = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 20h7.803c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.875.218-.427.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H9m0 16H7.197c-1.118 0-1.678 0-2.105-.218a2.001 2.001 0 0 1-.874-.875C4 18.48 4 17.92 4 16.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H9m0 16V4"
  })));
}, Mo, To;
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Jt.apply(this, arguments);
}
var ld = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Jt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Mo || (Mo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m15.852 7.667-6 6v3h3l6-6m-3-3 3-3 3 3-3 3m-3-3 3 3"
  })), To || (To = /* @__PURE__ */ g.createElement("path", {
    fill: "#9CA3AF",
    fillRule: "evenodd",
    d: "M2.677 6.899c-.325.452-.192 1.08.293 1.405.487.326 1.143.221 1.468-.229C5.382 6.76 6.62 6.07 7.593 6.02c.26-.013.482.025.645.114.124.067.221.181.278.336.246.668-2.962 2.418-4.078 4.198-.662 1.054 1.494 1.595.79 2.57l-.034.049c-.703.977-1.316 1.83-1.659 2.451-.64 1.167-1.203 2.357-1.468 3.377-.188.723 0 1.407.785 1.553.5 0 2-.5 2-.5l2.5-.5c1 0 .863-.8 1.5-1 .746-.234.13-.408 0-.5 0-.235-.377-.352-.754-.468-.41-.127-.819-.254-.746-.532.107-.412-.474-.288-1.038-.167-.605.13-1.191.255-.893-.287.286-.523 1.746-2.597 2.43-3.546.717-.993-1.563-1.38-.861-2.5 2.259-1.774 3.953-3.618 3.517-4.803a2.706 2.706 0 0 0-1.257-1.47c-.532-.294-1.165-.423-1.845-.389-1.537.082-3.41 1.055-4.728 2.894Z",
    clipRule: "evenodd"
  })));
}, $o, Oo;
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Xt.apply(this, arguments);
}
var dd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Xt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), $o || ($o = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.387 7.157 12 12 3.61 7.15M12 12v9"
  })), Oo || (Oo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 2.577a2 2 0 0 1 2 0l6.66 3.846a2 2 0 0 1 1 1.732v7.69a2 2 0 0 1-1 1.732L13 21.423a2 2 0 0 1-2 0l-6.66-3.846a2 2 0 0 1-1-1.732v-7.69a2 2 0 0 1 1-1.732L11 2.577Z"
  })));
}, jo;
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Yt.apply(this, arguments);
}
var ud = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Yt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), jo || (jo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M4 11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2ZM13 11a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2Z"
  })));
}, Ro;
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Qt.apply(this, arguments);
}
var md = function(e) {
  return /* @__PURE__ */ g.createElement("svg", Qt({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Ro || (Ro = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 17h7m5-1h3m0 0h3m-3 0v3m0-3v-3M3 12h11M3 7h11"
  })));
}, Fo;
function en() {
  return en = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, en.apply(this, arguments);
}
var hd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", en({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Fo || (Fo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m0 7a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.05-4v.1h-.1V17h.1Z"
  })));
}, zo;
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, tn.apply(this, arguments);
}
var pd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", tn({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), zo || (zo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m12 6-4 4-4-4M20 14l-4 4-4-4"
  })));
}, Bo;
function nn() {
  return nn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, nn.apply(this, arguments);
}
var gd = function(e) {
  return /* @__PURE__ */ g.createElement("svg", nn({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), Bo || (Bo = /* @__PURE__ */ g.createElement("path", {
    stroke: "#9CA3AF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v8M15 11l-2.913-2.913a.123.123 0 0 0-.174 0L9 11M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"
  })));
};
const Io = {
  Breadcrumb: Tl,
  Button: $l,
  Card: Ol,
  Checkbox: jl,
  CollectionEditor: Rl,
  Container: Fl,
  Content: zl,
  CustomBlock: Bl,
  CustomControl: Il,
  Default: Dl,
  Dropdown: Nl,
  Dropzone: Vl,
  ErrorMessage: _l,
  Grid: Wl,
  GridLayout: Zl,
  GridView: Ul,
  Image: Kl,
  Input: ql,
  Label: Jl,
  Link: Xl,
  Footer: Hl,
  Header: Gl,
  Sidebar: cd,
  Menu: Yl,
  Message: Ql,
  NumberFormat: ed,
  PatternFormat: td,
  ProgressCircle: nd,
  ProgressLine: od,
  RadioGroup: rd,
  Repeater: id,
  RichTextEditor: ad,
  Search: sd,
  Signature: ld,
  StaticContent: dd,
  Tab: ud,
  TextArea: md,
  Tooltip: hd,
  TreePicker: pd,
  Uploader: gd
}, fd = ({ draggable: t = !0, onAdd: e }) => {
  const n = I(), { name: o = "", icon: i } = n.model, a = da(ir(ua(o)), " ", ""), s = i ?? Io[a] ?? Io.Default, l = /* @__PURE__ */ m(wd, { onClick: (u) => {
    u.stopPropagation(), e == null || e(n);
  }, children: [
    /* @__PURE__ */ r(s, { width: 18, height: 18, viewBox: "0 0 24 24" }),
    /* @__PURE__ */ r("label", { children: o })
  ] });
  return t ? /* @__PURE__ */ r(bd, { children: l }) : l;
}, vd = C("AddedComponent", fd), bd = ({ children: t }) => {
  const [{ isDragging: e }, n] = _r(Pe.AddedComponent);
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(Cd, { ref: n, children: t }),
    e && /* @__PURE__ */ r(Hr, { children: t })
  ] });
}, wd = p.div`
  display: flex;
  padding: 7px;
  gap: 6px;
  min-width: 150px;
  flex: 1;
  max-width: 125px;
  border-radius: 6px;
  background-color: var(--rs-btn-default-bg);
  font-size: 13px;

  &:hover {
    box-shadow: var(--rs-state-focus-shadow);
  }

  &:active, &:focus {
    outline: 2px solid var(--rs-btn-primary-bg);
  }

  .rs-theme-dark & label {
    opacity: 0.6;
  }
`, Cd = p.div`
  cursor: grab;
  flex: 1;

  & > div {
    height: 100%;
    min-width: 123px;
    max-width: initial;
  }
`, xd = N("LocalizationSelect", (t) => {
  const e = x(), n = D(), o = (i) => {
    n.selectedLanguage = i, e.localizationLanguage = i;
  };
  return /* @__PURE__ */ r(Br, { value: e.localizationLanguage.fullCode, onSelect: o, ...t });
}), yd = ({ onClose: t }) => {
  const e = x(), n = b(() => {
    const a = [];
    return e.errorMap.forEach((s, c) => {
      Object.entries(s).forEach(([l, u]) => {
        u && a.push({ component: c, property: l, message: u });
      });
    }), a;
  }, [e.errorMap]), o = Ln(n);
  L(() => {
    e.validate().catch(console.error);
  }, [e]);
  const i = (a) => {
    t(), e.selectNode(a);
  };
  return /* @__PURE__ */ m(Fe, { height: 400, data: o, children: [
    /* @__PURE__ */ m(dt, { width: 220, align: "center", fixed: !0, children: [
      /* @__PURE__ */ r(ut, { children: "Component" }),
      /* @__PURE__ */ r(mt, { children: (a) => /* @__PURE__ */ r("a", { onClick: () => i(a.component), children: a.component.key }) })
    ] }),
    /* @__PURE__ */ m(dt, { width: 150, children: [
      /* @__PURE__ */ r(ut, { children: "Property" }),
      /* @__PURE__ */ r(mt, { dataKey: "property" })
    ] }),
    /* @__PURE__ */ m(dt, { width: 450, children: [
      /* @__PURE__ */ r(ut, { children: "Error message" }),
      /* @__PURE__ */ r(mt, { dataKey: "message" })
    ] })
  ] });
}, Sd = C("PropertyErrors", yd), kd = () => {
  const { t } = O(), [e, n] = Yo((o) => !o, !1);
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(le, { speaker: /* @__PURE__ */ r(Re, { children: t("validation.showFormErrors") }), placement: "bottom", children: /* @__PURE__ */ r(Ld, { onClick: n, icon: /* @__PURE__ */ r(ja, {}), circle: !0 }) }),
    /* @__PURE__ */ m(_, { open: e, size: "full", backdrop: !0, children: [
      /* @__PURE__ */ r(_.Header, { closeButton: !0, onClose: n, children: /* @__PURE__ */ r(_.Title, { children: t("validation.formErrors") }) }),
      /* @__PURE__ */ r(_.Body, { children: /* @__PURE__ */ r(Qi, { style: { marginRight: 0 }, children: /* @__PURE__ */ r(ea, { md: 14, children: /* @__PURE__ */ r(Sd, { onClose: n }) }) }) })
    ] })
  ] });
};
C("ErrorsPanel", kd);
const Ld = p(H)`
  padding: 5px !important;
`, ot = () => {
  const [t, e] = S(), n = ta();
  return L(() => {
    if (!t)
      return;
    const o = t.placement || "bottomEnd", i = t.type || "info";
    n.push(/* @__PURE__ */ r(mn, { type: i, title: t.title, children: t.message }), {
      placement: o
    }), e(void 0);
  }, [t, n]), e;
}, on = ".json";
async function Ed(t, e) {
  const n = await t.getFormKeys(), o = new pr();
  for (const a of n) {
    const s = await t.getStoredFormJson(a);
    o.file(`${a}${on}`, s);
  }
  const i = await o.generateAsync({ type: "blob" });
  ns(i, e);
}
async function Ad(t, e) {
  const o = (await pr.loadAsync(e)).filter((a) => a.endsWith(on)), i = [];
  for (const a of o) {
    const s = a.name.slice(0, -on.length), c = await a.async("string");
    i.push([s, c]);
  }
  for (const a of i)
    await t.saveForm(a[0], a[1]);
}
const Kr = () => {
  const t = x(), { t: e } = O(), n = ot();
  return (o) => {
    t.save(o).then(() => n({ type: "success", message: e("leftMenu.formSaved") })).catch((i) => {
      console.error(i), n({ type: "error", message: e("leftMenu.formSaveError") });
    });
  };
}, Pd = () => {
  const t = x(), { t: e } = O(), n = ot(), o = () => {
    Ed(t, "forms.zip").then(() => n({ type: "success", message: e("leftMenu.exportFormsSuccess") })).catch((i) => {
      console.error(i), n({ type: "error", message: e("leftMenu.exportFormsError") });
    });
  };
  return /* @__PURE__ */ r(j.Item, { onSelect: o, icon: /* @__PURE__ */ r(Ra, {}), children: e("leftMenu.exportForms") });
}, Md = C("ExportFormsButton", Pd), Td = () => {
  const t = x(), { t: e } = O(), n = ot(), o = () => {
    Ps(
      (i) => {
        i.then((a) => Ad(t, a)).then(() => n({ type: "success", message: e("leftMenu.importFormsSuccess") })).catch((a) => {
          console.error(a), n({ type: "error", message: e("leftMenu.importFormsError") });
        });
      }
    );
  };
  return /* @__PURE__ */ r(j.Item, { onSelect: o, icon: /* @__PURE__ */ r(Fa, {}), children: e("leftMenu.importForms") });
}, $d = C("ImportFormsButton", Td), Od = Y("MainMenu_Button", (t) => /* @__PURE__ */ r("div", { ...t })), jd = (t, e) => /* @__PURE__ */ r(Od, { children: /* @__PURE__ */ r(
  H,
  {
    icon: /* @__PURE__ */ r(R, { icon: Ka }),
    ...t,
    ref: e,
    size: "sm",
    appearance: "primary"
  }
) }), Rd = Y("MainMenu_Dropdown", j), Fd = () => {
  const t = x(), { t: e } = O(), n = Kr(), o = () => {
    t.showPromptModal({
      value: "",
      title: e("leftMenu.enterFormName"),
      placeholder: e("leftMenu.formNamePlaceholder"),
      onOk: (i) => {
        i && n(i);
      }
    });
  };
  return /* @__PURE__ */ r($, { children: /* @__PURE__ */ m(Rd, { title: e("leftMenu.menu"), size: "sm", renderToggle: jd, menuStyle: { width: "fit-content" }, children: [
    /* @__PURE__ */ r(j.Item, { onSelect: t.download.bind(t), icon: /* @__PURE__ */ r(za, {}), children: e("leftMenu.download") }),
    /* @__PURE__ */ r(j.Item, { onSelect: t.upload.bind(t), icon: /* @__PURE__ */ r(Ba, {}), children: e("leftMenu.upload") }),
    /* @__PURE__ */ r(Fc, {}),
    t.formStorageEnabled && /* @__PURE__ */ m($, { children: [
      /* @__PURE__ */ r(j.Item, { onSelect: n, icon: /* @__PURE__ */ r(R, { icon: pt }), children: e("leftMenu.save") }),
      /* @__PURE__ */ r(j.Item, { onSelect: o, icon: /* @__PURE__ */ r(R, { icon: pt }), children: e("leftMenu.saveAs") }),
      /* @__PURE__ */ r(Md, {}),
      /* @__PURE__ */ r($d, {})
    ] }),
    /* @__PURE__ */ r(j.Item, { onSelect: t.clear.bind(t), icon: /* @__PURE__ */ r(R, { icon: ts }), children: e("leftMenu.clear") })
  ] }) });
}, zd = C("Menu", Fd), Bd = {
  viewer: { icon: gr, toggleTo: "builder" },
  builder: { icon: dr, toggleTo: "viewer" }
}, Id = N("ToggleModeButton", (t) => {
  const e = x(), { icon: n, toggleTo: o } = Bd[e.builderMode], i = P("rightMenu.modes");
  return /* @__PURE__ */ m(
    Vd,
    {
      onClick: () => e.changeBuilderMode(o),
      appearance: "primary",
      className: W(e.builderMode, t.className),
      size: "sm",
      children: [
        /* @__PURE__ */ r(R, { icon: n, color: "white" }),
        i(e.builderMode)
      ]
    }
  );
}), Dd = (t = 10) => ze`
  && {
    display: flex;
    align-items: center;
    gap: ${t}px;

    .rs-icon {
      margin-block-start: 2px;
    }
  }
`, Nd = p(z)`
  ${Dd()}
`, Vd = p(Nd)`
  min-width: 98px;
  display: flex;
  justify-content: center;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, var(--rs-btn-primary-bg) 50%, var(--rs-green-700) 50%);
  transition: background-position 200ms, box-shadow 600ms !important;
  box-shadow: 2px 5px 20px -5px var(--rs-btn-primary-bg);

  &.viewer {
    background-position: 100% 0;
    box-shadow: 2px 5px 20px -5px var(--rs-green-700);
  }
`, _d = {
  dark: fr,
  light: vr
}, Hd = N("ToggleThemeButton", (t) => {
  const e = x(), n = P("rightMenu"), { theme: o } = e, [i, a] = S(_d[o]), s = o === "dark";
  L(() => {
    setTimeout(() => a(s ? fr : vr), 200);
  }, [s]);
  const c = F(() => ({
    icon: i,
    color: s ? "var(--rs-yellow-300)" : "white",
    size: 1.4,
    onClick: () => e.theme = s ? "light" : "dark",
    className: e.theme
  }), [i, s, e]);
  return /* @__PURE__ */ r(le, { speaker: /* @__PURE__ */ r(Re, { children: n("toggleTheme") }), placement: "bottom", ...t, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Wd, { ...c }) }) });
}), Wd = p(R)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 3px;
  border-radius: 20px;
  overflow: hidden;

  & path {
    transform: rotate(360deg);
    transform-origin: 50% 200%;
    transition: all 400ms cubic-bezier(1, 0, 0, 1);
  }

  transition: background-color 400ms linear;
  background-color: var(--rs-primary-500);

  &.dark {
    path {
      transform: rotate(0deg);
    }

    background-color: var(--rs-toggle-bg);
  }
`, Zd = () => {
  const t = x(), [e] = S(t.formAsString), n = K(e), o = (i) => n.current = i;
  return L(() => () => t.parseForm(n.current), [t]), /* @__PURE__ */ r(Ie, { language: "json", initialValue: e, onChange: o });
}, Ud = C("JsonView", Zd), Gd = /* @__PURE__ */ r(R, { icon: br }), Kd = N("JsonViewButton", (t) => {
  const { t: e } = O(), [n, o] = S(!1), i = () => o(!0), a = () => o(!1);
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(le, { speaker: /* @__PURE__ */ r(Re, { children: e("editJson") }), placement: "bottom", ...t, children: /* @__PURE__ */ r(H, { onClick: i, icon: Gd, size: "sm" }) }),
    /* @__PURE__ */ m(_, { open: n, size: "full", backdrop: !0, children: [
      /* @__PURE__ */ r(_.Header, { closeButton: !0, onClose: a, children: /* @__PURE__ */ r(_.Title, { children: e("editJson") }) }),
      /* @__PURE__ */ r(_.Body, { style: { height: "100vh" }, children: /* @__PURE__ */ r(Ud, {}) })
    ] })
  ] });
}), qd = ye((t, e) => /* @__PURE__ */ m("svg", { height: "24px", width: "24px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...t, ref: e, children: [
  /* @__PURE__ */ r("title", {}),
  /* @__PURE__ */ r("desc", {}),
  /* @__PURE__ */ r("defs", {}),
  /* @__PURE__ */ r("g", { fill: "none", fillRule: "evenodd", id: "Page-1", stroke: "none", strokeWidth: "1", children: /* @__PURE__ */ r("g", { fill: "currentColor", id: "Icons-Device", transform: "translate(-210.000000, -124.000000)", children: /* @__PURE__ */ r("g", { id: "screen-rotation", transform: "translate(210.000000, 124.000000)", children: /* @__PURE__ */ r(
    "path",
    {
      d: "M16.5,2.5 C19.8,4 22.1,7.2 22.5,11 L24,11 C23.4,4.8 18.3,0 12,0 L11.3,0 L15.1,3.8 L16.5,2.5 L16.5,2.5 Z M10.2,1.7 C9.6,1.1 8.7,1.1 8.1,1.7 L1.7,8.1 C1.1,8.7 1.1,9.6 1.7,10.2 L13.7,22.2 C14.3,22.8 15.2,22.8 15.8,22.2 L22.2,15.8 C22.8,15.2 22.8,14.3 22.2,13.7 L10.2,1.7 L10.2,1.7 Z M14.8,21.2 L2.8,9.2 L9.2,2.8 L21.2,14.8 L14.8,21.2 L14.8,21.2 Z M7.5,21.5 C4.2,20 1.9,16.8 1.5,13 L0.1,13 C0.6,19.2 5.7,24 12,24 L12.7,24 L8.9,20.2 L7.5,21.5 L7.5,21.5 Z",
      id: "Shape"
    }
  ) }) }) })
] })), Jd = [
  ["desktop", os],
  ["mobile", rs],
  ["tablet", is]
], Xd = N("ResolutionSelect", (t) => {
  const e = x(), n = P("rightMenu.modes"), { viewMode: o, landscapeMode: i } = e, a = (c) => c ? "var(--rs-navs-selected)" : void 0;
  return /* @__PURE__ */ m(Yd, { ...t, children: [
    (o === "mobile" || o === "tablet") && /* @__PURE__ */ r(H, { onClick: () => e.landscapeMode = !i, icon: /* @__PURE__ */ r(fn, { as: qd, color: a(i) }), size: "sm" }),
    /* @__PURE__ */ m(oe, { size: "sm", children: [
      Jd.map(([c, l], u) => /* @__PURE__ */ r(le, { speaker: /* @__PURE__ */ r(Re, { children: n(c) }), placement: "bottom", children: /* @__PURE__ */ r(
        H,
        {
          onClick: () => e.viewMode = c,
          icon: /* @__PURE__ */ r(R, { icon: l, color: a(c === o) })
        }
      ) }, u)),
      /* @__PURE__ */ r(Kd, {})
    ] })
  ] });
}), Yd = p.div`
  display: flex;
  align-items: center;
  width: max-content;
`, Qd = N("Header_Toolbar", oe), eu = N("Header", (t) => {
  const e = x(), n = Kr(), o = e.undoer, i = !1;
  return /* @__PURE__ */ m(ru, { ...t, children: [
    /* @__PURE__ */ m(tu, { children: [
      /* @__PURE__ */ r(zd, {}),
      /* @__PURE__ */ m(Qd, { size: "sm", children: [
        e.formStorageEnabled && /* @__PURE__ */ r(
          H,
          {
            onClick: () => n(),
            icon: /* @__PURE__ */ r(R, { icon: pt }),
            size: "sm"
          }
        ),
        /* @__PURE__ */ r(
          H,
          {
            onClick: () => o.undo(),
            disabled: !o.hasUndo,
            icon: /* @__PURE__ */ r(R, { icon: es }),
            size: "sm"
          }
        ),
        /* @__PURE__ */ r(
          H,
          {
            onClick: () => o.redo(),
            disabled: !o.hasRedo,
            icon: /* @__PURE__ */ r(R, { icon: Qa }),
            size: "sm"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r(ou, { children: /* @__PURE__ */ r(Id, {}) }),
    /* @__PURE__ */ m(nu, { children: [
      /* @__PURE__ */ r(Xd, {}),
      /* @__PURE__ */ r(xd, {}),
      i,
      /* @__PURE__ */ r(Hd, {})
    ] })
  ] });
}), tu = p.div``, nu = p.div`
  justify-content: flex-end;
`, ou = p.div`
  justify-content: center;
  flex: 0;
`, ru = p.div`
  display: flex;
  padding: 10px 15px;
  gap: 10px;

  & > * {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px
  }
`, iu = ({
  children: t,
  placement: e = "left",
  hideCollapsed: n = !0,
  className: o,
  onCollapse: i,
  ...a
}) => {
  var h;
  const s = x(), c = !!((h = s.openedPanels) != null && h.includes(e)), l = !c, u = () => s.setPanelVisible(e, !c), d = e === "right" ? "autoHorizontal" : "auto";
  return /* @__PURE__ */ m(Jr, { className: W(o, e, { collapsed: l }), ...a, children: [
    /* @__PURE__ */ r(Dr, { value: d, children: /* @__PURE__ */ r(au, { className: W({ collapsed: l, hideCollapsed: n }), children: t }) }),
    /* @__PURE__ */ r(su, { className: W(e, { collapsed: l }), onClick: u, children: /* @__PURE__ */ r(et, { className: "icon" }) })
  ] });
}, qr = C("Panel", iu), rn = "200ms ease-in-out", au = p.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: opacity ${rn}, width 0ms 200ms;

  .right &, .left & {
    width: 280px;
    overflow: hidden;
  }

  &.collapsed.hideCollapsed {
    opacity: 0;

    .right &, .left & {
      width: 0;
    }
  }
`, su = p.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;

  .icon {
    font-size: 2em;
    opacity: 0.6;
    position: absolute;
  }

  &.right, &.left {
    width: 20px;
    height: 80px;
    inset-block-start: 50%;
    transform: translateY(-50%);

    .icon {
      inset-inline-end: -5px;
    }
  }

  &.bottom {
    left: 50%;
    width: 80px;
    height: 20px;
    justify-content: center;
    inset-block-start: -10px;
    transform: translateX(-50%);

    .icon {
      inset-block-end: -5px;
    }
  }

  &.left {
    inset-inline-end: -15px;

    .icon {
      transform: rotate(90deg);
    }
  }

  &.right {
    inset-inline-start: -15px;

    .icon {
      transform: rotate(-90deg);
    }
  }


  &.collapsed {
    &.left .icon {
      transform: rotate(-90deg);
    }

    &.right .icon {
      transform: rotate(90deg);
    }

    &.bottom .icon {
      transform: rotate(180deg);
    }
  }
`, Jr = p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  transition: width ${rn}, height ${rn};

  &.right, &.left {
    max-height: 1200px;
    width: 290px;
  }

  &.right {
    box-shadow: none;
  }

  &.bottom {
    height: 380px;
    width: 100%;
    margin-block: 0;
  }

  &.collapsed {
    &.right, &.left {
      width: ${(t) => t.collapsedSize ?? 5}px;
    }

    &.bottom {
      height: ${(t) => t.collapsedSize ?? 5}px;
    }
  }
`, cu = N("CentralPanel", (t) => {
  const e = x(), { viewMode: n, landscapeMode: o, builderMode: i } = e, a = Ri(), s = i === "builder" ? Cl : void 0, c = b((u, d) => bl(e, u, d), [e]), l = i === "builder" ? c : void 0;
  return /* @__PURE__ */ m(lu, { ...t, children: [
    /* @__PURE__ */ r(eu, {}),
    /* @__PURE__ */ r(du, { className: W(n, i, { landscapeMode: o }), children: /* @__PURE__ */ r(
      Fi,
      {
        ...a,
        componentWrapper: s,
        viewMode: n,
        computeChildren: l,
        formName: e.activeFormName
      }
    ) })
  ] });
}), lu = p.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 550px;
`, du = Y("FormContainer", p(Jr)`
  flex: 1;
  z-index: 4;
  flex-direction: column;
  width: initial;
  margin-inline: 15px;
  padding: 12px;
  overflow: auto;
  transition: max-width .2s ease, max-height .2s ease, border-radius .2s ease;
  border: 2px solid var(--rs-gray-500);
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 15%);

  background-color: #ffffffa1;

  .rs-theme-dark & {
    background-color: #414549;
  }


  &.mobile {
    width: 400px;
    max-height: 800px;
    align-self: center;

    &.landscapeMode {
      width: 800px;
      max-height: 400px;
    }
  }

  &.tablet {
    width: 800px;
    max-height: 1200px;
    align-self: center;

    &.landscapeMode {
      width: 1200px;
      max-height: 800px;
    }
  }
`), uu = ({ style: t, className: e, onChange: n }) => {
  const [o, i] = S(""), a = o.length ? Se : Ia, { t: s } = O(), c = b(() => i(""), []);
  return L(() => n(o), [n, o]), /* @__PURE__ */ m(ce, { className: e, inside: !0, size: "sm", style: t, children: [
    /* @__PURE__ */ r(
      te,
      {
        onChange: i,
        placeholder: s("searchForm.search"),
        value: o,
        autoFocus: !0
      }
    ),
    /* @__PURE__ */ r(ce.Addon, { style: { cursor: "pointer" }, onClick: c, children: /* @__PURE__ */ r(a, {}) })
  ] });
}, mu = (t) => {
  const e = x(), n = P("componentsList.categories"), { filter: o, ...i } = t, a = o ? (l) => l.name.toLowerCase().includes(o.toLowerCase()) : (l) => !0, s = {};
  e.builderComponents.forEach((l) => {
    if (!a(l.model))
      return;
    const u = l.category || "", d = s[u] ?? [];
    d.push(l.model), s[u] = d.sort((h, f) => h.name.localeCompare(f.name));
  });
  const c = [];
  for (const l in s)
    c.push(
      /* @__PURE__ */ m("div", { children: [
        /* @__PURE__ */ r(Yr, { children: n(l) || l }),
        /* @__PURE__ */ r(hu, { definitions: s[l], ...i })
      ] }, l)
    );
  return c ? /* @__PURE__ */ r(vu, { children: c }) : null;
}, Xr = (t) => {
  const e = P("toolbar"), [n, o] = S(), i = /* @__PURE__ */ r(mu, { ...t, filter: n });
  return /* @__PURE__ */ m("div", { className: pu, children: [
    /* @__PURE__ */ r(fu, { children: /* @__PURE__ */ r(uu, { style: { maxWidth: 300 }, onChange: o }) }),
    i || /* @__PURE__ */ r(Yr, { children: e("notFound") })
  ] });
}, hu = ({ definitions: t, ...e }) => {
  const n = D();
  return /* @__PURE__ */ r(gu, { children: t.map((o) => {
    const i = new Ee(`${o.type} ${zi()}`, o.type), a = n.createComponentData(i);
    return /* @__PURE__ */ r(Oe, { value: a, children: /* @__PURE__ */ r(vd, { ...e }) }, a.id);
  }) });
}, pu = Xe`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 0;
`, gu = p.div`
  display: flex;
  flex-flow: wrap;
  gap: 4px;
  margin-top: 2px;
`, fu = p.div`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  padding-inline-start: 4px;

  > * {
    flex: 1;
  }
`, Yr = p.label`
  padding-inline: 4px;
  font-size: 16px;
`, vu = p.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-inline: 4px 2px;
  overflow-y: auto;
`, bu = () => {
  const { componentsModalState: t } = x(), e = P("componentsModal"), n = () => t.opened = !1, o = (i) => {
    n(), t.onSelect(i);
  };
  return /* @__PURE__ */ m(Cu, { open: t.opened, onClose: n, size: "lg", children: [
    /* @__PURE__ */ r(_.Header, { children: /* @__PURE__ */ r("h5", { children: e("clickToAdd") }) }),
    /* @__PURE__ */ r(_.Body, { children: /* @__PURE__ */ r(Xr, { draggable: !1, onAdd: o }) })
  ] });
}, wu = C("ComponentsModal", bu), Cu = p(_)`
  width: 825px !important;

  .rs-modal-content {
    background-color: var(--rs-btn-default-bg);
  }

  .rs-modal-body {
    margin-top: initial !important;
    padding-top: 20px;
    padding-bottom: 0;
  }
`, xu = () => {
  const t = D(), { t: e } = O(), n = t.form.componentTree.errors, o = t.form.componentTree.data;
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ m(Do, { children: [
      /* @__PURE__ */ r("h6", { children: e("errorsPanel.data") }),
      No(o)
    ] }),
    /* @__PURE__ */ m(Do, { children: [
      /* @__PURE__ */ r("h6", { children: e("errorsPanel.errors") }),
      No(n)
    ] })
  ] });
}, Do = p.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  pre {
    white-space: pre-wrap;
    margin-top: 5px;
    max-width: 100%;
    word-break: break-word;
    overflow: auto;
  }
`, yu = C("FormState", xu), No = (t) => /* @__PURE__ */ r("pre", { children: JSON.stringify(wn(t), null, 2) }), Su = p.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:first-of-type {
    margin-bottom: 2px;
  }

  & label {
      //color: ${(t) => t.color ?? "var(--rs-btn-default-text)"};
  }
`, Qr = (t, e, n, o, i) => {
  const a = Y(e, ku);
  return /* @__PURE__ */ r(a, { eventKey: t, color: i == null ? void 0 : i.color, children: /* @__PURE__ */ m(Su, { children: [
    o && /* @__PURE__ */ r(R, { icon: o, size: 1.2, ...i, color: void 0 }),
    /* @__PURE__ */ r("label", { children: n })
  ] }) });
}, ku = p(tr.Item)`
  &:hover, &:active, &:focus, &.rs-nav-item-active {
    color: ${(t) => t.color} !important;
  }

  &:before {
    border-radius: 2px;
    height: 3px !important;
    margin: 0 12px;
    background-color: ${(t) => t.color} !important;
  }
`, ei = p(tr)`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  .rs-nav-item {
    border-radius: 15px;
  }
`, En = (t) => {
  const e = P("common");
  return /* @__PURE__ */ r(kn, { hint: e("edit"), icon: /* @__PURE__ */ r(R, { icon: qa }), ...t });
}, Lu = (t) => {
  const e = P("common");
  return /* @__PURE__ */ r(kn, { hint: e("clone"), icon: /* @__PURE__ */ r(Da, {}), ...t });
}, rt = (t) => {
  const e = P("common");
  return /* @__PURE__ */ r(kn, { hint: e("remove"), icon: /* @__PURE__ */ r(Se, {}), ...t });
}, Eu = N("Forms_Tab_Content", (t) => {
  const e = x(), [n, o] = S([]), { t: i } = O(), a = ot(), s = b(() => {
    e.getFormKeys().then(o);
  }, [e]), c = b(() => {
    e.showPromptModal({
      value: "",
      title: i("leftMenu.enterFormName"),
      placeholder: i("leftMenu.formNamePlaceholder"),
      onOk: (d) => {
        d && e.createForm(d).then(s);
      }
    });
  }, [e, s, i]);
  L(() => {
    s();
  }, [e.lastSaveTime, s]);
  const l = b((d) => {
    console.error(d), a({ type: "error", message: d });
  }, [a]), u = n.map((d, h) => /* @__PURE__ */ m(Le, { children: [
    /* @__PURE__ */ r("span", { style: { color: d === e.formName ? "var(--rs-navs-selected)" : "var(--rs-text-secondary)" }, children: d }),
    /* @__PURE__ */ m(oe, { children: [
      /* @__PURE__ */ r(En, { onClick: () => e.loadForm(d, s, l) }),
      /* @__PURE__ */ r(rt, { onClick: () => e.removeForm(d, s) })
    ] })
  ] }, h));
  return /* @__PURE__ */ m(bn, { ...t, children: [
    /* @__PURE__ */ r(Le, { children: /* @__PURE__ */ r(z, { block: !0, onClick: c, children: i("formsList.addNewForm") }) }),
    u.length ? u : /* @__PURE__ */ r(Le, { children: i("formsList.noFormsInFormStorage") })
  ] });
}), Au = () => {
  const t = x(), e = D(), { t: n } = O(), o = Object.entries(e.form.actions).map(([i, a]) => {
    const s = { name: i, actionDefinition: a };
    return /* @__PURE__ */ m(Le, { children: [
      /* @__PURE__ */ r("span", { children: i }),
      /* @__PURE__ */ m(oe, { children: [
        /* @__PURE__ */ r(En, { onClick: () => t.editCodeAction(s) }),
        /* @__PURE__ */ r(Lu, { onClick: () => e.form.cloneAction(s) }),
        /* @__PURE__ */ r(rt, { onClick: () => e.form.removeAction(i) })
      ] })
    ] }, i);
  });
  return /* @__PURE__ */ m(B, { children: [
    /* @__PURE__ */ r(z, { block: !0, onClick: () => t.addCodeAction(), children: n("actions.addCodeAction") }),
    /* @__PURE__ */ r(bn, { children: o })
  ] });
}, Pu = C("ActionList", Au), Mu = ({ device: t, useWrapperStyles: e, defaultActiveTab: n }) => {
  const { store: o } = I(), i = P("style"), [a, s] = S(n ?? "css");
  L(() => {
    s(n ?? "css");
  }, [n]);
  const c = F(() => {
    var h, f;
    return ((f = (h = o[a]) == null ? void 0 : h[t]) == null ? void 0 : f.string) ?? "";
  }, [o, t, a]), l = (h) => {
    var f;
    o[a] ?? (o[a] = {}), (f = o[a])[t] ?? (f[t] = {}), o[a][t].string = h;
  }, u = (h) => s(h), d = [
    { value: "css", label: i("component") },
    { value: "wrapperCss", label: i("wrapper") }
  ];
  return /* @__PURE__ */ m(B, { children: [
    e && /* @__PURE__ */ r(yn, { value: a, onChange: u, items: d }),
    /* @__PURE__ */ r(
      $u,
      {
        language: "scss",
        beginContextLine: "element.style {",
        endContextLine: "}",
        initialValue: c,
        onChange: l,
        height: "20vh",
        options: {
          contextmenu: !1,
          lineNumbers: "off",
          minimap: { enabled: !1 },
          glyphMargin: !1,
          folding: !1,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          autoIndent: "full"
        }
      },
      `${o.key}${a}${t}`
    )
  ] });
}, Tu = C("CSSEditor", Mu), $u = p(Ie)`
  .suggest-widget {
    width: 100% !important;
    left: 0 !important;
    overflow: hidden;
  }
`, Ou = p.label`
  display: flex;
  flex: 1;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`, { Cell: ju } = Fe, Ru = ({ rowData: t, dataKey: e, rowIndex: n, ...o }) => {
  const i = (a) => {
    var s;
    t[e] = a, (s = o.onChange) == null || s.call(o, a, e, n);
  };
  return /* @__PURE__ */ r(it, { ...o, children: /* @__PURE__ */ r(te, { value: t[e] ?? "", onChange: i, size: "sm" }) });
}, nh = ({ rowData: t, dataKey: e, rowIndex: n, onChange: o, ...i }) => {
  const a = (s, c) => {
    t[e] = c, o == null || o(c, e, n);
  };
  return /* @__PURE__ */ r(it, { ...i, children: /* @__PURE__ */ r(Bu, { inline: !0, checked: t[e] ?? !1, onChange: a }) });
}, Fu = ({ rowData: t, dataKey: e, rowIndex: n, options: o, onChange: i, ...a }) => {
  const s = (c) => {
    t[e] = c, i == null || i(c, e, n);
  };
  return /* @__PURE__ */ r(it, { ...a, children: /* @__PURE__ */ r(
    je,
    {
      value: t[e] ?? "",
      data: o,
      onChange: s,
      cleanable: !1,
      creatable: !0,
      block: !0,
      size: "sm",
      placement: "auto"
    }
  ) });
}, zu = ({ rowData: t, rowIndex: e, onAction: n, icon: o, ...i }) => /* @__PURE__ */ r(it, { ...i, children: /* @__PURE__ */ r(
  H,
  {
    appearance: "subtle",
    size: "sm",
    onClick: () => n(e),
    icon: o()
  }
) }), it = p(ju)`
  padding: 0;

  & .rs-table-cell-content {
    padding: 9px 3px;
  }
`, Bu = p(Je)`
  & .rs-checkbox-wrapper {
    left: 4px;
    top: 6px;
  }
`, { ErrorMessage: Iu } = ee, { Column: Du, HeaderCell: Nu } = Fe, ti = (t) => {
  const [e, n] = S({}), [o, i] = S(!1), {
    data: a = [],
    onChange: s,
    columns: c,
    label: l,
    errorMessage: u,
    autoAdd: d,
    hideHeader: h,
    ...f
  } = t, { autoHeight: v, maxHeight: w } = e, y = h ? 0 : t.headerHeight ?? 40, A = t.rowHeight ?? 46, M = t.maxRows ?? 5, q = a.length <= M, Q = t.renderEmpty ? y + A : 0, X = y + A * M, de = a.length > M ? X : Q, V = b((E) => {
    if (d) {
      const J = E[E.length - 1];
      (!J || Object.values(J).some((ai) => ai)) && E.push({});
    }
    s == null || s(E);
  }, [d, s]), ue = b(() => {
    n({
      autoHeight: q,
      maxHeight: de
    });
  }, [de, q]), st = b(() => {
    V == null || V([...a, {}]), i(!0), ue();
  }, [a, V, ue]), Ne = b((E) => {
    a.splice(E, 1), V == null || V(a), ue();
  }, [a, V, ue]), Ve = () => c == null ? void 0 : c.map((E) => Qo(E, {
    onChange: () => V == null ? void 0 : V([...a])
  })), T = () => {
    const E = {};
    return o && (E.y = Number.MAX_SAFE_INTEGER, i(!1)), E;
  };
  return L(ue, []), /* @__PURE__ */ m("div", { children: [
    !!l && /* @__PURE__ */ r("label", { children: l }),
    /* @__PURE__ */ m(
      Vu,
      {
        data: a,
        headerHeight: y,
        rowHeight: A,
        height: w,
        autoHeight: v,
        shouldUpdateScroll: T,
        className: W({ hideHeader: h }),
        ...f,
        children: [
          Ve(),
          /* @__PURE__ */ m(Du, { width: 34, children: [
            /* @__PURE__ */ r(Nu, { children: /* @__PURE__ */ r("div", {}) }),
            /* @__PURE__ */ r(zu, { onAction: Ne, icon: () => /* @__PURE__ */ r(Se, {}) })
          ] })
        ]
      }
    ),
    !!u && /* @__PURE__ */ r(Iu, { show: !!u, placement: "bottomStart", children: u }),
    !d && /* @__PURE__ */ r(z, { appearance: "default", size: "sm", onClick: st, style: { marginTop: 10 }, block: !0, children: /* @__PURE__ */ r(Be, {}) })
  ] });
}, Vu = p(Fe)`
  .rs-table-cell, .rs-table-row {
    background-color: transparent !important;
  }

  &.hideHeader {
    margin-bottom: -40px;

    .rs-table-header-row-wrapper {
      display: none !important;
    }

    .rs-table-body-row-wrapper {
      top: 0 !important;
    }
  }
`, { Column: _u, HeaderCell: Hu } = Fe, ni = (t) => t.map(({ name: e, input: n, title: o, inputProps: i = {} }) => {
  const a = n ?? Ru;
  return /* @__PURE__ */ m(_u, { flexGrow: 1, children: [
    /* @__PURE__ */ r(Hu, { children: o ?? ir(e) }),
    /* @__PURE__ */ r(a, { dataKey: e, ...i })
  ] }, e);
}), Wu = Xe`
  &:after {
    padding-left: 3px;
    content: "*";
    color: red;
  }
`, Zu = N("PropertyCodeButton", (t) => {
  const { annotation: e, getComputeCode: n, setComputeCode: o, disableCompute: i, getComputeType: a, hasComputeCode: s, componentData: c } = t, l = x(), u = s("function"), d = s("localization"), h = a(), f = h === "function", v = h === "localization", A = P("propertiesEditor.codeButton")((() => !e.calculable && !e.localizable ? "neitherCalculableNorLocalizable" : u && f ? "editCalculable" : d && v ? "editLocalizable" : e.calculable && e.localizable ? "hintCalculableAndLocalizable" : e.calculable ? "hintCalculable" : "hintLocalizable")()), M = () => {
    if (u && f || d && v)
      return "var(--rs-btn-primary-bg)";
    if (u || d)
      return "var(--rs-primary-200)";
  }, q = () => {
    const X = br, de = ds;
    return f ? X : v ? de : u ? X : d ? de : us;
  };
  return /* @__PURE__ */ r(fe, { hint: A, children: /* @__PURE__ */ r(
    Ku,
    {
      onClick: () => l.currentEditable = new Er(
        i,
        o,
        n,
        a,
        s,
        e,
        c.key
      ),
      disabled: !e.calculable && !e.localizable,
      icon: /* @__PURE__ */ r(R, { icon: q(), color: M() }),
      size: "xs",
      appearance: "subtle"
    }
  ) });
}), Uu = Y("PropertyLabel", Zr), Gu = Y("PropertyInput", (t) => /* @__PURE__ */ r("div", { style: { width: "100%" }, ...t })), Z = Y("LabeledProperty", (t) => {
  const { annotation: e, children: n, style: o } = t, { className: i, ...a } = t, s = wr("id-"), c = P(`annotation.${e.key}`), l = e.required ? Wu : void 0;
  return /* @__PURE__ */ m(Mr, { style: o, className: i, children: [
    /* @__PURE__ */ m(ne, { gap: 10, style: { alignItems: "center" }, children: [
      /* @__PURE__ */ r(Zu, { ...a }),
      /* @__PURE__ */ r(Uu, { htmlFor: s, hint: e.hint ?? c("hint"), className: l, children: /* @__PURE__ */ r($, { children: c("name") || e.name }) })
    ] }),
    !!n && /* @__PURE__ */ r(Gu, { children: Qo(n, { id: s }) })
  ] });
}), Ku = p(H)`
  min-width: 24px;
  margin-inline-end: -6px;
`, qu = [{ name: "value" }, { name: "label" }], Ju = (t) => {
  var a;
  const { value: e, onChange: n, annotation: o } = t, i = ni(((a = o.editorProps) == null ? void 0 : a.columns) ?? qu);
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(Z, { ...t }),
    /* @__PURE__ */ r(ti, { data: e, onChange: n, columns: i })
  ] });
}, Xu = (t) => {
  const { value: e, onChange: n, onClean: o } = t, i = P("propertiesEditor");
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(
    na,
    {
      value: e ?? "",
      onChange: n,
      onClean: o,
      block: !0,
      size: "xs",
      style: { width: "100%" },
      placeholder: i("setInputHint")
    }
  ) });
}, Yu = [
  "a",
  "abbr",
  "about",
  "accentHeight",
  "accept",
  "acceptCharset",
  "accessKey",
  "accumulate",
  "action",
  "additive",
  "address",
  "alignmentBaseline",
  "allowFullScreen",
  "allowReorder",
  "allowTransparency",
  "alphabetic",
  "alt",
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "amplitude",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "arabicForm",
  "area",
  "article",
  "ascent",
  "aside",
  "async",
  "attributeName",
  "attributeType",
  "audio",
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "autoPlay",
  "autoReverse",
  "autoSave",
  "azimuth",
  "b",
  "base",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "bdi",
  "bdo",
  "begin",
  "bias",
  "blockquote",
  "body",
  "br",
  "button",
  "by",
  "calcMode",
  "canvas",
  "capHeight",
  "caption",
  "capture",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charSet",
  "checked",
  "circle",
  "cite",
  "classID",
  "className",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "code",
  "col",
  "colgroup",
  "color",
  "color-profile",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "cols",
  "colSpan",
  "content",
  "contentEditable",
  "contentScriptType",
  "contentStyleType",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "cursor",
  "cx",
  "cy",
  "d",
  "dangerouslySetInnerHTML",
  "data",
  "datalist",
  "datatype",
  "dateTime",
  "dd",
  "decelerate",
  "default",
  "defaultChecked",
  "defaultValue",
  "defer",
  "defs",
  "del",
  "desc",
  "descent",
  "details",
  "dfn",
  "dialog",
  "diffuseConstant",
  "dir",
  "direction",
  "disabled",
  "display",
  "div",
  "divisor",
  "dl",
  "dominantBaseline",
  "download",
  "draggable",
  "dt",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "ellipse",
  "em",
  "embed",
  "enableBackground",
  "encType",
  "end",
  "exponent",
  "externalResourcesRequired",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "fieldset",
  "figcaption",
  "figure",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "footer",
  "foreignObject",
  "form",
  "formAction",
  "format",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "from",
  "fx",
  "fy",
  "g",
  "g1",
  "g2",
  "glyph",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hanging",
  "head",
  "header",
  "headers",
  "height",
  "hgroup",
  "hidden",
  "high",
  "hkern",
  "horizAdvX",
  "horizOriginX",
  "hr",
  "href",
  "hrefLang",
  "html",
  "htmlFor",
  "httpEquiv",
  "i",
  "icon",
  "id",
  "ideographic",
  "iframe",
  "image",
  "imageRendering",
  "img",
  "in",
  "in2",
  "inlist",
  "input",
  "inputMode",
  "ins",
  "integrity",
  "intercept",
  "is",
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kbd",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keygen",
  "keyParams",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "keyType",
  "kind",
  "label",
  "lang",
  "legend",
  "lengthAdjust",
  "letterSpacing",
  "li",
  "lightingColor",
  "limitingConeAngle",
  "line",
  "linearGradient",
  "link",
  "list",
  "local",
  "loop",
  "low",
  "main",
  "manifest",
  "map",
  "marginHeight",
  "marginWidth",
  "mark",
  "marker",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "math",
  "mathematical",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "menu",
  "menuitem",
  "meta",
  "metadata",
  "meter",
  "method",
  "min",
  "minLength",
  "missing-glyph",
  "mode",
  "mpath",
  "multiple",
  "muted",
  "name",
  "nav",
  "nonce",
  "noscript",
  "noValidate",
  "numOctaves",
  "object",
  "offset",
  "ol",
  "onBlur",
  "onChange",
  "onClick",
  "onFocus",
  "onInput",
  "onInvalid",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onSubmit",
  "opacity",
  "open",
  "operator",
  "optgroup",
  "optimum",
  "option",
  "order",
  "orient",
  "orientation",
  "origin",
  "output",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "p",
  "paintOrder",
  "panose1",
  "param",
  "path",
  "pathLength",
  "pattern",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "picture",
  "placeholder",
  "playsInline",
  "pointerEvents",
  "points",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "polygon",
  "polyline",
  "poster",
  "pre",
  "prefix",
  "preload",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "profile",
  "progress",
  "property",
  "q",
  "r",
  "radialGradient",
  "radioGroup",
  "radius",
  "rb",
  "readOnly",
  "rect",
  "refX",
  "refY",
  "rel",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "required",
  "requiredExtensions",
  "requiredFeatures",
  "resource",
  "restart",
  "result",
  "results",
  "reversed",
  "role",
  "rotate",
  "rows",
  "rowSpan",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "rx",
  "ry",
  "s",
  "samp",
  "sandbox",
  "scale",
  "scope",
  "scoped",
  "script",
  "scrolling",
  "seamless",
  "section",
  "security",
  "seed",
  "select",
  "selected",
  "set",
  "shape",
  "shapeRendering",
  "size",
  "sizes",
  "slope",
  "slot",
  "small",
  "source",
  "spacing",
  "span",
  "specularConstant",
  "specularExponent",
  "speed",
  "spellCheck",
  "spreadMethod",
  "src",
  "srcDoc",
  "srcLang",
  "srcSet",
  "start",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "step",
  "stitchTiles",
  "stop",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "suppressContentEditableWarning",
  "surfaceScale",
  "svg",
  "switch",
  "symbol",
  "systemLanguage",
  "tabIndex",
  "table",
  "tableValues",
  "target",
  "targetX",
  "targetY",
  "tbody",
  "td",
  "template",
  "text",
  "textAnchor",
  "textarea",
  "textDecoration",
  "textLength",
  "textPath",
  "textRendering",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "to",
  "tr",
  "track",
  "transform",
  "tref",
  "tspan",
  "type",
  "typeof",
  "u",
  "u1",
  "u2",
  "ul",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "unselectable",
  "use",
  "useMap",
  "vAlphabetic",
  "value",
  "values",
  "var",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "video",
  "vIdeographic",
  "view",
  "viewBox",
  "viewTarget",
  "visibility",
  "vkern",
  "vMathematical",
  "vocab",
  "wbr",
  "width",
  "widths",
  "wmode",
  "wordSpacing",
  "wrap",
  "writingMode",
  "x",
  "x1",
  "x2",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y",
  "y1",
  "y2",
  "yChannelSelector",
  "z",
  "zoomAndPan"
], Qu = ni([
  {
    name: "name",
    input: Fu,
    inputProps: { options: ln(Yu, !1) }
  },
  { name: "value" }
]), e0 = (t) => {
  const { store: e } = t.componentData, n = P("common"), o = F(
    () => e.htmlAttributes ? [...e.htmlAttributes] : e.htmlAttributes,
    [e]
  ), [i, a] = S(o), [s, c] = S(!1);
  L(() => {
    a(o), c(!1);
  }, [o, e]);
  const l = (h) => {
    a(h), c(!0);
  }, d = /* @__PURE__ */ r(H, { icon: /* @__PURE__ */ r(Na, {}), onClick: () => {
    e.htmlAttributes = i, c(!1);
  }, color: "green", appearance: "primary", size: "xs", children: n("apply") });
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r(Z, { ...t, children: s && d }),
    /* @__PURE__ */ r(ti, { data: i ?? [], onChange: l, columns: Qu })
  ] });
}, Vo = (t) => {
  const { value: e, onChange: n } = t;
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(oi, { checked: !!e, onChange: (o, i) => n(i) }) });
}, oi = p(Je)`
  && {
    height: 23px;
    display: flex;
    align-items: center;
    width: 100%;

    .rs-checkbox-checker {
      padding-left: 0;
      margin-left: -10px;
    }
  }
`, t0 = (t) => {
  const { value: e, onChange: n, onClean: o } = t, i = i0(e ?? "rgba(255, 255, 255, 0)");
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ m(ce, { inside: !0, style: { width: "100%" }, size: "xs", children: [
    /* @__PURE__ */ r(le, { placement: "auto", trigger: "hover", speaker: /* @__PURE__ */ r(hn, { children: /* @__PURE__ */ r(ms, { color: i, onChange: (s) => n(r0(s)) }) }), enterable: !0, children: /* @__PURE__ */ r(n0, { color: e, readOnly: !0 }) }),
    /* @__PURE__ */ r(o0, { onClick: o, children: /* @__PURE__ */ r(Se, {}) })
  ] }) });
}, n0 = p(te)`
  && {
    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>');
    background-color: ${({ color: t }) => t ?? "var(--rs-btn-default-bg)"};
  }
`, o0 = p(ce.Button)`
  && {
    background-color: var(--rs-btn-default-bg) !important;
    position: absolute;
    inset-inline-end: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: 6px 8px;
  }
`;
function r0(t) {
  const { r: e, g: n, b: o, a: i } = t;
  return `rgba(${e}, ${n}, ${o}, ${i})`;
}
function i0(t) {
  const e = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/, [, n, o, i, a] = e.exec(t) || [];
  return { r: Number(n), g: Number(o), b: Number(i), a: Number(a) };
}
const a0 = (t) => {
  const { onChange: e, onClean: n, value: o } = t;
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(
    oa,
    {
      editable: !1,
      cleanable: !0,
      placement: "auto",
      value: o,
      onChange: e,
      onClean: n
    }
  ) });
}, [
  /**
   * **Internal use only.**
   */
  De,
  /**
   * **Internal use only.**
   */
  s0
] = sn("ActionDataContext"), c0 = [
  { label: "True", value: 1 },
  { label: "False", value: 0 }
], l0 = ({ name: t }) => {
  var a;
  const e = De(), n = (a = e.args) == null ? void 0 : a[t];
  return /* @__PURE__ */ r(
    Sn,
    {
      data: c0,
      searchable: !1,
      cleanable: !1,
      value: n === void 0 ? void 0 : n ? 1 : 0,
      onSelect: (s) => e.args = Ye({}, e.args, { [t]: !!s }),
      width: "100%"
    }
  );
}, d0 = C("InputBoolean", l0), u0 = ({ name: t }) => {
  var i;
  const e = De(), n = Number(((i = e.args) == null ? void 0 : i[t]) ?? 0);
  return /* @__PURE__ */ r(ce, { size: "sm", children: /* @__PURE__ */ r(pn, { value: n, onChange: (a) => e.args = Ye({}, e.args, { [t]: Number(a) }) }) });
}, m0 = C("InputNumber", u0), h0 = ({ name: t }) => {
  var i, a;
  const e = De(), n = ((a = (i = e.args) == null ? void 0 : i[t]) == null ? void 0 : a.toString()) ?? "";
  return /* @__PURE__ */ r(ce, { size: "sm", children: /* @__PURE__ */ r(te, { value: n, onChange: (s) => e.args = Ye({}, e.args, { [t]: s }) }) });
}, p0 = C("InputString", h0), g0 = (t) => {
  switch (t) {
    case "string":
      return p0;
    case "number":
      return m0;
    case "boolean":
      return d0;
  }
}, f0 = ({ data: t }) => {
  const [e, n] = t, o = g0(n);
  return /* @__PURE__ */ m(B, { children: [
    /* @__PURE__ */ r("label", { children: e }),
    /* @__PURE__ */ r(o, { name: e })
  ] });
}, v0 = C("ArgumentItem", f0), b0 = () => {
  const t = De();
  L(() => () => {
    or(t.args) && delete t.args;
  }, [t.args]);
}, w0 = () => {
  const t = D(), e = De(), n = b(() => t.findAction(e), [e, t]), o = Ln(n), [i, a] = Yo((c) => !c, !1), s = i ? ur : et;
  return b0(), Object.keys(o.params).length ? /* @__PURE__ */ m("div", { onMouseDown: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ r(er.Collapse, { in: i, unmountOnExit: !0, children: /* @__PURE__ */ r(B, { gap: 1, style: { marginBlock: 8, paddingInline: 10 }, children: Object.entries(o.params).map((c, l) => /* @__PURE__ */ r(v0, { data: c }, l)) }) }),
    /* @__PURE__ */ r(x0, { block: !0, onClick: a, children: /* @__PURE__ */ m($, { children: [
      fa("actions.arguments"),
      /* @__PURE__ */ r(s, { style: { marginTop: -2 } })
    ] }) })
  ] }) : null;
}, C0 = C("ArgumentList", w0), x0 = p(z)`
  padding: 5px !important;
  border-radius: 0 !important;
  outline: 0 !important;
  color: var(--rs-btn-subtle-text) !important;

  &:focus {
    box-shadow: none;
    background-color: initial;
  }
`, y0 = ({ data: t, onRemove: e }) => {
  const n = x(), o = D(), i = t.type === "code", a = () => {
    const s = o.form.actions[t.name];
    if (!s) {
      console.error(`Cannot find custom action: '${t.name}'`);
      return;
    }
    const c = { name: t.name, actionDefinition: s };
    n.editCodeAction(c);
  };
  return /* @__PURE__ */ m(s0, { value: t, children: [
    /* @__PURE__ */ m(ne, { style: { justifyContent: "space-between", padding: 8 }, children: [
      /* @__PURE__ */ r("b", { style: { color: "violet", marginLeft: 5 }, children: `${t.name || "Action"}` }),
      /* @__PURE__ */ m(oe, { size: "xs", children: [
        i && /* @__PURE__ */ r(En, { onClick: a }),
        /* @__PURE__ */ r(rt, { onClick: e })
      ] })
    ] }),
    /* @__PURE__ */ r(C0, {})
  ] });
}, S0 = C("ActionItem", y0);
function k0({ data: t, index: e, onRemove: n }) {
  const o = b(() => n(e), [e, n]);
  return /* @__PURE__ */ r(P0, { index: e, children: /* @__PURE__ */ r(S0, { data: t, onRemove: o }) });
}
const L0 = (t) => {
  var a;
  const e = t.annotation.key, n = (a = t.componentData.store.events) == null ? void 0 : a[e], o = b((s) => n == null ? void 0 : n.splice(s, 1), [n]), i = b((s) => {
    if (!n || !(s != null && s.oldIndex || s != null && s.newIndex))
      return;
    const c = n[s.oldIndex];
    n.splice(s.oldIndex, 1), n.splice(s.newIndex, 0, c);
  }, [n]);
  return n ? /* @__PURE__ */ r(A0, { sortable: !0, onSort: i, children: n.map((s, c) => /* @__PURE__ */ r(k0, { index: c, data: s, onRemove: o }, s[Bi])) }) : null;
}, E0 = C("ActionList", L0), A0 = p(nr)`
  ${$r}
  && {
    box-shadow: none;
  }
`, P0 = p(nr.Item)`
  ${Tr}
  && {
    overflow: hidden;
    padding: 0;
    box-shadow: none;
    flex-direction: column;
    align-items: initial;
  }

  &.rs-list-item-helper {
    outline: 2px solid var(--rs-btn-primary-bg);
  }
`, M0 = ({ onSelect: t, annotation: e }) => {
  var d;
  const n = D(), o = x(), i = (d = o.oneSelected) == null ? void 0 : d.store, a = e.key, s = n.form.actionNames, c = P("actions"), l = () => {
    t(), i && o.addCodeAction((h) => {
      Ee.addEventHandler(i, a, { name: h.name, type: "code" });
    });
  }, u = (h) => /* @__PURE__ */ r(
    j.Item,
    {
      onClick: () => t({ name: h, type: "code" }),
      style: { position: "relative", display: "flex", justifyContent: "space-between" },
      children: /* @__PURE__ */ r("span", { style: { whiteSpace: "break-spaces" }, children: h })
    },
    h
  );
  return /* @__PURE__ */ m(j.Menu, { title: c("code"), children: [
    s == null ? void 0 : s.map(u),
    !!(s != null && s.length) && /* @__PURE__ */ r(j.Item, { disabled: !0, children: /* @__PURE__ */ r(ra, { style: { marginTop: 0, marginBottom: 0 } }) }),
    /* @__PURE__ */ r(j.Item, { children: c("addCodeAction"), icon: /* @__PURE__ */ r(Be, {}), onClick: l })
  ] });
}, T0 = C("CodeActionsList", M0), $0 = ({ onSelect: t }) => {
  const e = D(), n = P("actions"), o = Object.keys(e.commonActions).map(
    (i) => /* @__PURE__ */ r(j.Item, { children: i, onClick: () => t({ name: i, type: "common" }) }, i)
  );
  return /* @__PURE__ */ r(j.Menu, { title: n("common"), children: o });
}, O0 = ({ onSelect: t }) => {
  const e = D(), n = P("actions"), o = e.formViewerPropsStore.actions;
  if (!o)
    return null;
  const i = Object.keys(o).map(
    (a) => /* @__PURE__ */ r(j.Item, { children: a, onClick: () => t({ name: a, type: "custom" }) }, a)
  );
  return /* @__PURE__ */ r(j.Menu, { title: n("custom"), children: i });
}, j0 = (t) => {
  const e = P("actions"), { componentData: n, annotation: o } = t, i = n.store, a = o.key, s = K(null), c = b((l) => {
    var u;
    (u = s.current) == null || u.close(), l && Ee.addEventHandler(i, a, l);
  }, [s, i, a]);
  return /* @__PURE__ */ r(
    le,
    {
      placement: "leftStart",
      ref: s,
      trigger: "click",
      speaker: /* @__PURE__ */ r(F0, { onSelect: c, annotation: o }),
      children: /* @__PURE__ */ r(H, { icon: /* @__PURE__ */ r(Be, {}), size: "sm", children: e("addAction") })
    }
  );
}, R0 = C("AddActionButton", j0), F0 = ye(({ onSelect: t, annotation: e, ...n }, o) => /* @__PURE__ */ r(hn, { ref: o, ...n, full: !0, children: /* @__PURE__ */ m(j.Menu, { children: [
  /* @__PURE__ */ r($0, { onSelect: t, annotation: e }),
  /* @__PURE__ */ r(T0, { onSelect: t, annotation: e }),
  /* @__PURE__ */ r(O0, { onSelect: t, annotation: e })
] }) })), z0 = p.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`, B0 = p.h6`
  margin-left: 10px;
`, I0 = (t) => {
  const e = t.annotation.key;
  return /* @__PURE__ */ m(z0, { children: [
    /* @__PURE__ */ r(B0, { children: e }),
    /* @__PURE__ */ r(E0, { ...t }),
    /* @__PURE__ */ r(R0, { ...t })
  ] });
}, D0 = (t) => {
  const e = D(), { value: n, onChange: o, showError: i } = t, [a, s] = S(!1), [c, l] = S(n), u = P("propertiesEditor");
  L(() => {
    l(n);
  }, [n]);
  const d = (v) => e.reduceScreen((w, y) => y.key === v ? w + 1 : w, 0) === 0 && v.length > 0, h = (v) => {
    const w = d(v);
    if (!w) {
      const y = v.length > 0 ? "keyMustBeUnique" : "keyMustNotBeEmpty";
      i == null || i(u(y));
    }
    (w || v === n) && (i == null || i(void 0)), s(w), l(v);
  }, f = () => {
    a && (o(c), s(!1));
  };
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ m(ce, { size: "xs", children: [
    /* @__PURE__ */ r(te, { value: c, onChange: h }),
    /* @__PURE__ */ r(fe, { hint: u("applyKey"), children: /* @__PURE__ */ r(ce.Button, { disabled: !a, onClick: f, children: /* @__PURE__ */ r(
      R,
      {
        icon: hs,
        color: a ? "green" : void 0
      }
    ) }) })
  ] }) });
}, N0 = C("KeyInput", D0), V0 = ({ data: t }, e) => {
  const n = t.map((o) => ({
    value: o.value,
    label: o.label
  }));
  return e.forEach((o) => {
    n.find((i) => i.value === o) || n.push({ value: o, label: ar(o) });
  }), n;
}, _0 = (t) => {
  const { value: e, onChange: n, annotation: o, onClean: i } = t, a = V0(o, e);
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(
    H0,
    {
      value: e ?? [],
      data: a,
      onChange: n,
      onClean: i,
      cleanable: !0,
      creatable: !0,
      size: "xs",
      placement: "auto"
    }
  ) });
}, H0 = p(ia)`
  width: 100%;
`, W0 = (t) => {
  const { value: e, onChange: n, onClean: o, annotation: i } = t, a = (l) => {
    if (typeof l == "string") {
      n(Number(l));
      return;
    }
    n(l);
  }, s = { ...i.editorProps, value: e };
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(Z0, { ...s, onChange: a, size: "xs", postfix: /* @__PURE__ */ r(Se, { onClick: o, style: { cursor: "pointer" } }) }) });
}, Z0 = p(pn)`
  .rs-input-group-addon {
    padding: 1px 8px !important;
  }
`, U0 = ({ data: t }, e) => (Qe(e) || t.find((n) => n.value === e || n.label === e) || t.push({ value: e, label: e }), t), An = (t) => {
  const { value: e, onChange: n, annotation: o, onClean: i } = t, a = U0(o, e);
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(
    G0,
    {
      value: e ?? t.annotation.default ?? "",
      data: a,
      onChange: n,
      onClean: i,
      block: !0,
      cleanable: !0,
      creatable: !0,
      size: "xs",
      ...t.annotation.editorProps
    }
  ) });
}, G0 = p(je)`
  width: 100%;
`, K0 = (t) => {
  const { value: e, onChange: n, annotation: o } = t;
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(yn, { items: o.data, onChange: n, value: e }) });
}, q0 = (t) => {
  var u;
  const e = t.componentData.store, n = (d) => {
    if (!e.renderWhen) {
      e.renderWhen = { value: d };
      return;
    }
    e.renderWhen.value = d;
  }, o = b(() => {
    var d;
    return ((d = e.renderWhen) == null ? void 0 : d.fnSource) ?? "";
  }, [e]), i = b(() => {
    var d;
    return (d = e.renderWhen) == null ? void 0 : d.computeType;
  }, [e]), a = b((d) => d === "function" ? !!o() : !1, [o]), s = b((d) => {
    e.renderWhen ?? (e.renderWhen = {}), e.renderWhen.fnSource = d, e.renderWhen.computeType = "function";
  }, [e]), c = b(() => {
    e.renderWhen && (e.renderWhen.computeType = void 0);
  }, [e]), l = {
    annotation: t.annotation,
    componentData: t.componentData,
    getComputeCode: o,
    getComputeType: i,
    setComputeCode: s,
    disableCompute: c,
    hasComputeCode: a
  };
  return /* @__PURE__ */ r(Z, { ...l, children: /* @__PURE__ */ r(te, { value: ((u = e.renderWhen) == null ? void 0 : u.value) ?? "", onChange: n, size: "xs" }) });
}, J0 = C("RenderWhenEditor", q0), xe = "other", ri = ["px", "%", "em", "vw", "vh"], Pn = ["max-content", "min-content", "fit-content", "auto"], X0 = ln([...ri, ...Pn, xe], !1), Y0 = (t) => {
  const { value: e, onChange: n, onClean: o } = t, { value: i, unit: a } = Q0(e), s = (u) => n(_o(u, a)), c = (u) => u && n(_o(i ?? 10, u)), l = a === xe ? /* @__PURE__ */ r(te, { value: i, size: "xs", onChange: s }) : /* @__PURE__ */ r(pn, { value: i, size: "xs", onChange: s });
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ m(t1, { children: [
    an(a) && l,
    /* @__PURE__ */ r(
      n1,
      {
        value: a ?? "",
        onChange: c,
        data: X0,
        className: W({ withValue: an(a) }),
        creatable: !0,
        placement: "bottomEnd",
        size: "xs",
        onClean: o
      }
    )
  ] }) });
};
function Q0(t) {
  if (!t)
    return {};
  if (Pn.includes(t))
    return { unit: t };
  const e = t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]{2,4}|%)$/i);
  if (!e)
    return { value: t, unit: xe };
  const n = parseFloat(e[1]), o = e[2];
  return ri.includes(o) ? { value: n, unit: o } : { value: `${n}${o}`, unit: xe };
}
const an = (t) => typeof t < "u" && !Pn.includes(t), _o = (t, e) => {
  const n = e1(t, e);
  return `${an(e) ? n : ""}${e === xe ? "" : e}`;
};
function e1(t, e) {
  if (e !== xe && typeof t == "string") {
    const n = t.match(/[+-]?\d+(\.\d+)?/);
    return parseFloat((n == null ? void 0 : n[0]) ?? "10");
  }
  return t;
}
const t1 = p.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
`, n1 = p(je)`
  width: auto;

  &.withValue {
    width: min-content;
    min-width: 78px;
  }
`, o1 = (t) => {
  const { value: e, onChange: n, annotation: o } = t, [i, a] = S(0), s = K(null), c = (e == null ? void 0 : e.length) > 15 || i >= 2, [l, u] = S(c), [d, h] = S(!1), f = (w) => {
    c !== l && (h(!0), u(c)), n(w);
  };
  L(() => {
    var w, y;
    d && (h(!1), (w = s.current) == null || w.focus(), (y = s.current) == null || y.setSelectionRange(e == null ? void 0 : e.length, e == null ? void 0 : e.length));
  }, [d, e == null ? void 0 : e.length]), L(() => {
    const w = ((e == null ? void 0 : e.match(/\n/g)) || []).length + 1;
    a(w > 5 ? 5 : w);
  }, [e]);
  const v = () => {
    i < 2 && a(2);
  };
  return /* @__PURE__ */ r(Z, { ...t, style: { flexWrap: l ? "wrap" : "initial" }, children: /* @__PURE__ */ r(
    te,
    {
      name: o.key,
      value: e ?? "",
      onPressEnter: v,
      onChange: f,
      size: "xs",
      as: l ? "textarea" : void 0,
      rows: i,
      ref: s
    }
  ) });
}, r1 = () => {
  var u;
  const t = P("annotation.tooltipProps"), e = wr("tooltip-"), n = x(), o = (u = n.oneSelected) == null ? void 0 : u.store, i = o == null ? void 0 : o.tooltipProps, a = !!i, s = un(), c = s ? n.view.getTooltipAnnotations(s) : null, l = b((d, h) => {
    o && (o.tooltipProps = h ? {} : void 0);
  }, [o]);
  return !s || !c ? null : /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ m(Mr, { children: [
      /* @__PURE__ */ r(Zr, { hint: /* @__PURE__ */ r($, { children: t("hint") }), htmlFor: e, children: /* @__PURE__ */ r("h6", { children: t("tooltip") }) }),
      /* @__PURE__ */ r(oi, { checked: a, onChange: l, id: e })
    ] }),
    a && /* @__PURE__ */ r(ge, { propertyBlockType: "tooltip", annotations: c, context: i })
  ] });
}, i1 = C("TooltipPropertiesEditor", r1), a1 = ({ type: t }) => {
  const { store: e } = I(), { t: n } = O(), i = D().getValidationRules(t), a = (u, d) => {
    var f;
    e.schema ?? (e.schema = { validations: [] });
    const h = d === "internal" ? { key: u } : { key: u, type: d };
    (f = e.schema.validations) == null || f.push(h);
  }, s = (u, d) => {
    var h, f;
    return !((f = (h = e.schema) == null ? void 0 : h.validations) != null && f.find((v) => {
      const w = d === "internal" && !v.type || v.type === d;
      return v.key === u && w;
    }));
  }, c = (u, d, h) => /* @__PURE__ */ r(j.Item, { children: h, eventKey: u, onSelect: (f) => a(f, d) }, u), l = Object.entries(i.internal).filter(([u]) => s(u, "internal")).map(([u]) => c(u, "internal", n(`validation.rule.${u}`)));
  if (i.custom) {
    const u = Object.entries(i.custom).filter(([d]) => s(d, "custom")).map(([d]) => c(d, "custom", n(`validation.rule.${d}`, d)));
    u.length && (l.push(/* @__PURE__ */ r(j.Separator, {}, "separator")), l.push(...u));
  }
  return /* @__PURE__ */ r($, { children: l });
}, s1 = C("RulesList", a1), c1 = () => {
  var s;
  const { t } = O(), e = x(), n = I(), o = e.getComponentMetadata(n.model.type), i = (s = o == null ? void 0 : o.valuedAn) == null ? void 0 : s.type;
  return i ? /* @__PURE__ */ r(j, { renderToggle: (c, l) => /* @__PURE__ */ r(z, { ...c, ref: l, block: !0, children: t("validation.addRule") }), children: /* @__PURE__ */ r(s1, { type: i }) }) : null;
}, l1 = C("AddRuleButton", c1);
function d1(t) {
  const e = t.editorType === "code" ? "customValidator" : t.type;
  let n = Ii(e).typed(t.type).calculable(!1);
  return t.required && (n = n.required), t.default && (n = n.default(t.default)), n = t.key === "message" ? n.localize : n.notLocalize, n.build(t.key);
}
function u1(t) {
  return t.map(d1);
}
const m1 = ({ rule: t, onRemove: e }) => {
  const { store: n, model: o } = I(), { t: i } = O(), a = n.schema, s = D(), c = b(() => (t.args ?? (t.args = {}), t.args), [t]), l = o.valueType;
  if (!l || !a)
    return null;
  const d = ((f, v) => {
    var y;
    const w = s.getValidationRules(f);
    if (!t.type || t.type === "internal")
      return w.internal[v];
    if (t.type === "custom")
      return (y = w.custom) == null ? void 0 : y[v];
  })(l, t.key);
  if (!d)
    return console.warn(`Cannot find validation rule for type: '${l}' and key: '${t.key}'`), null;
  const h = u1(d.params ?? []);
  return /* @__PURE__ */ m(B, { children: [
    /* @__PURE__ */ m(ne, { spaceBetween: !0, children: [
      /* @__PURE__ */ r(p1, { children: i(`validation.rule.${t.key}`, t.key) }),
      /* @__PURE__ */ r(rt, { onClick: e, hintPlacement: "autoHorizontal" })
    ] }),
    /* @__PURE__ */ r(
      ge,
      {
        annotations: h,
        propertyBlockType: Di(t.key),
        context: t.args ?? {},
        initContext: c
      }
    )
  ] });
}, h1 = C("ValidationRuleEditor", m1), p1 = p.span`
  font-size: medium;
`, g1 = Ni.setup({ annotationType: "Module", calculable: !1 }).hinted("Validate automatically by input change").default(!0).build("autoValidate"), f1 = (t) => {
  const { store: e, model: n } = t.componentData, o = n.valueType, i = e.schema ?? { validations: [] };
  return o ? /* @__PURE__ */ m(B, { children: [
    /* @__PURE__ */ r(w1, { children: /* @__PURE__ */ r(at, { annotation: g1, context: i }) }),
    /* @__PURE__ */ r(l1, {}),
    /* @__PURE__ */ r(bn, { children: b1(i.validations) })
  ] }) : null;
}, v1 = C("ComponentValidationSettingsEditor", f1), b1 = (t) => t == null ? void 0 : t.map((e, n) => {
  const o = `${e.key}-${e.type ?? "internal"}`;
  return /* @__PURE__ */ r(Le, { children: /* @__PURE__ */ r(h1, { rule: e, onRemove: () => t == null ? void 0 : t.splice(n, 1) }) }, o);
}), w1 = p.div`
  label {
    min-width: max-content;
  }
`, C1 = (t) => {
  const { annotation: e, componentData: n, value: o, onChange: i } = t, a = x(), s = `${n.key}[${e.key}][${e.type}]`, c = () => a.editCustomValidationCode(s, o, y1(e.type), i), { t: l } = O(), u = l(`annotation.${e.key}.hint`);
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(z, { name: e.key, onClick: c, size: "xs", appearance: "ghost", block: !0, style: { borderStyle: "dashed" }, children: u }) });
}, x1 = C("CustomValidatorEditor", C1), y1 = (t) => `/**
 * @param {${t}} value the validated value.
 * @return {boolean} the validation result.
 */
async (value) => {`, S1 = {
  key: N0,
  htmlAttributes: e0,
  validation: v1,
  string: o1,
  boolean: Vo,
  number: W0,
  date: a0,
  size: Y0,
  array: Ju,
  arrayOfString: Xu,
  color: t0,
  event: I0,
  oneOf: An,
  someOf: _0,
  radio: K0,
  tooltipProps: i1,
  useTooltip: Vo,
  renderWhen: J0,
  customValidator: x1
};
function k1(t, e, n, o, i) {
  const a = F(
    () => Vi.create(t, e, n, o, i),
    [t, e, n, o, i]
  );
  return L(() => () => a.dispose(), [a]), a;
}
const L1 = (t) => {
  const { annotation: e, value: n, children: o } = t, i = x(), [a, s] = S(), [c, l] = S(!0), u = F(
    () => ({ annotation: e, store: i.viewer }),
    [e, i.viewer]
  ), d = k1(
    i.viewer,
    Cr,
    u,
    s
  ), h = b(async (f, v) => {
    if (!c)
      return;
    if (v)
      return s(v);
    s(void 0);
    const w = await d.validate(f);
    w && c && s(w);
  }, [c, d]);
  return L(() => (l(!0), () => l(!1)), []), L(() => {
    h(n, t.error).catch(console.error);
  }, [n, t.error, h]), /* @__PURE__ */ r(M1, { error: a, children: o });
}, E1 = C("Erroneous", L1), A1 = p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, P1 = p.p`
  font-size: 12px;
  color: var(--red-600);
  margin-top: 0.25rem;

  &:before {
    content: "❌ ";
    font-size: 10px;
    padding: 6px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`, M1 = ({ children: t, error: e }) => /* @__PURE__ */ m(A1, { children: [
  t,
  e && /* @__PURE__ */ r(P1, { children: e })
] }), T1 = ({
  annotation: t,
  context: e,
  initContext: n,
  propertyBlockType: o = "component"
}) => {
  var Ve;
  const i = x(), a = I(), s = i.customPropertyEditor(t.editor) ?? S1[t.editor], [c, l] = S(!1), [u, d] = S(), h = (jn(t) ? (Ve = e[t.key]) == null ? void 0 : Ve.value : e[t.key]) ?? t.default, f = b((T) => {
    var J;
    let E = e;
    if (c || (l(!0), E = (n == null ? void 0 : n()) ?? e), jn(t)) {
      E[J = t.key] ?? (E[J] = {}), E[t.key].value = T;
      return;
    }
    E[t.key] = T;
  }, [e, n, t, c]);
  L(() => {
    l(!1);
  }, [a, n]);
  const v = b(() => delete e[t.key], [e, t]), w = b((T) => d(T), []), y = b((T) => {
    const E = { computeType: "function", fnSource: T };
    e[t.key] = Object.assign(e[t.key] ?? {}, E);
  }, [e, t]), A = b((T, E) => {
    if (!E || (i.viewer.form.localization.setLocalization(E, a.key, t.key, o, T), lt(o)))
      return;
    const J = { computeType: "localization" };
    e[t.key] = Object.assign(e[t.key] ?? {}, J);
  }, [e, t, i, a, o]), M = b((T, E, J) => {
    switch (E) {
      case "function":
        return y(T);
      case "localization":
        return A(T, J == null ? void 0 : J.langCode);
    }
  }, [y, A]), q = b(() => {
    var T;
    return (T = e[t.key]) == null ? void 0 : T.fnSource;
  }, [e, t]), Q = b((T) => {
    const E = i.viewer.form.localization.getLocalization(T, a.key, t.key, o), J = i.viewer.form.localization.getLocalization(i.defaultLanguage.fullCode, a.key, t.key, o);
    return E ?? J ?? "";
  }, [i, a, t, o]), X = b((T, E) => {
    switch (T) {
      case "function":
        return q();
      case "localization":
        return E != null && E.langCode ? Q(E == null ? void 0 : E.langCode) : "";
    }
  }, [q, Q]), de = b(() => {
    if (lt(o)) {
      i.viewer.form.localization.removeLocalizationForType(a.key, o);
      return;
    }
    const T = { computeType: void 0 };
    e[t.key] = Object.assign(e[t.key] ?? {}, T);
  }, [o, e, t.key, i.viewer.form.localization, a.key]), V = b(() => i.viewer.form.localization.hasLocalization(a.key, t.key, o), [i, a, t, o]), ue = b(() => {
    if (lt(o) && V())
      return "localization";
    const T = e[t.key];
    return T == null ? void 0 : T.computeType;
  }, [o, V, e, t.key]), st = b((T) => T === "function" ? !!X("function") : V(), [X, V]), Ne = {
    value: h,
    onChange: f,
    onClean: v,
    annotation: t,
    showError: w,
    componentData: a,
    setComputeCode: M,
    getComputeCode: X,
    disableCompute: de,
    getComputeType: ue,
    hasComputeCode: st
  };
  return !!s && /* @__PURE__ */ r(E1, { ...Ne, error: u, children: Gi(s, Ne) });
}, at = C("PropertyEditorWrapper", T1);
var G = /* @__PURE__ */ ((t) => (t.Main = "main", t.Style = "style", t.Actions = "actions", t.Rules = "rules", t))(G || {}), me = /* @__PURE__ */ ((t) => (t.Additional = "additional", t.Tooltip = "tooltip", t))(me || {});
const $1 = ({ value: t, onChange: e }) => {
  const n = P("style"), i = ["any", "desktop", "mobile", "tablet"].map((a) => ({ value: a, label: n(a) }));
  return /* @__PURE__ */ m(O1, { children: [
    n("forDevice"),
    /* @__PURE__ */ r(
      j1,
      {
        value: t,
        data: i,
        onChange: (a) => e(a),
        appearance: "subtle",
        size: "xs",
        searchable: !1,
        cleanable: !1,
        width: 100
      }
    )
  ] });
}, O1 = p.h6`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 28px;
  gap: 10px;
`, j1 = p(Sn)`
  margin-inline-end: 4px;

  .rs-picker-toggle-value {
    font-size: 15px;
  }
`, R1 = {
  validation: G.Rules,
  event: G.Actions
}, F1 = {
  htmlAttributes: me.Additional,
  tooltipProps: me.Tooltip,
  useTooltip: me.Tooltip,
  renderWhen: me.Additional
}, z1 = (t) => (e) => (R1[e.editor] ?? G.Main) === t, ht = (t) => (e) => F1[e.editor] === t, B1 = N("RightPanel_Content", ({ activeTab: t, ...e }) => {
  const n = x(), o = un(), i = P("propertiesEditor"), a = n.oneSelectedComponentData;
  if (!a)
    return /* @__PURE__ */ r(Wo, { children: /* @__PURE__ */ r(Ou, { style: { height: "40%" }, children: i("selectElementForEdit") }) });
  const s = n.getComponentMetadata(a.store.type), c = s.properties.concat(s.modules).filter(z1(t)), l = c.filter(ht()), u = c.filter(ht(me.Additional)), d = c.filter(ht(me.Tooltip)), h = s.kind === "component" && !!(d != null && d.length) && !!o, f = s.kind !== "slot";
  return /* @__PURE__ */ r(Oe, { value: a, children: /* @__PURE__ */ m(Wo, { ...e, children: [
    /* @__PURE__ */ m(_1, { children: [
      t === G.Main && /* @__PURE__ */ r(at, { annotation: _i, context: a.store }),
      f && /* @__PURE__ */ r(ge, { annotations: l, context: a.store.props }),
      t === G.Style && f && /* @__PURE__ */ r(D1, { meta: s, store: a.store })
    ] }),
    h && f && /* @__PURE__ */ r(ge, { annotations: d, context: a.store.props }),
    !!(u != null && u.length) && f && /* @__PURE__ */ r(
      ge,
      {
        annotations: u,
        context: a.store.props,
        header: i("subSection.additionalProperties")
      }
    )
  ] }) });
}), I1 = ({ meta: t, store: e }) => {
  const n = P("style"), [o, i] = S("any"), a = t.kind === "component", s = t.kind === "template", c = /* @__PURE__ */ r(at, { annotation: Hi, context: e.props });
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ r($1, { value: o, onChange: i }),
    !s && /* @__PURE__ */ r(Ho, { meta: t, store: e, device: o, cssPart: "css", header: n("component"), headerHint: n("componentHint") }),
    a && c,
    /* @__PURE__ */ r(Ho, { meta: t, store: e, device: o, cssPart: "wrapperCss", header: n("wrapper"), headerHint: n("wrapperHint") }),
    !a && c,
    /* @__PURE__ */ r(Tu, { device: o, useWrapperStyles: a, defaultActiveTab: s ? "wrapperCss" : "css" })
  ] });
}, D1 = C("Styles", I1), N1 = ({ meta: t, store: e, device: n, cssPart: o, header: i, headerHint: a }) => {
  var u, d;
  const s = V1(o, e, n), c = ((d = (u = e[o]) == null ? void 0 : u[n]) == null ? void 0 : d.object) ?? {}, l = t.kind === "component";
  return /* @__PURE__ */ r(
    ge,
    {
      header: l ? i : void 0,
      headerHint: l ? a : void 0,
      annotations: t[o],
      context: c,
      initContext: s
    }
  );
}, Ho = C("StyleBlock", N1), V1 = (t, e, n) => b(() => {
  var o, i;
  return e[t] ?? (e[t] = {}), (o = e[t])[n] ?? (o[n] = {}), (i = e[t][n]).object ?? (i.object = {}), e[t][n].object ?? {};
}, [t, e, n]), ge = ({
  annotations: t,
  context: e,
  initContext: n,
  header: o,
  headerHint: i,
  propertyBlockType: a = "component"
}) => e ? /* @__PURE__ */ m($, { children: [
  !!o && /* @__PURE__ */ r(fe, { hint: i, children: /* @__PURE__ */ r("h6", { children: o }) }),
  t.map((s) => /* @__PURE__ */ r(
    at,
    {
      propertyBlockType: a,
      annotation: s,
      context: e,
      initContext: n
    },
    s.key
  ))
] }) : null, _1 = p.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`, Wo = p.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;
  justify-content: space-between;

  & > * {
    margin-bottom: 5px;
  }
`, H1 = () => {
  const t = D(), e = x(), n = b((f) => t.form.errorType = f, [t]), o = b(() => t.form.errorType = void 0, [t]), i = b(() => {
  }, []), a = b(() => {
  }, []), s = b(() => "", []), c = b(() => {
  }, []), l = b(() => !1, []), u = e.view.errors, d = Xo(...u).default(u[0]).calculable(!1).notLocalize.withEditorProps({
    creatable: !1
  }).build("errorType"), h = {
    value: t.form.errorType,
    onChange: n,
    onClean: o,
    annotation: d,
    componentData: e.viewer.form.componentTree,
    disableCompute: i,
    setComputeCode: a,
    getComputeCode: s,
    getComputeType: c,
    hasComputeCode: l
  };
  return /* @__PURE__ */ r(An, { ...h });
}, W1 = C("ErrorComponentPicker", H1), Z1 = () => {
  const { t } = O(), e = x(), [n, o] = S(!1), [i, a] = S("Error message example!"), s = n ? i : void 0;
  L(() => (e.viewer.form.componentTree.setAllErrors(s), () => e.viewer.form.componentTree.setAllErrors()), [s, e.viewer.form.componentTree]);
  const c = Wi(), l = e.view.getErrorAnnotations(c.type), u = (l == null ? void 0 : l.map((h) => Object.assign(h, { localizable: !1, calculable: !1 }))) ?? [], d = e.viewer.form.errorProps;
  return /* @__PURE__ */ m("div", { children: [
    t("annotation.errorConfig.show"),
    ": ",
    /* @__PURE__ */ r(Je, { onChange: (h, f) => o(f), checked: n }),
    n && /* @__PURE__ */ r(te, { style: { marginTop: 4, marginBottom: 4 }, onChange: a, value: i }),
    /* @__PURE__ */ r(W1, {}),
    /* @__PURE__ */ r(Oe, { value: e.viewer.form.componentTree, children: /* @__PURE__ */ r(ge, { annotations: u, context: d }) })
  ] });
}, U1 = C("ErrorSettings", Z1), G1 = () => {
  const t = x(), e = D(), n = t.formAvailableLanguages, o = F(() => {
    const f = n.map((w) => w.fullCode), v = n.map((w) => w.name);
    return Xo(...f).labeled(...v).default(t.defaultLanguage.fullCode).notLocalize.calculable(!1).withEditorProps({
      placement: "auto"
    }).build("defaultLanguage");
  }, [n, t.defaultLanguage]), i = b((f) => {
    const v = n.find((w) => w.fullCode === f);
    v && (e.form.defaultLanguage = v);
  }, [n, e.form]), a = b(
    () => e.form.defaultLanguage = t.defaultLanguage,
    [e, t]
  ), s = b(() => {
  }, []), c = b(() => {
  }, []), l = b(() => "", []), u = b(() => {
  }, []), d = b(() => !1, []), h = {
    onChange: i,
    value: e.form.defaultLanguage.fullCode,
    componentData: t.viewer.form.componentTree,
    onClean: a,
    annotation: o,
    disableCompute: s,
    setComputeCode: c,
    getComputeCode: l,
    getComputeType: u,
    hasComputeCode: d
  };
  return /* @__PURE__ */ r(Oe, { value: t.viewer.form.componentTree, children: /* @__PURE__ */ r(An, { ...h }) });
}, K1 = C("FormLanguageSettings", G1), q1 = (t) => {
  const { value: e, onChange: n, onClean: o } = t, i = x(), a = un(), s = i.view.tooltips.map((c) => ({
    value: c,
    label: ar(c)
  }));
  return /* @__PURE__ */ r(Z, { ...t, children: /* @__PURE__ */ r(
    X1,
    {
      value: e ?? a ?? "",
      data: s,
      onChange: n,
      onClean: o,
      block: !0,
      cleanable: !0,
      size: "xs",
      placement: "auto"
    }
  ) });
}, J1 = C("TooltipTypePicker", q1), X1 = p(je)`
  width: 100%;
`, Y1 = () => {
  const t = x(), e = b((u) => t.viewer.form.tooltipType = u, [t]), n = b(() => t.viewer.form.tooltipType = void 0, [t]), o = b(() => {
  }, []), i = b(() => {
  }, []), a = b(() => "", []), s = b(() => {
  }, []), c = b(() => !1, []), l = {
    onChange: e,
    value: t.viewer.form.tooltipType,
    componentData: t.viewer.form.componentTree,
    onClean: n,
    annotation: Zi.calculable(!1).notLocalize.build("tooltipType"),
    disableCompute: o,
    setComputeCode: i,
    getComputeCode: a,
    getComputeType: s,
    hasComputeCode: c
  };
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Oe, { value: t.viewer.form.componentTree, children: /* @__PURE__ */ r(J1, { ...l }) }) });
}, Q1 = C("TooltipSettings", Y1), em = N("Settings_Tab_Content", (t) => {
  const e = P("leftPanel.formSettings");
  return /* @__PURE__ */ m("div", { ...t, children: [
    /* @__PURE__ */ r(He, { marginTop: 0, children: e("actions") }),
    /* @__PURE__ */ r(Pu, {}),
    /* @__PURE__ */ r(He, { children: e("error") }),
    /* @__PURE__ */ r(U1, {}),
    /* @__PURE__ */ r(He, { children: e("tooltip") }),
    /* @__PURE__ */ r(Q1, {}),
    /* @__PURE__ */ r(He, { children: e("language") }),
    /* @__PURE__ */ r(K1, {})
  ] });
}), He = p.label`
  padding-inline: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-top: ${({ marginTop: t }) => t ?? "24"}px;
`, tm = { overflow: "hidden", flex: 1 }, nm = N("Tree_Tab_Content", (t) => {
  const { t: e } = O(), n = x(), { componentTree: o } = n.viewer.form, i = F(() => [o], [o]), a = F(
    () => ({ componentWrapper: Ml, view: n.view }),
    [n.view]
  );
  L(() => {
    n.expanded.add(o);
  }, [n, o]);
  const s = b(() => n.expandAll(), [n]), c = b(() => n.collapseAll(), [n]);
  return /* @__PURE__ */ m(B, { gap: 0, style: tm, ...t, children: [
    /* @__PURE__ */ m(ne, { children: [
      /* @__PURE__ */ m(Zo, { onClick: s, size: "sm", appearance: "subtle", children: [
        /* @__PURE__ */ r(Va, {}),
        e("tree.expand")
      ] }),
      /* @__PURE__ */ m(Zo, { onClick: c, size: "sm", appearance: "subtle", children: [
        /* @__PURE__ */ r(_a, {}),
        e("tree.collapse")
      ] })
    ] }),
    /* @__PURE__ */ r(om, { children: /* @__PURE__ */ r(Jo, { value: a, children: /* @__PURE__ */ r(dn, { data: i }) }) })
  ] });
}), om = p.div`
  display: flex;
  overflow: auto;
`, Zo = p(z)`
  display: flex !important;
  align-items: center;
  gap: 10px;
`, rm = Y("LeftPanel_Nav", ei), im = Y("LeftPanel_Content", B), am = Y("Components_Tab_Content", Xr), ii = {
  components: [/* @__PURE__ */ r(am, { draggable: !0 }), "Components_Tab", ss, "var(--rs-green-600)"],
  tree: [/* @__PURE__ */ r(nm, {}), "Tree_Tab", cs, "var(--rs-navs-selected)"],
  settings: [/* @__PURE__ */ r(em, {}), "Settings_Tab", ls, "violet"],
  forms: [/* @__PURE__ */ r(Eu, {}), "Forms_Tab", as, "#f67f1f"]
}, We = (t) => {
  const { t: e } = O();
  return F(() => {
    const n = e("leftPanel.sectionName." + t), [o, i, a, s] = ii[t];
    return Qr(t, i, n, a, { color: s });
  }, [e, t]);
}, sm = () => {
  const { formStorageEnabled: t } = x(), [e, n] = S("components"), o = We("components"), i = We("tree"), a = We("settings"), s = We("forms");
  return /* @__PURE__ */ m($, { children: [
    /* @__PURE__ */ m(rm, { appearance: "subtle", activeKey: e, onSelect: n, children: [
      o,
      i,
      a,
      t && s
    ] }),
    /* @__PURE__ */ r(im, { style: { minHeight: 0, overflow: "auto", padding: 4 }, children: ii[e][0] })
  ] });
}, cm = C("LeftPanelNav", sm), lm = () => /* @__PURE__ */ r(B, { style: { marginTop: 55, paddingInlineStart: 5, minHeight: 80 }, children: /* @__PURE__ */ r(yu, {}) }), dm = {
  builder: /* @__PURE__ */ r(cm, {}),
  viewer: /* @__PURE__ */ r(lm, {})
}, um = N("LeftPanel", (t) => {
  const e = x(), n = dm[e.builderMode];
  return /* @__PURE__ */ r(qr, { placement: "left", ...t, children: n });
}), mm = () => {
  const e = x().promptModalState, n = P("promptDialog"), o = () => e.opened = !1, i = () => {
    var c;
    o(), (c = e.onClose) == null || c.call(e);
  }, a = () => {
    o(), e.onOk(e.value);
  }, s = () => {
    var c;
    o(), (c = e.onCancel) == null || c.call(e);
  };
  return /* @__PURE__ */ m(_, { backdrop: e.backdrop, keyboard: !0, open: e.opened, onClose: i, children: [
    /* @__PURE__ */ r(_.Header, { children: /* @__PURE__ */ r(_.Title, { children: e.title }) }),
    /* @__PURE__ */ r(_.Body, { children: /* @__PURE__ */ r(
      te,
      {
        style: { width: "100%" },
        placeholder: e.placeholder,
        autoFocus: !0,
        value: e.value,
        onChange: (c) => e.value = c
      }
    ) }),
    /* @__PURE__ */ m(_.Footer, { children: [
      /* @__PURE__ */ r(z, { onClick: a, appearance: "primary", active: !0, children: e.okText || n("ok") }),
      /* @__PURE__ */ r(z, { onClick: s, appearance: "subtle", children: e.cancelText || n("cancel") })
    ] })
  ] });
}, hm = C("PromptDialog", mm), pm = {
  [G.Main]: ["Main_Tab", gs, "var(--rs-navs-selected)"],
  [G.Style]: ["Style_Tab", gr, "#f67f1f"],
  [G.Actions]: ["Actions_Tab", ps, "violet"],
  [G.Rules]: ["Rules_Tab", fs, "var(--rs-green-600)"]
}, Ze = (t) => {
  const { t: e } = O();
  return F(() => {
    const n = e("propertiesEditor.sectionName." + t), [o, i, a] = pm[t];
    return Qr(t, o, n, i, { color: a });
  }, [e, t]);
}, gm = N("RightPanel_Nav", ({ activeTab: t, setActiveTab: e, ...n }) => /* @__PURE__ */ m(ei, { activeKey: t, onSelect: e, appearance: "subtle", ...n, children: [
  Ze(G.Main),
  Ze(G.Style),
  Ze(G.Actions),
  Ze(G.Rules)
] })), fm = () => {
  const [t, e] = S(G.Main);
  return /* @__PURE__ */ m(bm, { children: [
    /* @__PURE__ */ r(gm, { activeTab: t, setActiveTab: e }),
    /* @__PURE__ */ r(B1, { activeTab: t })
  ] });
}, vm = C("PropertiesEditor", fm), bm = p.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;

  .placement-left .rs-popover {
    margin-left: -14px;
  }
`, wm = {
  builder: /* @__PURE__ */ r(vm, {}),
  viewer: null
}, Cm = N("RightPanel", (t) => {
  const e = x(), n = wm[e.builderMode];
  return /* @__PURE__ */ r(qr, { placement: "right", ...t, children: n });
}), xm = (t) => /* @__PURE__ */ r(Gc, { props: t, children: /* @__PURE__ */ r(ym, {}) }), oh = C("FormBuilder", xm), ym = N("MainContainer", (t) => /* @__PURE__ */ r(Ui, { children: /* @__PURE__ */ r(Ki, { fallback: /* @__PURE__ */ r(aa, { center: !0, content: "loading" }), children: /* @__PURE__ */ m(Sm, { children: [
  /* @__PURE__ */ m(km, { ...t, children: [
    /* @__PURE__ */ r(um, {}),
    /* @__PURE__ */ r(cu, {}),
    /* @__PURE__ */ r(Cm, {}),
    /* @__PURE__ */ r(wu, {}),
    /* @__PURE__ */ r(hm, {})
  ] }),
  /* @__PURE__ */ r(Ec, {})
] }) }) })), Sm = p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background-color: white;

  .rs-theme-dark & {
    background-color: #303336;
  }
`, km = p.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-height: 0;
  padding-bottom: 15px;
`;
export {
  zu as ActionCell,
  ah as BuilderView,
  nh as CheckCell,
  ti as EditableTable,
  oh as FormBuilder,
  Ru as InputCell,
  Fu as SelectCell,
  ni as makeColumns
};
//# sourceMappingURL=index.js.map
