import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_functional_equalsReturn_DynamicComposite =
  _test_functional_equalsReturn("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      (input: DynamicComposite): DynamicComposite | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is DynamicComposite => {
          const $join = (typia.functional.equalsReturn as any).join;
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            Object.keys(input).every((key: any) => {
              if (["id", "name"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                Number.isFinite(Number(key))
              )
                return "number" === typeof value && Number.isFinite(value);
              if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                return "string" === typeof value;
              if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
                return "string" === typeof value;
              if (
                "string" === typeof key &&
                RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
              )
                return (
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value
                );
              if (
                "string" === typeof key &&
                RegExp(
                  /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(key)
              )
                return "boolean" === typeof value;
              return false;
            });
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
