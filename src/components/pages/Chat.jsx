import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Assalamu alaikum! I'm your Islamic knowledge assistant.\nHow can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newUserMessage = {
      sender: "user",
      text: input.trim(),
      time: timeNow,
    };

    setMessages((prev) => [...prev, newUserMessage]);

    // Simulate bot reply after 1s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `You asked: "${input.trim()}".\nInshallah, I’ll get back to you with an answer.`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border bg-card text-card-foreground border-primary/20 shadow-lg h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                <BotIcon className="mr-2 text-primary" />
                Islamic Knowledge Assistant
              </div>
              <div className="text-sm text-muted-foreground">
                Ask questions about Islam, Quran, Hadith, and Muslim practices
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
                  <div className="flex gap-3 max-w-[80%]">
                    {msg.sender === "bot" && (
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary/10">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                          <BotIcon className="h-4 w-4" />
                        </span>
                      </span>
                    )}
                    <div className={`rounded-lg p-3 ${msg.sender === "bot" ? " text-foreground" : "text-white"}`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center border-t p-4">
              <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about Islam..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <SendIcon />
                  <span className="sr-only">Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Icon Components
function BotIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`lucide lucide-bot h-6 w-6 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 8V4H8"></path>
      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
      <path d="M2 14h2"></path>
      <path d="M20 14h2"></path>
      <path d="M15 13v2"></path>
      <path d="M9 13v2"></path>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="lucide lucide-send h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939"></path>
    </svg>
  );
}
