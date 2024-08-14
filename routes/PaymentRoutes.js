import express from 'express';
import { PaymentData } from '../model/Payment.js'; // Adjust the path as needed
const router = express.Router();

// Route to handle payment data submission
router.post('/payments', async (req, res) => {
  try {
    const paymentData = new PaymentData(req.body);
    await paymentData.save();
    res.status(201).json(paymentData);
  } catch (error) {
    res.status(400).json({ message: "Error saving payment data", error });
  }
});

export default router;
