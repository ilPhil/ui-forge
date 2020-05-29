import React from 'react';
import styled from 'styled-components';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  background-color: 'white';\n  padding: 5px 10px;\n  border-radius: 3px;\n  color: ", ";\n  border: 2px solid ", ";\n"], ["\n  font-size: 14px;\n  background-color: 'white';\n  padding: 5px 10px;\n  border-radius: 3px;\n  color: ", ";\n  border: 2px solid ", ";\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var TestComponent = function TestComponent(_a) {
  var _b = _a.color,
      color = _b === void 0 ? 'green' : _b;
  return React.createElement(Button, {
    className: "test",
    color: color
  }, "TEST");
};

var templateObject_1;
export { TestComponent };
//# sourceMappingURL=index.es.js.map
