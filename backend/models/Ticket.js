const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      required: true,
      unique: true
    },

    employeeName: {
      type: String,
      required: true
    },

    employeeId: {
      type: String,
      required: true
    },

    department: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    assetType: {
      type: String,
      required: true
    },

    assetId: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium"
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open"
    },

    assignedTo: {
      type: String,
      default: "Pending Assignment"
    }

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);