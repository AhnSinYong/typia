import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../../internal/_test_functional_assertParameters";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_functional_assertParameters_ArrayAny =
  _test_functional_assertParameters(TypeGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) =>
      (input: ArrayAny): ArrayAny => {
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
        ): ArrayAny => {
          const __is = (input: any): input is ArrayAny => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.anys) &&
              (undefined === input.undefindable1 ||
                Array.isArray(input.undefindable1)) &&
              (undefined === input.undefindable2 ||
                Array.isArray(input.undefindable2)) &&
              (null === input.nullables1 || Array.isArray(input.nullables1)) &&
              (null === input.nullables2 || Array.isArray(input.nullables2)) &&
              (null === input.both1 ||
                undefined === input.both1 ||
                Array.isArray(input.both1)) &&
              (null === input.both2 ||
                undefined === input.both2 ||
                Array.isArray(input.both2)) &&
              (null === input.both3 ||
                undefined === input.both3 ||
                Array.isArray(input.both3)) &&
              Array.isArray(input.union);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayAny => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (Array.isArray(input.anys) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".anys",
                      expected: "Array<any>",
                      value: input.anys,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.undefindable1 ||
                  Array.isArray(input.undefindable1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".undefindable1",
                      expected: "(Array<any> | undefined)",
                      value: input.undefindable1,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.undefindable2 ||
                  Array.isArray(input.undefindable2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".undefindable2",
                      expected: "(Array<any> | undefined)",
                      value: input.undefindable2,
                    },
                    errorFactory,
                  )) &&
                (null === input.nullables1 ||
                  Array.isArray(input.nullables1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".nullables1",
                      expected: "(Array<any> | null)",
                      value: input.nullables1,
                    },
                    errorFactory,
                  )) &&
                (null === input.nullables2 ||
                  Array.isArray(input.nullables2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".nullables2",
                      expected: "(Array<any> | null)",
                      value: input.nullables2,
                    },
                    errorFactory,
                  )) &&
                (null === input.both1 ||
                  undefined === input.both1 ||
                  Array.isArray(input.both1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both1",
                      expected: "(Array<any> | null | undefined)",
                      value: input.both1,
                    },
                    errorFactory,
                  )) &&
                (null === input.both2 ||
                  undefined === input.both2 ||
                  Array.isArray(input.both2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both2",
                      expected: "(Array<any> | null | undefined)",
                      value: input.both2,
                    },
                    errorFactory,
                  )) &&
                (null === input.both3 ||
                  undefined === input.both3 ||
                  Array.isArray(input.both3) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both3",
                      expected: "(Array<any> | null | undefined)",
                      value: input.both3,
                    },
                    errorFactory,
                  )) &&
                (Array.isArray(input.union) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".union",
                      expected: "Array<any>",
                      value: input.union,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayAny",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayAny",
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
