# pattern-craft

A react Wrapper over popular library [patterncraft](https://patterncraft.fun).

## Installation

```bash
npm install pattern-craft
```

## Usage

```tsx
import { PatternCraft, patternNames } from "pattern-craft";

// patternNames = Array of All patternNames
const App = ()={
    return (
        <div>
        <PatternCraft
            patternName="Aurora Dream Corner Whispers"
            className="min-h-screen flex items-center justify-center"
        >
        <span className="text-xl">Aurora Dream Corner Whispers</span>
      </PatternCraft>
    </div>
    )
}
```

## Using pattern names

```tsx
import { PatternCraft, patternNames } from "pattern-craft";

const App = ()={
    return (
        <div>
        <PatternCraft
            patternName={patternNames[0]}
            className="min-h-screen flex items-center justify-center"
        >
            <span className="text-xl">patternNames[0]}</span>
        </PatternCraft>
        </div>
    )
}
```

## Using with relative and absolute

```tsx
import { PatternCraft, patternNames } from "pattern-craft";

const App = ()={
    return (
        <div className="relative h-screen ">
        <PatternCraft
            patternName={patternNames[0]}
            className="absolute"
        />
        <div className="absolute h-screen overflow-y-auto w-full flex flex-col items-center justify-center">
            Your content goes Here
        </div>
        </div>
    )
}
```

## Props
| props| Required | Type | Description|
|------|----------|------|------------|
| patternName|Required| patternNameType | Specifies the name of the background pattern to be applied. This should match one of the available patterns defined in the gridPatterns array.|
| children|Optional| React.ReactNode | Any valid React child elements that you want to render above the background pattern.|
| className|Optional| string | Additional CSS class(es) to apply to the container. Useful for custom styling.|
| width |Optional| string | Default: 100% Sets the width of the background wrapper. Can be any valid CSS width value.|
| height |Optional| string | Default: 100% Sets the height of the background wrapper. Can be any valid CSS height value|

### Additional available Classes
- **_patternConatiner**: Container where patterns renders

