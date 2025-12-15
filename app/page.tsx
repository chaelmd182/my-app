 "use client";

import { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Box,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  Divider,
} from "@mui/material";

export default function Page() {
  const [step, setStep] = useState(0);

  const [girlfriendName, setGirlfriendName] = useState("");
  const [yourName, setYourName] = useState("");
  const [yearsTogether, setYearsTogether] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [memory, setMemory] = useState("");

  const steps = ["Enter Details", "Customize Wish", "Preview & Send"];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Header */}
      <Typography variant="h3" align="center" fontWeight="bold">
        🎉 Birthday Wishes Creator 🎉
      </Typography>
      <Typography align="center" color="text.secondary" mb={4}>
        Create a magical birthday surprise for your special someone ✨
      </Typography>

      {/* Stepper */}
      <Stepper activeStep={step} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
        {/* STEP 1 */}
        {step === 0 && (
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
            {/* Girlfriend Name */}
            <TextField
              label="Your Girlfriend’s Name ❤️"
              placeholder="Enter the special name 💖"
              value={girlfriendName}
              onChange={(e) => setGirlfriendName(e.target.value)}
              required
              helperText="The name that makes your heart smile"
            />

            {/* Your Name */}
            <TextField
              label="Your Name 💌"
              placeholder="Your name here"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              required
              helperText="Who is sending this love?"
            />

            {/* Years Together */}
            <TextField
              label="Years Together ⭐"
              placeholder="e.g. 3"
              value={yearsTogether}
              onChange={(e) => setYearsTogether(e.target.value)}
              helperText="How many wonderful years?"
            />

            {/* Birthday Date */}
            <TextField
              label="Birthday Date 🎂"
              type="date"
              value={birthdayDate}
              onChange={(e) => setBirthdayDate(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
              helperText="Select the special date"
            />

            {/* Special Memory */}
            <Box gridColumn="1 / -1">
              <TextField
                label="Special Memory 💖"
                multiline
                rows={4}
                placeholder="Share a beautiful memory together..."
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
                fullWidth
              />
            </Box>

            {/* Footer Left Text */}
            <Box gridColumn="1 / -1">
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                💕 Share a beautiful memory together
              </Typography>
            </Box>

            {/* Next Button */}
            <Box gridColumn="1 / -1" textAlign="right" mt={2}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setStep(1)}
                disabled={!girlfriendName || !yourName}
              >
                Next →
              </Button>
            </Box>
          </Box>
        )}

        {/* STEP 2 */}
        {step === 1 && (
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom>
              Ready to preview your wish? 🎁
            </Typography>

            <Box display="flex" justifyContent="space-between" mt={4}>
              <Button variant="outlined" onClick={() => setStep(0)}>
                ← Back
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={() => setStep(2)}
              >
                Preview ❤️
              </Button>
            </Box>
          </Box>
        )}

        {/* STEP 3 */}
        {step === 2 && (
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              🎂 Happy Birthday {girlfriendName}! 🎂
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography sx={{ mb: 2 }}>
              My love, today we celebrate YOU — your smile, your kindness, your
              beauty, and the happiness you bring into my life every day.
            </Typography>

            {yearsTogether && (
              <Typography sx={{ mb: 1 }}>
                💕 {yearsTogether} wonderful years together, and forever to go.
              </Typography>
            )}

            {memory && (
              <Typography sx={{ fontStyle: "italic", mb: 2 }}>
                “{memory}”
              </Typography>
            )}

            {birthdayDate && (
              <Typography sx={{ mb: 2 }}>
                🎈 Your special day:{" "}
                {new Date(birthdayDate).toDateString()}
              </Typography>
            )}

            <Typography color="secondary" fontWeight="bold">
              Forever yours,
              <br />
              {yourName} 💖
            </Typography>

            <Box mt={4}>
              <Button variant="outlined" onClick={() => setStep(0)}>
                ← Edit Details
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
