import { Request, Response } from 'express';
import * as userService from '../../services/UserService';
import { registerUser, editUser, searchUser, getUsers, deleteUser } from '../../controllers/UserController';

jest.mock('../../services/UserService');
describe('UserController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register a user', async () => {
    const mockReq = { body: { id: 1, user: 'TestUser' } } as Request;
    const expectedResult = { id: 1, user: 'TestUser' };
    (userService.registerUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await registerUser(mockReq, res as Response);

    expect(userService.registerUser).toHaveBeenCalledWith(mockReq, res);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should edit a user', async () => {
    const mockReq = { body: { id: 1, user: 'TestUser' } } as Request;
    const expectedResult = { id: 1, user: 'TestUser' };
    (userService.editUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await editUser(mockReq, res as Response);

    expect(userService.editUser).toHaveBeenCalledWith(mockReq, res);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should search for a user', async () => {
    const mockReq = { body: { id: 1, user: 'TestUser' } } as Request;
    const expectedResult = { id: 1, user: 'TestUser' };
    (userService.searchUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await searchUser(mockReq, res as Response);

    expect(userService.searchUser).toHaveBeenCalledWith(mockReq, res);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should get users', async () => {
    const expectedResult = [{ id: 1, user: 'TestUser' }];

    (userService.getUsers as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await getUsers(req as Request, res as Response);

    expect(userService.getUsers).toHaveBeenCalledWith(req, res);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should delete a user', async () => {
    const mockReq = { params: { id: 1 } } as unknown as Request;
    const expectedResult = { message: 'User deleted successfully' };

    (userService.deleteUser as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await deleteUser(mockReq, res as Response);

    expect(userService.deleteUser).toHaveBeenCalledWith(mockReq, res);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });
});