import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_functional_assertReturnAsync_TupleRestAtomic =
  _test_functional_assertReturnAsync(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )(
    (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      async (input: TupleRestAtomic): Promise<TupleRestAtomic> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
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
        ): TupleRestAtomic => {
          const __is = (input: any): input is TupleRestAtomic => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input.slice(2).every((elem: any) => "string" === typeof elem)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleRestAtomic => {
              const $guard = (typia.functional.assertReturn as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleRestAtomic",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  ("boolean" === typeof input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof input[1] &&
                    Number.isFinite(input[1])) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input.slice(2)) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...string",
                        value: input.slice(2),
                      },
                      errorFactory,
                    )) &&
                    input.slice(2).every(
                      (elem: any, _index1: number) =>
                        "string" === typeof elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "string",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...string",
                        value: input.slice(2),
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleRestAtomic",
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
