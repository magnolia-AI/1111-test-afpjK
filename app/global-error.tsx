'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="sv">
      <body style={{ 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#ffffff',
        color: '#333333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}>
        <div style={{ padding: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Något gick fel!</h2>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>Ett oväntat fel inträffade.</p>
          <button
            onClick={() => reset()}
            style={{
              padding: '10px 24px',
              backgroundColor: '#3B6694',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Försök igen
          </button>
        </div>
      </body>
    </html>
  )
}

