// Components bundle — 6 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 1:30 Chevron down
function ChevronDown(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 4,
    viewBox: "0 0 8 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6,
      width: 8,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 4 4 L 8 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:53 Component 2097 (2 variants)
const __venc_Component2097 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component2097 = p => "property1=" + __venc_Component2097(p.property1);
function Component2097(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147240888"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      lineHeight: "19.500px",
      color: "rgb(140,140,140)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Home"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      lineHeight: "19.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Home"));
  const __impls = {
    // figma: Property 1=Frame 2147240888
    "property1=frame 2147240888": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Component2097(props)] ?? __body0)();
}

// figma node: 1:33 Component 21 (2 variants)
const __venc_Component21 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component21 = p => "property1=" + __venc_Component21(p.property1);
function Component21(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147240878"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 250,
      backgroundColor: "rgb(229,62,48)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 250,
      backgroundColor: "rgb(228,52,37)",
      boxShadow: "0px 9px 41.700px 0px rgba(228,61,48,0.39)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Button"));
  const __impls = {
    // figma: Property 1=Frame 2147240878
    "property1=frame 2147240878": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Component21(props)] ?? __body0)();
}

// figma node: 1:38 Component 24 (2 variants)
const __venc_Component24 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component24 = p => "property1=" + __venc_Component24(p.property1);
function Component24(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "component 22"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 250,
      boxShadow: "0 0 0 1px rgb(101,97,97)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "How we work"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 250,
      backgroundColor: "rgba(255,255,255,0.84)",
      boxShadow: "0 0 0 1px rgb(101,97,97)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "How we work"));
  const __impls = {
    // figma: Property 1=Component 22
    "property1=component 22": __body0,
    // figma: Property 1=Component 23
    "property1=component 23": __body1
  };
  return (__impls[__vkey_Component24(props)] ?? __body0)();
}

// figma node: 1:11 Component 48 (2 variants)
const __venc_Component48 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component48 = p => "property1=" + __venc_Component48(p.property1);
function Component48(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 427321370"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
      height: 68,
      position: "relative",
      color: "rgb(27,35,46)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 68,
      borderRadius: "50%",
      backgroundColor: "rgba(255,250,250,0.99)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 33,
    height: 3.500,
    viewBox: "0 -1.750 33 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,34,51)",
      transformOrigin: "0 0",
      width: 33,
      height: 3.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1.75 C -0.966 -1.75 -1.75 -0.966 -1.75 0 C -1.75 0.966 -0.966 1.75 0 1.75 L 0 0 L 0 -1.75 Z M 34.237 1.237 C 34.921 0.554 34.921 -0.554 34.237 -1.237 L 23.101 -12.374 C 22.417 -13.058 21.309 -13.058 20.626 -12.374 C 19.942 -11.691 19.942 -10.583 20.626 -9.899 L 30.525 0 L 20.626 9.899 C 19.942 10.583 19.942 11.691 20.626 12.374 C 21.309 13.058 22.417 13.058 23.101 12.374 L 34.237 1.237 Z M 0 0 L 0 1.75 L 33 1.75 L 33 0 L 33 -1.75 L 0 -1.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
      height: 68,
      position: "relative",
      color: "rgb(27,35,46)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 68,
      borderRadius: "50%",
      backgroundColor: "rgba(255,250,250,0.99)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 40,
    height: 3.500,
    viewBox: "0 -1.750 40 3.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,34,54.500)",
      transformOrigin: "0 0",
      width: 40,
      height: 3.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1.75 C -0.966 -1.75 -1.75 -0.966 -1.75 0 C -1.75 0.966 -0.966 1.75 0 1.75 L 0 0 L 0 -1.75 Z M 41.237 1.237 C 41.921 0.554 41.921 -0.554 41.237 -1.237 L 30.101 -12.374 C 29.417 -13.058 28.309 -13.058 27.626 -12.374 C 26.942 -11.691 26.942 -10.583 27.626 -9.899 L 37.525 0 L 27.626 9.899 C 26.942 10.583 26.942 11.691 27.626 12.374 C 28.309 13.058 29.417 13.058 30.101 12.374 L 41.237 1.237 Z M 0 0 L 0 1.75 L 40 1.75 L 40 0 L 40 -1.75 L 0 -1.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=Frame 427321371
    "property1=frame 427321371": __body0,
    // figma: Property 1=Frame 427321370
    "property1=frame 427321370": __body1
  };
  return (__impls[__vkey_Component48(props)] ?? __body1)();
}

// figma node: 1:64 US Sled
function USSled(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 9276,
      overflow: "hidden",
      backgroundColor: "rgb(5,9,20)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a03a42732ea59412",
    style: {
      position: "absolute",
      left: -42,
      top: 4959.5,
      width: 992,
      height: 614.226,
      opacity: 0.09
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4a264c0e58c82f88-b84ed7ef",
    style: {
      position: "absolute",
      left: 317.056,
      top: 843.605,
      width: 1281.972,
      height: 711.73,
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 900,
      opacity: 0.82,
      mixBlendMode: "screen"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7a3d9bb1f835c19e",
    style: {
      position: "absolute",
      left: 49.282,
      top: 100,
      width: 1821.436,
      height: 680.195
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1800,
      top: -100,
      width: 1,
      height: 1,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Horizontal Divider"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 318,
      width: 1920,
      height: 506.525,
      background: "linear-gradient(0deg, rgb(5,9,20) 34.80%, rgba(5,9,20,0) 82.83%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 6296,
      width: 1680,
      display: "flex",
      flexDirection: "column",
      gap: 60,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 36,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 814,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7e27f4360eef502c",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 814,
      height: 853.999,
      borderRadius: 32,
      backdropFilter: "blur(6px)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 74,
      top: 43.469,
      width: 163,
      height: 61.365,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "48px",
      letterSpacing: "-1.740px"
    }
  }, "Why Intagleo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 74,
      top: 103.254,
      width: 519.439,
      height: 131.807,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 42,
      lineHeight: "48px",
      letterSpacing: "-1.740px"
    }
  }, "Four reasons primes keep our number on their bench."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 74,
      top: 655.841,
      width: 632,
      height: 85.125,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "A senior engineering practice with the institutional discipline state work demands and the speed prime contractors expect from a specialist sub."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 830,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      background: "radial-gradient(749.740px 275.348px at 95.54% 20.63%, rgba(128,129,146,0.25) 29.69%, rgba(6,4,9,0.25) 66.67%)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      padding: "30px 30px 30px 30px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 36,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 364,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "100%",
      flexShrink: 0
    }
  }, "Senior engineers stay on the work")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "The architect who scopes the engagement is the architect on the standup three months in. No bait-and-switch staffing. The proposal team is delivery-accountable, by policy.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      background: "radial-gradient(749.740px 236.012px at 95.54% 20.63%, rgba(128,129,146,0.25) 29.69%, rgba(6,4,9,0.25) 66.67%)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      padding: "30px 30px 30px 30px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 36,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 364,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "100%",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Follow-the-sun delivery")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Four delivery centers across three time zones mean production incidents are owned around the clock without the rate premium of an all-U.S. bench.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      background: "radial-gradient(749.740px 236.012px at 95.54% 20.63%, rgba(128,129,146,0.25) 29.69%, rgba(6,4,9,0.25) 66.67%)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      padding: "30px 30px 30px 30px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 36,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 364,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "100%",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Built to be sub-able")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Standard work-for-hire IP terms, fast NDA intake, capture artifacts on request. Easy for your contracts team to clear us into a proposal.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      background: "radial-gradient(749.740px 275.348px at 95.54% 20.63%, rgba(128,129,146,0.25) 29.69%, rgba(6,4,9,0.25) 66.67%)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      padding: "30px 30px 30px 30px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 36,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 364,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "100%",
      flexShrink: 0
    }
  }, "Twenty-two years, three cycles")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We have shipped through 2008, COVID, and the current rate-driven contraction. The firm a state CIO can call again in 2032 and find the same lights on."))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10413,
      width: 1920,
      height: 239,
      background: "linear-gradient(0deg, rgb(5,9,20) 30.90%, rgba(5,9,20,0) 78.26%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 8602.277,
      width: 1920,
      height: 673.272,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 372.913,
      backgroundColor: "rgb(5,9,20)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 65.008px 0px 65.008px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1789.984,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      padding: "40.315px 0px 32.252px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 497,
      height: 232,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 28.220px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 173,
      height: 41.55,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 173,
      height: 41.55,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60.134,
      top: 9.963,
      width: 112.866,
      height: 31.587,
      display: "flex",
      flexDirection: "column",
      gap: 3.1598172187805176,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 98.436,
    height: 14.451,
    viewBox: "0 0 98.436 14.451",
    fill: "none",
    style: {
      position: "relative",
      width: 98.436,
      height: 14.451,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.367 3.865 C 8.367 4.001 8.367 4.133 8.367 4.269 C 8.367 7.367 8.367 10.465 8.367 13.563 C 8.367 14.162 7.955 14.536 7.44 14.421 C 7.077 14.34 6.85 14.067 6.844 13.678 C 6.835 13.137 6.841 12.595 6.841 12.054 C 6.841 8.403 6.841 4.752 6.841 1.101 C 6.841 0.459 7.322 0.082 7.881 0.295 C 8.036 0.356 8.189 0.5 8.278 0.646 C 10.336 4.027 12.384 7.413 14.434 10.799 C 14.457 10.836 14.488 10.865 14.575 10.966 C 14.583 10.77 14.595 10.64 14.595 10.514 C 14.589 7.381 14.58 4.248 14.578 1.116 C 14.578 0.471 15.099 0.071 15.646 0.301 C 16 0.448 16.112 0.736 16.109 1.107 C 16.098 2.57 16.101 4.032 16.098 5.495 C 16.092 8.098 16.086 10.701 16.083 13.304 C 16.083 13.442 16.083 13.58 16.081 13.718 C 16.069 14.041 15.977 14.306 15.623 14.403 C 15.26 14.504 14.912 14.398 14.716 14.084 C 14.33 13.471 13.959 12.849 13.581 12.23 C 11.934 9.529 10.288 6.825 8.641 4.125 C 8.583 4.03 8.517 3.937 8.456 3.842 C 8.428 3.851 8.399 3.86 8.367 3.865 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 55.316 12.99 C 55.316 11.066 55.316 9.183 55.316 7.251 C 54.766 7.251 54.231 7.257 53.692 7.248 C 53.278 7.243 52.972 7.03 52.906 6.71 C 52.814 6.272 53.093 5.852 53.557 5.835 C 54.429 5.806 55.307 5.812 56.18 5.832 C 56.591 5.84 56.848 6.14 56.848 6.563 C 56.854 8.936 56.854 11.308 56.848 13.678 C 56.848 14.156 56.58 14.432 56.099 14.435 C 54.487 14.444 52.874 14.47 51.265 14.426 C 49.365 14.375 48.003 13.275 47.7 11.527 C 47.577 10.807 47.617 10.059 47.611 9.324 C 47.597 7.493 47.62 5.662 47.588 3.834 C 47.548 1.726 49.01 0.125 51.297 0.033 C 52.883 -0.03 54.472 0.016 56.062 0.022 C 56.534 0.024 56.856 0.335 56.851 0.753 C 56.845 1.153 56.531 1.441 56.062 1.444 C 54.507 1.45 52.955 1.441 51.4 1.45 C 50.03 1.458 49.166 2.336 49.166 3.707 C 49.163 6.056 49.163 8.406 49.166 10.752 C 49.166 12.025 49.828 12.88 51.092 12.969 C 52.483 13.064 53.888 12.99 55.316 12.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 37.49 0.085 C 37.868 0.082 38.072 0.243 38.23 0.684 C 38.824 2.325 39.414 3.969 40.007 5.613 C 40.943 8.207 41.878 10.802 42.82 13.393 C 42.935 13.71 42.912 13.977 42.656 14.208 C 42.388 14.447 42.011 14.53 41.734 14.337 C 41.562 14.216 41.412 14.009 41.334 13.807 C 40.92 12.699 40.525 11.585 40.137 10.465 C 40.059 10.237 39.961 10.142 39.702 10.145 C 38.205 10.159 36.71 10.159 35.213 10.145 C 34.971 10.142 34.873 10.229 34.798 10.445 C 34.395 11.582 33.978 12.713 33.563 13.848 C 33.37 14.372 32.993 14.562 32.524 14.38 C 32.101 14.219 31.951 13.825 32.132 13.324 C 33.65 9.12 35.167 4.916 36.687 0.713 C 36.848 0.269 37.087 0.088 37.49 0.085 Z M 39.512 8.711 C 38.847 6.811 38.193 4.954 37.542 3.094 C 37.514 3.1 37.485 3.103 37.456 3.108 C 36.782 4.965 36.111 6.825 35.426 8.711 C 36.808 8.711 38.127 8.711 39.512 8.711 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 77.875 1.444 C 77.875 2.921 77.875 4.346 77.875 5.803 C 78.01 5.809 78.131 5.82 78.255 5.82 C 79.579 5.82 80.901 5.82 82.225 5.82 C 82.306 5.82 82.387 5.817 82.467 5.82 C 82.945 5.838 83.288 6.143 83.282 6.537 C 83.273 6.94 82.934 7.243 82.459 7.246 C 81.065 7.251 79.674 7.248 78.281 7.248 C 78.157 7.248 78.03 7.248 77.883 7.248 C 77.883 9.175 77.883 11.066 77.883 13.01 C 78.019 13.01 78.143 13.01 78.264 13.01 C 79.876 13.01 81.485 13.01 83.098 13.013 C 83.245 13.013 83.4 13.024 83.538 13.067 C 83.884 13.177 84.091 13.514 84.042 13.839 C 83.987 14.185 83.72 14.435 83.345 14.435 C 81.241 14.441 79.133 14.441 77.028 14.435 C 76.582 14.432 76.337 14.147 76.334 13.666 C 76.329 12.515 76.332 11.363 76.332 10.214 C 76.332 7.116 76.332 4.021 76.332 0.923 C 76.332 0.206 76.516 0.016 77.224 0.016 C 79.179 0.016 81.137 0.016 83.092 0.016 C 83.161 0.016 83.23 0.013 83.299 0.019 C 83.72 0.048 84.042 0.358 84.045 0.736 C 84.048 1.113 83.728 1.421 83.296 1.441 C 83.043 1.453 82.79 1.444 82.536 1.444 C 81.12 1.444 79.706 1.444 78.289 1.444 C 78.163 1.444 78.036 1.444 77.875 1.444 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 24.454 1.444 C 23.483 1.444 22.565 1.444 21.646 1.444 C 21.52 1.444 21.393 1.453 21.266 1.438 C 20.866 1.392 20.584 1.101 20.581 0.744 C 20.578 0.373 20.878 0.062 21.278 0.022 C 21.347 0.016 21.416 0.019 21.485 0.019 C 23.97 0.019 26.457 0.019 28.942 0.019 C 28.988 0.019 29.034 0.019 29.08 0.022 C 29.53 0.047 29.841 0.35 29.835 0.756 C 29.829 1.144 29.524 1.438 29.078 1.444 C 28.179 1.455 27.281 1.447 26.385 1.447 C 26.262 1.447 26.138 1.447 25.962 1.447 C 25.962 1.622 25.962 1.766 25.962 1.913 C 25.962 5.794 25.965 9.673 25.956 13.554 C 25.956 13.741 25.928 13.957 25.836 14.11 C 25.657 14.4 25.358 14.498 25.024 14.415 C 24.681 14.331 24.479 14.072 24.459 13.718 C 24.454 13.626 24.459 13.534 24.459 13.442 C 24.459 9.595 24.459 5.751 24.459 1.905 C 24.454 1.763 24.454 1.628 24.454 1.444 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 64.386 13.01 C 64.567 13.01 64.691 13.01 64.818 13.01 C 66.407 13.01 67.993 13.01 69.583 13.01 C 69.709 13.01 69.839 13.004 69.96 13.03 C 70.325 13.105 70.588 13.428 70.57 13.762 C 70.553 14.098 70.265 14.386 69.891 14.429 C 69.81 14.438 69.729 14.435 69.649 14.435 C 67.691 14.435 65.736 14.435 63.778 14.435 C 63.119 14.435 62.857 14.173 62.857 13.517 C 62.857 9.336 62.857 5.158 62.857 0.978 C 62.857 0.298 63.378 -0.099 63.934 0.157 C 64.204 0.284 64.371 0.491 64.38 0.799 C 64.383 0.937 64.386 1.076 64.386 1.214 C 64.386 4.98 64.386 8.746 64.386 12.509 C 64.386 12.662 64.386 12.808 64.386 13.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.003 7.257 C 0.003 5.15 0.006 3.045 0 0.937 C 0 0.595 0.115 0.33 0.423 0.168 C 0.694 0.03 0.99 0.033 1.198 0.24 C 1.359 0.405 1.494 0.655 1.514 0.88 C 1.561 1.392 1.532 1.913 1.532 2.432 C 1.532 6.128 1.529 9.823 1.535 13.519 C 1.535 13.879 1.463 14.182 1.109 14.352 C 0.559 14.614 0.006 14.248 0.003 13.612 C 0 11.495 0.003 9.376 0.003 7.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 98.433 7.237 C 98.433 6.062 98.421 4.888 98.435 3.716 C 98.447 2.659 98.012 1.824 97.212 1.168 C 95.383 -0.338 92.326 -0.361 90.469 1.116 C 89.616 1.792 89.164 2.665 89.17 3.773 C 89.182 6.077 89.182 8.377 89.17 10.681 C 89.164 11.801 89.616 12.682 90.483 13.364 C 92.308 14.801 95.326 14.795 97.151 13.35 C 97.995 12.682 98.453 11.827 98.435 10.727 C 98.421 9.561 98.433 8.4 98.433 7.237 Z M 96.912 7.257 C 96.912 8.409 96.901 9.558 96.918 10.709 C 96.93 11.49 96.598 12.083 95.939 12.448 C 94.537 13.229 93.103 13.229 91.698 12.457 C 91.021 12.086 90.699 11.478 90.702 10.689 C 90.71 8.377 90.71 6.062 90.702 3.75 C 90.699 2.99 91.013 2.397 91.658 2.029 C 93.077 1.214 94.531 1.214 95.954 2.02 C 96.61 2.391 96.932 2.987 96.918 3.768 C 96.898 4.931 96.912 6.094 96.912 7.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 54.744,
    height: 9.938,
    viewBox: "0 0 54.744 9.938",
    fill: "none",
    style: {
      position: "relative",
      width: 54.744,
      height: 9.938,
      flexShrink: 0,
      color: "rgb(229,62,48)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.755 7.809 C 37.401 7.809 37.095 7.809 36.767 7.809 C 36.767 5.643 36.767 3.498 36.767 1.325 C 37.09 1.325 37.403 1.325 37.737 1.325 C 37.749 1.558 37.76 1.771 37.778 2.073 C 38.42 1.371 39.2 1.221 40.018 1.227 C 40.836 1.232 41.642 1.316 42.14 2.105 C 42.169 2.099 42.197 2.105 42.212 2.09 C 43.162 1.16 44.754 0.919 45.943 1.523 C 46.597 1.857 46.83 2.453 46.844 3.124 C 46.87 4.656 46.853 6.188 46.85 7.719 C 46.85 7.739 46.833 7.76 46.816 7.803 C 46.519 7.803 46.214 7.803 45.871 7.803 C 45.866 7.667 45.854 7.535 45.854 7.403 C 45.851 6.124 45.86 4.846 45.851 3.567 C 45.842 2.234 45.307 1.659 43.792 1.849 C 42.799 1.972 42.327 2.591 42.315 3.683 C 42.304 4.915 42.313 6.147 42.313 7.38 C 42.313 7.515 42.313 7.65 42.313 7.806 C 41.97 7.806 41.662 7.806 41.302 7.806 C 41.302 7.682 41.302 7.561 41.302 7.44 C 41.302 6.127 41.302 4.814 41.302 3.501 C 41.302 2.223 40.775 1.618 39.284 1.872 C 38.305 2.039 37.769 2.758 37.758 3.867 C 37.746 5.03 37.755 6.193 37.755 7.357 C 37.755 7.495 37.755 7.63 37.755 7.809 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 34.599 4.719 C 33.05 4.719 31.59 4.719 30.093 4.719 C 30.067 5.419 30.018 6.09 30.283 6.738 C 30.427 7.089 30.735 7.247 31.072 7.273 C 31.585 7.313 32.109 7.328 32.618 7.262 C 33.226 7.184 33.425 6.899 33.491 6.208 C 33.502 6.081 33.505 5.957 33.511 5.796 C 33.83 5.796 34.141 5.796 34.455 5.796 C 34.732 6.925 34.173 7.774 32.998 7.866 C 32.178 7.93 31.346 7.881 30.522 7.817 C 29.774 7.763 29.258 7.316 29.16 6.573 C 29.039 5.678 29.002 4.768 28.982 3.864 C 28.973 3.447 29.06 3.018 29.155 2.606 C 29.313 1.912 29.759 1.492 30.465 1.35 C 31.369 1.166 32.27 1.166 33.168 1.365 C 33.825 1.509 34.265 1.909 34.369 2.583 C 34.47 3.274 34.522 3.971 34.599 4.719 Z M 30.044 4.025 C 31.256 4.025 32.376 4.025 33.551 4.025 C 33.482 3.516 33.433 3.038 33.353 2.566 C 33.298 2.246 33.088 1.995 32.768 1.961 C 32.204 1.898 31.634 1.866 31.066 1.889 C 30.577 1.909 30.263 2.229 30.183 2.712 C 30.111 3.133 30.09 3.567 30.044 4.025 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.996 7.875 C 9.524 7.996 9.469 7.667 9.363 7.368 C 8.689 5.476 8.006 3.585 7.327 1.693 C 7.287 1.578 7.261 1.457 7.215 1.301 C 7.459 1.301 7.667 1.319 7.871 1.296 C 8.124 1.27 8.234 1.373 8.314 1.609 C 8.885 3.282 9.466 4.952 10.045 6.625 C 10.079 6.729 10.126 6.827 10.2 7.011 C 10.269 6.829 10.316 6.732 10.344 6.628 C 10.811 4.981 11.28 3.337 11.729 1.687 C 11.81 1.393 11.928 1.255 12.242 1.296 C 12.44 1.321 12.648 1.301 12.892 1.301 C 12.579 2.369 12.285 3.38 11.988 4.391 C 11.6 5.724 11.217 7.06 10.817 8.39 C 10.462 9.57 9.446 10.146 8.242 9.87 C 8.11 9.32 8.142 9.274 8.689 9.242 C 9.469 9.193 9.794 8.868 9.996 7.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.034 6.144 C 0.336 6.144 0.642 6.144 0.944 6.144 C 0.961 6.17 0.984 6.187 0.984 6.205 C 0.955 6.945 1.212 7.299 2.127 7.307 C 2.712 7.313 3.302 7.305 3.878 7.221 C 4.367 7.152 4.589 6.815 4.621 6.32 C 4.69 5.252 4.514 5.03 3.472 4.918 C 2.764 4.843 2.047 4.828 1.347 4.707 C 0.333 4.535 0.057 4.158 0.051 3.13 C 0.051 2.991 0.054 2.853 0.06 2.715 C 0.094 1.972 0.437 1.514 1.157 1.365 C 2.271 1.134 3.4 1.134 4.514 1.37 C 5.24 1.523 5.565 1.975 5.539 2.703 C 5.228 2.703 4.917 2.703 4.603 2.703 C 4.359 1.935 4.2 1.811 3.371 1.814 C 2.833 1.814 2.288 1.814 1.756 1.88 C 1.307 1.935 1.091 2.243 1.065 2.695 C 1.001 3.867 1.229 4.111 2.395 4.192 C 3.126 4.244 3.863 4.281 4.586 4.405 C 5.34 4.535 5.608 4.906 5.623 5.678 C 5.628 6.02 5.617 6.369 5.568 6.709 C 5.487 7.27 5.145 7.659 4.595 7.734 C 3.803 7.843 2.997 7.895 2.196 7.912 C 1.79 7.921 1.37 7.846 0.973 7.742 C 0.218 7.549 -0.113 6.959 0.034 6.144 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.626 6.144 C 14.928 6.144 15.233 6.144 15.536 6.144 C 15.553 6.17 15.576 6.187 15.576 6.205 C 15.547 6.945 15.804 7.299 16.719 7.307 C 17.304 7.313 17.894 7.305 18.47 7.221 C 18.959 7.152 19.181 6.815 19.213 6.32 C 19.282 5.252 19.106 5.03 18.064 4.918 C 17.355 4.843 16.638 4.828 15.939 4.707 C 14.925 4.535 14.649 4.158 14.643 3.13 C 14.643 2.991 14.646 2.853 14.652 2.715 C 14.686 1.972 15.029 1.514 15.749 1.365 C 16.863 1.134 17.992 1.134 19.106 1.37 C 19.832 1.523 20.157 1.975 20.131 2.703 C 19.82 2.703 19.509 2.703 19.195 2.703 C 18.951 1.935 18.792 1.811 17.963 1.814 C 17.425 1.814 16.88 1.814 16.348 1.88 C 15.899 1.935 15.683 2.243 15.657 2.695 C 15.593 3.867 15.821 4.111 16.987 4.192 C 17.718 4.244 18.455 4.281 19.178 4.405 C 19.932 4.535 20.2 4.906 20.214 5.678 C 20.22 6.02 20.209 6.369 20.16 6.709 C 20.079 7.27 19.737 7.659 19.187 7.734 C 18.395 7.843 17.589 7.895 16.788 7.912 C 16.382 7.921 15.962 7.846 15.565 7.742 C 14.813 7.549 14.479 6.959 14.626 6.144 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 49.154 6.144 C 49.456 6.144 49.761 6.144 50.063 6.144 C 50.081 6.17 50.104 6.187 50.104 6.205 C 50.075 6.945 50.331 7.299 51.247 7.307 C 51.831 7.313 52.422 7.305 52.997 7.221 C 53.487 7.152 53.709 6.815 53.74 6.32 C 53.809 5.252 53.634 5.03 52.591 4.918 C 51.883 4.843 51.166 4.828 50.467 4.707 C 49.453 4.535 49.177 4.158 49.171 3.13 C 49.171 2.991 49.174 2.853 49.18 2.715 C 49.214 1.972 49.557 1.514 50.277 1.365 C 51.391 1.134 52.519 1.134 53.634 1.37 C 54.359 1.523 54.685 1.975 54.659 2.703 C 54.348 2.703 54.037 2.703 53.723 2.703 C 53.478 1.935 53.32 1.811 52.491 1.814 C 51.952 1.814 51.408 1.814 50.875 1.88 C 50.426 1.935 50.21 2.243 50.184 2.695 C 50.121 3.867 50.348 4.111 51.515 4.192 C 52.246 4.244 52.983 4.281 53.706 4.405 C 54.46 4.535 54.728 4.906 54.742 5.678 C 54.748 6.02 54.736 6.369 54.687 6.709 C 54.607 7.27 54.264 7.659 53.714 7.734 C 52.923 7.843 52.116 7.895 51.316 7.912 C 50.91 7.921 50.49 7.846 50.092 7.742 C 49.341 7.549 49.007 6.959 49.154 6.144 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26.166 5.997 C 26.456 5.997 26.727 5.997 26.995 5.997 C 27.191 7.08 26.609 7.849 25.541 7.886 C 25.005 7.906 24.458 7.895 23.928 7.817 C 23.24 7.719 23.001 7.385 22.998 6.677 C 22.996 5.203 22.99 3.729 23.004 2.257 C 23.007 1.967 22.915 1.866 22.63 1.889 C 22.402 1.909 22.172 1.892 21.919 1.892 C 21.919 1.696 21.919 1.529 21.919 1.31 C 22.259 1.31 22.607 1.31 22.987 1.31 C 22.987 0.918 22.987 0.579 22.987 0.213 C 23.327 0.141 23.635 0.078 24.006 0 C 24.006 0.357 24.018 0.674 24.003 0.988 C 23.989 1.232 24.084 1.304 24.32 1.301 C 24.953 1.287 25.587 1.296 26.217 1.299 C 26.341 1.299 26.465 1.299 26.606 1.299 C 26.606 1.509 26.606 1.676 26.606 1.892 C 25.987 1.892 25.38 1.892 24.775 1.892 C 24.006 1.892 24.006 1.892 24.006 2.655 C 24.006 3.933 24.006 5.211 24.006 6.49 C 24.006 7.092 24.176 7.27 24.772 7.31 C 24.841 7.316 24.91 7.322 24.979 7.325 C 25.823 7.348 26.039 7.155 26.117 6.317 C 26.122 6.216 26.145 6.115 26.166 5.997 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 52.534,
    height: 36.230,
    viewBox: "0 0 52.534 36.230",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52.534,
      height: 36.23,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50.931 21.453 C 50.931 21.453 50.554 21.074 49.577 21.227 C 49.577 21.227 49.2 16.53 39.128 14.787 C 39.128 14.787 37.699 10.621 32.512 10.544 C 32.512 10.544 32.467 10.565 32.395 10.6 C 32.395 10.496 32.381 10.388 32.368 10.28 C 32.522 10.329 32.717 10.371 32.964 10.392 C 32.964 10.392 37.023 10.468 38.302 11.982 C 38.302 11.982 39.053 13.801 40.633 13.346 C 40.633 13.346 44.767 13.27 46.423 14.481 C 46.423 14.481 47.777 15.085 47.627 16.148 C 47.627 16.148 49.056 15.919 49.656 15.085 C 49.656 15.085 49.656 14.554 48.679 14.631 C 48.679 14.631 47.267 14.356 47.013 14.648 L 46.53 14.325 C 46.53 14.325 46.53 12.707 44.411 12.45 C 44.411 12.45 41.168 11.641 38.439 11.867 C 38.439 11.867 38.021 9.732 34.716 9.506 L 32.121 9.447 C 32.097 9.395 32.07 9.34 32.046 9.284 C 33.187 9.058 35.666 8.638 36.125 9.1 L 36.104 9.392 L 36.444 9.364 L 36.725 9.336 C 36.725 9.336 37.061 9.565 37.119 9.791 L 37.26 10.218 L 37.702 10.312 C 37.702 10.312 41.312 9.478 41.987 10.01 L 43.153 10.103 C 43.153 10.103 43.715 10.416 43.348 11.155 C 43.348 11.155 44.222 11.041 45.011 10.103 C 45.011 10.103 45.518 9.1 43.263 9.708 L 42.227 9.84 L 42.19 9.1 C 42.19 9.1 41.682 8.569 40.781 8.722 C 40.781 8.722 37.627 8.552 37.02 9.215 L 36.495 9.176 C 36.495 9.176 36.211 8.041 34.445 7.947 C 34.445 7.947 32.745 7.947 31.363 8.26 C 31.319 8.204 31.274 8.152 31.226 8.1 C 31.843 7.829 33.311 7.239 34.096 7.35 C 34.096 7.35 34.603 7.121 34.63 7.718 C 34.63 7.718 38.748 6.041 38.634 6.895 C 38.634 6.895 38.329 7.333 38.161 7.496 C 38.456 7.27 39.622 6.389 39.622 5.986 C 39.622 5.503 37.733 6.1 37.171 6.468 C 37.171 6.468 38.072 5.476 36.608 5.673 C 36.608 5.673 34.099 6.496 33.338 7.038 C 33.338 7.038 33.506 5.816 32.042 6.326 C 32.042 6.326 31.027 6.729 30.167 7.086 C 30.054 6.996 29.937 6.906 29.817 6.819 C 30.362 6.378 31.075 5.837 31.236 5.882 C 31.236 5.882 32.813 4.215 33.115 4.517 C 33.115 4.517 33.681 4.288 33.602 3.948 C 33.602 3.948 33.677 3.493 33.866 3.493 L 33.79 2.924 C 33.79 2.924 33.341 2.886 33.153 3.077 L 32.025 3.646 L 32.214 3.115 C 32.214 3.115 30.897 4.212 30.561 4.403 L 30.109 4.934 C 30.109 4.934 29.81 4.743 29.584 5.083 L 28.72 5.653 L 28.446 5.962 C 28.305 5.885 28.161 5.816 28.014 5.746 C 28.206 5.364 28.367 4.882 28.381 4.33 C 28.381 4.33 27.856 3.99 27.517 4.556 C 27.517 4.556 29.282 1.903 28.532 2.018 C 28.532 2.018 28.007 2.209 27.743 2.587 C 27.743 2.587 28.682 0.619 27.63 0.997 C 27.63 0.997 27.181 1.223 26.917 1.601 L 25.94 2.396 L 26.992 1.827 C 26.992 1.827 26.317 3.417 25.902 4.177 C 25.902 4.177 26.766 3.611 26.615 4.215 C 26.615 4.215 26.53 4.587 26.334 5.097 C 26.101 5.028 25.868 4.965 25.638 4.913 L 25.563 4.139 C 25.563 4.139 25.714 3.57 24.774 3.531 C 24.774 3.531 24.209 3.455 23.986 3.684 L 23.76 3.684 L 23.797 3.344 L 23.797 1.448 C 23.797 1.448 23.612 0.615 22.858 1.223 L 22.447 1.414 L 22.334 0.24 C 22.334 0.24 21.96 -0.253 21.394 0.58 L 20.643 1.566 C 20.643 1.566 22.073 0.316 22.035 1.566 L 22.111 3.424 L 23.54 3.538 C 23.54 3.538 23.993 3.955 23.993 4.448 L 23.986 4.698 C 23.777 4.691 23.575 4.691 23.379 4.705 C 23.115 4.24 22.707 3.729 22.111 3.427 C 22.111 3.427 21.058 3.313 20.119 3.504 L 19.855 3.542 C 19.855 3.542 19.742 1.611 18.429 1.004 C 18.429 1.004 17.527 0.928 17.301 1.118 L 17.075 1.157 L 17.034 1.018 L 16.656 1.028 C 16.656 1.028 16.437 -1.079 15.649 0.74 C 15.649 0.74 15.254 1.421 15.309 1.82 C 15.309 1.82 16.495 0.625 16.608 1.539 L 17.171 1.368 C 17.171 1.368 18.244 2.108 18.467 3.813 L 18.658 3.91 C 18.089 3.899 17.455 4 16.746 4.267 L 16.55 3.983 C 16.55 3.983 14.942 1.226 12.124 1.795 C 12.124 1.795 12.039 1.768 11.956 1.966 L 11.308 2.08 C 11.308 2.08 11.195 1.254 10.489 0.914 C 10.489 0.914 10.04 1.254 9.982 2.021 L 10.009 2.733 C 10.009 2.733 10.938 2.08 11.164 2.278 L 11.305 2.202 L 11.531 2.41 L 11.682 2.184 L 12.114 2.184 C 12.114 2.184 14.274 2.58 15.385 4.722 C 15.385 4.722 15.631 4.854 16.135 4.667 C 16.135 4.667 18.998 4.069 20.76 5.812 C 20.685 5.913 20.619 6.021 20.561 6.135 C 19.474 5.403 17.332 4.517 14.126 5.67 C 14.126 5.67 11.871 3.642 9.334 3.604 C 9.334 3.604 7.606 3.413 6.29 4.267 C 6.29 4.267 5.237 2.788 4.901 3.549 L 4.881 5.198 C 4.881 5.198 7.116 4.42 8.395 4.573 C 8.395 4.573 11.552 5.028 13.431 6.545 C 13.431 6.545 17.393 5.354 20.373 7.218 C 20.376 7.288 20.386 7.361 20.397 7.43 C 19.33 7.027 16.427 6.26 12.848 8.01 C 12.848 8.01 10.949 7.444 10.17 7.444 C 10.17 7.444 6.499 6.357 2.097 8.621 C 2.097 8.621 1.363 8.27 0.973 8.489 C 0.973 8.489 0.283 8.444 1.103 10.621 C 1.103 10.621 6.413 7.75 12.155 9.27 C 12.155 9.27 12.978 9.489 13.712 8.965 C 13.712 8.965 18.535 7.399 20.904 8.718 C 20.928 8.76 20.952 8.801 20.979 8.84 C 19.858 8.881 16.152 9.169 13.972 11.183 C 13.972 11.183 5.162 12.534 0.544 16.668 C 0.544 16.668 -0.234 16.668 0.071 17.713 L 1.192 18.977 C 1.192 18.977 11.254 12.666 15.052 12.752 C 15.052 12.752 19.413 10.312 22.094 10.145 C 22.244 10.287 22.405 10.426 22.573 10.562 C 21.291 11.43 17.051 14.665 5.985 25.678 C 5.985 25.678 6.979 27.723 9.437 28.028 C 9.437 28.028 20.781 14.457 24.068 11.568 C 24.353 11.728 24.654 11.881 24.963 12.02 C 24.994 12.034 25.021 12.044 25.052 12.058 C 25.169 13.325 25.066 15.634 23.311 17.79 C 23.311 17.79 22.748 27.452 20.266 32.337 C 20.266 32.337 21.504 33.812 24.099 34.496 C 24.099 34.496 25.337 34.267 25.337 33.246 C 25.337 33.246 28.833 21.883 26.125 18.699 C 26.125 18.699 28.323 15.335 27.668 12.86 C 27.98 12.912 28.281 12.947 28.58 12.964 C 29.615 14.207 30.853 16.356 30.297 19.154 C 30.297 19.154 36.948 25.858 36.612 35.291 C 36.612 35.291 38.868 36.426 41.007 36.201 C 41.007 36.201 41.459 35.406 40.331 34.722 C 40.331 34.722 39.992 24.265 32.776 18.925 C 32.776 18.925 33.763 15.297 30.674 12.738 C 30.853 12.679 31.017 12.613 31.168 12.534 C 32.844 13.468 35.415 15.339 35.669 18.127 L 35.967 18.505 C 35.967 18.505 45.062 22.824 47.167 31.462 C 47.167 31.462 48.22 31.916 50.249 31.611 C 50.249 31.611 51.452 31.309 50.174 30.399 C 50.174 30.399 49.197 29.868 48.521 29.868 C 48.521 29.868 47.243 23.199 41.98 20.321 C 41.98 20.321 39.049 18.276 37.393 17.443 C 37.393 17.443 36.914 13.169 32.166 11.589 C 32.179 11.562 32.193 11.534 32.207 11.506 L 32.357 11.454 C 32.357 11.454 36.794 11.832 38.446 15.849 C 38.446 15.849 47.993 18.123 49.646 23.123 C 49.646 23.123 50.17 23.654 50.925 23.199 C 50.931 23.195 54.538 22.286 50.931 21.453 Z M 21.542 5.146 C 20.993 4.604 20.05 3.944 18.713 3.899 C 18.857 3.83 19.522 3.542 19.923 3.743 C 20.297 3.931 21.031 3.434 21.864 5 C 21.751 5.042 21.644 5.09 21.542 5.146 Z M 29.149 10.225 C 28.765 11.089 27.123 11.187 25.481 10.444 C 23.838 9.701 22.82 8.399 23.208 7.534 C 23.592 6.67 25.237 6.573 26.876 7.316 C 28.515 8.059 29.533 9.36 29.149 10.225 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 20.157px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4.031496047973633,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 4.031px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.126,
      height: 16.126,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.505,
    height: 15.506,
    viewBox: "0 0 15.505 15.506",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.505,
      height: 15.506,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.496 11.713 C 15.358 12.763 14.842 13.728 14.045 14.426 C 13.248 15.124 12.224 15.507 11.164 15.506 C 5.008 15.506 0 10.497 0 4.341 C -0.002 3.282 0.382 2.258 1.08 1.461 C 1.778 0.663 2.742 0.147 3.793 0.009 C 4.058 -0.023 4.327 0.031 4.56 0.164 C 4.792 0.297 4.975 0.502 5.081 0.747 L 6.719 4.403 L 6.719 4.412 C 6.8 4.6 6.834 4.805 6.817 5.009 C 6.799 5.213 6.732 5.41 6.62 5.582 C 6.606 5.603 6.592 5.622 6.576 5.642 L 4.962 7.555 C 5.543 8.735 6.777 9.958 7.972 10.541 L 9.859 8.935 C 9.878 8.919 9.897 8.905 9.917 8.892 C 10.089 8.777 10.286 8.707 10.492 8.688 C 10.697 8.669 10.904 8.702 11.094 8.783 L 11.104 8.788 L 14.756 10.424 C 15.002 10.53 15.207 10.713 15.341 10.945 C 15.474 11.178 15.529 11.447 15.496 11.713 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 5.039px 0px 5.039px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "24.189px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "+1 408 469 4384")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.126,
      height: 16.126,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.606,
    height: 10.583,
    viewBox: "0 0 13.606 10.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.258,
      top: 2.773,
      width: 13.606,
      height: 10.583,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.85 0 L 0.756 0 C 0.555 0 0.363 0.08 0.221 0.221 C 0.08 0.363 0 0.555 0 0.756 L 0 9.323 C 0 9.657 0.133 9.977 0.369 10.214 C 0.605 10.45 0.926 10.583 1.26 10.583 L 12.346 10.583 C 12.681 10.583 13.001 10.45 13.237 10.214 C 13.474 9.977 13.606 9.657 13.606 9.323 L 13.606 0.756 C 13.606 0.555 13.527 0.363 13.385 0.221 C 13.243 0.08 13.051 0 12.85 0 Z M 10.907 1.512 L 6.803 5.274 L 2.699 1.512 L 10.907 1.512 Z M 1.512 9.071 L 1.512 2.474 L 6.292 6.857 C 6.432 6.985 6.614 7.055 6.803 7.055 C 6.992 7.055 7.175 6.985 7.314 6.857 L 12.094 2.474 L 12.094 9.071 L 1.512 9.071 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 5.039px 0px 5.039px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "24.189px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "sled@intagleo.com"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 32.252px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "24.189px",
      color: "rgb(155,161,174)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Intagleo partners with businesses to engineer modern software, scalable architectures, and digital platforms built for performance and growth"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 559.37,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 20.157px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "18.142px",
      letterSpacing: "1.008px",
      color: "rgb(245,245,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FIND US ELSEWHERE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 559.37,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 42.331px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10.078740119934082,
      padding: "0px 0px 10.079px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48.378,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1.008px rgb(56,65,82)",
      display: "flex",
      flexDirection: "row",
      padding: "11.087px 0px 11.087px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24.189,
      height: 24.189,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.165,
    height: 21.165,
    viewBox: "0 0 21.165 21.165",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.516,
      top: 0,
      width: 21.165,
      height: 21.165,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.738 21.165 L 0.35 21.165 L 0.35 7.034 L 4.738 7.034 L 4.738 21.165 Z M 2.541 5.107 C 1.138 5.107 0 3.944 0 2.541 C 0 1.867 0.268 1.221 0.744 0.744 C 1.221 0.268 1.867 0 2.541 0 C 3.215 0 3.862 0.268 4.338 0.744 C 4.815 1.221 5.083 1.867 5.083 2.541 C 5.083 3.944 3.944 5.107 2.541 5.107 Z M 21.161 21.165 L 16.782 21.165 L 16.782 14.286 C 16.782 12.647 16.749 10.544 14.501 10.544 C 12.219 10.544 11.87 12.326 11.87 14.168 L 11.87 21.165 L 7.486 21.165 L 7.486 7.034 L 11.695 7.034 L 11.695 8.962 L 11.756 8.962 C 12.342 7.851 13.773 6.68 15.908 6.68 C 20.349 6.68 21.165 9.604 21.165 13.403 L 21.165 21.165 L 21.161 21.165 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48.378,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1.008px rgb(56,65,82)",
      display: "flex",
      flexDirection: "row",
      padding: "11.087px 0px 11.087px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24.189,
      height: 24.189,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.177,
    height: 21.172,
    viewBox: "0 0 21.177 21.172",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.508,
      top: 1.504,
      width: 21.177,
      height: 21.172,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.591 5.158 C 7.586 5.158 5.163 7.581 5.163 10.586 C 5.163 13.591 7.586 16.015 10.591 16.015 C 13.596 16.015 16.019 13.591 16.019 10.586 C 16.019 7.581 13.596 5.158 10.591 5.158 Z M 10.591 14.115 C 8.649 14.115 7.062 12.533 7.062 10.586 C 7.062 8.64 8.644 7.057 10.591 7.057 C 12.537 7.057 14.12 8.64 14.12 10.586 C 14.12 12.533 12.533 14.115 10.591 14.115 Z M 17.507 4.936 C 17.507 5.64 16.941 6.202 16.241 6.202 C 15.537 6.202 14.975 5.635 14.975 4.936 C 14.975 4.237 15.542 3.67 16.241 3.67 C 16.941 3.67 17.507 4.237 17.507 4.936 Z M 21.103 6.221 C 21.022 4.525 20.635 3.022 19.393 1.785 C 18.155 0.547 16.652 0.159 14.956 0.074 C 13.208 -0.025 7.969 -0.025 6.221 0.074 C 4.53 0.155 3.027 0.542 1.785 1.78 C 0.542 3.018 0.159 4.52 0.074 6.216 C -0.025 7.964 -0.025 13.204 0.074 14.952 C 0.155 16.648 0.542 18.15 1.785 19.388 C 3.027 20.626 4.525 21.013 6.221 21.098 C 7.969 21.197 13.208 21.197 14.956 21.098 C 16.652 21.018 18.155 20.63 19.393 19.388 C 20.63 18.15 21.018 16.648 21.103 14.952 C 21.202 13.204 21.202 7.969 21.103 6.221 Z M 18.844 16.827 C 18.476 17.753 17.763 18.467 16.832 18.84 C 15.438 19.393 12.131 19.265 10.591 19.265 C 9.051 19.265 5.739 19.388 4.35 18.84 C 3.424 18.471 2.711 17.758 2.337 16.827 C 1.785 15.433 1.912 12.126 1.912 10.586 C 1.912 9.046 1.789 5.734 2.337 4.345 C 2.706 3.419 3.419 2.706 4.35 2.333 C 5.744 1.78 9.051 1.907 10.591 1.907 C 12.131 1.907 15.443 1.785 16.832 2.333 C 17.758 2.701 18.471 3.415 18.844 4.345 C 19.397 5.739 19.27 9.046 19.27 10.586 C 19.27 12.126 19.397 15.438 18.844 16.827 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48.378,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1.008px rgb(56,65,82)",
      display: "flex",
      flexDirection: "row",
      padding: "11.087px 0px 11.087px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.813,
      top: 2.402,
      width: 10.38,
      height: 19.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.380,
    height: 19.200,
    viewBox: "0 0 10.380 19.200",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.38,
      height: 19.2,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.895 10.84 C 2.82 10.84 1.239 10.84 0.51 10.84 C 0.134 10.84 0 10.705 0 10.327 C 0 9.357 0 8.386 0 7.416 C 0.001 7.043 0.142 6.901 0.513 6.9 C 1.242 6.9 2.814 6.9 2.895 6.9 C 2.895 6.834 2.895 5.433 2.895 4.788 C 2.896 3.834 3.066 2.921 3.55 2.085 C 4.046 1.229 4.768 0.643 5.693 0.304 C 6.286 0.087 6.901 0.001 7.53 0 C 8.317 0 9.103 0 9.89 0.002 C 10.229 0.002 10.379 0.152 10.379 0.492 C 10.381 1.405 10.381 2.318 10.379 3.23 C 10.379 3.574 10.235 3.713 9.889 3.717 C 9.244 3.724 8.599 3.719 7.955 3.745 C 7.304 3.745 6.962 4.063 6.962 4.736 C 6.946 5.449 6.955 6.162 6.955 6.9 C 7.016 6.9 8.868 6.9 9.733 6.9 C 10.127 6.9 10.261 7.035 10.261 7.43 C 10.261 8.395 10.261 9.361 10.26 10.326 C 10.26 10.715 10.133 10.84 9.738 10.84 C 8.873 10.84 7.028 10.84 6.947 10.84 L 6.947 18.651 C 6.947 19.067 6.816 19.2 6.406 19.2 C 5.404 19.2 4.402 19.2 3.4 19.2 C 3.037 19.2 2.895 19.059 2.895 18.696 C 2.895 16.152 2.895 10.929 2.895 10.84 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 20.157px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "18.142px",
      letterSpacing: "1.008px",
      color: "rgb(245,245,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Subscribe to the newsletter")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12.094px 20.157px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52.409,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.16)",
      display: "flex",
      flexDirection: "row",
      padding: "15.622px 2.016px 15.622px 15.118px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "100%",
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Your email here")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 20.157px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50.394,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(229,62,48)",
      display: "flex",
      flexDirection: "row",
      padding: "12.598px 28.220px 13.606px 28.220px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      textAlign: "center",
      lineHeight: "24.189px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Subscribe")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 51.283,
      maxWidth: 559.37,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      padding: "18.142px 0px 18.142px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 18.142px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "14.110px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Stay connected with the latest updates from Intagleo"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 372.914,
      width: 1920,
      height: 173.652,
      backgroundColor: "rgb(5,9,20)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 65.008px 0px 65.008px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1789.984,
      maxHeight: null,
      borderTop: "1.008px solid rgba(255,255,255,0.12)",
      borderRight: "1.008px solid rgba(255,255,255,0.12)",
      borderBottom: "1.008px solid rgba(255,255,255,0.12)",
      borderLeft: "1.008px solid rgba(255,255,255,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "40.315px 0px 40.315px 0px",
      justifyContent: "space-between",
      alignItems: "flex-end",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: -0.7105511426925659,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 15.118px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.062992095947266,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4.757px 0px 1.290px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18.142,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18.142,
      height: 18.142,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18.142,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.142,
    height: 18.142,
    viewBox: "0 0 18.142 18.142",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.142,
      height: 18.142
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.142 L 18.142 18.142 L 18.142 0 L 0 0 L 0 18.142 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "16.126px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "USA"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "25.802px",
      color: "rgb(155,161,174)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "2670 S White Road Suite #125,\r\nSan Jose, CA 95148"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: -0.7105511426925659,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 15.118px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.062992095947266,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b8ffc1ca41dad37d",
    style: {
      position: "relative",
      width: 18.14,
      height: 18.14,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "16.126px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "United Kingdom"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "25.802px",
      color: "rgb(155,161,174)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "268 Bath Road, Slough \nSL1 4DX\r"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: -0.7105511426925659,
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 15.118px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.062992095947266,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18.14,
      height: 18.14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.18,
      top: 2.059,
      width: 17.778,
      height: 14.018,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.778,
    height: 14.018,
    viewBox: "0 0 17.778 14.018",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.778,
      height: 14.018,
      color: "rgb(204,203,202)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.778 12.984 C 11.851 9.399 5.926 16.568 0 12.984 C 0 9.001 0 5.018 0 1.035 C 5.926 4.62 11.851 -2.55 17.778 1.035 L 17.778 12.984 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.141,
      top: 0.145,
      width: 17.487,
      height: 13.727,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.829,
    height: 12.606,
    viewBox: "0 0 5.829 12.606",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.121,
      width: 5.829,
      height: 12.606,
      color: "rgb(207,35,46)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.829 12.359 C 3.886 12.756 1.943 12.775 0 11.657 C 0 7.771 0 3.885 0 0 C 1.943 1.119 3.886 1.099 5.829 0.702 L 5.829 12.359 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.658,
    height: 5.756,
    viewBox: "0 0 11.658 5.756",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.828,
      top: 7.723,
      width: 11.658,
      height: 5.756,
      color: "rgb(35,31,32)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.822 L 0 5.756 C 3.886 4.96 7.772 2.647 11.658 4.882 C 11.658 3.571 11.658 2.26 11.658 0.948 C 7.772 -1.287 3.886 1.026 0 1.822 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.659,
    height: 5.610,
    viewBox: "0 0 11.659 5.610",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.828,
      top: 3.934,
      width: 11.659,
      height: 5.61,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.822 L 0 5.61 C 3.887 4.814 7.772 2.501 11.659 4.737 C 11.659 3.475 11.659 2.212 11.659 0.949 C 7.772 -1.287 3.887 1.026 0 1.822 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.658,
    height: 5.756,
    viewBox: "0 0 11.658 5.756",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.828,
      top: 0,
      width: 11.658,
      height: 5.756,
      color: "rgb(0,171,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.822 L 0 5.756 C 3.886 4.96 7.772 2.647 11.658 4.882 C 11.658 3.571 11.658 2.259 11.658 0.948 C 7.772 -1.287 3.886 1.026 0 1.822 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "16.126px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "United Arab Emirates"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "25.802px",
      color: "rgb(155,161,174)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "IFZA Business Park,\nDDP"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: -0.7105511426925659,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 15.118px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.062992095947266,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4.757px 0px 1.290px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18.142,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18.142,
      height: 18.142,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18.142,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.142,
    height: 18.142,
    viewBox: "0 0 18.142 18.142",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18.142,
      height: 18.142
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.142 L 18.142 18.142 L 18.142 0 L 0 0 L 0 18.142 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 435.402,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "16.126px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Pakistan"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16.12598419189453,
      lineHeight: "25.802px",
      color: "rgb(155,161,174)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "13-CCA, DHA Phase 8 - Ex Park View\nLahore, 54792"))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 546.563,
      width: 1920,
      height: 126.71,
      backgroundColor: "rgb(5,9,20)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 52.409px 0px 52.409px",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1789.984,
      maxWidth: 1789.984,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      padding: "40.315px 0px 60.472px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1333.78,
      display: "flex",
      flexDirection: "row",
      gap: 16.12598419189453,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1333.78,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "14.110px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "\xA9 2026 intagleo Systems | All rights reserved.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 456.204,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 456.204,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 458.787,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.031,
      width: 12.094,
      height: 12.094,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.774,
    height: 10.772,
    viewBox: "0 0 10.774 10.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.66,
      width: 10.774,
      height: 10.772,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.774 0.85 L 10.774 8.22 C 10.774 8.446 10.684 8.662 10.525 8.822 C 10.365 8.981 10.149 9.071 9.923 9.071 C 9.698 9.071 9.482 8.981 9.322 8.822 C 9.163 8.662 9.073 8.446 9.073 8.22 L 9.073 2.906 L 1.454 10.523 C 1.294 10.683 1.078 10.772 0.852 10.772 C 0.626 10.772 0.409 10.683 0.25 10.523 C 0.09 10.363 0 10.146 0 9.921 C 0 9.695 0.09 9.478 0.25 9.318 L 7.868 1.701 L 2.553 1.701 C 2.328 1.701 2.112 1.611 1.952 1.452 C 1.793 1.292 1.703 1.076 1.703 0.85 C 1.703 0.625 1.793 0.409 1.952 0.249 C 2.112 0.09 2.328 0 2.553 0 L 9.923 0 C 10.149 0 10.365 0.09 10.525 0.249 C 10.684 0.409 10.774 0.625 10.774 0.85 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "20.157px",
      color: "rgb(209,209,209)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Company"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 10.079px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.031,
      width: 12.094,
      height: 12.094,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.774,
    height: 10.772,
    viewBox: "0 0 10.774 10.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.66,
      width: 10.774,
      height: 10.772,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.774 0.85 L 10.774 8.22 C 10.774 8.446 10.684 8.662 10.525 8.822 C 10.365 8.981 10.149 9.071 9.923 9.071 C 9.698 9.071 9.482 8.981 9.322 8.822 C 9.163 8.662 9.073 8.446 9.073 8.22 L 9.073 2.906 L 1.454 10.523 C 1.294 10.683 1.078 10.772 0.852 10.772 C 0.626 10.772 0.409 10.683 0.25 10.523 C 0.09 10.363 0 10.146 0 9.921 C 0 9.695 0.09 9.478 0.25 9.318 L 7.868 1.701 L 2.553 1.701 C 2.328 1.701 2.112 1.611 1.952 1.452 C 1.793 1.292 1.703 1.076 1.703 0.85 C 1.703 0.625 1.793 0.409 1.952 0.249 C 2.112 0.09 2.328 0 2.553 0 L 9.923 0 C 10.149 0 10.365 0.09 10.525 0.249 C 10.684 0.409 10.774 0.625 10.774 0.85 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "20.157px",
      color: "rgb(209,209,209)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Resources"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 10.079px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.031,
      width: 12.094,
      height: 12.094,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.774,
    height: 10.772,
    viewBox: "0 0 10.774 10.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.66,
      width: 10.774,
      height: 10.772,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.774 0.85 L 10.774 8.22 C 10.774 8.446 10.684 8.662 10.525 8.822 C 10.365 8.981 10.149 9.071 9.923 9.071 C 9.698 9.071 9.482 8.981 9.322 8.822 C 9.163 8.662 9.073 8.446 9.073 8.22 L 9.073 2.906 L 1.454 10.523 C 1.294 10.683 1.078 10.772 0.852 10.772 C 0.626 10.772 0.409 10.683 0.25 10.523 C 0.09 10.363 0 10.146 0 9.921 C 0 9.695 0.09 9.478 0.25 9.318 L 7.868 1.701 L 2.553 1.701 C 2.328 1.701 2.112 1.611 1.952 1.452 C 1.793 1.292 1.703 1.076 1.703 0.85 C 1.703 0.625 1.793 0.409 1.952 0.249 C 2.112 0.09 2.328 0 2.553 0 L 9.923 0 C 10.149 0 10.365 0.09 10.525 0.249 C 10.684 0.409 10.774 0.625 10.774 0.85 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "20.157px",
      color: "rgb(209,209,209)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Customers"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 10.079px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.031,
      width: 12.094,
      height: 12.094,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.774,
    height: 10.772,
    viewBox: "0 0 10.774 10.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.66,
      width: 10.774,
      height: 10.772,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.774 0.85 L 10.774 8.22 C 10.774 8.446 10.684 8.662 10.525 8.822 C 10.365 8.981 10.149 9.071 9.923 9.071 C 9.698 9.071 9.482 8.981 9.322 8.822 C 9.163 8.662 9.073 8.446 9.073 8.22 L 9.073 2.906 L 1.454 10.523 C 1.294 10.683 1.078 10.772 0.852 10.772 C 0.626 10.772 0.409 10.683 0.25 10.523 C 0.09 10.363 0 10.146 0 9.921 C 0 9.695 0.09 9.478 0.25 9.318 L 7.868 1.701 L 2.553 1.701 C 2.328 1.701 2.112 1.611 1.952 1.452 C 1.793 1.292 1.703 1.076 1.703 0.85 C 1.703 0.625 1.793 0.409 1.952 0.249 C 2.112 0.09 2.328 0 2.553 0 L 9.923 0 C 10.149 0 10.365 0.09 10.525 0.249 C 10.684 0.409 10.774 0.625 10.774 0.85 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "20.157px",
      color: "rgb(209,209,209)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Sitemap"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 10.079px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.031,
      width: 12.094,
      height: 12.094,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.774,
    height: 10.772,
    viewBox: "0 0 10.774 10.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.66,
      width: 10.774,
      height: 10.772,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.774 0.85 L 10.774 8.22 C 10.774 8.446 10.684 8.662 10.525 8.822 C 10.365 8.981 10.149 9.071 9.923 9.071 C 9.698 9.071 9.482 8.981 9.322 8.822 C 9.163 8.662 9.073 8.446 9.073 8.22 L 9.073 2.906 L 1.454 10.523 C 1.294 10.683 1.078 10.772 0.852 10.772 C 0.626 10.772 0.409 10.683 0.25 10.523 C 0.09 10.363 0 10.146 0 9.921 C 0 9.695 0.09 9.478 0.25 9.318 L 7.868 1.701 L 2.553 1.701 C 2.328 1.701 2.112 1.611 1.952 1.452 C 1.793 1.292 1.703 1.076 1.703 0.85 C 1.703 0.625 1.793 0.409 1.952 0.249 C 2.112 0.09 2.328 0 2.553 0 L 9.923 0 C 10.149 0 10.365 0.09 10.525 0.249 C 10.684 0.409 10.774 0.625 10.774 0.85 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "20.157px",
      color: "rgb(209,209,209)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Terms"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59.079,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10.079px 0px 10.079px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.031,
      width: 12.094,
      height: 12.094,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12.094,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.774,
    height: 10.772,
    viewBox: "0 0 10.774 10.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.66,
      width: 10.774,
      height: 10.772,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.774 0.85 L 10.774 8.22 C 10.774 8.446 10.684 8.662 10.525 8.822 C 10.365 8.981 10.149 9.071 9.923 9.071 C 9.698 9.071 9.482 8.981 9.322 8.822 C 9.163 8.662 9.073 8.446 9.073 8.22 L 9.073 2.906 L 1.454 10.523 C 1.294 10.683 1.078 10.772 0.852 10.772 C 0.626 10.772 0.409 10.683 0.25 10.523 C 0.09 10.363 0 10.146 0 9.921 C 0 9.695 0.09 9.478 0.25 9.318 L 7.868 1.701 L 2.553 1.701 C 2.328 1.701 2.112 1.611 1.952 1.452 C 1.793 1.292 1.703 1.076 1.703 0.85 C 1.703 0.625 1.793 0.409 1.952 0.249 C 2.112 0.09 2.328 0 2.553 0 L 9.923 0 C 10.149 0 10.365 0.09 10.525 0.249 C 10.684 0.409 10.774 0.625 10.774 0.85 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.110236167907715,
      lineHeight: "20.157px",
      color: "rgb(209,209,209)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Privacy"))))))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4a264c0e58c82f88-b84ed7ef",
    style: {
      position: "absolute",
      left: 173.465,
      top: -504.328,
      width: 1281.972,
      height: 711.73,
      opacity: 0.15
    }
  }))), /*#__PURE__*/React.createElement(Component48, {
    style: {
      position: "absolute",
      left: 1786,
      top: 426,
      width: 68,
      height: 68
    },
    property1: "frame 427321371"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.235,
      top: 8209.277,
      width: 1920,
      backgroundColor: "rgb(5,9,20)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1673,
      height: 393,
      maxWidth: 1776,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderBottom: "1px solid rgb(53,66,85)",
      display: "flex",
      flexDirection: "row",
      gap: 60,
      padding: "0px 0px 40px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 426.23,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 25px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(253,253,253)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Procurement Codes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15.5,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "NAICS 541512"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "NAICS 541512"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "NAICS 541519"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "NIGP 918-24"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "NIGP 918-00"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "NIGP 918-46"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "MLOps & AI Infrastructure"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Data Governance & Business Intelligence"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Data Science & Predictive Analytics"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 408.47,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 25px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(253,253,253)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "SLED Practice"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15.5,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "SLED Sectors"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Past Performance"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Teaming"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Compliance"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Schedule a Briefing"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390.72,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 25px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(253,253,253)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Intagleo Worldwide"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15.5,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "intagleo.com (Corporate)"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "London, United Kingdom"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Dubai, United Arab Emirates"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Lahore, Delivery Center"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "20px",
      color: "rgb(155,161,174)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -96.5,
      width: 12,
      height: 12,
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.688,
    viewBox: "0 0 10.690 10.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.656,
      top: 0.656,
      width: 10.69,
      height: 10.688,
      color: "rgb(152,162,179)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.69 0.844 L 10.69 8.156 C 10.69 8.38 10.601 8.595 10.443 8.753 C 10.284 8.911 10.07 9 9.846 9 C 9.622 9 9.408 8.911 9.249 8.753 C 9.091 8.595 9.002 8.38 9.002 8.156 L 9.002 2.883 L 1.443 10.441 C 1.284 10.599 1.069 10.688 0.845 10.688 C 0.621 10.688 0.406 10.599 0.248 10.441 C 0.089 10.282 0 10.067 0 9.843 C 0 9.619 0.089 9.404 0.248 9.245 L 7.807 1.688 L 2.533 1.688 C 2.31 1.688 2.095 1.599 1.937 1.44 C 1.779 1.282 1.69 1.068 1.69 0.844 C 1.69 0.62 1.779 0.405 1.937 0.247 C 2.095 0.089 2.31 0 2.533 0 L 9.846 0 C 10.07 0 10.284 0.089 10.443 0.247 C 10.601 0.405 10.69 0.62 10.69 0.844 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 7300,
      width: 1676,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a03a42732ea59412",
    style: {
      position: "absolute",
      left: 326.125,
      top: 124.5,
      width: 992,
      height: 614.226,
      opacity: 0.09
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 728,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 750,
      fontSize: 42,
      lineHeight: "45px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Send the RFP.\r\nWe'll send the bench."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Briefings are 30 minutes, run by a delivery lead and a U.S.-based account director, not sales. We bring relevant past performance, a redacted staffing plan, and a frank read on whether we're the right partner for your pursuit."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(249,249,249)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Response within one business day\r", "\n", "• ", "NDA & capability documents move the same day\r", "\n", "• ", "A delivery lead on the call, not a sales rep\r", "\n", "• ", "Redacted staffing plan + relevant past performance"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgba(242,244,245,0.04)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "35px",
      color: "rgb(214,216,216)",
      flexShrink: 0
    }
  }, "Practice"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "24px",
      color: "rgb(214,216,216)",
      flexShrink: 0
    }
  }, "U.S. SLED")), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 680 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 680 0 L 680 -0.5 L 680 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "35px",
      color: "rgb(214,216,216)",
      flexShrink: 0
    }
  }, "Direct"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "24px",
      color: "rgb(214,216,216)",
      flexShrink: 0
    }
  }, "sled@intagleo.com")), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 680 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 680 0 L 680 -0.5 L 680 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "35px",
      color: "rgb(214,216,216)",
      flexShrink: 0
    }
  }, "Office"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 295.03,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "24px",
      color: "rgb(214,216,216)",
      flexShrink: 0
    }
  }, "2670 S White Road, Suite 125, San Jose, California 95148"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 639.15,
      height: 758.8,
      borderRadius: 16,
      backgroundColor: "rgba(242,244,245,0.04)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--item-spacing-22-5) * 1px)",
      padding: "40px 40px 40px 40px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgba(255,255,255,0.35)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Request a Briefing")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 750,
      fontSize: 26,
      lineHeight: "30px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Send the brief. We'll staff the read."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 19.200000762939453,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 69.6,
      display: "grid",
      gridTemplateRows: "69.5999984741211px",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px 16px",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 271.575,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      gridRow: "1",
      gridColumn: "1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FULL NAME *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "12.600px 15.800px 13.400px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgba(255,255,255,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Jane Smith")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 271.575,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      gridRow: "1",
      gridColumn: "2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "WORK EMAIL *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "12.600px 15.800px 13.400px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgba(255,255,255,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "jane@company.com"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 19,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Agency / Organization*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "12.600px 15.800px 13.400px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgba(255,255,255,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Dept. of Health Services")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Role / Title")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "12.600px 15.800px 13.400px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgba(255,255,255,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Optional"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 19,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Buyer type*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "12.600px 15.800px 13.400px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "0.800px 0px 0.800px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Select"), /*#__PURE__*/React.createElement(ChevronDown, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Vehicle / RFP #")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "12.600px 15.800px 13.400px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0.800px 0px 0.800px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgba(255,255,255,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Optional"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0.800px 0px 7.200px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "1.200px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "What's the pursuit?*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(5,9,20)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "row",
      padding: "11.800px 15.800px 102.800px 15.800px",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22.750px",
      color: "rgba(255,255,255,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Scope, incumbent system, timeline, and where you'd want us to fit\u2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      background: "linear-gradient(129.257deg, rgba(255,255,255,0) 35.36%, rgba(255,255,255,0.18) 50.00%, rgba(255,255,255,0) 64.64%), linear-gradient(rgb(59,130,246),rgb(59,130,246))",
      display: "flex",
      flexDirection: "row",
      padding: "14.800px 0px 14px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 750,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Schedule a Briefing \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Spline Sans Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "19.500px",
      color: "rgba(255,255,255,0.4)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Briefings are run by a delivery lead, not sales. We never share your information."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 4723,
      width: 1676,
      display: "flex",
      flexDirection: "row",
      gap: 261,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 822,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 750,
      fontSize: 42,
      lineHeight: "45px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "The specialist bench primes scale into."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Most state work is awarded to prime integrators who need a specialist bench they can scale into. We bring senior engineers, predictable delivery, and IP-free teaming agreements that let your capture team move fast."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Flexible teaming structures"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Standard NDA walk-ins through full mentor-prot\xE9g\xE9 arrangements.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "\rCapture support."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Past-performance write-ups, staffing plans, and pricing inputs against your proposal calendar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "No IP friction"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Work-for-hire by default. Your IP, your customer relationship, your renewal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "One business day intake"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "NDAs and capability documents move on the same business day, U.S. Pacific time.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 559,
      borderRadius: 16,
      backgroundColor: "rgba(242,244,245,0.04)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 24px 24px 24px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      background: "linear-gradient(269.751deg, rgba(128,129,146,0.25) 1.83%, rgba(6,4,9,0.25) 63.38%, rgba(128,129,146,0.25) 94.15%)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Teaming Register")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "var(--color-spring-green-51)",
      flexShrink: 0
    }
  }, "Active \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Open to teaming with"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      borderTop: "1px solid rgb(65,65,65)",
      borderRight: "1px solid rgb(65,65,65)",
      borderBottom: "1px solid rgb(65,65,65)",
      borderLeft: "1px solid rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "SI / Federal Primes"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Tier-1 integrators")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      borderTop: "1px solid rgb(65,65,65)",
      borderRight: "1px solid rgb(65,65,65)",
      borderBottom: "1px solid rgb(65,65,65)",
      borderLeft: "1px solid rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "8(a) / SDB Primes"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Set-aside vehicles")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      borderTop: "1px solid rgb(65,65,65)",
      borderRight: "1px solid rgb(65,65,65)",
      borderBottom: "1px solid rgb(65,65,65)",
      borderLeft: "1px solid rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Vertical SaaS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Platform implementation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "2px 0px 2px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Reference letters & past-performance write-ups released to qualified primes under NDA.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 146.195,
      display: "flex",
      flexDirection: "row",
      gap: 245,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 835,
      display: "flex",
      flexDirection: "column",
      gap: 42,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 82,
      lineHeight: "78.300px",
      letterSpacing: "-1.740px",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap",
      background: "linear-gradient(104deg,#5da4ff 0%,#7f8cf5 44%,#b06ad0 68%,#e53e30 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent"
    }
  }, "Engineering partner for\nthe\rU.S. public sector."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "35px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Intagleo Systems is a 22-year software engineering firm with a U.S. office in San Jose. We modernize legacy systems, migrate state agencies to the cloud, and rebuild citizen-facing services for state, local, and education buyers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Component21, {
    style: {
      position: "relative",
      height: 52,
      width: 206,
      flexShrink: 0
    },
    text1: "Schedule a Briefing →",
    property1: "frame 2147240878"
  }), /*#__PURE__*/React.createElement(Component24, {
    style: {
      position: "relative",
      height: 52,
      width: 250,
      flexShrink: 0
    },
    text1: "Capability Statement (PDF)\r",
    property1: "component 22"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgba(242,244,245,0.04)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Holds today"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 291,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "35px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "ISO 27001")), /*#__PURE__*/React.createElement("svg", {
    width: 31.049,
    height: 1,
    viewBox: "0 -0.500 31.049 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,131,1.976)",
      transformOrigin: "0 0",
      width: 31.049,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 31.049 0 L 31.049 -0.5 L 31.049 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "35px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "WCAG 2.1 AA"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 559,
      height: 634,
      borderRadius: 16,
      backgroundColor: "rgba(14,18,29,0.75)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--item-spacing-22-5) * 1px)",
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: 8,
      background: "linear-gradient(269.751deg, rgba(128,129,146,0.25) 1.83%, rgba(6,4,9,0.25) 63.38%, rgba(128,129,146,0.25) 94.15%)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Capability Snapshot"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "EST \xB7 2004")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px dashed rgb(65,65,65)",
      borderRight: "1px dashed rgb(65,65,65)",
      borderBottom: "1px dashed rgb(65,65,65)",
      borderLeft: "1px dashed rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "U.S. Office"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "San Jose, California")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px dashed rgb(65,65,65)",
      borderRight: "1px dashed rgb(65,65,65)",
      borderBottom: "1px dashed rgb(65,65,65)",
      borderLeft: "1px dashed rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Founded"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "2004 \xB7 22 years")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px dashed rgb(65,65,65)",
      borderRight: "1px dashed rgb(65,65,65)",
      borderBottom: "1px dashed rgb(65,65,65)",
      borderLeft: "1px dashed rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Engineers"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "200+ on bench")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px dashed rgb(65,65,65)",
      borderRight: "1px dashed rgb(65,65,65)",
      borderBottom: "1px dashed rgb(65,65,65)",
      borderLeft: "1px dashed rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Coverage"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "CONUS \xB7 11 states")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px dashed rgb(65,65,65)",
      borderRight: "1px dashed rgb(65,65,65)",
      borderBottom: "1px dashed rgb(65,65,65)",
      borderLeft: "1px dashed rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "UEI / CAGE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Available on request")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px dashed rgb(65,65,65)",
      borderRight: "1px dashed rgb(65,65,65)",
      borderBottom: "1px dashed rgb(65,65,65)",
      borderLeft: "1px dashed rgb(65,65,65)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "Response"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "36px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Within 1 business day"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 0px 2px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "NAICS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115.75,
      borderRadius: 8,
      backgroundColor: "rgb(36,82,140)",
      boxShadow: "0 0 0 1px var(--intagleo-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "8px 11px 8px 11px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "541512 ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115.75,
      borderRadius: 8,
      backgroundColor: "rgb(36,82,140)",
      boxShadow: "0 0 0 1px var(--intagleo-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "8px 11px 8px 11px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, " 541511")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115.75,
      borderRadius: 8,
      backgroundColor: "rgb(36,82,140)",
      boxShadow: "0 0 0 1px var(--intagleo-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "8px 11px 8px 11px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "541519")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 0px 2px 0px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 650,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "28px",
      color: "rgb(153,161,175)",
      flexShrink: 0
    }
  }, "NIGP"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115.75,
      borderRadius: 8,
      backgroundColor: "rgb(36,82,140)",
      boxShadow: "0 0 0 1px var(--intagleo-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "8px 11px 8px 11px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "918-24 ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115.75,
      borderRadius: 8,
      backgroundColor: "rgb(36,82,140)",
      boxShadow: "0 0 0 1px var(--intagleo-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "8px 11px 8px 11px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "918-00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115.75,
      borderRadius: 8,
      backgroundColor: "rgb(36,82,140)",
      boxShadow: "0 0 0 1px var(--intagleo-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "8px 11px 8px 11px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, " 918-46")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 125,
      top: 2032,
      width: 1670,
      display: "flex",
      flexDirection: "column",
      gap: 60,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 794,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 42,
      textAlign: "center",
      lineHeight: "48px",
      letterSpacing: "-1.740px",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Different industries. Different pressures. \nOne standard for excellence."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.5,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      textAlign: "center",
      lineHeight: "31px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We don\u2019t believe in \u201Cone size fits all.\u201D We build around your context, your users, and the realities of your operations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      background: "conic-gradient(from -54.357deg at 68.674% 42.647%, rgba(31,30,28,0.63) 77.97deg, rgba(175,77,68,0.126) 209.09deg, rgba(8,16,37,0.63) 276.73deg)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "32px 53px 32px 53px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447.15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 133,
      height: 52,
      borderRadius: 250,
      backgroundColor: "rgb(229,62,48)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "State")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 254,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 17.500,
    viewBox: "-2.500 0 5 17.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 27.5,
      width: 5,
      height: 17.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.5 17.5 C -2.5 18.881 -1.381 20 0 20 C 1.381 20 2.5 18.881 2.5 17.5 L 0 17.5 L -2.5 17.5 Z M 2.5 0 C 2.5 -1.381 1.381 -2.5 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 L 0 0 L 2.5 0 Z M 0 17.5 L 2.5 17.5 L 2.5 0 L 0 0 L -2.5 0 L -2.5 17.5 L 0 17.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 45.003,
    height: 12.499,
    viewBox: "0 0 45.003 12.499",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 45.003,
      height: 12.499,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.298 0.511 L 21.399 2.756 L 21.399 2.756 L 20.298 0.511 Z M 22.5 0 L 22.5 -2.5 L 22.5 0 Z M 24.703 0.511 L 23.601 2.756 L 23.601 2.756 L 24.703 0.511 Z M 44.303 10.126 L 43.201 12.371 L 43.203 12.371 L 44.303 10.126 Z M 43.75 12.499 L 43.755 9.999 L 43.75 9.999 L 43.75 12.499 Z M 1.25 12.499 L 1.25 9.999 L 1.25 9.999 L 1.25 12.499 Z M 0.7 10.126 L 1.8 12.371 L 1.801 12.371 L 0.7 10.126 Z M 20.298 0.511 L 21.399 2.756 C 21.742 2.587 22.118 2.5 22.5 2.5 L 22.5 0 L 22.5 -2.5 C 21.355 -2.5 20.225 -2.238 19.196 -1.733 L 20.298 0.511 Z M 22.5 0 L 22.5 2.5 C 22.882 2.5 23.259 2.587 23.601 2.756 L 24.703 0.511 L 25.804 -1.733 C 24.776 -2.238 23.645 -2.5 22.5 -2.5 L 22.5 0 Z M 24.703 0.511 L 23.601 2.756 L 43.201 12.371 L 44.303 10.126 L 45.404 7.882 L 25.804 -1.733 L 24.703 0.511 Z M 44.303 10.126 L 43.203 12.371 C 42.949 12.247 42.745 12.04 42.623 11.785 L 44.882 10.713 L 47.14 9.641 C 46.777 8.875 46.164 8.254 45.402 7.881 L 44.303 10.126 Z M 44.882 10.713 L 42.623 11.785 C 42.502 11.529 42.471 11.241 42.535 10.965 L 44.97 11.532 L 47.405 12.099 C 47.597 11.273 47.504 10.407 47.14 9.641 L 44.882 10.713 Z M 44.97 11.532 L 42.535 10.965 C 42.599 10.69 42.755 10.444 42.976 10.269 L 44.529 12.229 L 46.081 14.188 C 46.746 13.661 47.212 12.925 47.405 12.099 L 44.97 11.532 Z M 44.529 12.229 L 42.976 10.269 C 43.198 10.093 43.472 9.998 43.755 9.999 L 43.75 12.499 L 43.745 14.999 C 44.593 15 45.417 14.715 46.081 14.188 L 44.529 12.229 Z M 43.75 12.499 L 43.75 9.999 L 1.25 9.999 L 1.25 12.499 L 1.25 14.999 L 43.75 14.999 L 43.75 12.499 Z M 1.25 12.499 L 1.25 9.999 C 1.532 9.999 1.807 10.094 2.028 10.27 L 0.472 12.227 L -1.083 14.185 C -0.42 14.712 0.403 14.999 1.25 14.999 L 1.25 12.499 Z M 0.472 12.227 L 2.028 10.27 C 2.249 10.446 2.404 10.691 2.468 10.966 L 0.032 11.531 L -2.403 12.096 C -2.212 12.921 -1.746 13.657 -1.083 14.185 L 0.472 12.227 Z M 0.032 11.531 L 2.468 10.966 C 2.531 11.242 2.5 11.53 2.379 11.785 L 0.121 10.712 L -2.137 9.639 C -2.501 10.404 -2.594 11.27 -2.403 12.096 L 0.032 11.531 Z M 0.121 10.712 L 2.379 11.785 C 2.258 12.04 2.054 12.247 1.8 12.371 L 0.7 10.126 L -0.4 7.881 C -1.161 8.254 -1.773 8.874 -2.137 9.639 L 0.121 10.712 Z M 0.7 10.126 L 1.801 12.371 L 21.399 2.756 L 20.298 0.511 L 19.196 -1.733 L -0.401 7.882 L 0.7 10.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 17.500,
    viewBox: "-2.500 0 5 17.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 35,
      top: 27.5,
      width: 5,
      height: 17.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.5 17.5 C -2.5 18.881 -1.381 20 0 20 C 1.381 20 2.5 18.881 2.5 17.5 L 0 17.5 L -2.5 17.5 Z M 2.5 0 C 2.5 -1.381 1.381 -2.5 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 L 0 0 L 2.5 0 Z M 0 17.5 L 2.5 17.5 L 2.5 0 L 0 0 L -2.5 0 L -2.5 17.5 L 0 17.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 17.500,
    viewBox: "-2.500 0 5 17.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 45,
      top: 27.5,
      width: 5,
      height: 17.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.5 17.5 C -2.5 18.881 -1.381 20 0 20 C 1.381 20 2.5 18.881 2.5 17.5 L 0 17.5 L -2.5 17.5 Z M 2.5 0 C 2.5 -1.381 1.381 -2.5 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 L 0 0 L 2.5 0 Z M 0 17.5 L 2.5 17.5 L 2.5 0 L 0 0 L -2.5 0 L -2.5 17.5 L 0 17.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 45,
    height: 5,
    viewBox: "0 -2.500 45 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 55,
      width: 45,
      height: 5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 C -2.5 1.381 -1.381 2.5 0 2.5 L 0 0 L 0 -2.5 Z M 45 2.5 C 46.381 2.5 47.5 1.381 47.5 0 C 47.5 -1.381 46.381 -2.5 45 -2.5 L 45 0 L 45 2.5 Z M 0 0 L 0 2.5 L 45 2.5 L 45 0 L 45 -2.5 L 0 -2.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 17.500,
    viewBox: "-2.500 0 5 17.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 27.5,
      width: 5,
      height: 17.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.5 17.5 C -2.5 18.881 -1.381 20 0 20 C 1.381 20 2.5 18.881 2.5 17.5 L 0 17.5 L -2.5 17.5 Z M 2.5 0 C 2.5 -1.381 1.381 -2.5 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 L 0 0 L 2.5 0 Z M 0 17.5 L 2.5 17.5 L 2.5 0 L 0 0 L -2.5 0 L -2.5 17.5 L 0 17.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 34,
      lineHeight: "100%",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "State government"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "26px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cabinet agencies, multi-program platforms, and the legacy systems that statutorily cannot be turned off.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.77,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Typical pursuit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.77,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "HHS modernization\r", "\n", "• ", "Licensing & revenue platforms\r", "\n", "• ", "Cross-agency identity")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      background: "conic-gradient(from -54.357deg at 68.674% 42.647%, rgba(31,30,28,0.63) 77.97deg, rgba(80,36,126,0.126) 209.09deg, rgba(8,16,37,0.63) 276.73deg)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "32px 53px 32px 53px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447.15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 133,
      height: 52,
      borderRadius: 250,
      backgroundColor: "rgb(229,62,48)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Local")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 254,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 -2.500 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 30,
      width: 10,
      height: 5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 C -2.5 1.381 -1.381 2.5 0 2.5 L 0 0 L 0 -2.5 Z M 10 2.5 C 11.381 2.5 12.5 1.381 12.5 0 C 12.5 -1.381 11.381 -2.5 10 -2.5 L 10 0 L 10 2.5 Z M 0 0 L 0 2.5 L 10 2.5 L 10 0 L 10 -2.5 L 0 -2.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 -2.500 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 20,
      width: 10,
      height: 5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 C -2.5 1.381 -1.381 2.5 0 2.5 L 0 0 L 0 -2.5 Z M 10 2.5 C 11.381 2.5 12.5 1.381 12.5 0 C 12.5 -1.381 11.381 -2.5 10 -2.5 L 10 0 L 10 2.5 Z M 0 0 L 0 2.5 L 10 2.5 L 10 0 L 10 -2.5 L 0 -2.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 12.500,
    viewBox: "0 0 10 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 25,
      top: 40,
      width: 10,
      height: 12.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.5 12.5 C 7.5 13.881 8.619 15 10 15 C 11.381 15 12.5 13.881 12.5 12.5 L 10 12.5 L 7.5 12.5 Z M 5 0 L 5 2.5 L 5 0 Z M -2.5 12.5 C -2.5 13.881 -1.381 15 0 15 C 1.381 15 2.5 13.881 2.5 12.5 L 0 12.5 L -2.5 12.5 Z M 10 12.5 L 12.5 12.5 L 12.5 5 L 10 5 L 7.5 5 L 7.5 12.5 L 10 12.5 Z M 10 5 L 12.5 5 C 12.5 3.011 11.71 1.103 10.303 -0.303 L 8.536 1.464 L 6.768 3.232 C 7.237 3.701 7.5 4.337 7.5 5 L 10 5 Z M 8.536 1.464 L 10.303 -0.303 C 8.897 -1.71 6.989 -2.5 5 -2.5 L 5 0 L 5 2.5 C 5.663 2.5 6.299 2.763 6.768 3.232 L 8.536 1.464 Z M 5 0 L 5 -2.5 C 3.011 -2.5 1.103 -1.71 -0.303 -0.303 L 1.464 1.464 L 3.232 3.232 C 3.701 2.763 4.337 2.5 5 2.5 L 5 0 Z M 1.464 1.464 L -0.303 -0.303 C -1.71 1.103 -2.5 3.011 -2.5 5 L 0 5 L 2.5 5 C 2.5 4.337 2.763 3.701 3.232 3.232 L 1.464 1.464 Z M 0 5 L -2.5 5 L -2.5 12.5 L 0 12.5 L 2.5 12.5 L 2.5 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50,
    height: 35,
    viewBox: "0 0 50 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 17.5,
      width: 50,
      height: 35,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 10 C 11.381 10 12.5 8.881 12.5 7.5 C 12.5 6.119 11.381 5 10 5 L 10 7.5 L 10 10 Z M 0 12.5 L -2.5 12.5 L 0 12.5 Z M 0 30 L -2.5 30 L 0 30 Z M 45 0 L 45 -2.5 L 45 0 Z M 40 -2.5 C 38.619 -2.5 37.5 -1.381 37.5 0 C 37.5 1.381 38.619 2.5 40 2.5 L 40 0 L 40 -2.5 Z M 10 7.5 L 10 5 L 5 5 L 5 7.5 L 5 10 L 10 10 L 10 7.5 Z M 5 7.5 L 5 5 C 3.011 5 1.103 5.79 -0.303 7.197 L 1.464 8.964 L 3.232 10.732 C 3.701 10.263 4.337 10 5 10 L 5 7.5 Z M 1.464 8.964 L -0.303 7.197 C -1.71 8.603 -2.5 10.511 -2.5 12.5 L 0 12.5 L 2.5 12.5 C 2.5 11.837 2.763 11.201 3.232 10.732 L 1.464 8.964 Z M 0 12.5 L -2.5 12.5 L -2.5 30 L 0 30 L 2.5 30 L 2.5 12.5 L 0 12.5 Z M 0 30 L -2.5 30 C -2.5 31.989 -1.71 33.897 -0.303 35.303 L 1.464 33.536 L 3.232 31.768 C 2.763 31.299 2.5 30.663 2.5 30 L 0 30 Z M 1.464 33.536 L -0.303 35.303 C 1.103 36.71 3.011 37.5 5 37.5 L 5 35 L 5 32.5 C 4.337 32.5 3.701 32.237 3.232 31.768 L 1.464 33.536 Z M 5 35 L 5 37.5 L 45 37.5 L 45 35 L 45 32.5 L 5 32.5 L 5 35 Z M 45 35 L 45 37.5 C 46.989 37.5 48.897 36.71 50.303 35.303 L 48.536 33.536 L 46.768 31.768 C 46.299 32.237 45.663 32.5 45 32.5 L 45 35 Z M 48.536 33.536 L 50.303 35.303 C 51.71 33.897 52.5 31.989 52.5 30 L 50 30 L 47.5 30 C 47.5 30.663 47.237 31.299 46.768 31.768 L 48.536 33.536 Z M 50 30 L 52.5 30 L 52.5 5 L 50 5 L 47.5 5 L 47.5 30 L 50 30 Z M 50 5 L 52.5 5 C 52.5 3.011 51.71 1.103 50.303 -0.303 L 48.536 1.464 L 46.768 3.232 C 47.237 3.701 47.5 4.337 47.5 5 L 50 5 Z M 48.536 1.464 L 50.303 -0.303 C 48.897 -1.71 46.989 -2.5 45 -2.5 L 45 0 L 45 2.5 C 45.663 2.5 46.299 2.763 46.768 3.232 L 48.536 1.464 Z M 45 0 L 45 -2.5 L 40 -2.5 L 40 0 L 40 2.5 L 45 2.5 L 45 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30,
    height: 45,
    viewBox: "0 0 30 45",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 7.5,
      width: 30,
      height: 45,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -2.5 45 C -2.5 46.381 -1.381 47.5 0 47.5 C 1.381 47.5 2.5 46.381 2.5 45 L 0 45 L -2.5 45 Z M 5 0 L 5 -2.5 L 5 0 Z M 25 0 L 25 -2.5 L 25 0 Z M 27.5 45 C 27.5 46.381 28.619 47.5 30 47.5 C 31.381 47.5 32.5 46.381 32.5 45 L 30 45 L 27.5 45 Z M 0 45 L 2.5 45 L 2.5 5 L 0 5 L -2.5 5 L -2.5 45 L 0 45 Z M 0 5 L 2.5 5 C 2.5 4.337 2.763 3.701 3.232 3.232 L 1.464 1.464 L -0.303 -0.303 C -1.71 1.103 -2.5 3.011 -2.5 5 L 0 5 Z M 1.464 1.464 L 3.232 3.232 C 3.701 2.763 4.337 2.5 5 2.5 L 5 0 L 5 -2.5 C 3.011 -2.5 1.103 -1.71 -0.303 -0.303 L 1.464 1.464 Z M 5 0 L 5 2.5 L 25 2.5 L 25 0 L 25 -2.5 L 5 -2.5 L 5 0 Z M 25 0 L 25 2.5 C 25.663 2.5 26.299 2.763 26.768 3.232 L 28.536 1.464 L 30.303 -0.303 C 28.897 -1.71 26.989 -2.5 25 -2.5 L 25 0 Z M 28.536 1.464 L 26.768 3.232 C 27.237 3.701 27.5 4.337 27.5 5 L 30 5 L 32.5 5 C 32.5 3.011 31.71 1.103 30.303 -0.303 L 28.536 1.464 Z M 30 5 L 27.5 5 L 27.5 45 L 30 45 L 32.5 45 L 32.5 5 L 30 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 34,
      lineHeight: "100%",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cities & counties"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "26px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Public works, code enforcement, 311 modernization, and resident-facing portals that have to work the first time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.77,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Typical pursuit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.77,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Resident services portals\r", "\n", "• ", "Public-works workflows\r", "\n", "• ", "311 & case management")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      background: "conic-gradient(from -54.357deg at 68.674% 42.647%, rgba(31,30,28,0.63) 77.97deg, rgba(65,145,182,0.126) 209.09deg, rgba(8,16,37,0.63) 276.73deg)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "32px 53px 32px 53px",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447.15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 133,
      height: 52,
      borderRadius: 250,
      backgroundColor: "rgb(229,62,48)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Higher Ed")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 254,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 50.038,
    height: 25.002,
    viewBox: "0 0 50.038 25.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.003,
      top: 12.5,
      width: 50.038,
      height: 25.002,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.547 14.806 L 47.538 12.519 C 47.53 12.522 47.522 12.526 47.514 12.529 L 48.547 14.806 Z M 48.5 10.211 L 47.463 12.486 C 47.488 12.497 47.513 12.508 47.538 12.519 L 48.5 10.211 Z M 27.072 0.451 L 26.035 2.725 L 26.036 2.726 L 27.072 0.451 Z M 22.922 0.451 L 23.958 2.726 L 23.96 2.725 L 22.922 0.451 Z M 1.497 10.201 L 2.5 12.491 C 2.511 12.486 2.522 12.481 2.533 12.476 L 1.497 10.201 Z M 1.497 14.781 L 2.534 12.506 C 2.523 12.501 2.511 12.496 2.5 12.491 L 1.497 14.781 Z M 22.922 24.551 L 23.96 22.276 L 23.959 22.276 L 22.922 24.551 Z M 24.997 25.002 L 24.997 27.502 L 24.997 25.002 Z M 27.072 24.551 L 26.039 22.274 L 26.035 22.276 L 27.072 24.551 Z M 48.547 14.806 L 49.556 17.093 C 50.451 16.698 51.211 16.05 51.741 15.227 L 49.639 13.873 L 47.538 12.519 L 47.538 12.519 L 48.547 14.806 Z M 49.639 13.873 L 51.741 15.227 C 52.271 14.405 52.548 13.445 52.538 12.467 L 50.038 12.493 L 47.538 12.519 L 47.538 12.519 L 49.639 13.873 Z M 50.038 12.493 L 52.538 12.467 C 52.528 11.489 52.231 10.535 51.684 9.724 L 49.611 11.121 L 47.538 12.519 L 47.538 12.519 L 50.038 12.493 Z M 49.611 11.121 L 51.684 9.724 C 51.137 8.912 50.364 8.279 49.461 7.903 L 48.5 10.211 L 47.538 12.519 L 47.538 12.519 L 49.611 11.121 Z M 48.5 10.211 L 49.536 7.936 L 28.108 -1.824 L 27.072 0.451 L 26.036 2.726 L 47.463 12.486 L 48.5 10.211 Z M 27.072 0.451 L 28.11 -1.824 C 27.132 -2.269 26.071 -2.5 24.997 -2.5 L 24.997 0 L 24.997 2.5 C 25.355 2.5 25.709 2.577 26.035 2.725 L 27.072 0.451 Z M 24.997 0 L 24.997 -2.5 C 23.923 -2.5 22.862 -2.269 21.885 -1.824 L 22.922 0.451 L 23.96 2.725 C 24.285 2.577 24.639 2.5 24.997 2.5 L 24.997 0 Z M 22.922 0.451 L 21.887 -1.825 L 0.462 7.925 L 1.497 10.201 L 2.533 12.476 L 23.958 2.726 L 22.922 0.451 Z M 1.497 10.201 L 0.494 7.911 C -0.396 8.301 -1.153 8.942 -1.685 9.755 L 0.407 11.123 L 2.5 12.491 L 2.5 12.491 L 1.497 10.201 Z M 0.407 11.123 L -1.685 9.755 C -2.217 10.568 -2.5 11.519 -2.5 12.491 L 0 12.491 L 2.5 12.491 L 2.5 12.491 L 0.407 11.123 Z M 0 12.491 L -2.5 12.491 C -2.5 13.463 -2.217 14.413 -1.685 15.227 L 0.407 13.859 L 2.5 12.491 L 2.5 12.491 L 0 12.491 Z M 0.407 13.859 L -1.685 15.227 C -1.153 16.04 -0.396 16.681 0.494 17.071 L 1.497 14.781 L 2.5 12.491 L 2.5 12.491 L 0.407 13.859 Z M 1.497 14.781 L 0.46 17.056 L 21.885 26.826 L 22.922 24.551 L 23.959 22.276 L 2.534 12.506 L 1.497 14.781 Z M 22.922 24.551 L 21.885 26.825 C 22.862 27.271 23.923 27.502 24.997 27.502 L 24.997 25.002 L 24.997 22.502 C 24.639 22.502 24.285 22.425 23.96 22.276 L 22.922 24.551 Z M 24.997 25.002 L 24.997 27.502 C 26.071 27.502 27.132 27.271 28.11 26.825 L 27.072 24.551 L 26.035 22.276 C 25.709 22.425 25.355 22.502 24.997 22.502 L 24.997 25.002 Z M 27.072 24.551 L 28.105 26.827 L 49.58 17.082 L 48.547 14.806 L 47.514 12.529 L 26.039 22.274 L 27.072 24.551 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 15,
    viewBox: "-2.500 0 5 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 55,
      top: 25,
      width: 5,
      height: 15,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.5 0 C 2.5 -1.381 1.381 -2.5 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 L 0 0 L 2.5 0 Z M -2.5 15 C -2.5 16.381 -1.381 17.5 0 17.5 C 1.381 17.5 2.5 16.381 2.5 15 L 0 15 L -2.5 15 Z M 0 0 L -2.5 0 L -2.5 15 L 0 15 L 2.5 15 L 2.5 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30,
    height: 16.250,
    viewBox: "0 0 30 16.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 31.25,
      width: 30,
      height: 16.25,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.5 0 C 2.5 -1.381 1.381 -2.5 0 -2.5 C -1.381 -2.5 -2.5 -1.381 -2.5 0 L 0 0 L 2.5 0 Z M 0 8.75 L -2.5 8.75 L 0 8.75 Z M 15 16.25 L 15 18.75 L 15 16.25 Z M 32.5 0 C 32.5 -1.381 31.381 -2.5 30 -2.5 C 28.619 -2.5 27.5 -1.381 27.5 0 L 30 0 L 32.5 0 Z M 0 0 L -2.5 0 L -2.5 8.75 L 0 8.75 L 2.5 8.75 L 2.5 0 L 0 0 Z M 0 8.75 L -2.5 8.75 C -2.5 12.166 0.153 14.728 3.275 16.289 L 4.393 14.053 L 5.511 11.817 C 3.008 10.566 2.5 9.313 2.5 8.75 L 0 8.75 Z M 4.393 14.053 L 3.275 16.289 C 6.515 17.909 10.734 18.75 15 18.75 L 15 16.25 L 15 13.75 C 11.31 13.75 7.898 13.01 5.511 11.817 L 4.393 14.053 Z M 15 16.25 L 15 18.75 C 19.266 18.75 23.485 17.909 26.725 16.289 L 25.607 14.053 L 24.489 11.817 C 22.102 13.01 18.69 13.75 15 13.75 L 15 16.25 Z M 25.607 14.053 L 26.725 16.289 C 29.847 14.728 32.5 12.166 32.5 8.75 L 30 8.75 L 27.5 8.75 C 27.5 9.313 26.992 10.566 24.489 11.817 L 25.607 14.053 Z M 30 8.75 L 32.5 8.75 L 32.5 0 L 30 0 L 27.5 0 L 27.5 8.75 L 30 8.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 34,
      lineHeight: "100%",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Higher education"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "26px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Student information systems, registrar-grade integrations, and the long modernizations that span a chancellor's term.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.77,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Typical pursuit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.77,
      fontFamily: "\"Hanken Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "rgb(214,216,216)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "• ", "SIS & ERP modernization\r", "\n", "• ", "Research administration\r", "\n", "• ", "SSO consolidation"))))))))}

try{window.ChevronDown=ChevronDown}catch(e){}
try{window.Component2097=Component2097}catch(e){}
try{window.Component21=Component21}catch(e){}
try{window.Component24=Component24}catch(e){}
try{window.Component48=Component48}catch(e){}
try{window.USSled=USSled}catch(e){}
