import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../../internal/_test_functional_assertParameters";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_functional_assertParameters_ObjectPartialAndRequired =
  _test_functional_assertParameters(TypeGuardError)("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      (input: ObjectPartialAndRequired): ObjectPartialAndRequired => {
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
        ): ObjectPartialAndRequired => {
          const __is = (input: any): input is ObjectPartialAndRequired => {
            const $io0 = (input: any): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (null === input.object ||
                ("object" === typeof input.object &&
                  null !== input.object &&
                  $io0(input.object))) &&
              Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectPartialAndRequired => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.string ||
                  "string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".number",
                      expected: "(number | undefined)",
                      value: input.number,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "(boolean | undefined)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (null === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".object",
                        expected: "(ObjectPartialAndRequired | null)",
                        value: input.object,
                      },
                      errorFactory,
                    )) &&
                    $ao0(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".object",
                      expected: "(ObjectPartialAndRequired | null)",
                      value: input.object,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.array) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".array",
                      expected: "Array<number>",
                      value: input.array,
                    },
                    errorFactory,
                  )) &&
                  input.array.every(
                    (elem: any, _index1: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".array[" + _index1 + "]",
                          expected: "number",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".array",
                      expected: "Array<number>",
                      value: input.array,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectPartialAndRequired",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectPartialAndRequired",
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
