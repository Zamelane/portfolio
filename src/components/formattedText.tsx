'use client'

import React, { useState, useEffect, useRef } from 'react';
import { CodeLine } from './code';
import { cn } from '../lib/utils';

type FormattedTextProps = {
  originalText: string[];
  className?: string;
}

export function FormattedText({ originalText, className }: FormattedTextProps) {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!containerWidth) return;

    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.visibility = 'hidden';
    container.style.whiteSpace = 'nowrap';
    container.style.fontFamily = 'monospace';
    document.body.appendChild(container);

    const processedLines: string[] = [];
    const maxLineWidth = containerWidth - 190;

    originalText.forEach(line => {

      // Обработка пустых строк
      if (line.trim() === '') {
        processedLines.push(" *");
        return;
      }

      // Обработка обычных строк
      const prefix = " * ";
      container.textContent = prefix + line;

      if (container.offsetWidth <= maxLineWidth) {
        // Если строка помещается целиком
        processedLines.push(prefix + line);
      } else {
        // Если строка не помещается - разбиваем на части
        const words = line.split(' ');
        let currentLine = " *"; // Начинаем с " *" (без пробела в конце)
        
        for (const word of words) {
          const testLine = currentLine + (currentLine === " *" ? ' ' : ' ') + word;
          container.textContent = testLine;

          if (container.offsetWidth > maxLineWidth) {
            // Если не помещается - сохраняем текущую строку и начинаем новую
            processedLines.push(currentLine);
            currentLine = " * " + word;
          } else {
            currentLine = testLine;
          }
        }

        // Добавляем оставшуюся часть
        if (currentLine !== " *") {
          processedLines.push(currentLine);
        }
      }
    });

    document.body.removeChild(container);
    setLines(processedLines);
  }, [containerWidth, originalText]);

  return (
    <div ref={containerRef} className={cn('whitespace-pre', className)} >
      {["/**", ...lines, " */"].map((line, index) => (
        <CodeLine
          key={index}
          lineNumber={index + 1}
          lineSymbols={lines.length.toString().length}
        >
          {line}
        </CodeLine>
      ))}
    </div>
  );
};

export default FormattedText;