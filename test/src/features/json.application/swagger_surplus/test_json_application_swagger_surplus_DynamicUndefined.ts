import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_application_swagger_surplus_DynamicUndefined =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicUndefined",
  })(typia.json.application<[DynamicUndefined], "swagger", true>());