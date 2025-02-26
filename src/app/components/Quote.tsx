type Props = {
  message: string
}
export default function Quote({ message }: Props) {
  return (
    <div className="lg:px-18 text-center italic text-2xl md:text-4xl text-white font-light md:font-thin">
      <div className="relative">
        <svg
          className="absolute -left-3 -top-4 fill-orange opacity-50"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <path d="M373.76 139.48c-33.22 9.77-78.89 26.38-102.58 37.61C120.25 248.9 28.66 378.1 12.54 542.96c-14.41 146.3 32.97 255.96 130.18 300.9 34.93 15.88 53.24 19.29 105.27 19.05 42.01-.25 48.6-.73 70.58-6.59 104.29-27.85 163.63-113.09 157.04-225.93-1.95-33.71-8.55-59.59-22.71-88.41-9.52-19.54-14.9-26.62-32.48-44.21-36.64-36.39-75.96-51.53-134.57-51.78-59.35-.24-99.65 14.65-134.82 50.07-10.5 10.5-19.54 19.05-20.27 19.05-2.69 0-.98-18.32 3.91-40.79 16.85-77.91 57.88-146.54 115.52-192.7 37.86-30.28 82.31-53.98 136.04-71.8 36.88-12.46 37.37-12.7 41.28-21.98 5.37-13.19-3.91-39.57-16.85-47.14-7.83-4.64-23.46-5.13-36.9-1.22zm505.57 3.17c-141.66 39.08-251.81 125.78-307.74 241.79-54.7 113.33-61.79 259.63-17.09 354.64 11.97 25.4 21.49 39.32 41.28 60.32 27.11 28.09 60.08 47.38 100.38 58.13 18.07 4.88 26.62 5.62 64.72 5.62 34.19 0 48.36-.98 63.5-4.64 86.21-19.78 142.39-74.74 161.68-158.02 2.93-13.19 4.15-28.57 3.91-57.15 0-46.4-4.15-65.21-21.74-101.36-9.53-19.54-14.9-26.62-32.48-44.21-36.88-36.39-76.2-51.53-134.57-51.78-62.04-.24-106.97 17.34-139.7 54.46-7.08 8.06-13.92 14.66-15.14 14.66-3.42 0 0-26.13 7.08-53.98 25.16-99.16 84.75-173.9 177.07-222.01 17.83-9.28 73.27-31.75 78.16-31.75 1.22 0 8.3-2.2 15.88-5.13 21-7.81 24.67-18.32 15.63-42.5-9.05-23.92-22.24-27.83-60.83-17.09z" />
        </svg>
        <div className="relative z-10">{message}</div>
      </div>
    </div>
  )
}
