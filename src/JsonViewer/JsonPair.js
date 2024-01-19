import { useContext, useEffect, useState } from "react";

import { JsonElement } from "./JsonElement";
import { collapsibleContext } from "./JSONViewer";

export function JsonPair({ jsonKey, jsonValue }) {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="jsonPair">
        <JsonKey
          jsonValue={jsonValue}
          setIsCollapsed={setIsCollapsed}
          isCollapsed={isCollapsed}
          jsonKey={jsonKey} />
        <JsonValue
          jsonValue={jsonValue}
          setIsCollapsed={setIsCollapsed}
          isCollapsed={isCollapsed}
          jsonKey={jsonKey}
        />
      </div>
    </>
  )
}

function CollapsedJsonValue(props) {
  return (
    <span
      className="collapse-text"
      onClick={() => {
        props.setIsCollapsed(!props.isCollapsed);
      }}
    >
      ...
    </span>
  );
}


function JsonValue({ jsonValue, jsonKey, setIsCollapsed, isCollapsed }) {
  function getValue(val) {
    const shouldBeQuoted = typeof val === "string";
    if (typeof val === "object" && val) {
      return (
        <>
          <div>
            <JsonElement json={val} />
          </div>
        </>
      );
    }
    return !shouldBeQuoted ? String(val) : `"${val}"`;
  }

  return (
    <div className="jsonValue">
      {isCollapsed ? (
        <CollapsedJsonValue setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}></CollapsedJsonValue>
      ) : (
        getValue(jsonValue)
      )}
    </div>
  )
}


function ExpandCollapseButton(props) {
  return (
    <span
      className="foldToggle"
      onClick={() => {
        props.setIsCollapsed(!props.isCollapsed);
      }}
    >
      {props.isCollapsed ? '+' : '-'}
    </span>);
}


function JsonKey({ jsonKey, jsonValue, setIsCollapsed, isCollapsed }) {
  return (
    <div className="jsonKey">
      {typeof jsonValue === "object" && jsonValue ? (
        <ExpandCollapseButton setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}></ExpandCollapseButton>
      ) : null}
      <span>"{jsonKey}" :</span>
    </div>
  )
}

