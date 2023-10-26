const {modifierPuissance} = require('../controller/puissanceController'); // Import the modifierPuissance function
const Puissance = require('../models/Puissance'); // Import the Puissance model or mock it
const mongoose = require('mongoose');

jest.mock('../models/Puissance'); 



describe('modifierPuissance', () => {
 
  it('should return 402 if puissanceAllemande is not a valid number', async () => {
    const req = {
      params: {
        _id: '642f74ab363e81d2a2bba7df',
      },
      body: {
        puissanceAllemande: '200',
        puissanceChinoise: '100',
      },
    };

    const res = {
     send:jest.fn(),
   
  };

    await modifierPuissance(req, res);
    expect(res.send).objectContaining(
      {
        _id: "642f74ab363e81d2a2bba7df",
        puissanceAllemande: "200",
        puissanceChinoise: "100",
        __v: 0
      });

   console.log(res)
  });
});