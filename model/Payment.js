import mongoose, { Schema } from 'mongoose';

// Define the schema for payment data
const PaymentSchema = new Schema({
  cardholderName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

export const PaymentData = mongoose.model('Payment', PaymentSchema);
