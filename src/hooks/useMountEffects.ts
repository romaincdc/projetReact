import { EffectCallback, useEffect } from "react";

export const useMountEffects = (effect: EffectCallback) => {
  useEffect(effect, []);
};
