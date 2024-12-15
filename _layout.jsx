function Layout({ isChatExisting, children }) {
    return (
        <div>
            {!isChatExisting && (
                <Tabs>
                    {/* ... tab components ... */}
                </Tabs>
            )}
            {children}
        </div>
    );
} 