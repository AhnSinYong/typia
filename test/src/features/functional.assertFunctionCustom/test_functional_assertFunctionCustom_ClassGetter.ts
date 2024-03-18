import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ClassGetter =
  _test_functional_assertFunction(CustomGuardError)("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );