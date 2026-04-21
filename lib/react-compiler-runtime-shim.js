"use client";
import { useState } from "react";

export function c(size) {
  return useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = Symbol.for("react.memo_cache_sentinel");
    }
    Object.defineProperty($, "__", { value: true });
    return $;
  })[0];
}
