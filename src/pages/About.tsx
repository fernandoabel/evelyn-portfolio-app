export default function About() {
    return (
        <div
            style={{
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <div style={{ flex: 1 }}>
                <div
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '24px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <h3>Column 1</h3>
                    <p>Content for the first card.</p>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <div
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '24px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <h3>Column 2</h3>
                    <p>Content for the second card.</p>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <div
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '24px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <h3>Column 3</h3>
                    <p>Content for the third card.</p>
                </div>
            </div>
        </div>
    );
}
