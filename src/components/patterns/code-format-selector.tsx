"use client";

import { Tabs } from "@radix-ui/react-tabs";
import { StyledTabsList } from "@/components/ui/styled-tabs";
import { useCodeFormat } from "@/context/code-format-context";
import { CodeFormat } from "@/utils/code-converter";

interface CodeFormatSelectorProps {
  isPatternDark?: boolean;
}

export default function CodeFormatSelector({ isPatternDark = false }: CodeFormatSelectorProps) {
  const { selectedFormat, setSelectedFormat } = useCodeFormat();

  const formats = [
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' }
  ];

  return (
    <div className="w-full lg:w-50">
      <Tabs value={selectedFormat} onValueChange={(value) => setSelectedFormat(value as CodeFormat)}>
        <StyledTabsList
          options={formats}
          value={selectedFormat}
          onValueChange={(value) => setSelectedFormat(value as CodeFormat)}
          isPatternDark={isPatternDark}
          gridCols="grid grid-cols-2 gap-2"
          className="mb-0"
          alwaysHorizontal={true}
        />
      </Tabs>
    </div>
  );
}
