import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_functional_assertEqualsReturnAsync_TypeTagArrayUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagArrayUnion")(
    TypeTagArrayUnion,
  )(
    (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      async (input: TypeTagArrayUnion): Promise<TypeTagArrayUnion> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
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
        ): TypeTagArrayUnion => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagArrayUnion => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.items) &&
              3 <= input.items.length &&
              input.items.length <= 3 &&
              input.items.every(
                (elem: any, _index2: number) =>
                  "string" === typeof elem &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    elem,
                  ),
              ) &&
              Array.isArray(input.minItems) &&
              3 <= input.minItems.length &&
              input.minItems.every(
                (elem: any, _index3: number) =>
                  "number" === typeof elem &&
                  Number.isFinite(elem) &&
                  3 <= elem,
              ) &&
              Array.isArray(input.maxItems) &&
              input.maxItems.length <= 7 &&
              input.maxItems.every(
                (elem: any, _index4: number) =>
                  ("string" === typeof elem && elem.length <= 7) ||
                  ("number" === typeof elem &&
                    Number.isFinite(elem) &&
                    elem <= 7),
              ) &&
              Array.isArray(input.both) &&
              3 <= input.both.length &&
              input.both.length <= 7 &&
              input.both.every(
                (elem: any, _index5: number) =>
                  "string" === typeof elem &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    elem,
                  ),
              ) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["items", "minItems", "maxItems", "both"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagArrayUnion => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.items) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.items.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".items",
                        expected: "Array<> & MinItems<3>",
                        value: input.items,
                      },
                      errorFactory,
                    )) &&
                  (input.items.length <= 3 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".items",
                        expected: "Array<> & MaxItems<3>",
                        value: input.items,
                      },
                      errorFactory,
                    )) &&
                  input.items.every(
                    (elem: any, _index2: number) =>
                      ("string" === typeof elem &&
                        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                          elem,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".items[" + _index2 + "]",
                              expected: 'string & Format<"uuid">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".items[" + _index2 + "]",
                          expected: '(string & Format<"uuid">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.minItems) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                      value: input.minItems,
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.minItems.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minItems",
                        expected: "Array<> & MinItems<3>",
                        value: input.minItems,
                      },
                      errorFactory,
                    )) &&
                  input.minItems.every(
                    (elem: any, _index3: number) =>
                      ("number" === typeof elem &&
                        (Number.isFinite(elem) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".minItems[" + _index3 + "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (3 <= elem ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".minItems[" + _index3 + "]",
                              expected: "number & Minimum<3>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".minItems[" + _index3 + "]",
                          expected: "(number & Minimum<3>)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                      value: input.minItems,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.maxItems) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maxItems",
                      expected:
                        "(Array<(string & MaxLength<7>) | (number & Maximum<7>)> & MaxItems<7>)",
                      value: input.maxItems,
                    },
                    errorFactory,
                  )) &&
                  (input.maxItems.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maxItems",
                        expected: "Array<> & MaxItems<7>",
                        value: input.maxItems,
                      },
                      errorFactory,
                    )) &&
                  input.maxItems.every(
                    (elem: any, _index4: number) =>
                      ("string" === typeof elem &&
                        (elem.length <= 7 ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".maxItems[" + _index4 + "]",
                              expected: "string & MaxLength<7>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      ("number" === typeof elem &&
                        (Number.isFinite(elem) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".maxItems[" + _index4 + "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (elem <= 7 ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".maxItems[" + _index4 + "]",
                              expected: "number & Maximum<7>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".maxItems[" + _index4 + "]",
                          expected:
                            "((number & Maximum<7>) | (string & MaxLength<7>))",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maxItems",
                      expected:
                        "(Array<(string & MaxLength<7>) | (number & Maximum<7>)> & MaxItems<7>)",
                      value: input.maxItems,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.both) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                      value: input.both,
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.both.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".both",
                        expected: "Array<> & MinItems<3>",
                        value: input.both,
                      },
                      errorFactory,
                    )) &&
                  (input.both.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".both",
                        expected: "Array<> & MaxItems<7>",
                        value: input.both,
                      },
                      errorFactory,
                    )) &&
                  input.both.every(
                    (elem: any, _index5: number) =>
                      ("string" === typeof elem &&
                        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                          elem,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".both[" + _index5 + "]",
                              expected: 'string & Format<"uuid">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".both[" + _index5 + "]",
                          expected: '(string & Format<"uuid">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                      value: input.both,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["items", "minItems", "maxItems", "both"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TypeTagArrayUnion",
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
                            expected: "TypeTagArrayUnion.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "TypeTagArrayUnion.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagArrayUnion",
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
