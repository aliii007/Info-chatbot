import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  InputBase,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const App = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?", avatar: "/user-avatar.png" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const newMessages = [
      ...messages,
      { sender: "user", text: userInput, avatar: "/user-avatar.png" },
    ];
    setMessages(newMessages);
    setUserInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `You said: "${userInput}"`, avatar: "/user-avatar.png" },
      ]);
    }, 1000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "linear-gradient(to bottom, #8e44ad, #ff4081)", // Background gradient
      }}
    >
      {/* Chat Header */}
      <Paper
        elevation={3}
        sx={{
          padding: "15px",
          background: "linear-gradient(to right, #8e44ad, #3498db)", // Bold gradient header
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "20px", sm: "26px" },
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          AI Property Chatbot
        </Typography>
      </Paper>

      {/* Chat Messages */}
      <List
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255, 255, 255, 0.5)", // Semi-transparent scrollbar
            borderRadius: "10px",
          },
        }}
      >
        {messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "70%",
                background: message.sender === "user"
                  ? "linear-gradient(to right, #ff7eb3, #ff4081)" // Gradient for user messages
                  : "linear-gradient(to right, #8e44ad, #3498db)", // Gradient for bot messages
                color: "#fff",
                borderRadius: "15px",
                padding: "10px 15px",
                position: "relative",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                "::before": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "0",
                  borderStyle: "solid",
                  borderWidth: message.sender === "user"
                    ? "10px 0 10px 15px" // Tail for user
                    : "10px 15px 10px 0", // Tail for bot
                  borderColor: message.sender === "user"
                    ? "transparent transparent transparent #ff4081"
                    : "transparent #8e44ad transparent transparent",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: message.sender === "user" ? "-15px" : "auto",
                  left: message.sender === "bot" ? "-15px" : "auto",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={message.avatar}
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  wordWrap: "break-word",
                }}
              >
                {message.text}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Input Field */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          background: "linear-gradient(to right, #8e44ad, #ff4081)", // Gradient footer
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <InputBase
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          sx={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            marginRight: "10px",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        />
        <IconButton
          onClick={handleSend}
          sx={{
            background: "linear-gradient(to right, #8e44ad, #3498db)",
            color: "#fff",
            borderRadius: "50%",
            padding: { xs: "8px", sm: "10px" },
            "&:hover": {
              background: "linear-gradient(to right, #3498db, #8e44ad)",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default App;
