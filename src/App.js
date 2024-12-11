import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Avatar,
  InputBase,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const App = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?", avatar: "/bot-avatar.png" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: userInput, avatar: "/user-avatar.png" }];
    setMessages(newMessages);
    setUserInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `You said: "${userInput}"`, avatar: "/bot-avatar.png" },
      ]);
    }, 1000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "linear-gradient(to bottom, #8e44ad, #3498db)",
      }}
    >
      {/* Chat Header */}
      <Paper
        elevation={3}
        sx={{
          padding: "15px",
          background: "linear-gradient(to right, #8e44ad, #3498db)",
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
            background: "rgba(0, 0, 0, 0.3)",
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
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "75%",
                flexDirection: message.sender === "user" ? "row-reverse" : "row",
              }}
            >
              <Avatar
                src={message.avatar}
                sx={{
                  width: { xs: "40px", sm: "50px" },
                  height: { xs: "40px", sm: "50px" },
                  margin: message.sender === "user" ? "0 0 0 10px" : "0 10px 0 0",
                }}
              />
              <Box
                sx={{
                  padding: "10px",
                  borderRadius: "15px",
                  background: message.sender === "user"
                    ? "linear-gradient(to right, #ff758c, #ff7eb3)"
                    : "linear-gradient(to right, #3498db, #8e44ad)",
                  color: "#fff",
                  wordWrap: "break-word",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
                  {message.text}
                </Typography>
              </Box>
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
          background: "#fff",
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
            backgroundColor: "#f9f9f9",
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
