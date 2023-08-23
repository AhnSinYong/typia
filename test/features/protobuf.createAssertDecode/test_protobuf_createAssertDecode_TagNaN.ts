import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_assertDecode_TagNaN = _test_protobuf_assertDecode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    assertDecode: typia.protobuf.createAssertDecode<TagNaN>(),
    encode: typia.protobuf.createEncode<TagNaN>(),
});