function ChatPage({ query }) {
    const isChatExisting = query.includes('chat'); // Adjust this logic as needed

    return (
        <Layout isChatExisting={isChatExisting}>
            {/* ... other components ... */}
        </Layout>
    );
} 