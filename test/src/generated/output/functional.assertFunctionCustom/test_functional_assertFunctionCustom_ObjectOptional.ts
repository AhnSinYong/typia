import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_functional_assertFunctionCustom_ObjectOptional =
  _test_functional_assertFunction(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      (input: ObjectOptional): ObjectOptional => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): ObjectOptional => {
          const __is = (input: any): input is ObjectOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.id || "string" === typeof input.id) &&
              (undefined === input.name || "string" === typeof input.name) &&
              (undefined === input.email || "string" === typeof input.email) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)));
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
            ): input is ObjectOptional => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.id ||
                  "string" === typeof input.id ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "(string | undefined)",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.name ||
                  "string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "(string | undefined)",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.email ||
                  "string" === typeof input.email ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".email",
                      expected: "(string | undefined)",
                      value: input.email,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.sequence ||
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sequence",
                      expected: "(number | undefined)",
                      value: input.sequence,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
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
        ): ObjectOptional => {
          const __is = (input: any): input is ObjectOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.id || "string" === typeof input.id) &&
              (undefined === input.name || "string" === typeof input.name) &&
              (undefined === input.email || "string" === typeof input.email) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)));
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
            ): input is ObjectOptional => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.id ||
                  "string" === typeof input.id ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "(string | undefined)",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.name ||
                  "string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "(string | undefined)",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.email ||
                  "string" === typeof input.email ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".email",
                      expected: "(string | undefined)",
                      value: input.email,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.sequence ||
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sequence",
                      expected: "(number | undefined)",
                      value: input.sequence,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
