import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_functional_assertReturnAsyncCustom_ToJsonAtomicUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      async (input: ToJsonAtomicUnion): Promise<ToJsonAtomicUnion> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ToJsonAtomicUnion => {
          const __is = (input: any): input is ToJsonAtomicUnion => {
            const $io0 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonAtomicUnion => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                "function" === typeof input.toJSON ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                  },
                  errorFactory,
                );
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ToJsonAtomicUnion",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "ToJsonAtomicUnion.IToJson",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "ToJsonAtomicUnion.IToJson",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonAtomicUnion",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
