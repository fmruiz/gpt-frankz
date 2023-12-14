'use client';

import React, { useState } from 'react';
import { generateChatResponse } from '@/utils/action';
import { useMutation } from '@tanstack/react-query';

const Chat = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState([]);

    const { mutate } = useMutation({
        mutationFn: (message) => generateChatResponse(message),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(text);
    };

    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
            <div>
                <h2 className="text-5xl">messages</h2>
            </div>
            <form className="max-w-4xl pt-12" onSubmit={handleSubmit}>
                <div className="join w-full">
                    <input
                        type="text"
                        placeholder="Message GPTFrankz"
                        className="input input-bordered join-item w-full"
                        value={text}
                        required
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="btn btn-primary join-item" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Chat;
