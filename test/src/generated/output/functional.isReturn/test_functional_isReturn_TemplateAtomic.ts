import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_functional_isReturn_TemplateAtomic =
  _test_functional_isReturn("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      (input: TemplateAtomic): TemplateAtomic | null => {
        const result = p(input);
        return ((input: any): input is TemplateAtomic => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.prefix &&
            RegExp(/^prefix_(.*)/).test(input.prefix) &&
            "string" === typeof input.postfix &&
            RegExp(/(.*)_postfix$/).test(input.postfix) &&
            "string" === typeof input.middle_string &&
            RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
            "string" === typeof input.middle_string_empty &&
            RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) &&
            "string" === typeof input.middle_numeric &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.middle_numeric,
            ) &&
            ("the_false_value" === input.middle_boolean ||
              "the_true_value" === input.middle_boolean) &&
            "string" === typeof input.ipv4 &&
            RegExp(
              /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(input.ipv4) &&
            "string" === typeof input.email &&
            RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
