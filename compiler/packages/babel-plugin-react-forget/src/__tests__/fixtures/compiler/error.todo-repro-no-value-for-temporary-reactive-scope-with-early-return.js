// @flow @enableAssumeHooksFollowRulesOfReact @enableTransitivelyFreezeFunctionExpressions
import { identity, makeObject_Primitives } from "shared-runtime";

function Component(props) {
  const object = makeObject_Primitives();
  const cond = makeObject_Primitives();
  if (!cond) {
    return null;
  }

  return (
    <div className="foo">
      {fbt(
        "Lorum ipsum" + fbt.param("thing", object.b) + " blah blah blah",
        "More text"
      )}
    </div>
  );
}
