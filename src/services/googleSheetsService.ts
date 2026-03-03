/**
 * Service to handle Google Sheets integration via Google Apps Script
 */

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export interface BookingData {
  name: string;
  email: string;
  service: string;
  date: string;
}

export const googleSheetsService = {
  /**
   * Send booking data to Google Sheets
   */
  async submitBooking(data: BookingData): Promise<boolean> {
    if (!GOOGLE_SHEETS_URL) {
      console.warn('Google Sheets URL not configured. Skipping submission.');
      return false;
    }

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Note: With 'no-cors', we can't read the response body, 
      // but the data will still be sent successfully.
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  },

  /**
   * Fetch data from Google Sheets (if needed)
   */
  async getSheetData(): Promise<any[]> {
    if (!GOOGLE_SHEETS_URL) return [];

    try {
      const response = await fetch(GOOGLE_SHEETS_URL);
      if (!response.ok) throw new Error('Failed to fetch sheet data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      return [];
    }
  }
};
