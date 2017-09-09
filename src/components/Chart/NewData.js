export const data = {
  type: "force",
  categories: [
    {
      name: "HTMLElement",
      keyword: {},
      base: "HTMLElement"
    },
    {
      name: "WebGL",
      keyword: {},
      base: "WebGLRenderingContext"
    },
    {
      name: "SVG",
      keyword: {},
      base: "SVGElement"
    },
    {
      name: "CSS",
      keyword: {},
      base: "CSSRule"
    },
    {
      name: "Other",
      keyword: {}
    }
  ],
  nodes: [
    {
      name: "AnalyserNode",
      value: 1,
      category: 0
    },
    {
      name: "AudioNode",
      value: 1,
      category: 0
    },
    {
      name: "Uint8Array",
      value: 1,
      category: 1
    },
    {
      name: "Float32Array",
      value: 1,
      category: 1
    },
    {
      name: "ArrayBuffer",
      value: 1,
      category: 1
    },
    {
      name: "EntityReference",
      value: 1,
      category: 2
    },
    {
      name: "EntryArray",
      value: 1,
      category: 2
    },
    {
      name: "HTMLFormElement",
      value: 1,
      category: 3
    },
    {
      name: "ValidityState",
      value: 1,
      category: 4
    },
    {
      name: "HTMLCollection",
      value: 1,
      category: 4
    },
    {
      name: "XSLTProcessor",
      value: 1,
      category: 4
    }
  ],
  links: [
    {
      source: 0,
      target: 1,
      value: 1
    },
    {
      source: 0,
      target: 2,
      value: 2
    },
    {
      source: 0,
      target: 3,
      value: 3
    },
    {
      source: 4,
      target: 1,
      value: 4
    },
    {
      source: 5,
      target: 4,
      value: 5
    },
    {
      source: 6,
      target: 7,
      value: 4
    },
    {
      source: 6,
      target: 8,
      value: 3
    },
    {
      source: 9,
      target: 3,
      value: 2
    },
    {
      source: 10,
      target: 9,
      value: 1
    },
    {
      source: 10,
      target: 5,
      value: 4
    },
  ]
};
