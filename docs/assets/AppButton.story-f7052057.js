import { b as buttonSizeOptions, a as buttonVariantOptions, _ as __unplugin_components_0 } from "./AppButton-d7571d98.js";
import { as as defineComponent, bC as reactive, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, bc as normalizeProps, bd as guardReactiveProps, aE as createTextVNode, aT as toDisplayString } from "./vendor-a88772a8.js";
import { i as iconNames } from "./AppIcon-5add2816.js";
import "./CheckmarkIcon-6adcc9e8.js";
import "./CloseIcon-ef811616.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./fade.transition-ff73e3ee.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isDisabled: false,
      isLoading: false,
      size: "default",
      variant: "default",
      frontIcon: void 0,
      backIcon: void 0,
      content: "Click me"
    });
    const __returned__ = { state, get buttonSizeOptions() {
      return buttonSizeOptions;
    }, get buttonVariantOptions() {
      return buttonVariantOptions;
    }, get iconNames() {
      return iconNames;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_AppButton = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Buttons/AppButton" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isLoading,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isLoading = $event),
            title: "Loading"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.size,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.size = $event),
            title: "Size",
            options: $setup.buttonSizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.variant,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.variant = $event),
            title: "Variant",
            options: $setup.buttonVariantOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.frontIcon,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.frontIcon = $event),
            title: "Front Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.backIcon,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.backIcon = $event),
            title: "Back Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.content = $event),
            title: "Text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(
            _component_AppButton,
            normalizeProps(guardReactiveProps($setup.state)),
            {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.state.content),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            },
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-button/AppButton.story.vue";
const AppButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-button/AppButton.story.vue"]]);
export {
  AppButton_story as default
};
