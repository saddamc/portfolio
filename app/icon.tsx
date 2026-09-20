import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617', // slate-950
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22d3ee" // cyan-400
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8.5 4h7a4 4 0 0 1 0 8h-7a4 4 0 0 0 0 8h7" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
