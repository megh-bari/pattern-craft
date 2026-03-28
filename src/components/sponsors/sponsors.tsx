import React from 'react'
import DotSeparator from './dot-separator';
import Image from 'next/image';
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
                <div className={`
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300

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

                <div className={`
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300

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
            {/* Huge thanks to ShadcnCraft for supporting PatternCraft.fun! Explore their blocks at: https://shadcncraft.com/ */}
            <a
                href="https://shadcncraft.com"
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
                    height="30"
                    viewBox="0 0 119 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-[30px] w-5 shrink-0 transition-colors duration-300 ${isPatternDark ? "text-white group-hover:text-gray-100" : "text-primary group-hover:text-primary/90"}`}
                >
                    <path
                        d="M118.521 4.3256V35.5564H45.0468L25.149 69.0019C24.3704 70.3169 22.9603 71.1128 21.429 71.1128H4.3256C1.93787 71.1128 0 69.175 0 66.7872V35.5564H41.8718L59.2434 6.34133C61.5792 2.40503 65.8183 0 70.3948 0H114.196C116.584 0 118.521 1.93787 118.521 4.3256Z"
                        fill="currentColor"
                    />
                    <path
                        d="M0 110.674V79.4436H73.4746L93.3724 45.9981C94.151 44.6831 95.5611 43.8872 97.0924 43.8872H114.204C116.592 43.8872 118.53 45.8251 118.53 48.2128V79.4436H76.6582L59.2866 108.659C56.9508 112.595 52.7117 115 48.1353 115H4.3256C1.93787 115 0 113.062 0 110.674Z"
                        fill="currentColor"
                    />
                </svg>

                <div className={`
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300

 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                    <span className=" leading-none font-semibold  flex justify-items-start">
                        shadcraft
                    </span>
                    <span className={`text-xs sm:text-sm leading-none transition-colors duration-300 ${isPatternDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                        }`}>
                        shadcn blocks & templates
                    </span>
                </div>
            </a>

            <DotSeparator theme={theme} />
            {/* Tal by Grapevine Sponsor */}
            {/* Huge thanks to Tal by Grapevine for supporting PatternCraft.fun! Explore their blocks at: https://tal.af/ */}
            <a
                href="https://link.tal.af/?c=XkMUQr"
                target="_blank"
                className="
  flex flex-col items-center text-center
  sm:flex-row sm:items-center sm:text-left
  gap-2.5 rounded-md px-2.5 py-2
  transition-colors duration-300
"
            >
                <Image
                    src="/logos/tal-by-grapevine.svg"
                    alt="Tal by Grapevine Logo"
                    width={35}
                    height={35}
                    className="w-[35px] h-[35px] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100"
                    draggable={false}
                />

                <div className={`
  flex flex-col items-center
  sm:items-start
  gap-1
  text-sm sm:text-base font-medium
  transition-colors duration-300
 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                    <span className="leading-none font-semibold flex justify-items-start">
                        Tal by Grapevine
                    </span>
                    <span className={`text-xs sm:text-sm leading-none transition-colors duration-300 ${isPatternDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                        }`}>
                        Finds you the best jobs
                    </span>
                </div>
            </a>
        </>
    )
}

export default Sponsors
