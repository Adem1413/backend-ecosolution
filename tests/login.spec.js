const {loginAdmin} = require('../controller/adminController')
const Admin = require('../models/Admin')

jest.mock('../models/Admin'); 

describe('loginAdmin', () => {
  it('should set the authentication token cookie and send "Success" on successful login', async () => {
   
    Admin.findByCredentials.mockResolvedValue({
      generateAuthToken: jest.fn().mockResolvedValue('dummy-token'),
    });

    const req = {
      body: {
        email: 'tazz@gmail.com',
        password: '1234567',
      },
    };

    const res = {
      cookie: jest.fn(),
      send: jest.fn(),
    };
     await loginAdmin(req, res);
    console.log(res.send);
    expect(Admin.findByCredentials).toHaveBeenCalledWith("tazz@gmail.com","1234567");
    expect(res.send).toHaveBeenCalledWith("Success");
      
  });
});