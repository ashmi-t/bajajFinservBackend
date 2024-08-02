import { Request, Response } from "express";
import { BfhlService } from "../services/bfhlService";
import { findHighestAlphabet, isNumber } from "../utils/utils";

const USER_ID = "john_doe_17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";
export class BfhlController {
  private bfhlService: BfhlService;

  constructor() {
    this.bfhlService = new BfhlService();
  }

  handlePostRequest = (req: Request, res: Response) => { 
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. "data" should be an array.',
      });
    }

    // Separate numbers and alphabets
    const numbers: string[] = [];
    const alphabets: string[] = [];

    data.forEach((item) => {
      if (isNumber(item)) {
        numbers.push(item);
      } else if (
        typeof item === "string" &&
        item.length === 1 &&
        /^[a-zA-Z]$/.test(item)
      ) {
        alphabets.push(item);
      }
    });

    // Determine the highest alphabet
    const highestAlphabet = findHighestAlphabet(alphabets);

    // Send the response
    return res.json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet,
    });
  };

  handleGetRequest = (req: Request, res: Response): void => {
    res.status(200).json({ operation_code: 1 });
  };
}
