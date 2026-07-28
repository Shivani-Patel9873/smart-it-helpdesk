const Ticket = require("../models/Ticket");

// CREATE TICKET
const createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({
      ticketId: "TKT-" + Date.now(),
      ...req.body
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET ALL TICKETS
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({
      createdAt: -1
    });

    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET SINGLE TICKET
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket Not Found"
      });
    }

    res.json(ticket);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE STATUS
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.json(ticket);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE TICKET
const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);

    res.json({
      message: "Ticket Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicket,
  updateTicket,
  deleteTicket
};