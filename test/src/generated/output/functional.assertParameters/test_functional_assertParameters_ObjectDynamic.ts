import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../../internal/_test_functional_assertParameters";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_functional_assertParameters_ObjectDynamic =
  _test_functional_assertParameters(TypeGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )(
    (p: (input: ObjectDynamic) => ObjectDynamic) =>
      (input: ObjectDynamic): ObjectDynamic => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertParameters as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectDynamic => {
          const __is = (input: any): input is ObjectDynamic => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value
                );
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectDynamic => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $join = (typia.functional.assertParameters as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return (
                    "string" === typeof value ||
                    ("number" === typeof value && Number.isFinite(value)) ||
                    "boolean" === typeof value ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "(boolean | number | string)",
                        value: value,
                      },
                      errorFactory,
                    )
                  );
                });
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectDynamic",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectDynamic",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
