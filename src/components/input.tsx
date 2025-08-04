import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TextInputProps = {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  changeValue?: (v: string) => void;
  inputType?: 'input' | 'textarea'
};

export function TextInput({
  label,
  placeholder,
  defaultValue,
  changeValue,
  inputType
}: TextInputProps) {
  const [value, setValue] = useState(defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);

  function textInputChange(v: string) {
    setValue(v);
    changeValue?.(v);
  }

  const InputElement = (inputType ?? 'input') === 'input'
    ? motion.input
    : motion.textarea

  return (
    <motion.div
      className="inline-flex flex-col gap-2"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.label
        className="text-sm"
        animate={{
          color: isFocused ? "var(--color-slate-50)" : "var(--color-foreground)",
          x: isFocused ? 2 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.label>

      <motion.div className="relative">
        <InputElement
          className={`
            w-full border rounded-lg bg-theme-backdrop p-3
            text-slate-50 focus:outline-none focus:ring-0
            placeholder-slate-500
          `}
          placeholder={placeholder}
          value={value}
          onChange={(e) => textInputChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          animate={{
            paddingLeft: isFocused ? "1rem" : "0.75rem",
            borderColor: isFocused ? "#ffffff" : "var(--color-theme-stroke)",
          }}
          transition={{ duration: 0.3 }}
        />

        <AnimatePresence>
          {value.length > 0 && (
            <motion.span
              className="absolute -bottom-5 right-0 text-xs text-slate-400"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              {value.length}/{Math.max(value.length, 100)}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
