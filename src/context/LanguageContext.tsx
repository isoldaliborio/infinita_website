"use client";

import { createContext } from "react";

//Import and use this when defining types of state and setState related to this context.
export type LanguageContextType = "en" | "pt";

//Import into files that need to use this context.
export const LanguageContext = createContext<LanguageContextType>("en");