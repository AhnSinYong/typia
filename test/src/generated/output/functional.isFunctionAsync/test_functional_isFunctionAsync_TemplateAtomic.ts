import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_functional_isFunctionAsync_TemplateAtomic =
  _test_functional_isFunctionAsync("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      async (input: TemplateAtomic): Promise<TemplateAtomic | null> => {
        if (
          false ===
          ((input: any): input is TemplateAtomic => {
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
          })(input)
        )
          return null;
        const result = await p(input);
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
