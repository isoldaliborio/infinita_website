"use client";

import { createContext } from "react";

export type LanguageContextType = "EN" | "PT";

export const LanguageContext = createContext<LanguageContextType>("EN");