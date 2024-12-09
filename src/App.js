import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  List,
  ListItem,
  Avatar,
  InputBase,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const App = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `You said: "${userInput}"` },
      ]);
    }, 1000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        background: "linear-gradient(to bottom, #6a11cb, #2575fc)",
        overflow: "hidden",
      }}
    >
      {/* Chat Header */}
      <Paper
        elevation={2}
        sx={{
          padding: "10px",
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: { xs: "18px", sm: "24px", md: "28px" },
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
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          scrollbarWidth: "thin", // For Firefox
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.3)",
            borderRadius: "10px",
          },
        }}
      >
        {messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent:
                message.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            {message.sender === "bot" && (
              <Avatar
                sx={{
                  backgroundColor: "#6a11cb",
                  color: "#fff",
                  marginRight: "10px",
                  width: { xs: "30px", sm: "40px" },
                  height: { xs: "30px", sm: "40px" },
                }}
              >
                B
              </Avatar>
            )}
            <Box
              sx={{
                maxWidth: "70%",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor:
                  message.sender === "user" ? "rgba(255, 255, 255, 0.8)" : "#fff",
                color: message.sender === "user" ? "#000" : "#333",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography>{message.text}</Typography>
            </Box>
            {message.sender === "user" && (
              <Avatar
                sx={{
                  backgroundColor: "#ff4081",
                  color: "#fff",
                  marginLeft: "10px",
                  width: { xs: "30px", sm: "40px" },
                  height: { xs: "30px", sm: "40px" },
                }}
              >
                U
              </Avatar>
            )}
          </ListItem>
        ))}
      </List>

      {/* Input Field */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "8px", sm: "10px" },
          alignItems: "center",
          backgroundColor: "#fff",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <InputBase
  placeholder="Type your message..."
  value={userInput}
  onChange={(e) => setUserInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default action (e.g., form submission)
      handleSend(); // Call the handleSend function
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
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: "#fff",
            borderRadius: "50%",
            padding: { xs: "8px", sm: "10px" },
            "&:hover": {
              background: "linear-gradient(to right, #2575fc, #6a11cb)",
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
