import React from 'react'
import DotSeparator from './dot-separator';
interface SponsorsProps {
    theme: "light" | "dark";
}

function Sponsors({ theme }: SponsorsProps) {
    const isPatternDark = theme === "dark";
    return (
        <>
            {/* Vercel Sponsor */}
            {/* Thanks to Vercel for sponsoring PatternCraft.fun! Check them out at: https://vercel.com/ */}

            <a
                href="https://vercel.com/blog/vercel-open-source-program-fall-2025-cohort#pattern-craft"
                target="_blank"
                className="
  flex flex-col items-center text-center
  sm:flex-row sm:items-center sm:text-left
  gap-2.5 rounded-md px-2.5 py-2
  transition-colors duration-300
"

            >
                <span
                    aria-label="Vercel Logo"
                    className={`text-lg sm:text-xl font-bold transition-all duration-300 ${isPatternDark ? "text-white group-hover:text-gray-100" : "text-black group-hover:text-gray-800"
                        }`}
                >
                    ▲
                </span>
                <div className={`<div className="
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300
">
 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                    <span className=" leading-none font-semibold  flex justify-items-start">
                        Vercel
                    </span>
                    <span className={`text-xs sm:text-sm leading-none transition-colors duration-300 ${isPatternDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                        }`}>
                        Vercel OSS Program
                    </span>
                </div>
            </a>

            {/* Dot Separator */}
            <DotSeparator theme={theme} />

            {/* ShadcnBlocks Sponsor */}
            {/* Huge thanks to ShadcnBlocks for supporting PatternCraft.fun! Explore their blocks at: https://shadcnblocks.com/ */}
            <a
                href="https://shadcnblocks.com/"
                target="_blank"
                className="
  flex flex-col items-center text-center
  sm:flex-row sm:items-center sm:text-left
  gap-2.5 rounded-md px-2.5 py-2
  transition-colors duration-300
"

            >
                <svg
                    width="20"
                    height="23"
                    viewBox="0 0 78 90"
                    className={`transition-all duration-300 ${isPatternDark ? "fill-white group-hover:fill-gray-100" : "fill-black group-hover:fill-gray-800"
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M46.7305 4.50982L43.6252 2.72955V17.49L46.7305 19.2924V4.50982Z" />
                    <path d="M52.9854 8.14811L49.8765 6.34937V21.1287L52.9854 22.9127V8.14811Z" />
                    <path d="M59.1814 11.7684L56.0762 9.9881V24.7485L59.1814 26.5325V11.7684Z" />
                    <path d="M6.04712 26.0179L9.15238 27.8019V17.246L6.04712 19.0262V26.0179Z" />
                    <path d="M2.93874 24.2184V20.8651L0 22.5491L2.93874 24.2184Z" />
                    <path d="M77.889 22.5895L74.7985 20.8056V24.3883L71.6895 26.1685V19.0253L68.6027 17.245V27.9123L65.4937 29.6962V15.3874L62.3293 13.548V28.3305L65.1162 29.959V59.8636L64.9645 59.9561L62.3293 58.4424V61.4921L59.1833 63.2724V56.5474L56.078 54.7079V65.0743L52.9875 66.9101V52.8681L49.8785 51.0324V68.6945L46.7325 70.4748V49.1932L43.6273 47.3537V72.2547L40.5183 74.1127V45.5172L39.0008 44.5105L39.06 14.8159L40.5183 15.7079V0.947497L38.8898 0L37.5795 0.736529V15.5562L34.4372 17.3364V2.57602L31.3283 4.35629V19.1199L28.2193 20.9186V6.1953L25.1325 7.97557V22.6989L21.968 24.4829V9.77771L18.8775 11.6135V26.2807L15.7685 28.1202V13.393L12.3005 15.4397V29.578L12.7743 29.8444L12.889 59.9528L15.7685 61.6405V58.2872L18.8775 56.4477V63.4799L21.968 65.2786V54.6082L25.1325 52.7132V67.0591L28.2193 68.8986V50.8772L31.3283 49.0377V70.6786L34.4372 72.481V47.1797L37.5795 45.3439V74.3168L39.0008 75.1533V75.0941V89.969L77.9445 67.477L78 22.5853L77.889 22.5895Z" />
                </svg>

                <div className={`<div className="
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300
">
 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                    <span className=" leading-none font-semibold  flex justify-items-start">
                        ShadcnBlocks.com
                    </span>
                    <span className={`text-xs sm:text-sm leading-none transition-colors duration-300 ${isPatternDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                        }`}>
                        hundreds of extra blocks for shadcn/ui
                    </span>
                </div>
            </a>
            {/* Dot Separator */}
            <DotSeparator theme={theme} />
            {/* ShadcnCraft Sponsor */}
            {/* Huge thanks to ShadcnCraft for supporting PatternCraft.fun! Explore their blocks at: https://shadcraft.com/ */}
            <a
                href="https://shadcraft.com/"
                target="_blank"
                className="
  flex flex-col items-center text-center
  sm:flex-row sm:items-center sm:text-left
  gap-2.5 rounded-md px-2.5 py-2
  transition-colors duration-300
"

            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="20"
                    height="30"
                    className={`transition-all duration-300 ${isPatternDark ? "fill-white group-hover:fill-gray-100" : "fill-black group-hover:fill-gray-800"
                        }`}
                ><path d="M 0 200 C 0 89.542969 89.542969 0 200 0 C 310.457031 0 400 89.542969 400 200 C 400 310.457031 310.457031 400 200 400 C 89.542969 400 0 310.457031 0 200 Z M 0 200" fill="white"></path><path d="M 154.226562 198.65625 C 160.011719 192.871094 169.382812 192.871094 175.167969 198.65625 C 180.949219 204.441406 180.949219 213.804688 175.167969 219.589844 L 117.78125 276.976562 C 111.996094 282.761719 102.609375 282.773438 96.824219 276.988281 C 91.042969 271.203125 91.054688 261.828125 96.835938 256.042969 Z M 227.558594 226.816406 C 233.320312 221.007812 242.695312 220.960938 248.503906 226.722656 C 254.3125 232.484375 254.34375 241.859375 248.582031 247.667969 L 219.550781 276.941406 L 218.425781 277.976562 C 212.628906 282.738281 204.050781 282.429688 198.605469 277.03125 C 193.164062 271.632812 192.785156 263.054688 197.503906 257.214844 L 198.515625 256.089844 Z M 261.566406 191.140625 C 267.351562 185.359375 276.726562 185.359375 282.511719 191.140625 C 288.296875 196.925781 288.296875 206.300781 282.511719 212.085938 L 281.957031 212.648438 L 280.832031 213.671875 C 275.015625 218.414062 266.4375 218.070312 261.015625 212.648438 C 255.589844 207.226562 255.25 198.648438 259.992188 192.832031 L 261.015625 191.703125 Z M 212.820312 142.027344 C 218.667969 136.308594 228.042969 136.410156 233.761719 142.257812 C 239.484375 148.105469 239.378906 157.480469 233.53125 163.199219 L 211.667969 184.59375 L 210.542969 185.605469 C 204.671875 190.285156 196.089844 189.847656 190.726562 184.363281 C 185.363281 178.882812 185.117188 170.300781 189.921875 164.53125 L 190.957031 163.417969 Z M 246.964844 105.765625 C 252.746094 99.984375 262.121094 99.988281 267.910156 105.765625 C 273.695312 111.550781 273.695312 120.925781 267.910156 126.710938 L 267.324219 127.296875 L 266.207031 128.320312 C 260.390625 133.066406 251.8125 132.71875 246.390625 127.296875 C 240.96875 121.875 240.613281 113.296875 245.355469 107.480469 L 246.390625 106.351562 Z M 246.964844 105.765625" fill="black"></path></svg>

                <div className={`<div className="
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300
">
 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                    <span className=" leading-none font-semibold  flex justify-items-start">
                        shadcncraft
                    </span>
                    <span className={`text-xs sm:text-sm leading-none transition-colors duration-300 ${isPatternDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                        }`}>
                        shadcn blocks & templates
                    </span>
                </div>
            </a>
        </>
    )
}

export default Sponsors
