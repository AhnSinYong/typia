import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_functional_assertReturnAsync_ConstantAtomicSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )(
    (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      async (input: ConstantAtomicSimple): Promise<ConstantAtomicSimple> => {
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
        ): ConstantAtomicSimple => {
          const __is = (input: any): input is ConstantAtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 4 &&
              false === input[0] &&
              true === input[1] &&
              2 === input[2] &&
              "three" === input[3]
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicSimple => {
              const $guard = (typia.functional.assertReturn as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantAtomicSimple",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 4 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: '[false, true, 2, "three"]',
                        value: input,
                      },
                      errorFactory,
                    )) &&
                  (false === input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "false",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (true === input[1] ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "true",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (2 === input[2] ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "2",
                        value: input[2],
                      },
                      errorFactory,
                    )) &&
                  ("three" === input[3] ||
                    $guard(
                      true,
                      {
                        path: _path + "[3]",
                        expected: '"three"',
                        value: input[3],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicSimple",
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
