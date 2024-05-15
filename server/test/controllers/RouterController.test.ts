import { Request, Response } from 'express';
import * as routerService from '../../services/RouterService';
import { registerRouter, editRouter, searchRouter, getRouters, deleteRouter } from '../../controllers/RouterController';

jest.mock('../../services/RouterService');

describe('RouterController', () => {
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
    (routerService.registerRouter as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await registerRouter(mockReq, res as Response);

    expect(routerService.registerRouter).toHaveBeenCalledWith(mockReq, res as Response);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should edit a router', async () => {
    const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } } as Request;
    const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
    (routerService.editRouter as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await editRouter(mockReq, res as Response);

    expect(routerService.editRouter).toHaveBeenCalledWith(mockReq, res as Response);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should search for a router', async () => {
    const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } } as Request;
    const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
    (routerService.searchRouter as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await searchRouter(mockReq, res as Response);

    expect(routerService.searchRouter).toHaveBeenCalledWith(mockReq, res as Response);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should get routers', async () => {
    const expectedResult = [{ ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' }];
    (routerService.getRouters as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await getRouters(req as Request, res as Response);

    expect(routerService.getRouters).toHaveBeenCalledWith(req as Request, res as Response);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });

  it('should delete a router', async () => {
    const mockReq = { params: { routerid: '123' } } as unknown as Request;
    const expectedResult = { message: 'Router deleted successfully' };
    (routerService.deleteRouter as jest.Mock).mockImplementation((req: Request, res: Response) => {
      res.send(expectedResult);
    });

    await deleteRouter(mockReq, res as Response);

    expect(routerService.deleteRouter).toHaveBeenCalledWith(mockReq, res as Response);
    expect(res.send).toHaveBeenCalledWith(expectedResult);
  });
});
