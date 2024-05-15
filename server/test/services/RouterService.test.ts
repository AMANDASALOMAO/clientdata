import { Request, Response } from 'express';
import db from '../../repositories/RouterRepository';
import { registerRouter, editRouter, searchRouter, getRouters, deleteRouter } from '../../services/RouterService';

jest.mock('../../repositories/RouterRepository');

describe('RouterService', () => {
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

  it('should register a router', async () => {
    const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } } as Request;
    const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
    (db.createRouter as jest.Mock).mockImplementation((params: any, callback: Function) => {
      callback(null, expectedResult);
    });

    await registerRouter(mockReq, res as Response);

    expect(db.createRouter).toHaveBeenCalledWith(
      ['192.168.0.1', '::1', 'Model X', 'Brand Y', '123', 'Client A', 'Contract 1'],
      expect.any(Function)
    );
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should edit a router', async () => {
    const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } } as Request;
    const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
    (db.updateRouter as jest.Mock).mockImplementation((params: any, callback: Function) => {
      callback(null, expectedResult);
    });

    await editRouter(mockReq, res as Response);

    expect(db.updateRouter).toHaveBeenCalledWith(
      ['192.168.0.1', '::1', 'Model X', 'Brand Y', 'Client A', 'Contract 1', '123'],
      expect.any(Function)
    );
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should search for a router', async () => {
    const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } } as Request;
    const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
    (db.searchRouter as jest.Mock).mockImplementation((params: any, callback: Function) => {
      callback(null, expectedResult);
    });

    await searchRouter(mockReq, res as Response);

    expect(db.searchRouter).toHaveBeenCalledWith(
      ['192.168.0.1', '::1', 'Model X', 'Brand Y', '123', 'Client A', 'Contract 1'],
      expect.any(Function)
    );
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should get routers', async () => {
    const expectedResult = [{ ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' }];
    (db.getRouters as jest.Mock).mockImplementation((callback: Function) => {
      callback(null, expectedResult);
    });

    await getRouters(req as Request, res as Response);

    expect(db.getRouters).toHaveBeenCalledWith(expect.any(Function));
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should delete a router', async () => {
    const mockReq = { params: { routerid: '123' } } as unknown as Request;
    const expectedResult = { message: 'Router deleted successfully' };
    (db.deleteRouter as jest.Mock).mockImplementation((params: any, callback: Function) => {
      callback(null, expectedResult);
    });

    await deleteRouter(mockReq, res as Response);

    expect(db.deleteRouter).toHaveBeenCalledWith('123', expect.any(Function));
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });
});
